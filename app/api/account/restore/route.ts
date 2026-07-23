import { NextResponse } from "next/server";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const restoreSchema = z.object({
  token: z.string().trim().min(32).max(512),
});

const resendSchema = z.object({
  email: z.string().trim().email().max(320),
});

function appSupabaseConfig() {
  const url = process.env.ROOMS_SUPABASE_URL?.trim() || process.env.NEXT_PUBLIC_ROOMS_SUPABASE_URL?.trim();
  const anon =
    process.env.NEXT_PUBLIC_ROOMS_SUPABASE_ANON_KEY?.trim() ||
    process.env.ROOMS_SUPABASE_ANON_KEY?.trim();
  if (!url || !anon) {
    return null;
  }
  return { url: url.replace(/\/+$/, ""), anon };
}

async function invokeFunction(name: string, body: Record<string, unknown>) {
  const config = appSupabaseConfig();
  if (!config) {
    return NextResponse.json({ status: "error", code: "NOT_CONFIGURED" }, { status: 503 });
  }
  const response = await fetch(`${config.url}/functions/v1/${name}`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      apikey: config.anon,
      Authorization: `Bearer ${config.anon}`,
    },
    body: JSON.stringify(body),
  });
  const payload = await response.json().catch(() => ({}));
  return NextResponse.json(payload, { status: response.status });
}

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  if (!json || typeof json !== "object") {
    return NextResponse.json({ status: "error", code: "INVALID_BODY" }, { status: 400 });
  }

  if ("token" in json) {
    const parsed = restoreSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ status: "error", code: "INVALID_TOKEN" }, { status: 400 });
    }
    return invokeFunction("restore-account", { token: parsed.data.token });
  }

  if ("email" in json) {
    const parsed = resendSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ status: "error", code: "INVALID_EMAIL" }, { status: 400 });
    }
    return invokeFunction("resend-restoration-email", {
      email: parsed.data.email.toLowerCase(),
    });
  }

  return NextResponse.json({ status: "error", code: "UNSUPPORTED_FIELDS" }, { status: 400 });
}
