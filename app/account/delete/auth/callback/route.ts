import { NextRequest, NextResponse } from "next/server";
import {
  accountDeleteOrigin,
  constantTimeTokenEqual,
  DELETE_CONFIRM_MAX_AGE_SECONDS,
  DELETE_CSRF_COOKIE,
  DELETE_STATE_COOKIE,
  privateNoStoreHeaders,
  randomUrlToken,
} from "@/lib/accountDeleteSecurity";
import { createAccountDeleteRouteClient } from "@/lib/accountDeleteSupabase";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const origin = accountDeleteOrigin(request) ?? request.nextUrl.origin;
  const successUrl = new URL("/account/delete/confirm", origin);
  const failureUrl = new URL("/account/delete", origin);
  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const stateCookie = request.cookies.get(DELETE_STATE_COOKIE)?.value ?? null;
  const validState = constantTimeTokenEqual(state, stateCookie);

  const response = NextResponse.redirect(validState && code ? successUrl : failureUrl, 303);
  Object.entries(privateNoStoreHeaders).forEach(([name, value]) => response.headers.set(name, value));
  response.cookies.set(DELETE_STATE_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/account/delete",
    maxAge: 0,
  });
  if (!validState || !code) return response;

  const client = createAccountDeleteRouteClient(request, response);
  if (!client) {
    response.headers.set("location", failureUrl.toString());
    return response;
  }
  const exchanged = await client.supabase.auth.exchangeCodeForSession(code);
  if (exchanged.error || !exchanged.data.user) {
    response.headers.set("location", failureUrl.toString());
    return response;
  }

  response.cookies.set(DELETE_CSRF_COOKIE, randomUrlToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: DELETE_CONFIRM_MAX_AGE_SECONDS,
  });
  return response;
}
