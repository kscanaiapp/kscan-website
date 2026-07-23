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
const WAITLIST_EMAIL_PATH = "/internal/email/waitlist-welcome";
const EMAIL_TIMEOUT_MS = 10_000;

function safeCode(value: unknown, fallback: string) {
  return typeof value === "string" && /^[A-Z0-9_-]{1,80}$/i.test(value)
    ? value
    : fallback;
}

function sanitizeErrorMessage(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  return value
    .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, "[redacted-email]")
    .replace(/https?:\/\/[^\s/]+:[^\s@]+@/gi, "https://[redacted-auth]@")
    .slice(0, 500);
}

function summarizeError(error: unknown) {
  if (!error || typeof error !== "object") {
    return { message: sanitizeErrorMessage(String(error)) };
  }

  const record = error as Record<string, unknown>;
  const cause = record.cause;
  const causeRecord = cause && typeof cause === "object"
    ? (cause as Record<string, unknown>)
    : null;

  return {
    name: typeof record.name === "string" ? record.name : undefined,
    code: safeCode(record.code, ""),
    message: sanitizeErrorMessage(record.message),
    causeName: typeof causeRecord?.name === "string" ? causeRecord.name : undefined,
    causeCode: safeCode(causeRecord?.code, ""),
    causeMessage: sanitizeErrorMessage(causeRecord?.message),
  };
}

function getRenderEmailEndpoint() {
  const configuredValue = process.env.KSCAN_EMAIL_RENDER_URL;
  const baseUrl = configuredValue?.trim().replace(/\/+$/, "");
  const secret = process.env.KSCAN_EMAIL_INTERNAL_SECRET?.trim();

  if (!baseUrl || !secret) {
    return {
      endpoint: null,
      secret: null,
      diagnostics: {
        renderUrlConfigured: Boolean(baseUrl),
        internalSecretConfigured: Boolean(secret),
      },
    };
  }

  try {
    const parsed = new URL(baseUrl);
    if (parsed.protocol !== "https:" || parsed.pathname !== "/" || parsed.search || parsed.hash) {
      throw new Error("Invalid Render email base URL");
    }
    const endpoint = new URL(WAITLIST_EMAIL_PATH, parsed).toString();
    return {
      endpoint,
      secret,
      diagnostics: {
        renderUrlConfigured: true,
        internalSecretConfigured: true,
        renderHostname: parsed.hostname,
        renderPath: WAITLIST_EMAIL_PATH,
      },
    };
  } catch (error) {
    return {
      endpoint: null,
      secret: null,
      diagnostics: {
        renderUrlConfigured: true,
        internalSecretConfigured: true,
        invalidRenderUrl: true,
        error: summarizeError(error),
      },
    };
  }
}

export async function dispatchWaitlistWelcome({
  waitlistId,
  recipientEmail,
}: {
  waitlistId: string;
  recipientEmail: string;
}): Promise<WelcomeDeliveryResult> {
  const correlationId = crypto.randomUUID();
  const { endpoint, secret: internalSecret, diagnostics } = getRenderEmailEndpoint();
  if (!endpoint || !internalSecret) {
    console.error("[waitlist] EMAIL_ROUTE_NOT_CONFIGURED", { correlationId, ...diagnostics });
    return { status: "failed_retryable", code: "EMAIL_ROUTE_NOT_CONFIGURED" };
  }

  const startedAt = Date.now();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), EMAIL_TIMEOUT_MS);
  try {
    const response = await fetch(endpoint, {
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
      signal: controller.signal,
    });

    let responseCode = "EMAIL_PROVIDER_ERROR";
    try {
      const body = (await response.json()) as { code?: unknown };
      responseCode = safeCode(body.code, responseCode);
    } catch {}

    const elapsedMs = Date.now() - startedAt;
    console.info("[waitlist] RENDER_EMAIL_RESPONSE", {
      correlationId,
      ...diagnostics,
      httpStatus: response.status,
      elapsedMs,
    });
    if (response.ok) return { status: "sent", code: responseCode };
    if (RETRYABLE_HTTP_STATUSES.has(response.status) || response.status >= 500) {
      return { status: "failed_retryable", code: responseCode };
    }
    return { status: "failed_permanent", code: responseCode };
  } catch (error) {
    console.error("[waitlist] RENDER_EMAIL_FETCH_FAILED", {
      correlationId,
      ...diagnostics,
      elapsedMs: Date.now() - startedAt,
      ...summarizeError(error),
    });
    return { status: "failed_retryable", code: "EMAIL_ROUTE_UNREACHABLE" };
  } finally {
    clearTimeout(timeout);
  }
}
