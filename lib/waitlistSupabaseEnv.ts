import "server-only";

function isValidHttpUrl(value: string) {
  if (!/^https?:\/\//i.test(value)) return false;
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

function looksJwtLike(value: string) {
  const parts = value.split(".");
  return value.startsWith("eyJ") && parts.length === 3 && parts.every(Boolean);
}

let fallbackWarningLogged = false;

export function getWaitlistSupabaseConfig():
  | { url: string; serviceRoleKey: string; source: "waitlist" | "legacy" }
  | null {
  const waitlistUrl = process.env.WAITLIST_SUPABASE_URL?.trim() || null;
  const waitlistKey = process.env.WAITLIST_SUPABASE_SERVICE_ROLE_KEY?.trim() || null;

  // TODO: Remove legacy SUPABASE_* fallback after WAITLIST_SUPABASE_* is configured
  // in Vercel Production/Preview and verified for 48 hours. See docs/backend-env-map.md.
  const legacyUrl = process.env.SUPABASE_URL?.trim() || null;
  const legacyKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() || null;

  const url = waitlistUrl ?? legacyUrl ?? "";
  const serviceRoleKey = waitlistKey ?? legacyKey ?? "";

  const urlSource = waitlistUrl
    ? "WAITLIST_SUPABASE_URL"
    : legacyUrl
      ? "SUPABASE_URL"
      : "missing";

  const keySource = waitlistKey
    ? "WAITLIST_SUPABASE_SERVICE_ROLE_KEY"
    : legacyKey
      ? "SUPABASE_SERVICE_ROLE_KEY"
      : "missing";

  const source: "waitlist" | "legacy" = waitlistUrl && waitlistKey ? "waitlist" : "legacy";

  const diagnostics = {
    urlSource,
    keySource,
    urlExists: Boolean(url),
    urlLooksValid: isValidHttpUrl(url),
    serviceRoleKeyExists: Boolean(serviceRoleKey),
    serviceRoleKeyLooksJwtLike: looksJwtLike(serviceRoleKey),
  };

  if (!diagnostics.urlExists || !diagnostics.urlLooksValid || !diagnostics.serviceRoleKeyExists) {
    console.error("[waitlist] Invalid Supabase configuration.", diagnostics);
    return null;
  }

  if (source === "legacy" && !fallbackWarningLogged) {
    console.warn(
      "[waitlist] Waitlist Supabase config using legacy SUPABASE_* fallback. Configure WAITLIST_SUPABASE_*.",
    );
    fallbackWarningLogged = true;
  }

  return { url, serviceRoleKey, source };
}
