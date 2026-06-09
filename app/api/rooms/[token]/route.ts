import "server-only";

import { NextResponse } from "next/server";
import { fetchPublicRoomPreview } from "@/lib/publicRoomPreview";
import { checkRateLimit, getClientIp } from "@/lib/serverRateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const MAX_ITEMS = 50;

const BASE_HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

type RouteContext = {
  params: Promise<{ token: string }>;
};

export async function GET(request: Request, context: RouteContext): Promise<NextResponse> {
  const urlPresent = Boolean(process.env.SUPABASE_URL?.trim()) ? "yes" : "no";

  const ip = getClientIp(request);
  const rl = checkRateLimit({ key: `rooms-preview:${ip}`, limit: 100, windowMs: 60_000 });

  function diagJson(
    body: unknown,
    status: number,
    resultStatus: string,
    tokenReceived: "yes" | "no" = "no",
  ): NextResponse {
    return NextResponse.json(body, {
      status,
      headers: {
        ...BASE_HEADERS,
        "Cache-Control": "no-store, no-cache, must-revalidate",
        "X-KScan-Rooms-Api-Diag": "rooms-api-diag-866a922",
        "X-KScan-Supabase-Url-Present": urlPresent,
        "X-KScan-Token-Received": tokenReceived,
        "X-KScan-Result-Status": resultStatus,
      },
    });
  }

  if (!rl.allowed) {
    return NextResponse.json(
      { status: "rate_limited" },
      {
        status: 429,
        headers: {
          ...BASE_HEADERS,
          "Cache-Control": "no-store, no-cache, must-revalidate",
          "X-KScan-Rooms-Api-Diag": "rooms-api-diag-866a922",
          "X-KScan-Supabase-Url-Present": urlPresent,
          "X-KScan-Token-Received": "no",
          "X-KScan-Result-Status": "rate_limited",
          "Retry-After": String(rl.retryAfterSeconds),
        },
      },
    );
  }

  const { token } = await context.params;
  const tokenReceived: "yes" | "no" = Boolean(token && token.length > 0) ? "yes" : "no";

  if (!token || !UUID_PATTERN.test(token)) {
    return diagJson({ status: "malformed" }, 400, "malformed", tokenReceived);
  }

  try {
    const result = await fetchPublicRoomPreview(token);

    if (result.status === "malformed") {
      return diagJson({ status: "malformed" }, 400, "malformed", tokenReceived);
    }

    if (result.status === "unavailable") {
      return diagJson({ status: "unavailable" }, 404, "unavailable", tokenReceived);
    }

    if (result.status !== "available") {
      console.error(`[rooms-preview] Internal error: ${result.status}`);
      return diagJson(
        { status: "error", message: "Internal server error" },
        500,
        result.status,
        tokenReceived,
      );
    }

    const { preview } = result;
    const visibleItems = preview.items.slice(0, MAX_ITEMS);
    const isCapped = preview.itemCount > MAX_ITEMS;

    return diagJson(
      {
        status: "available",
        preview: {
          token: preview.shareToken,
          title: preview.roomTitle,
          note: preview.note,
          itemCount: preview.itemCount,
          sharedAt: preview.sharedAt,
          coverImageUrl: preview.coverImageUrl,
          allowImport: false,
          maxItemsReturned: MAX_ITEMS,
          isCapped,
          nextCursor: null,
          items: visibleItems.map((item, index) => ({
            id: item.id ?? `item-${index}`,
            imageUrl: item.imageUrl,
            category: item.category,
            color: item.color,
            silhouette: item.silhouette,
            title: item.title,
          })),
        },
      },
      200,
      "available",
      tokenReceived,
    );
  } catch {
    console.error("[rooms-preview] Unexpected error handling shared room request");
    return diagJson(
      { status: "error", message: "Internal server error" },
      500,
      "internal_error",
      tokenReceived,
    );
  }
}
