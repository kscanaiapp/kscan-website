import "server-only";

import { createServerClient } from "@supabase/ssr";
import type { NextRequest, NextResponse } from "next/server";
import type { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

function accountSupabaseConfig() {
  const url =
    process.env.ACCOUNT_DELETE_SUPABASE_URL?.trim() ||
    process.env.ROOMS_SUPABASE_URL?.trim() ||
    process.env.NEXT_PUBLIC_ROOMS_SUPABASE_URL?.trim();
  const publishableKey =
    process.env.ACCOUNT_DELETE_SUPABASE_PUBLISHABLE_KEY?.trim() ||
    process.env.NEXT_PUBLIC_ROOMS_SUPABASE_ANON_KEY?.trim() ||
    process.env.ROOMS_SUPABASE_ANON_KEY?.trim();
  if (!url || !publishableKey) return null;
  return { url: url.replace(/\/+$/, ""), publishableKey };
}
export function createAccountDeleteRouteClient(
  request: NextRequest,
  response: NextResponse,
) {
  const config = accountSupabaseConfig();
  if (!config) return null;
  const supabase = createServerClient(config.url, config.publishableKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet, headersToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, {
            ...options,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: value ? Math.min(Number(options.maxAge ?? 600), 600) : 0,
          });
        });
        Object.entries(headersToSet ?? {}).forEach(([name, value]) => {
          response.headers.set(name, value);
        });
      },
    },
  });
  return { supabase, config };
}

export function createAccountDeletePageClient(cookieStore: ReadonlyRequestCookies) {
  const config = accountSupabaseConfig();
  if (!config) return null;
  return createServerClient(config.url, config.publishableKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll() {
        // Server Components cannot set cookies. Auth mutations and code exchange
        // occur only in Route Handlers, where setAll is implemented above.
      },
    },
  });
}

export function getAccountDeleteSupabaseConfig() {
  return accountSupabaseConfig();
}
