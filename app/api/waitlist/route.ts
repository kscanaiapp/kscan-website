import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const WAITLIST_TABLE = "waitlist_signups";
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const bodySchema = z.object({
  email: z.string(),
  source: z.string().trim().min(1).default("homepage"),
  page: z.string().trim().optional(),
  name: z.string().trim().min(1).optional(),
  referrer: z.string().trim().optional(),
  website: z.string().optional(),
});

const emailSchema = z.string().email({
  message: "Please enter a valid email address.",
});

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function sendWelcomeEmail(email: string) {
  if (!resend) {
    console.warn("RESEND_API_KEY is missing. Skipping welcome email send.");
    return;
  }

  await resend.emails.send({
    from: "K Scan <hello@info.kscan.app>",
    to: email,
    replyTo: "kscanai.app@gmail.com",
    subject: "You're on the K Scan waitlist",
    html: `
      <div style="margin:0;padding:32px 20px;background:#FAFAF8;color:#0F172A;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
        <div style="max-width:560px;margin:0 auto;background:#FAFAF8;border:1px solid rgba(15,23,42,0.08);">
          <div style="height:4px;background:#B6E6EE;"></div>
          <div style="padding:40px 32px;text-align:left;">
            <p style="margin:0 0 20px;font-size:24px;line-height:1.3;font-weight:500;">You're in.</p>
            <p style="margin:0 0 16px;font-size:16px;line-height:1.7;">K Scan turns what you see into what you can buy &mdash; instantly.</p>
            <p style="margin:0 0 16px;font-size:16px;line-height:1.7;">We're rolling out access in small waves as we refine the experience.</p>
            <p style="margin:0 0 16px;font-size:16px;line-height:1.7;">We'll reach out when it's ready.</p>
            <p style="margin:0;font-size:16px;line-height:1.7;">&mdash; K Scan AI</p>
          </div>
        </div>
      </div>
    `,
  });
}

async function sendOwnerNotification({
  email,
  name,
  source,
  page,
  referrer,
}: {
  email: string;
  name: string | null | undefined;
  source: string | null | undefined;
  page: string | null | undefined;
  referrer: string | null | undefined;
}) {
  const alertEmail = process.env.WAITLIST_ALERT_EMAIL?.trim();
  if (!alertEmail) {
    console.warn("[waitlist] WAITLIST_ALERT_EMAIL is missing. Skipping owner notification.");
    return;
  }
  if (!resend) {
    console.warn("[waitlist] RESEND_API_KEY is missing. Skipping owner notification.");
    return;
  }

  const maskedEmail = email.replace(/(.{2}).*@/, "$1***@");

  const lines = [
    "New K Scan Waitlist Signup",
    "",
    `Email: ${email}`,
    name ? `Name: ${name}` : null,
    source ? `Source: ${source}` : null,
    page ? `Page: ${page}` : null,
    referrer ? `Referrer: ${referrer}` : null,
    `Time: ${new Date().toISOString()}`,
    `Table: ${WAITLIST_TABLE}`,
  ].filter((line): line is string => line !== null);

  try {
    await resend.emails.send({
      from: "K Scan <hello@info.kscan.app>",
      to: alertEmail,
      subject: "New K Scan Waitlist Signup",
      text: lines.join("\n"),
      html: `<pre style="font-family:system-ui,monospace;font-size:14px;line-height:1.7;padding:24px;background:#FAFAF8;color:#111827;">${lines
        .map((line) => (line ? escapeHtml(line) : ""))
        .join("\n")}</pre>`,
    });
    console.log("[waitlist] Owner notification sent.", { maskedEmail });
  } catch (err) {
    console.error("[waitlist] Owner notification failed:", {
      maskedEmail,
      error:
        err instanceof Error
          ? err.message
          : "Unknown error",
    });
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function redactLogValue(value: unknown) {
  if (typeof value !== "string") return value;
  return value
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "[redacted-email]")
    .slice(0, 500);
}

function safeSupabaseError(error: unknown) {
  if (!error || typeof error !== "object") {
    return { message: redactLogValue(String(error)) };
  }
  const record = error as Record<string, unknown>;
  return {
    code: redactLogValue(record.code),
    message: redactLogValue(record.message),
    details: redactLogValue(record.details),
    hint: redactLogValue(record.hint),
  };
}

function isDuplicateError(error: unknown) {
  if (!error || typeof error !== "object") return false;
  const details = error as Record<string, unknown>;
  const parts = [details.code, details.message, details.details, details.hint]
    .filter((value): value is string => typeof value === "string")
    .join(" ")
    .toLowerCase();
  return (
    parts.includes("23505") ||
    parts.includes("duplicate") ||
    parts.includes("unique")
  );
}

function deriveProjectRef(url: string): string | null {
  try {
    const host = new URL(url).hostname;
    const ref = host.split(".")[0];
    return ref || null;
  } catch {
    return null;
  }
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
    return NextResponse.json({ status: "success" });
  }

  const normalizedEmail = email.trim().toLowerCase();
  const emailResult = emailSchema.safeParse(normalizedEmail);
  if (!emailResult.success) {
    const message = emailResult.error.issues[0]?.message ?? "Invalid request.";
    return NextResponse.json({ status: "error", message }, { status: 400 });
  }

  const envUrl = process.env.WAITLIST_PRIVACY_SUPABASE_URL?.trim();
  const envServiceRoleKey =
    process.env.WAITLIST_PRIVACY_SUPABASE_SERVICE_ROLE_KEY?.trim();

  if (!envUrl || !envServiceRoleKey) {
    const diagnostics = {
      code: "MISSING_CONFIG",
      envUrlPresent: Boolean(envUrl),
      envServiceRolePresent: Boolean(envServiceRoleKey),
    };
    console.error("[waitlist] MISSING_CONFIG", diagnostics);
    return NextResponse.json(
      {
        status: "error",
        code: "MISSING_CONFIG",
        message: "Waitlist service is not configured.",
        diagnostics,
      },
      { status: 500 },
    );
  }

  const targetProjectRef = deriveProjectRef(envUrl);

  try {
    const supabase = createClient(envUrl, envServiceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    const { error } = await supabase.from(WAITLIST_TABLE).insert({
      email: normalizedEmail,
      source,
      page: page ?? null,
      name: name ?? null,
      referrer: referrer ?? null,
    });

    if (error) {
      if (isDuplicateError(error)) {
        return NextResponse.json({ status: "duplicate" });
      }

      const safe = safeSupabaseError(error);
      console.error("[waitlist] DB_ERROR", {
        targetProjectRef,
        ...safe,
      });

      return NextResponse.json(
        {
          status: "error",
          code: "DB_ERROR",
          message: "Unable to save waitlist signup right now.",
          supabaseErrorCode:
            typeof safe.code === "string" ? safe.code : null,
          targetProjectRef,
        },
        { status: 500 },
      );
    }

    try {
      await sendWelcomeEmail(normalizedEmail);
    } catch (emailError) {
      console.error("Welcome email send failed:", emailError);
    }

    try {
      await sendOwnerNotification({
        email: normalizedEmail,
        name: name ?? null,
        source: source ?? null,
        page: page ?? null,
        referrer: referrer ?? null,
      });
    } catch (notifyError) {
      console.error("[waitlist] Owner notification failed:", notifyError);
    }

    return NextResponse.json({ status: "success" }, { status: 201 });
  } catch (err) {
    console.error("Unexpected waitlist route error:", err);
    return NextResponse.json(
      {
        status: "error",
        code: "UNEXPECTED",
        message: "Unable to save waitlist signup right now.",
      },
      { status: 500 },
    );
  }
}
