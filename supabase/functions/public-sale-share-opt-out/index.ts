import { createClient } from "jsr:@supabase/supabase-js@2";

// ─── CORS ──────────────────────────────────────────────────────────────────
// Matches the existing privacy-controls function pattern.

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Content-Type": "application/json",
};

// ─── Helpers ───────────────────────────────────────────────────────────────

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: corsHeaders,
  });
}

function badRequest(message: string) {
  return jsonResponse({ error: message }, 400);
}

// RFC-4122 v4 UUID pattern
const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function isValidUUID(s: string): boolean {
  return UUID_RE.test(s);
}

type RequestSource = "website_toggle" | "gpc_client" | "gpc_header";
const ALLOWED_SOURCES: readonly RequestSource[] = [
  "website_toggle",
  "gpc_client",
  "gpc_header",
];

// ─── Handler ───────────────────────────────────────────────────────────────

Deno.serve(async (req) => {
  // Preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !serviceRoleKey) {
    return jsonResponse({ error: "Server configuration error." }, 500);
  }

  const adminClient = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });

  // ── GET: Fetch current opt-out state by preference_id ──────────────────
  if (req.method === "GET") {
    const url = new URL(req.url);
    const preferenceId = url.searchParams.get("preference_id");

    if (!preferenceId || !isValidUUID(preferenceId)) {
      return badRequest("Invalid or missing preference_id.");
    }

    const { data, error } = await adminClient
      .from("website_sale_share_opt_out_requests")
      .select("preference_id, opt_out_of_sale, gpc_signal, updated_at")
      .eq("preference_id", preferenceId)
      .maybeSingle();

    if (error) {
      console.error("GET error:", error);
      return jsonResponse({ error: "Unable to retrieve preference." }, 500);
    }

    if (!data) {
      return jsonResponse({ found: false });
    }

    return jsonResponse({
      found: true,
      preference_id: data.preference_id,
      opt_out_of_sale: data.opt_out_of_sale,
      gpc_signal: data.gpc_signal,
      updated_at: data.updated_at,
    });
  }

  // ── POST: Upsert opt-out record ─────────────────────────────────────────
  if (req.method === "POST") {
    // Reject oversized payloads before parsing (1 KB is generous for this body)
    const contentLength = Number(req.headers.get("content-length") ?? "0");
    if (contentLength > 1024) {
      return jsonResponse({ error: "Payload too large." }, 413);
    }

    let body: unknown;
    try {
      body = await req.json();
    } catch {
      return badRequest("Invalid JSON body.");
    }

    if (typeof body !== "object" || body === null || Array.isArray(body)) {
      return badRequest("Expected a JSON object.");
    }

    const b = body as Record<string, unknown>;

    // Validate preference_id
    if (typeof b.preference_id !== "string" || !isValidUUID(b.preference_id)) {
      return badRequest("preference_id must be a valid UUID.");
    }

    // Validate opt_out_of_sale
    if (typeof b.opt_out_of_sale !== "boolean") {
      return badRequest("opt_out_of_sale must be a boolean.");
    }

    // Validate gpc_signal
    if (typeof b.gpc_signal !== "boolean") {
      return badRequest("gpc_signal must be a boolean.");
    }

    // Validate request_source
    if (!ALLOWED_SOURCES.includes(b.request_source as RequestSource)) {
      return badRequest(
        "request_source must be website_toggle, gpc_client, or gpc_header.",
      );
    }

    const userAgent = req.headers.get("user-agent") ?? null;

    const { data, error } = await adminClient
      .from("website_sale_share_opt_out_requests")
      .upsert(
        {
          preference_id: b.preference_id as string,
          opt_out_of_sale: b.opt_out_of_sale as boolean,
          gpc_signal: b.gpc_signal as boolean,
          request_source: b.request_source as RequestSource,
          user_agent: userAgent,
        },
        { onConflict: "preference_id" },
      )
      .select("preference_id, opt_out_of_sale, gpc_signal, updated_at")
      .single();

    if (error) {
      console.error("POST upsert error:", error);
      return jsonResponse({ error: "Unable to save preference." }, 500);
    }

    return jsonResponse({
      success: true,
      preference_id: data.preference_id,
      opt_out_of_sale: data.opt_out_of_sale,
      gpc_signal: data.gpc_signal,
    });
  }

  return jsonResponse({ error: "Method not allowed." }, 405);
});
