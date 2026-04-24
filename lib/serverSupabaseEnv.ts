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
export function getSupabaseServerConfig():
  | { url: string; serviceRoleKey: string }
  | null {
  const url =
    process.env.SUPABASE_URL ??
    process.env.NEXT_PUBLIC_SUPABASE_URL ??
    "";

  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

  if (!url || !serviceRoleKey) return null;

  return { url, serviceRoleKey };
}
