import "server-only";

import { createClient } from "@supabase/supabase-js";
import { getSupabaseServerConfig } from "@/lib/serverSupabaseEnv";
import { getSupabaseAdminClient } from "@/lib/supabaseAdmin";

export type PublicRoomPreviewItem = {
  imageUrl: string | null;
  category: string | null;
  color: string | null;
  silhouette: string | null;
};

export type PublicRoomPreview = {
  shareToken: string;
  roomTitle: string | null;
  itemCount: number;
  coverImageUrl: string | null;
  sharedAt: string | null;
  items: PublicRoomPreviewItem[];
};

export type PublicRoomPreviewResult =
  | { status: "available"; preview: PublicRoomPreview }
  | { status: "unavailable" | "malformed" | "configuration_error" };

type RpcPreviewPayload = {
  status?: unknown;
  shareToken?: unknown;
  roomTitle?: unknown;
  itemCount?: unknown;
  coverImageUrl?: unknown;
  sharedAt?: unknown;
  items?: unknown;
};

type RawDressingRoomItem = {
  image_url: string | null;
  category: string | null;
  snapshot_payload: Record<string, unknown> | null;
  sort_order: number | null;
  created_at: string | null;
};

type EnrichedItemsResult =
  | { outcome: "unavailable" }
  | { outcome: "ok"; items: PublicRoomPreviewItem[]; coverImageUrl: string | null }
  | { outcome: "fallback"; items: PublicRoomPreviewItem[]; coverImageUrl: null };

function nullableString(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value : null;
}

function normalizeItem(value: unknown): PublicRoomPreviewItem {
  const item =
    value && typeof value === "object" ? (value as Record<string, unknown>) : {};
  return {
    imageUrl: nullableString(item.imageUrl),
    category: nullableString(item.category),
    color: nullableString(item.color),
    silhouette: nullableString(item.silhouette),
  };
}

function normalizePayload(payload: RpcPreviewPayload): PublicRoomPreviewResult {
  if (payload.status === "malformed") return { status: "malformed" };
  if (payload.status !== "available") return { status: "unavailable" };

  const shareToken = nullableString(payload.shareToken);
  if (!shareToken) return { status: "unavailable" };

  return {
    status: "available",
    preview: {
      shareToken,
      roomTitle: nullableString(payload.roomTitle),
      itemCount: typeof payload.itemCount === "number" ? payload.itemCount : 0,
      coverImageUrl: nullableString(payload.coverImageUrl),
      sharedAt: nullableString(payload.sharedAt),
      items: Array.isArray(payload.items) ? payload.items.map(normalizeItem) : [],
    },
  };
}

function snapshotStr(
  payload: Record<string, unknown> | null,
  ...keyPaths: string[][]
): string | null {
  if (!payload) return null;
  for (const path of keyPaths) {
    let node: unknown = payload;
    for (const key of path) {
      if (node !== null && typeof node === "object") {
        node = (node as Record<string, unknown>)[key];
      } else {
        node = undefined;
        break;
      }
    }
    if (typeof node === "string" && node.trim()) return node.trim();
  }
  return null;
}

function buildItemMetadata(
  item: RawDressingRoomItem
): Pick<PublicRoomPreviewItem, "category" | "color" | "silhouette"> {
  const sp = item.snapshot_payload;
  return {
    category:
      nullableString(item.category) ??
      snapshotStr(sp, ["metadata", "category"], ["category"]),
    color: snapshotStr(sp, ["metadata", "color"], ["color"], ["attributes", "color"]),
    silhouette: snapshotStr(
      sp,
      ["metadata", "silhouette"],
      ["silhouette"],
      ["metadata", "itemType"]
    ),
  };
}

type AdminClient = NonNullable<ReturnType<typeof getSupabaseAdminClient>>;

async function resolveItemImages(
  items: RawDressingRoomItem[],
  admin: AdminClient
): Promise<(string | null)[]> {
  type SignJob = { bucket: string; storagePath: string; cacheKey: string };
  const jobMap = new Map<string, SignJob>();

  for (const item of items) {
    if (item.image_url && /^https?:\/\//i.test(item.image_url)) continue;
    const bucket = snapshotStr(item.snapshot_payload, ["image", "storageBucket"]);
    const storagePath = snapshotStr(item.snapshot_payload, ["image", "storagePath"]);
    if (bucket === "style-library-images" && storagePath) {
      const cacheKey = `${bucket}::${storagePath}`;
      if (!jobMap.has(cacheKey)) {
        jobMap.set(cacheKey, { bucket, storagePath, cacheKey });
      }
    }
  }

  const signedUrlCache = new Map<string, string | null>();

  await Promise.all(
    Array.from(jobMap.values()).map(async ({ bucket, storagePath, cacheKey }) => {
      try {
        const { data, error } = await admin.storage
          .from(bucket)
          .createSignedUrl(storagePath, 86400);
        if (error || !data?.signedUrl) {
          console.error(
            "Failed to sign shared room image URL:",
            error?.message ?? "no signed URL returned"
          );
          signedUrlCache.set(cacheKey, null);
        } else {
          signedUrlCache.set(cacheKey, data.signedUrl);
        }
      } catch (err) {
        console.error("Failed to sign shared room image URL:", err);
        signedUrlCache.set(cacheKey, null);
      }
    })
  );

  return items.map((item) => {
    if (item.image_url && /^https?:\/\//i.test(item.image_url)) {
      return item.image_url;
    }
    const bucket = snapshotStr(item.snapshot_payload, ["image", "storageBucket"]);
    const storagePath = snapshotStr(item.snapshot_payload, ["image", "storagePath"]);
    if (bucket === "style-library-images" && storagePath) {
      return signedUrlCache.get(`${bucket}::${storagePath}`) ?? null;
    }
    return null;
  });
}

async function fetchAndEnrichItems(
  shareToken: string,
  fallbackItems: PublicRoomPreviewItem[]
): Promise<EnrichedItemsResult> {
  const admin = getSupabaseAdminClient();
  if (!admin) {
    console.error(
      "Supabase admin client unavailable — falling back to RPC item list. " +
        "Check SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY env vars."
    );
    return { outcome: "fallback", items: fallbackItems, coverImageUrl: null };
  }

  const now = new Date().toISOString();

  const { data: shareRows, error: shareError } = await admin
    .from("room_shares")
    .select("room_id")
    .eq("share_token", shareToken)
    .eq("access_level", "view")
    .eq("is_active", true)
    .is("revoked_at", null)
    .or(`expires_at.is.null,expires_at.gt.${now}`)
    .limit(1);

  if (shareError) {
    console.error("room_shares direct lookup failed:", shareError.message);
    return { outcome: "fallback", items: fallbackItems, coverImageUrl: null };
  }

  if (!shareRows || shareRows.length === 0) {
    return { outcome: "unavailable" };
  }

  const roomId = (shareRows[0] as { room_id: string }).room_id;

  const { data: rawItems, error: itemsError } = await admin
    .from("dressing_room_items")
    .select("image_url, category, snapshot_payload, sort_order, created_at")
    .eq("dressing_room_id", roomId)
    .order("sort_order", { ascending: true, nullsFirst: false })
    .order("created_at", { ascending: true });

  if (itemsError) {
    console.error("dressing_room_items direct query failed:", itemsError.message);
    return { outcome: "fallback", items: fallbackItems, coverImageUrl: null };
  }

  const typedItems = (rawItems ?? []) as RawDressingRoomItem[];
  const resolvedImageUrls = await resolveItemImages(typedItems, admin);

  const publicItems: PublicRoomPreviewItem[] = typedItems.map((item, i) => ({
    imageUrl: resolvedImageUrls[i] ?? null,
    ...buildItemMetadata(item),
  }));

  const firstImageUrl = resolvedImageUrls.find((u) => u != null) ?? null;

  return { outcome: "ok", items: publicItems, coverImageUrl: firstImageUrl };
}

export async function fetchPublicRoomPreview(
  shareToken: string
): Promise<PublicRoomPreviewResult> {
  const config = getSupabaseServerConfig();
  if (!config) return { status: "configuration_error" };

  const supabase = createClient(config.url, config.serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const { data, error } = await supabase.rpc("get_public_room_preview", {
    p_share_token: shareToken,
  });

  if (error) {
    console.error("Shared room preview RPC failed:", {
      code: error.code,
      message: error.message,
    });
    return { status: "unavailable" };
  }

  const rpcResult = normalizePayload((data ?? {}) as RpcPreviewPayload);

  if (rpcResult.status !== "available") {
    return rpcResult;
  }

  const enriched = await fetchAndEnrichItems(shareToken, rpcResult.preview.items);

  if (enriched.outcome === "unavailable") {
    return { status: "unavailable" };
  }

  const rpcCover = rpcResult.preview.coverImageUrl;
  const finalCoverImageUrl =
    (rpcCover && /^https?:\/\//i.test(rpcCover) ? rpcCover : null) ??
    enriched.coverImageUrl;

  const finalPreview: PublicRoomPreview = {
    shareToken: rpcResult.preview.shareToken,
    roomTitle: rpcResult.preview.roomTitle,
    itemCount: rpcResult.preview.itemCount,
    sharedAt: rpcResult.preview.sharedAt,
    coverImageUrl: finalCoverImageUrl,
    items: enriched.items,
  };

  return { status: "available", preview: finalPreview };
}
