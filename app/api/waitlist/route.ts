import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { getSupabaseServerConfig } from "@/lib/serverSupabaseEnv";

const WAITLIST_TABLE = "waitlist_signups";
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const bodySchema = z.object({
  email: z.string().trim().toLowerCase().email({ message: "Please enter a valid email address." }),
  source: z.string().trim().min(1).default("homepage"),
  page: z.string().trim().optional(),
  name: z.string().trim().min(1).optional(),
  referrer: z.string().trim().optional(),
});

export const runtime = "nodejs";

async function sendWelcomeEmail(email: string, name?: string) {
  if (!resend) {
    console.warn("RESEND_API_KEY is missing. Skipping welcome email send.");
    return;
  }

  const greetingName = name?.trim() || "there";

  await resend.emails.send({
    from: "K Scan AI <hello@info.kscan.app>",
    to: email,
    subject: "You’re on the list | K Scan AI",
    html: `
      <div style="margin:0;padding:32px 20px;background-color:#FAFAF8;color:#111827;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
        <div style="max-width:560px;margin:0 auto;border:1px solid rgba(15,23,42,0.08);border-radius:24px;overflow:hidden;background:#FAFAF8;">
          <div style="height:6px;background:linear-gradient(90deg,#7DD3FC 0%,#B6E6EE 100%);"></div>
          <div style="padding:40px 36px 32px;">
            <div style="font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#6B7280;margin-bottom:20px;">K Scan AI</div>
            <p style="margin:0 0 18px;font-size:18px;line-height:1.6;color:#0F172A;">Hi ${greetingName},</p>
            <p style="margin:0 0 16px;font-size:16px;line-height:1.75;color:#1F2937;">
              Thanks for joining the K Scan AI waitlist. Your spot is confirmed, and we&apos;ll reach out when we have something meaningful to share.
            </p>
            <p style="margin:0;font-size:16px;line-height:1.75;color:#1F2937;">
              We appreciate your interest and will keep future updates concise.
            </p>
          </div>
        </div>
      </div>
    `,
  });
}

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

    try {
      await sendWelcomeEmail(email, name);
    } catch (emailError) {
      console.error("Welcome email send failed:", emailError);
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
