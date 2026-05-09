import { NextResponse } from "next/server";
import {
  createInvestorAccessCookieValue,
  INVESTOR_ACCESS_COOKIE,
  INVESTOR_ACCESS_MAX_AGE_SECONDS,
} from "@/lib/investorAccess";
import { checkRateLimit, getClientIp } from "@/lib/serverRateLimit";

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit({
    key: `investor-login:${ip}`,
    limit: 5,
    windowMs: 60 * 60 * 1000,
  });

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

  const configuredPassword = process.env.INVESTOR_ACCESS_PASSWORD;
  if (!configuredPassword) {
    console.error("Investor access password is not configured.");
    return NextResponse.json(
      { status: "error", message: "Access is unavailable." },
      { status: 503 },
    );
  }

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      { status: "error", message: "Access could not be verified." },
      { status: 401 },
    );
  }

  const password =
    rawBody && typeof rawBody === "object" && "password" in rawBody
      ? String((rawBody as { password?: unknown }).password ?? "")
      : "";

  if (password !== configuredPassword) {
    console.warn("Investor access rejected.");
    return NextResponse.json(
      { status: "error", message: "Access could not be verified." },
      { status: 401 },
    );
  }

  const response = NextResponse.json({ status: "success" });
  response.cookies.set({
    name: INVESTOR_ACCESS_COOKIE,
    value: createInvestorAccessCookieValue(configuredPassword),
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: INVESTOR_ACCESS_MAX_AGE_SECONDS,
  });

  return response;
}
