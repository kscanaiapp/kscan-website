import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { getSupabaseServerConfig } from "@/lib/serverSupabaseEnv";

const WAITLIST_TABLE = "waitlist_signups";
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const bodySchema = z.object({
  email: z.string(),
  source: z.string().trim().min(1).default("homepage"),
  page: z.string().trim().optional(),
  name: z.string().trim().min(1).optional(),
  referrer: z.string().trim().optional(),
  website: z.string().optional(),
});

const emailSchema = z.string().email({ message: "Please enter a valid email address." });

export const runtime = "nodejs";

async function sendWelcomeEmail(email: string) {
  if (!resend) {
    console.warn("RESEND_API_KEY is missing. Skipping welcome email send.");
    return;
  }

  await resend.emails.send({
    from: "K Scan <hello@info.kscan.app>",
    to: email,
    subject: "You’re on the K Scan waitlist",
    html: `
      <div style="margin:0;padding:32px 20px;background:#FAFAF8;color:#0F172A;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
        <div style="max-width:560px;margin:0 auto;background:#FAFAF8;border:1px solid rgba(15,23,42,0.08);">
          <div style="height:4px;background:#B6E6EE;"></div>
          <div style="padding:40px 32px;text-align:left;">
            <p style="margin:0 0 20px;font-size:24px;line-height:1.3;font-weight:500;">You&rsquo;re in.</p>
            <p style="margin:0 0 16px;font-size:16px;line-height:1.7;">K Scan turns what you see into what you can buy &mdash; instantly.</p>
            <p style="margin:0 0 16px;font-size:16px;line-height:1.7;">We&rsquo;re rolling out access in small waves as we refine the experience.</p>
            <p style="margin:0 0 16px;font-size:16px;line-height:1.7;">We&rsquo;ll reach out when it&rsquo;s ready.</p>
            <p style="margin:0;font-size:16px;line-height:1.7;">&mdash; K Scan AI</p>
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

  const { email, source, page, name, referrer, website } = parsed.data;
  if (website?.trim()) {
    return NextResponse.json({ status: "success", message: "Joined waitlist." });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const emailResult = emailSchema.safeParse(normalizedEmail);
  if (!emailResult.success) {
    const message = emailResult.error.issues[0]?.message ?? "Invalid request.";
    return NextResponse.json({ status: "error", message }, { status: 400 });
  }

  const config = getSupabaseServerConfig();
  if (!config) {
    console.error("Invalid Supabase server configuration: SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY is missing.");
    return NextResponse.json(
      { status: "error", message: "Waitlist service is not configured." },
      { status: 500 },
    );
  }

  try {
    const supabase = createClient(config.url, config.serviceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    const { error } = await supabase
      .from(WAITLIST_TABLE)
      .insert({ email: normalizedEmail, source, page, name, referrer });

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
      await sendWelcomeEmail(normalizedEmail);
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
