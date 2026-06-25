"use client";

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let browserClient: SupabaseClient | null = null;

function getBrowserClientConfig(): { url: string; anonKey: string } {
  const url = process.env.NEXT_PUBLIC_ROOMS_SUPABASE_URL?.trim();
  const anonKey = process.env.NEXT_PUBLIC_ROOMS_SUPABASE_ANON_KEY?.trim();

  if (!url || !anonKey) {
    throw new Error(
      "Shared-room web collaboration is not configured. Missing NEXT_PUBLIC_ROOMS_SUPABASE_URL or NEXT_PUBLIC_ROOMS_SUPABASE_ANON_KEY."
    );
  }

  return { url, anonKey };
}

export function getRoomsSupabaseBrowserClient(): SupabaseClient {
  if (browserClient) return browserClient;

  const { url, anonKey } = getBrowserClientConfig();
  browserClient = createClient(url, anonKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  });

  return browserClient;
}

export function resetRoomsSupabaseBrowserClient(): void {
  browserClient = null;
}
