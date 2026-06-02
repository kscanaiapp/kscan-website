import "server-only";

import { getSupabaseAdminClient } from "@/lib/supabaseAdmin";

export type PublicRoomPreviewItem = {
  id: string | null;
  imageUrl: string | null;
  category: string | null;
  color: string | null;
  silhouette: string | null;
  title: string | null;
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

// Internal server-only type — storage fields must never be serialized to client
type RpcPreviewPayload = {
  status?: unknown;
  shareToken?: unknown;
  roomTitle?: unknown;
  itemCount?: unknown;
  coverImageUrl?: unknown;
  coverImageStorageBucket?: unknown;
  coverImageStoragePath?: unknown;
  sharedAt?: unknown;
  items?: unknown;
};

type AdminClient = NonNullable<ReturnType<typeof getSupabaseAdminClient>>;

function nullableString(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value : null;
}

async function signStorageUrl(
  admin: AdminClient,
  bucket: string,
  path: string
): Promise<string | null> {
  try {
    const { data, error } = await admin.storage.from(bucket).createSignedUrl(path, 86400);
    if (error || !data?.signedUrl) {
      console.error("Failed to sign storage URL:", error?.message ?? "no URL returned");
      return null;
    }
    return data.signedUrl;
  } catch (err) {
    console.error("Failed to sign storage URL:", err);
    return null;
  }
}

async function resolveImageUrl(
  admin: AdminClient,
  existingUrl: string | null,
  bucket: string | null,
  path: string | null
): Promise<string | null> {
  if (existingUrl && /^https?:\/\//i.test(existingUrl)) return existingUrl;
  if (bucket && path) return signStorageUrl(admin, bucket, path);
  return null;
}

async function resolveItems(
  admin: AdminClient,
  rawItems: unknown[]
): Promise<PublicRoomPreviewItem[]> {
  type SignJob = { bucket: string; path: string; cacheKey: string };
  const jobMap = new Map<string, SignJob>();

  const typedItems = rawItems.map((raw) => {
    const item = raw && typeof raw === "object" ? (raw as Record<string, unknown>) : {};
    return {
      id: nullableString(item.id),
      existingUrl: nullableString(item.imageUrl),
      bucket: nullableString(item.imageStorageBucket),
      path: nullableString(item.imageStoragePath),
      category: nullableString(item.category),
      color: nullableString(item.color),
      silhouette: nullableString(item.silhouette),
      title: nullableString(item.title),
    };
  });

  for (const { existingUrl, bucket, path } of typedItems) {
    if (existingUrl && /^https?:\/\//i.test(existingUrl)) continue;
    if (bucket && path) {
      const cacheKey = `${bucket}::${path}`;
      if (!jobMap.has(cacheKey)) jobMap.set(cacheKey, { bucket, path, cacheKey });
    }
  }

  const urlCache = new Map<string, string | null>();
  await Promise.all(
    Array.from(jobMap.values()).map(async ({ bucket, path, cacheKey }) => {
      urlCache.set(cacheKey, await signStorageUrl(admin, bucket, path));
    })
  );

  return typedItems.map(({ id, existingUrl, bucket, path, category, color, silhouette, title }) => {
    let imageUrl: string | null = null;
    if (existingUrl && /^https?:\/\//i.test(existingUrl)) {
      imageUrl = existingUrl;
    } else if (bucket && path) {
      imageUrl = urlCache.get(`${bucket}::${path}`) ?? null;
    }
    return { id, imageUrl, category, color, silhouette, title };
  });
}

export async function fetchPublicRoomPreview(
  shareToken: string
): Promise<PublicRoomPreviewResult> {
  const admin = getSupabaseAdminClient();
  if (!admin) {
    console.error(
      "Supabase admin client unavailable. Check SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY env vars."
    );
    return { status: "configuration_error" };
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { data, error } = await (admin as any).rpc("get_public_room_preview", {
    p_share_token: shareToken,
  });

  if (error) {
    console.error("Shared room preview RPC failed:", {
      code: error.code,
      message: error.message,
    });
    return { status: "unavailable" };
  }

  const raw = (data ?? {}) as RpcPreviewPayload;

  if (raw.status === "malformed") return { status: "malformed" };
  if (raw.status !== "available") return { status: "unavailable" };

  const resolvedShareToken = nullableString(raw.shareToken);
  if (!resolvedShareToken) return { status: "unavailable" };

  const [coverImageUrl, items] = await Promise.all([
    resolveImageUrl(
      admin,
      nullableString(raw.coverImageUrl),
      nullableString(raw.coverImageStorageBucket),
      nullableString(raw.coverImageStoragePath)
    ),
    resolveItems(admin, Array.isArray(raw.items) ? raw.items : []),
  ]);

  return {
    status: "available",
    preview: {
      shareToken: resolvedShareToken,
      roomTitle: nullableString(raw.roomTitle),
      itemCount: typeof raw.itemCount === "number" ? raw.itemCount : 0,
      sharedAt: nullableString(raw.sharedAt),
      coverImageUrl,
      items,
    },
  };
}
