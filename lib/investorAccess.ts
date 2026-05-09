import "server-only";

import { createHmac, timingSafeEqual } from "node:crypto";

export const INVESTOR_ACCESS_COOKIE = "kscan_investor_access";
export const INVESTOR_ACCESS_MAX_AGE_SECONDS = 60 * 60;

export function createInvestorAccessCookieValue(password: string) {
  const digest = createHmac("sha256", password)
    .update("kscan-investor-access-v1")
    .digest("hex");

  return `v1.${digest}`;
}

export function isInvestorAccessCookieValid(provided: string, password: string) {
  const expected = createInvestorAccessCookieValue(password);
  const providedBuffer = Buffer.from(provided);
  const expectedBuffer = Buffer.from(expected);

  return (
    providedBuffer.length === expectedBuffer.length &&
    timingSafeEqual(providedBuffer, expectedBuffer)
  );
}
