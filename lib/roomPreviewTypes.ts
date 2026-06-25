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
  note: string | null;
  itemCount: number;
  coverImageUrl: string | null;
  sharedAt: string | null;
  items: PublicRoomPreviewItem[];
};

export type PublicRoomPreviewResult =
  | { status: "available"; preview: PublicRoomPreview }
  | { status: "unavailable" | "malformed" | "configuration_error" | "unexpected_shape" };

export type ReactionCounts = {
  like: number;
  love: number;
  looking: number;
  thumbs_down: number;
};

export function emptyReactionCounts(): ReactionCounts {
  return { like: 0, love: 0, looking: 0, thumbs_down: 0 };
}
