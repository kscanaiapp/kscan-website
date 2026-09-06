import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  INVESTOR_ACCESS_COOKIE,
  isInvestorAccessCookieValid,
} from "@/lib/investorAccess";
import { checkRateLimit, getClientIp } from "@/lib/serverRateLimit";
import { getSupabaseAdminClient } from "@/lib/supabaseAdmin";

const COMPETITIVE_ANALYSIS_BUCKET = "investor-docs";
const COMPETITIVE_ANALYSIS_FILENAME = "kscan-competitive-analysis.pdf";
const STORAGE_TIMEOUT_MS = 10_000;

function competitiveAnalysisHeaders() {
  return {
    "Content-Type": "application/pdf",
    "Content-Disposition": `inline; filename="${COMPETITIVE_ANALYSIS_FILENAME}"`,
    "Cache-Control": "private, no-store",
  };
}

async function hasInvestorAccess() {
  const configuredPassword = process.env.INVESTOR_ACCESS_PASSWORD;
  if (!configuredPassword) {
    console.error("Competitive analysis requested, but access password is not configured.");
    return false;
  }

  const cookieStore = await cookies();
  const provided = cookieStore.get(INVESTOR_ACCESS_COOKIE)?.value ?? "";
  return isInvestorAccessCookieValid(provided, configuredPassword);
}

async function downloadCompetitiveAnalysisWithTimeout() {
  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    return { status: "error" as const };
  }

  const download = supabase.storage
    .from(COMPETITIVE_ANALYSIS_BUCKET)
    .download(COMPETITIVE_ANALYSIS_FILENAME);

  const timeout = new Promise<"timeout">((resolve) => {
    setTimeout(() => resolve("timeout"), STORAGE_TIMEOUT_MS);
  });

  const result = await Promise.race([download, timeout]);

  if (result === "timeout") {
    console.error("Competitive analysis storage download timed out.");
    return { status: "timeout" as const };
  }

  if (result.error) {
    const statusCode = Number((result.error as { statusCode?: string | number }).statusCode);
    const message = result.error.message.toLowerCase();

    if (statusCode === 404 || message.includes("not found")) {
      console.warn("Competitive analysis storage object not found.");
      return { status: "missing" as const };
    }

    console.error("Competitive analysis storage download failed.");
    return { status: "error" as const };
  }

  return { status: "success" as const, data: result.data };
}

function rateLimitCompetitiveAnalysisRequest(request: Request) {
  const ip = getClientIp(request);
  return checkRateLimit({
    key: `investor-competitive-analysis:${ip}`,
    limit: 20,
    windowMs: 60 * 1000,
  });
}

function rateLimitedResponse(retryAfterSeconds: number) {
  return new NextResponse(null, {
    status: 429,
    headers: {
      "Cache-Control": "private, no-store",
      "Retry-After": String(retryAfterSeconds),
    },
  });
}

export async function HEAD(request: Request) {
  const rateLimit = rateLimitCompetitiveAnalysisRequest(request);
  if (!rateLimit.allowed) {
    return rateLimitedResponse(rateLimit.retryAfterSeconds);
  }

  if (!(await hasInvestorAccess())) {
    console.warn("Unauthorized competitive analysis HEAD request.");
    return new NextResponse(null, {
      status: 401,
      headers: { "Cache-Control": "private, no-store" },
    });
  }

  const result = await downloadCompetitiveAnalysisWithTimeout();
  if (result.status === "missing") {
    return new NextResponse(null, {
      status: 404,
      headers: { "Cache-Control": "private, no-store" },
    });
  }

  if (result.status !== "success") {
    return new NextResponse(null, {
      status: 500,
      headers: { "Cache-Control": "private, no-store" },
    });
  }

  return new NextResponse(null, {
    status: 200,
    headers: competitiveAnalysisHeaders(),
  });
}

export async function GET(request: Request) {
  const rateLimit = rateLimitCompetitiveAnalysisRequest(request);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { status: "error", message: "Access could not be verified." },
      {
        status: 429,
        headers: {
          "Cache-Control": "private, no-store",
          "Retry-After": String(rateLimit.retryAfterSeconds),
        },
      },
    );
  }

  if (!(await hasInvestorAccess())) {
    console.warn("Unauthorized competitive analysis GET request.");
    return NextResponse.json(
      { status: "error", message: "Access could not be verified." },
      { status: 401, headers: { "Cache-Control": "private, no-store" } },
    );
  }

  const result = await downloadCompetitiveAnalysisWithTimeout();
  if (result.status === "missing") {
    return NextResponse.json(
      { status: "error", message: "Competitive analysis is unavailable." },
      { status: 404, headers: { "Cache-Control": "private, no-store" } },
    );
  }

  if (result.status !== "success") {
    return NextResponse.json(
      { status: "error", message: "Competitive analysis is unavailable." },
      { status: 500, headers: { "Cache-Control": "private, no-store" } },
    );
  }

  return new NextResponse(result.data.stream(), {
    status: 200,
    headers: competitiveAnalysisHeaders(),
  });
}
