import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { z } from "zod";
import { getSupabaseServerConfig } from "@/lib/serverSupabaseEnv";

const WAITLIST_TABLE = "waitlist_signups";

const bodySchema = z.object({
  email: z.string().trim().toLowerCase().email({ message: "Please enter a valid email address." }),
  source: z.string().trim().min(1).default("homepage"),
  page: z.string().trim().optional(),
  name: z.string().trim().min(1).optional(),
  referrer: z.string().trim().optional(),
});

export const runtime = "nodejs";

function isDuplicateError(error: unknown) {
  if (!error || typeof error !== "object") return false;

  const details = error as Record<string, unknown>;
  const parts = [details.code, details.message, details.details, details.hint]
    .filter((value): value is string => typeof value === "string")
    .join(" ")
    .toLowerCase();

  return parts.includes("23505") || parts.includes("duplicate") || parts.includes("unique");
}

export async function POST(request: Request) {
  const config = getSupabaseServerConfig();
  if (!config) {
    console.error("Invalid Supabase server configuration: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing.");
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

  const { email, source, page, name, referrer } = parsed.data;

  try {
    const supabase = createClient(config.url, config.serviceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    const { error } = await supabase
      .from(WAITLIST_TABLE)
      .insert({ email, source, page, name, referrer });

    if (error) {
      console.error("Supabase waitlist insert failed:", error);
      if (isDuplicateError(error)) {
        return NextResponse.json({ status: "duplicate", message: "Already joined." });
      }

      return NextResponse.json(
        { status: "error", message: "Unable to save waitlist signup right now." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { status: "success", message: "Joined waitlist." },
      { status: 201 },
    );
  } catch (err) {
    console.error("Unexpected waitlist route error:", err);
    return NextResponse.json(
      { status: "error", message: "Unable to save waitlist signup right now." },
      { status: 500 },
    );
  }
}
