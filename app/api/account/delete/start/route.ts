import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  accountDeleteOrigin,
  DELETE_AUTH_MAX_AGE_SECONDS,
  DELETE_STATE_COOKIE,
  emailRateKey,
  isSameOriginMutation,
  privateNoStoreHeaders,
  randomUrlToken,
} from "@/lib/accountDeleteSecurity";
import { createAccountDeleteRouteClient } from "@/lib/accountDeleteSupabase";
import { checkRateLimit, getClientIp } from "@/lib/serverRateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const schema = z.object({ email: z.string().trim().email().max(320) });
const genericBody = {
  status: "accepted",
  message: "If that email belongs to a K Scan account, a secure confirmation link will arrive shortly.",
};

function genericResponse() {
  return NextResponse.json(genericBody, { status: 202, headers: privateNoStoreHeaders });
}

export async function POST(request: NextRequest) {
  const response = genericResponse();
  if (!isSameOriginMutation(request)) return response;

  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return response;

  const email = parsed.data.email.toLowerCase();
  const ipLimit = checkRateLimit({
    key: `account-delete:start:ip:${getClientIp(request)}`,
    limit: 5,
    windowMs: 15 * 60 * 1000,
  });
  const emailLimit = checkRateLimit({
    key: `account-delete:start:email:${emailRateKey(email)}`,
    limit: 3,
    windowMs: 60 * 60 * 1000,
  });
  if (!ipLimit.allowed || !emailLimit.allowed) return response;

  const origin = accountDeleteOrigin(request);
  const client = createAccountDeleteRouteClient(request, response);
  if (!origin || !client) {
    console.error("[account-delete] authentication intake is not configured");
    return response;
  }

  const state = randomUrlToken();
  response.cookies.set(DELETE_STATE_COOKIE, state, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/account/delete",
    maxAge: DELETE_AUTH_MAX_AGE_SECONDS,
  });

  const redirectTo = `${origin}/account/delete/auth/callback?state=${encodeURIComponent(state)}`;
  const { error } = await client.supabase.auth.signInWithOtp({
    email,
    options: { emailRedirectTo: redirectTo, shouldCreateUser: false },
  });
  if (error) {
    console.warn("[account-delete] magic-link request returned a generic failure", {
      category: error.name || "auth_error",
      status: error.status ?? null,
    });
  }
  return response;
}

