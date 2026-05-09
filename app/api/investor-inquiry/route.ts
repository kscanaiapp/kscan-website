import "server-only";

import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { getSupabaseServerConfig } from "@/lib/serverSupabaseEnv";
import { checkRateLimit, getClientIp } from "@/lib/serverRateLimit";

const INQUIRY_TABLE = "investor_inquiries";
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const bodySchema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  email: z.string().trim().toLowerCase().pipe(z.email("Please enter a valid email address.")),
  firm: z.string().trim().max(100, "Firm name must be 100 characters or fewer.").optional(),
  message: z.string().trim().max(2000, "Message must be 2000 characters or fewer.").optional(),
  page: z.string().trim().optional(),
});

export const runtime = "nodejs";

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function notifyByEmail(data: {
  name: string;
  email: string;
  firm?: string;
  message?: string;
}): Promise<boolean> {
  if (!resend) {
    console.warn("[investor-inquiry] RESEND_API_KEY is not configured. Skipping email notification.");
    return false;
  }

  try {
    await resend.emails.send({
      from: "K Scan <hello@info.kscan.app>",
      to: "kscanai.app@gmail.com",
      subject: `New Investor Inquiry from ${data.name}`,
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:560px;margin:0 auto;padding:32px 20px;color:#1c1917;">
          <h2 style="margin:0 0 24px;font-size:22px;font-weight:600;">New Investor Inquiry</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;font-weight:600;width:80px;vertical-align:top;">Name</td><td style="padding:8px 0;">${escapeHtml(data.name)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600;vertical-align:top;">Email</td><td style="padding:8px 0;">${escapeHtml(data.email)}</td></tr>
            ${data.firm ? `<tr><td style="padding:8px 0;font-weight:600;vertical-align:top;">Firm</td><td style="padding:8px 0;">${escapeHtml(data.firm)}</td></tr>` : ""}
            ${data.message ? `<tr><td style="padding:8px 0;font-weight:600;vertical-align:top;">Message</td><td style="padding:8px 0;">${escapeHtml(data.message).replace(/\n/g, "<br>")}</td></tr>` : ""}
          </table>
        </div>
      `,
    });
    return true;
  } catch (err) {
    console.error("[investor-inquiry] Email notification failed:", err);
    return false;
  }
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const rateLimit = checkRateLimit({
    key: `investor-inquiry:${ip}`,
    limit: 5,
    windowMs: 60 * 60 * 1000,
  });

  if (!rateLimit.allowed) {
    return NextResponse.json(
      { status: "error", message: "Too many requests. Please try again later or email kscanai.app@gmail.com directly." },
      {
        status: 429,
        headers: {
          "Cache-Control": "private, no-store",
          "Retry-After": String(rateLimit.retryAfterSeconds),
        },
      },
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

  const { name, email, firm, message, page } = parsed.data;

  let storedInDb = false;
  let emailSent = false;

  const config = getSupabaseServerConfig();
  if (config) {
    try {
      const supabase = createClient(config.url, config.serviceRoleKey, {
        auth: { autoRefreshToken: false, persistSession: false },
      });

      const { error } = await supabase
        .from(INQUIRY_TABLE)
        .insert({ name, email, firm: firm ?? null, message: message ?? null, page: page ?? null });

      if (error) {
        console.error("[investor-inquiry] Supabase insert failed:", error);
        if (
          typeof (error as { code?: string }).code === "string" &&
          (error as { code?: string }).code === "42P01"
        ) {
          console.error(
            `[investor-inquiry] Table '${INQUIRY_TABLE}' does not exist. ` +
            "Create it with columns: id (uuid pk default gen_random_uuid()), name (text not null), " +
            "email (text not null), firm (text), message (text), page (text), created_at (timestamptz not null default now()).",
          );
        }
      } else {
        storedInDb = true;
      }
    } catch (err) {
      console.error("[investor-inquiry] Unexpected Supabase error:", err);
    }
  } else {
    console.error(
      "[investor-inquiry] Supabase is not configured. " +
      "Ensure SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL) and SUPABASE_SERVICE_ROLE_KEY are set.",
    );
  }

  emailSent = await notifyByEmail({ name, email, firm, message });

  if (storedInDb || emailSent) {
    return NextResponse.json({ status: "success" });
  }

  console.error("[investor-inquiry] All delivery methods failed. Inquiry was not stored or emailed.");
  return NextResponse.json(
    { status: "error", message: "We couldn't submit your request. Please email kscanai.app@gmail.com directly." },
    { status: 500 },
  );
}
