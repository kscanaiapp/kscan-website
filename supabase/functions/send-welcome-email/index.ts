import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

type WebhookPayload = {
  type?: string;
  table?: string;
  record?: {
    email?: string | null;
    name?: string | null;
  } | null;
};

function jsonResponse(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: corsHeaders,
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildHtml(name: string) {
  const safeGreeting = escapeHtml(name.trim() || "there");

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>K Scan AI Waitlist</title>
  </head>
  <body style="margin:0;padding:0;background-color:#FAFAF8;color:#111827;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
    <div style="padding:32px 20px;">
      <div style="max-width:560px;margin:0 auto;background:#FAFAF8;border:1px solid rgba(15,23,42,0.08);border-radius:24px;overflow:hidden;">
        <div style="height:6px;background:linear-gradient(90deg,#7DD3FC 0%,#B6E6EE 100%);"></div>
        <div style="padding:40px 36px 32px;">
          <div style="font-size:12px;letter-spacing:0.16em;text-transform:uppercase;color:#6B7280;margin-bottom:20px;">K Scan AI</div>
          <p style="margin:0 0 18px;font-size:18px;line-height:1.6;color:#0F172A;">Hi ${safeGreeting},</p>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.75;color:#1F2937;">
            Thanks for joining the K Scan AI waitlist. Your spot is confirmed, and we&apos;ll reach out when we have something meaningful to share.
          </p>
          <p style="margin:0 0 24px;font-size:16px;line-height:1.75;color:#1F2937;">
            We appreciate your interest and will keep future updates concise.
          </p>
          <div style="padding-top:20px;border-top:1px solid rgba(15,23,42,0.08);font-size:13px;line-height:1.7;color:#6B7280;">
            K Scan AI<br />
            kscanai.app@gmail.com
          </div>
        </div>
      </div>
    </div>
  </body>
</html>`;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  let payload: WebhookPayload;

  try {
    payload = await req.json();
  } catch (error) {
    console.error("Invalid webhook JSON body", error);
    return jsonResponse(400, { error: "Invalid JSON body." });
  }

  console.log(
    "Incoming waitlist webhook",
    JSON.stringify({
      type: payload?.type ?? null,
      table: payload?.table ?? null,
      email: payload?.record?.email ?? null,
      name: payload?.record?.name ?? null,
    }),
  );

  const email = payload.record?.email?.trim();
  const rawName = payload.record?.name ?? "there";
  const name = rawName.trim() || "there";

  if (!email) {
    return jsonResponse(400, {
      error: "Missing required email in payload.record.email.",
    });
  }

  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  if (!resendApiKey) {
    console.error("Missing RESEND_API_KEY environment variable.");
    return jsonResponse(500, { error: "Server configuration error." });
  }

  const resendPayload = {
    from: "K Scan <hello@info.kscan.app>",
    to: [email],
    reply_to: "kscanai.app@gmail.com",
    subject: "You\u2019re on the list | K Scan AI",
    html: buildHtml(name),
  };

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(resendPayload),
    });

    if (!resendResponse.ok) {
      const errorBody = await resendResponse.text();
      console.error("Resend API error", {
        status: resendResponse.status,
        body: errorBody,
      });
      return jsonResponse(500, { error: "Failed to send welcome email." });
    }

    const resendResult = await resendResponse.json();
    console.log("Welcome email sent", resendResult);

    return jsonResponse(200, {
      success: true,
      message: "Welcome email sent.",
      resend: resendResult,
    });
  } catch (error) {
    console.error("Unexpected Resend fetch failure", error);
    return jsonResponse(500, { error: "Failed to send welcome email." });
  }
});
