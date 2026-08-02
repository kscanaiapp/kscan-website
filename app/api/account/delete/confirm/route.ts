import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  constantTimeTokenEqual,
  DELETE_CSRF_COOKIE,
  isSameOriginMutation,
  privateNoStoreHeaders,
} from "@/lib/accountDeleteSecurity";
import {
  createAccountDeleteRouteClient,
  getAccountDeleteSupabaseConfig,
} from "@/lib/accountDeleteSupabase";
import { checkRateLimit, getClientIp } from "@/lib/serverRateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const schema = z.object({ confirm: z.literal(true) }).strict();

function response(body: Record<string, unknown>, status: number) {
  return NextResponse.json(body, { status, headers: privateNoStoreHeaders });
}

export async function POST(request: NextRequest) {
  if (!isSameOriginMutation(request)) return response({ error: "Invalid request" }, 403);
  const csrfHeader = request.headers.get("x-csrf-token");
  const csrfCookie = request.cookies.get(DELETE_CSRF_COOKIE)?.value ?? null;
  if (!constantTimeTokenEqual(csrfHeader, csrfCookie)) {
    return response({ error: "Invalid request" }, 403);
  }
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return response({ error: "Explicit confirmation is required" }, 400);

  const routeResponse = response({ error: "Unable to process deletion request" }, 500);
  const client = createAccountDeleteRouteClient(request, routeResponse);
  const config = getAccountDeleteSupabaseConfig();
  if (!client || !config) return routeResponse;

  const userResult = await client.supabase.auth.getUser();
  if (userResult.error || !userResult.data.user) {
    return response({ error: "Secure session expired" }, 401);
  }
  const allowed = checkRateLimit({
    key: `account-delete:confirm:${userResult.data.user.id}:${getClientIp(request)}`,
    limit: 3,
    windowMs: 10 * 60 * 1000,
  });
  if (!allowed.allowed) return response({ error: "Request already in progress" }, 429);

  const sessionResult = await client.supabase.auth.getSession();
  const accessToken = sessionResult.data.session?.access_token;
  if (!accessToken) return response({ error: "Secure session expired" }, 401);

  let upstream: Response;
  try {
    upstream = await fetch(`${config.url}/functions/v1/handle-user-deletion`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        apikey: config.publishableKey,
        Authorization: `Bearer ${accessToken}`,
        "x-deletion-request-source": "external_web",
      },
      body: JSON.stringify({ confirmed: true }),
      cache: "no-store",
    });
  } catch {
    return response({ error: "Deletion service unavailable" }, 503);
  }

  const payload = await upstream.json().catch(() => ({}));
  if (!upstream.ok) {
    return response({ error: "Unable to process deletion request" }, upstream.status >= 500 ? 503 : upstream.status);
  }

  const safePayload = {
    status: payload.status,
    requestedAt: payload.requestedAt ?? null,
    gracePeriodEndsAt: payload.gracePeriodEndsAt ?? null,
    restorationEmailQueued: Boolean(payload.restorationEmailQueued),
    sessionRevocationOk: payload.sessionRevocationOk !== false,
    alreadyRequested: Boolean(payload.alreadyRequested),
  };
  if (safePayload.status !== "deactivated") {
    return response({ error: "Unexpected deletion service response" }, 502);
  }

  await client.supabase.auth.signOut({ scope: "local" }).catch(() => undefined);
  const success = response(safePayload, 200);
  routeResponse.cookies.getAll().forEach((cookie) => success.cookies.set(cookie));
  success.cookies.set(DELETE_CSRF_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });
  return success;
}
