import { headers } from "next/headers";
import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const WAITLIST_TABLE = "waitlist_signups";

type WaitlistPayload = {
  email?: string;
  name?: string;
  referrer?: string;
  source?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isDuplicateError(status: number, errorBody: unknown) {
  if (status === 409) return true;
  if (!errorBody || typeof errorBody !== "object") return false;

  const error = errorBody as Record<string, unknown>;
  const parts = [error.code, error.message, error.details, error.hint]
    .filter((value): value is string => typeof value === "string")
    .join(" ")
    .toLowerCase();

  return parts.includes("23505") || parts.includes("duplicate") || parts.includes("unique");
}

export async function POST(request: Request) {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json(
      { status: "error", message: "Waitlist service is not configured." },
      { status: 500 },
    );
  }

  let body: WaitlistPayload;

  try {
    body = (await request.json()) as WaitlistPayload;
  } catch {
    return NextResponse.json(
      { status: "error", message: "Invalid request body." },
      { status: 400 },
    );
  }

  const normalizedEmail = body.email?.trim().toLowerCase() ?? "";

  if (!normalizedEmail || !isValidEmail(normalizedEmail)) {
    return NextResponse.json(
      { status: "error", message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const headerStore = await headers();
  const referrerHeader = headerStore.get("referer");
  const source = typeof body.source === "string" && body.source.trim() ? body.source.trim() : "homepage";
  const name = typeof body.name === "string" && body.name.trim() ? body.name.trim() : null;
  const referrer =
    typeof body.referrer === "string" && body.referrer.trim()
      ? body.referrer.trim()
      : referrerHeader;

  const insertPayload = {
    email: normalizedEmail,
    source,
    name,
    referrer,
  };

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/${WAITLIST_TABLE}`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_SERVICE_ROLE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify(insertPayload),
      cache: "no-store",
    });

    if (response.ok) {
      return NextResponse.json({ status: "success", message: "Joined waitlist." });
    }

    let errorBody: unknown = null;

    try {
      errorBody = await response.json();
    } catch {
      errorBody = null;
    }

    if (isDuplicateError(response.status, errorBody)) {
      return NextResponse.json({ status: "duplicate", message: "Already joined." });
    }

    return NextResponse.json(
      { status: "error", message: "Unable to save waitlist signup right now." },
      { status: 500 },
    );
  } catch {
    return NextResponse.json(
      { status: "error", message: "Unable to save waitlist signup right now." },
      { status: 500 },
    );
  }
}
