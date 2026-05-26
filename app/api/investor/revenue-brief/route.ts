import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  getConfiguredInvestorAccessPassword,
  INVESTOR_ACCESS_COOKIE,
  isInvestorAccessCookieValid,
} from "@/lib/investorAccess";
import { checkRateLimit, getClientIp } from "@/lib/serverRateLimit";
import { getSupabaseAdminClient } from "@/lib/supabaseAdmin";

const REVENUE_BRIEF_BUCKET = "investor-docs";
const REVENUE_BRIEF_FILENAME = "kscan-revenue-brief.pdf";
const STORAGE_TIMEOUT_MS = 10_000;

function briefHeaders() {
  return {
    "Content-Type": "application/pdf",
    "Content-Disposition": `inline; filename="${REVENUE_BRIEF_FILENAME}"`,
    "Cache-Control": "private, no-store",
  };
}

async function hasInvestorAccess() {
  const configuredPassword = getConfiguredInvestorAccessPassword();
  if (!configuredPassword) return null;

  const cookieStore = await cookies();
  const provided = cookieStore.get(INVESTOR_ACCESS_COOKIE)?.value ?? "";
  return isInvestorAccessCookieValid(provided, configuredPassword);
}

async function downloadBriefWithTimeout() {
  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    return { status: "error" as const };
  }

  const download = supabase.storage
    .from(REVENUE_BRIEF_BUCKET)
    .download(REVENUE_BRIEF_FILENAME);

  const timeout = new Promise<"timeout">((resolve) => {
    setTimeout(() => resolve("timeout"), STORAGE_TIMEOUT_MS);
  });

  const result = await Promise.race([download, timeout]);

  if (result === "timeout") {
    console.error("Revenue brief storage download timed out.");
    return { status: "timeout" as const };
  }

  if (result.error) {
    const statusCode = Number((result.error as { statusCode?: string | number }).statusCode);
    const message = result.error.message.toLowerCase();

    if (statusCode === 404 || message.includes("not found")) {
      console.warn("Revenue brief storage object not found.");
      return { status: "missing" as const };
    }

    console.error("Revenue brief storage download failed.");
    return { status: "error" as const };
  }

  return { status: "success" as const, data: result.data };
}

function rateLimitBriefRequest(request: Request) {
  const ip = getClientIp(request);
  return checkRateLimit({
    key: `investor-revenue-brief:${ip}`,
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
  const rateLimit = rateLimitBriefRequest(request);
  if (!rateLimit.allowed) {
    return rateLimitedResponse(rateLimit.retryAfterSeconds);
  }

  const hasAccess = await hasInvestorAccess();
  if (hasAccess === null) {
    console.error("Revenue brief requested, but access password is not configured.");
    return new NextResponse(null, {
      status: 503,
      headers: { "Cache-Control": "private, no-store" },
    });
  }

  if (!hasAccess) {
    console.warn("Unauthorized revenue brief HEAD request.");
    return new NextResponse(null, {
      status: 401,
      headers: { "Cache-Control": "private, no-store" },
    });
  }

  const result = await downloadBriefWithTimeout();
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
    headers: briefHeaders(),
  });
}

export async function GET(request: Request) {
  const rateLimit = rateLimitBriefRequest(request);
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

  const hasAccess = await hasInvestorAccess();
  if (hasAccess === null) {
    console.error("Revenue brief requested, but access password is not configured.");
    return NextResponse.json(
      { status: "error", message: "Access is unavailable." },
      { status: 503, headers: { "Cache-Control": "private, no-store" } },
    );
  }

  if (!hasAccess) {
    console.warn("Unauthorized revenue brief GET request.");
    return NextResponse.json(
      { status: "error", message: "Access could not be verified." },
      { status: 401, headers: { "Cache-Control": "private, no-store" } },
    );
  }

  const result = await downloadBriefWithTimeout();
  if (result.status === "missing") {
    return NextResponse.json(
      { status: "error", message: "Revenue brief is unavailable." },
      { status: 404, headers: { "Cache-Control": "private, no-store" } },
    );
  }

  if (result.status !== "success") {
    return NextResponse.json(
      { status: "error", message: "Revenue brief is unavailable." },
      { status: 500, headers: { "Cache-Control": "private, no-store" } },
    );
  }

  return new NextResponse(result.data.stream(), {
    status: 200,
    headers: briefHeaders(),
  });
}
