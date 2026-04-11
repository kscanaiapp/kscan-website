import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { z } from "zod";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const WAITLIST_TABLE = "waitlist_signups";

const bodySchema = z.object({
  email: z.string().trim().toLowerCase().email("Please enter a valid email address."),
  source: z.string().trim().min(1).default("homepage"),
  page: z.string().trim().optional(),
  name: z.string().trim().min(1).optional(),
  referrer: z.string().trim().optional(),
});

function isDuplicateError(status: number, errorBody: unknown) {
  if (status === 409) return true;
  if (!errorBody || typeof errorBody !== "object") return false;

  const error = errorBody as Record<string, unknown>;
  const parts = [error.code, error.message, error.details, error.hint]
    .filter((v): v is string => typeof v === "string")
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

  let rawBody: unknown;
  try {
    rawBody = await request.json();
  } catch {
    return NextResponse.json(
      { status: "error", message: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = bodySchema.safeParse(rawBody);
  if (!parsed.success) {
    const message = parsed.error.issues[0]?.message ?? "Invalid request.";
    return NextResponse.json({ status: "error", message }, { status: 400 });
  }

  const { email, source, page, name, referrer: bodyReferrer } = parsed.data;

  const headerStore = await headers();
  const referrer = bodyReferrer || headerStore.get("referer") || null;

  const insertPayload = {
    email,
    source,
    page: page ?? null,
    name: name ?? null,
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
