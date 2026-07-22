import "server-only";

export type WelcomeDeliveryStatus =
  | "sent"
  | "failed_retryable"
  | "failed_permanent";

export type WelcomeDeliveryResult = {
  status: WelcomeDeliveryStatus;
  code: string;
};

const RETRYABLE_HTTP_STATUSES = new Set([408, 409, 425, 429]);

function safeCode(value: unknown, fallback: string) {
  return typeof value === "string" && /^[A-Z0-9_-]{1,80}$/i.test(value)
    ? value
    : fallback;
}

export async function dispatchWaitlistWelcome({
  waitlistId,
  recipientEmail,
}: {
  waitlistId: string;
  recipientEmail: string;
}): Promise<WelcomeDeliveryResult> {
  const renderUrl = process.env.KSCAN_EMAIL_RENDER_URL?.trim().replace(/\/$/, "");
  const internalSecret = process.env.KSCAN_EMAIL_INTERNAL_SECRET?.trim();
  if (!renderUrl || !internalSecret) {
    return { status: "failed_retryable", code: "EMAIL_ROUTE_NOT_CONFIGURED" };
  }

  try {
    const response = await fetch(`${renderUrl}/internal/email/waitlist-welcome`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-kscan-email-secret": internalSecret,
      },
      body: JSON.stringify({
        recipientEmail,
        eventType: "waitlist_welcome",
        idempotencyKey: `waitlist:${waitlistId}`,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10_000),
    });

    let responseCode = "EMAIL_PROVIDER_ERROR";
    try {
      const body = (await response.json()) as { code?: unknown };
      responseCode = safeCode(body.code, responseCode);
    } catch {}

    if (response.ok) return { status: "sent", code: responseCode };
    if (RETRYABLE_HTTP_STATUSES.has(response.status) || response.status >= 500) {
      return { status: "failed_retryable", code: responseCode };
    }
    return { status: "failed_permanent", code: responseCode };
  } catch {
    return { status: "failed_retryable", code: "EMAIL_ROUTE_UNREACHABLE" };
  }
}
