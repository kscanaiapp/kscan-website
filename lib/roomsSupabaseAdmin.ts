import "server-only";

import { createClient } from "@supabase/supabase-js";

export type RoomsSupabaseAdminClient = ReturnType<typeof createClient>;

function deriveProjectRef(url: string): string | null {
  try {
    const host = new URL(url).hostname;
    const ref = host.split(".")[0];
    return ref || null;
  } catch {
    return null;
  }
}

export function getRoomsSupabaseAdminClient(): RoomsSupabaseAdminClient {
  const url = process.env.ROOMS_SUPABASE_URL?.trim();
  const serviceRoleKey = process.env.ROOMS_SUPABASE_SERVICE_ROLE_KEY?.trim();

  if (!url || !serviceRoleKey) {
    console.error("[roomsSupabaseAdmin] Rooms Supabase admin client is not configured.");
    throw new Error("Rooms Supabase admin client is not configured.");
  }

  console.log("[roomsSupabaseAdmin] project ref:", deriveProjectRef(url));

  return createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
