import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  INVESTOR_ACCESS_COOKIE,
  isInvestorAccessCookieValid,
} from "@/lib/investorAccess";
import { checkRateLimit, getClientIp } from "@/lib/serverRateLimit";
import { getSupabaseAdminClient } from "@/lib/supabaseAdmin";

const INVESTOR_DECK_BUCKET = "investor-docs";
const DEFAULT_MOBILE_DECK_FILENAME = "kscan-investor-deck-mobile.html";
const STORAGE_TIMEOUT_MS = 10_000;

function mobileDeckFilename() {
  return process.env.INVESTOR_DECK_MOBILE_FILENAME?.trim() || DEFAULT_MOBILE_DECK_FILENAME;
}

function mobileDeckHeaders() {
  return {
    "Content-Type": "text/html; charset=utf-8",
    "Cache-Control": "private, no-store",
    "X-Content-Type-Options": "nosniff",
  };
}

async function hasInvestorAccess() {
  const configuredPassword = process.env.INVESTOR_ACCESS_PASSWORD;
  if (!configuredPassword) {
    console.error("Mobile investor deck requested, but access password is not configured.");
    return false;
  }

  const cookieStore = await cookies();
  const provided = cookieStore.get(INVESTOR_ACCESS_COOKIE)?.value ?? "";
  return isInvestorAccessCookieValid(provided, configuredPassword);
}

async function downloadMobileDeckWithTimeout() {
  const supabase = getSupabaseAdminClient();
  if (!supabase) {
    return { status: "error" as const };
  }

  const download = supabase.storage
    .from(INVESTOR_DECK_BUCKET)
    .download(mobileDeckFilename());

  const timeout = new Promise<"timeout">((resolve) => {
    setTimeout(() => resolve("timeout"), STORAGE_TIMEOUT_MS);
  });

  const result = await Promise.race([download, timeout]);

  if (result === "timeout") {
    console.error("Mobile investor deck storage download timed out.");
    return { status: "timeout" as const };
  }

  if (result.error) {
    const statusCode = Number((result.error as { statusCode?: string | number }).statusCode);
    const message = result.error.message.toLowerCase();

    if (statusCode === 404 || message.includes("not found")) {
      console.warn("Mobile investor deck storage object not found.");
      return { status: "missing" as const };
    }

    console.error("Mobile investor deck storage download failed.");
    return { status: "error" as const };
  }

  return { status: "success" as const, data: result.data };
}

function prepareMobileDeckHtml(html: string) {
  return html
    .replaceAll("/docs/kscan-deck-no9.pdf", "/api/investor/deck")
    .replaceAll("/docs/kscan-investor-deck.pdf", "/api/investor/deck")
    .replaceAll("docs/kscan-deck-no9.pdf", "/api/investor/deck")
    .replaceAll("docs/kscan-investor-deck.pdf", "/api/investor/deck");
}

function rateLimitMobileDeckRequest(request: Request) {
  const ip = getClientIp(request);
  return checkRateLimit({
    key: `investor-deck-mobile:${ip}`,
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
  const rateLimit = rateLimitMobileDeckRequest(request);
  if (!rateLimit.allowed) {
    return rateLimitedResponse(rateLimit.retryAfterSeconds);
  }

  if (!(await hasInvestorAccess())) {
    console.warn("Unauthorized mobile investor deck HEAD request.");
    return new NextResponse(null, {
      status: 401,
      headers: { "Cache-Control": "private, no-store" },
    });
  }

  const result = await downloadMobileDeckWithTimeout();
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
    headers: mobileDeckHeaders(),
  });
}

export async function GET(request: Request) {
  const rateLimit = rateLimitMobileDeckRequest(request);
  if (!rateLimit.allowed) {
    return rateLimitedResponse(rateLimit.retryAfterSeconds);
  }

  if (!(await hasInvestorAccess())) {
    console.warn("Unauthorized mobile investor deck GET request.");
    return new NextResponse(null, {
      status: 401,
      headers: { "Cache-Control": "private, no-store" },
    });
  }

  const result = await downloadMobileDeckWithTimeout();
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

  return new NextResponse(prepareMobileDeckHtml(await result.data.text()), {
    status: 200,
    headers: mobileDeckHeaders(),
  });
}
