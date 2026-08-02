import "server-only";

import { createHash, randomBytes } from "node:crypto";

export const DELETE_AUTH_MAX_AGE_SECONDS = 5 * 60;
export const DELETE_CONFIRM_MAX_AGE_SECONDS = 10 * 60;
export const DELETE_STATE_COOKIE = "kscan-delete-state";
export const DELETE_CSRF_COOKIE = "kscan-delete-csrf";

export function accountDeleteOrigin(request: Request): string | null {
  const configured = process.env.ACCOUNT_DELETE_SITE_URL?.trim();
  if (configured) {
    try {
      return new URL(configured).origin;
    } catch {
      return null;
    }
  }
  if (process.env.NODE_ENV !== "production") {
    return new URL(request.url).origin;
  }
  return null;
}

export function isSameOriginMutation(request: Request): boolean {
  const expected = accountDeleteOrigin(request);
  const origin = request.headers.get("origin");
  const fetchSite = request.headers.get("sec-fetch-site");
  return Boolean(
    expected &&
      origin === expected &&
      fetchSite !== "cross-site" &&
      fetchSite !== "none",
  );
}

export function randomUrlToken(): string {
  return randomBytes(32).toString("base64url");
}

export function constantTimeTokenEqual(left: string | null, right: string | null): boolean {
  if (!left || !right) return false;
  const a = new TextEncoder().encode(left);
  const b = new TextEncoder().encode(right);
  if (a.length !== b.length) return false;
  let mismatch = 0;
  for (let index = 0; index < a.length; index += 1) mismatch |= a[index] ^ b[index];
  return mismatch === 0;
}

export function emailRateKey(email: string): string {
  return createHash("sha256").update(email.trim().toLowerCase(), "utf8").digest("hex");
}

export const privateNoStoreHeaders = {
  "Cache-Control": "private, no-store, max-age=0",
  Pragma: "no-cache",
  "Referrer-Policy": "no-referrer",
  "X-Robots-Tag": "noindex, nofollow, noarchive",
};

