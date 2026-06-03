import "server-only";

import { NextResponse } from "next/server";
import { fetchPublicRoomPreview } from "@/lib/publicRoomPreview";
import { checkRateLimit, getClientIp } from "@/lib/serverRateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const MAX_ITEMS = 50;

const SHARED_HEADERS = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Cache-Control": "public, max-age=60, stale-while-revalidate=300",
};

function json(body: unknown, status: number): NextResponse {
  return NextResponse.json(body, { status, headers: SHARED_HEADERS });
}

type RouteContext = {
  params: Promise<{ token: string }>;
};

export async function GET(request: Request, context: RouteContext): Promise<NextResponse> {
  const ip = getClientIp(request);
  const rl = checkRateLimit({ key: `rooms-preview:${ip}`, limit: 100, windowMs: 60_000 });
  if (!rl.allowed) {
    return NextResponse.json(
      { status: "rate_limited" },
      {
        status: 429,
        headers: {
          ...SHARED_HEADERS,
          "Retry-After": String(rl.retryAfterSeconds),
        },
      }
    );
  }

  const { token } = await context.params;

  if (!token || !UUID_PATTERN.test(token)) {
    return json({ status: "malformed" }, 400);
  }

  try {
    const result = await fetchPublicRoomPreview(token);

    if (result.status === "malformed") {
      return json({ status: "malformed" }, 400);
    }

    if (result.status === "unavailable") {
      return json({ status: "unavailable" }, 404);
    }

    if (result.status !== "available") {
      console.error(`[rooms-preview] Internal error: ${result.status}`);
      return json({ status: "error", message: "Internal server error" }, 500);
    }

    const { preview } = result;
    const visibleItems = preview.items.slice(0, MAX_ITEMS);
    const isCapped = preview.itemCount > MAX_ITEMS;

    return json(
      {
        status: "available",
        preview: {
          token: preview.shareToken,
          title: preview.roomTitle,
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
      200
    );
  } catch {
    console.error("[rooms-preview] Unexpected error handling shared room request");
    return json({ status: "error", message: "Internal server error" }, 500);
  }
}
