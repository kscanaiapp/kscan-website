import "server-only";

import { createClient } from "@supabase/supabase-js";
import { getSupabaseServerConfig } from "@/lib/serverSupabaseEnv";

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

function nullableString(value: unknown) {
  return typeof value === "string" && value.trim() ? value : null;
}

function normalizeItem(value: unknown): PublicRoomPreviewItem {
  const item = value && typeof value === "object" ? value as Record<string, unknown> : {};
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

export async function fetchPublicRoomPreview(shareToken: string): Promise<PublicRoomPreviewResult> {
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

  return normalizePayload((data ?? {}) as RpcPreviewPayload);
}
