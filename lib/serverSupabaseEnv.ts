import "server-only";

/**
 * Server-only Supabase configuration helper.
 *
 * Reads the server-only SUPABASE_URL first, then falls back to
 * NEXT_PUBLIC_SUPABASE_URL so that existing .env.local setups
 * continue to work without adding a new variable.
 *
 * SUPABASE_SERVICE_ROLE_KEY must never use the NEXT_PUBLIC_ prefix.
 * It must be the service_role JWT, not the anon key.
 *
 * Usage:
 *   const config = getSupabaseServerConfig();
 *   if (!config) return /* handle missing env *\/;
 *   const { url, serviceRoleKey } = config;
 */

function isValidHttpUrl(value: string) {
  if (!/^https?:\/\//i.test(value)) {
    return false;
  }

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

export function getSupabaseServerConfig():
  | { url: string; serviceRoleKey: string }
  | null {
  const serverUrl = process.env.SUPABASE_URL?.trim() ?? "";
  const publicUrl = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() ?? "";
  const url = serverUrl || publicUrl;

  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim() ?? "";

  const diagnostics = {
    urlSource: serverUrl ? "SUPABASE_URL" : publicUrl ? "NEXT_PUBLIC_SUPABASE_URL" : "missing",
    supabaseUrlExists: Boolean(url),
    supabaseUrlLooksValid: isValidHttpUrl(url),
    serviceRoleKeyExists: Boolean(serviceRoleKey),
    serviceRoleKeyLooksJwtLike: looksJwtLike(serviceRoleKey),
  };

  if (!diagnostics.supabaseUrlExists || !diagnostics.supabaseUrlLooksValid || !diagnostics.serviceRoleKeyExists) {
    console.error("Invalid Supabase server configuration.", diagnostics);
    return null;
  }

  return { url, serviceRoleKey };
}
