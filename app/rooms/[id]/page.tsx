import type { Metadata } from "next";
import type { ReactNode } from "react";
import { cache } from "react";
import Link from "next/link";
import { SiteNav } from "@/components/ui/SiteNav";
import { CoverImage } from "@/components/rooms/CoverImage";
import { SharedRoomCollaborationPanel } from "@/components/rooms/SharedRoomCollaborationPanel";
import {
  fetchPublicRoomPreview,
  fetchPublicItemReactionCounts,
  type PublicRoomPreview,
  type PublicRoomPreviewItem,
  type ReactionCounts,
} from "@/lib/publicRoomPreview";

const getCachedPreview = cache(fetchPublicRoomPreview);

export const dynamic = "force-dynamic";
export const revalidate = 0;

const SITE_URL = "https://kscan.app";
const PREVIEW_IMAGE_URL = `${SITE_URL}/group-street.jpeg`;
const SAFE_TOKEN_PATTERN = /^[A-Za-z0-9_-]+$/;

type RoomPageParams = {
  id: string;
};

type RoomPageProps = {
  params: Promise<RoomPageParams>;
};

function normalizeToken(value: string) {
  const decoded = value.trim();
  if (!decoded || !SAFE_TOKEN_PATTERN.test(decoded)) return null;
  return decoded;
}

function getTokenReference(token: string) {
  return `Room link ending in ${token.slice(-4).toUpperCase()}`;
}

function getDisplayTitle(preview: PublicRoomPreview | null) {
  return preview?.roomTitle?.trim() || "Shared Dressing Room";
}

function getDisplayNote(preview: PublicRoomPreview | null) {
  return preview?.note?.trim() || null;
}

function hasDisplayableItemFields(item: PublicRoomPreviewItem) {
  return Boolean(item.imageUrl || item.category || item.color || item.silhouette);
}

function getPreviewItems(preview: PublicRoomPreview): PublicRoomPreviewItem[] {
  if (preview.items.length > 0) return preview.items;

  if (preview.itemCount <= 0) return [];

  return Array.from({ length: preview.itemCount }, () => ({
    id: null,
    imageUrl: null,
    category: null,
    color: null,
    silhouette: null,
    title: null,
  }));
}

export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  const { id } = await params;
  const token = normalizeToken(id);
  const canonicalPath = token ? `/rooms/${encodeURIComponent(token)}` : "/rooms";
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  let roomTitle: string | null = null;
  if (token) {
    try {
      const result = await getCachedPreview(token);
      if (result.status === "available") {
        roomTitle = result.preview.roomTitle?.trim() || null;
      }
    } catch {
      // metadata failure must never break page render
    }
  }

  const displayTitle = roomTitle
    ? `${roomTitle} | K Scan AI`
    : "Shared Dressing Room | K Scan AI";

  return {
    title: {
      absolute: displayTitle,
    },
    description:
      "Open a shared K Scan AI dressing room and explore scan-to-closet beta access.",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: displayTitle,
      description:
        "Open a shared K Scan AI dressing room and explore scan-to-closet beta access.",
      url: canonicalUrl,
      siteName: "K Scan AI",
      locale: "en_US",
      images: [
        {
          url: PREVIEW_IMAGE_URL,
          width: 2048,
          height: 1365,
          alt: roomTitle
            ? `${roomTitle} | K Scan AI shared Dressing Room`
            : "K Scan AI shared Dressing Room preview",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: displayTitle,
      description:
        "Open a shared K Scan AI dressing room and explore scan-to-closet beta access.",
      images: [PREVIEW_IMAGE_URL],
    },
  };
}

function RoomItemCard({
  item,
  index,
}: {
  item: PublicRoomPreviewItem;
  index: number;
}) {
  const hasMetadata = item.category || item.color || item.silhouette;
  const isPlaceholder = !hasDisplayableItemFields(item);
  const label = `Shared item ${index + 1}`;

  return (
    <article className="overflow-hidden rounded-[24px] border border-stone-200/80 bg-white shadow-[0_18px_36px_rgba(35,28,22,0.08)]">
      <div className="relative aspect-[4/5] bg-[#F1EDE7]">
        {item.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.imageUrl}
            alt={label}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-full items-center justify-center px-6 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-stone-600"
          >
            Item preview unavailable
          </div>
        )}
      </div>
      <div className="space-y-3 p-5">
        <p className="text-[13px] font-semibold text-stone-950">
          {label}
        </p>
        {hasMetadata ? (
          <div className="flex flex-wrap gap-2">
            {[item.category, item.color, item.silhouette].filter(Boolean).map((label) => (
              <span
                key={label}
                className="rounded-full border border-stone-200 bg-[#FAF8F5] px-3 py-1 text-[11px] text-stone-600"
              >
                {label}
              </span>
            ))}
          </div>
        ) : isPlaceholder ? (
          <p className="text-[13px] leading-6 text-stone-500">
            Public-safe placeholder.
          </p>
        ) : (
          <p className="text-[13px] leading-6 text-stone-500">No public attributes available.</p>
        )}
      </div>
    </article>
  );
}

function AvailableRoom({
  preview,
  reactionCounts,
}: {
  preview: PublicRoomPreview;
  reactionCounts: Record<string, ReactionCounts>;
}) {
  const title = getDisplayTitle(preview);
  const note = getDisplayNote(preview);
  const previewItems = getPreviewItems(preview);

  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.74fr)]">
        <div className="max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#B6924E]">
            Room access link recognized
          </p>
          <h1 className="mt-5 font-display text-[44px] font-medium leading-[1.02] text-stone-950 sm:text-[58px] md:text-[72px]">
            {title}
          </h1>
          {note ? (
            <div className="mt-6 max-w-2xl rounded-[24px] border border-stone-200/80 bg-white px-6 py-5 shadow-[0_18px_36px_rgba(35,28,22,0.06)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-stone-500">
                Room Note
              </p>
              <p className="mt-3 text-[16px] leading-[1.9] text-stone-600 md:text-[18px]">
                {note}
              </p>
            </div>
          ) : null}
          <p className="mt-6 max-w-2xl text-[16px] leading-[1.9] text-stone-600 md:text-[18px]">
            Only shared room details selected for preview are shown. The room owner&apos;s private information remains hidden.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-500">
            <span className="rounded-full border border-stone-200 bg-white px-4 py-2">
              {preview.itemCount} {preview.itemCount === 1 ? "item" : "items"}
            </span>
            <span className="rounded-full border border-stone-200 bg-white px-4 py-2">
              {getTokenReference(preview.shareToken)}
            </span>
          </div>
          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/demo"
              className="fashion-cursor rounded-full bg-[#C7A86B] px-8 py-4 text-[14px] font-semibold uppercase tracking-[0.16em] text-stone-950 shadow-[0_18px_36px_rgba(64,48,24,0.16)] transition-colors hover:bg-[#B6924E]"
            >
              Preview K Scan AI
            </Link>
            <Link
              href="/beta"
              className="fashion-cursor rounded-full border border-stone-200 bg-white px-8 py-4 text-[13px] font-medium uppercase tracking-[0.16em] text-stone-600 shadow-[0_12px_26px_rgba(35,28,22,0.06)] transition-colors hover:text-stone-950"
            >
              Join the Beta
            </Link>
          </div>
        </div>

        <aside className="rounded-[28px] border border-stone-200/80 bg-white p-5 shadow-[0_22px_52px_rgba(35,28,22,0.08)]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] bg-[#F1EDE7]">
            <CoverImage
              primaryUrl={preview.coverImageUrl}
              fallbackUrls={preview.items
                .map((i) => i.imageUrl)
                .filter((u): u is string => u !== null && u !== preview.coverImageUrl)
                .slice(0, 2)}
              alt="Shared Dressing Room cover"
            />
          </div>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#B6924E]">
              Shared Items
            </p>
            <h2 className="mt-3 font-display text-[34px] leading-tight text-stone-950">
              Public-safe room contents
            </h2>
          </div>
        </div>

        {previewItems.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {previewItems.map((item, index) => (
              <RoomItemCard
                key={`${preview.shareToken}-${index}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-[28px] border border-stone-200/80 bg-white p-8 shadow-[0_18px_36px_rgba(35,28,22,0.06)]">
            <p className="text-[18px] font-medium text-stone-950">This shared room is currently empty.</p>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-stone-600">
              The link is active, but there are no public-safe items available to preview yet.
            </p>
          </div>
        )}
      </section>

      <SharedRoomCollaborationPanel
        token={preview.shareToken}
        preview={preview}
        initialReactionCounts={reactionCounts}
      />
    </>
  );
}

function FallbackState({
  eyebrow,
  title,
  body,
  primaryHref = "/demo",
  primaryLabel = "Preview K Scan AI",
}: {
  eyebrow: string;
  title: string;
  body: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-4xl flex-col justify-center px-6 py-16 md:px-10 md:py-24">
      <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#B6924E]">
        {eyebrow}
      </p>
      <h1 className="mt-5 break-words font-display text-[40px] font-medium leading-[1.03] text-stone-950 sm:text-[58px]">
        {title}
      </h1>
      <p className="mt-6 max-w-2xl text-[16px] leading-[1.9] text-stone-600 md:text-[18px]">
        {body}
      </p>
      <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Link
          href={primaryHref}
          className="w-full rounded-full bg-[#C7A86B] px-8 py-4 text-center text-[14px] font-semibold uppercase tracking-[0.16em] text-stone-950 shadow-[0_18px_36px_rgba(64,48,24,0.16)] transition-colors hover:bg-[#B6924E] sm:w-auto"
        >
          {primaryLabel}
        </Link>
        <Link
          href="/"
          className="w-full rounded-full border border-stone-200 bg-white px-8 py-4 text-center text-[13px] font-medium uppercase tracking-[0.16em] text-stone-600 shadow-[0_12px_26px_rgba(35,28,22,0.06)] transition-colors hover:text-stone-950 sm:w-auto"
        >
          Explore K Scan AI
        </Link>
      </div>
    </section>
  );
}

export default async function SharedRoomPage({ params }: RoomPageProps) {
  const { id } = await params;
  const token = normalizeToken(id);
  let content: ReactNode;

  if (!token) {
    content = (
      <FallbackState
        eyebrow="Shared Dressing Room"
        title="This room link looks incomplete."
        body="K Scan AI recognized the shared-room path, but this link is missing a valid room reference. Nothing private is exposed."
      />
    );
  } else {
    const result = await getCachedPreview(token);

    if (result.status === "available") {
      const itemIds = result.preview.items
        .map((i) => i.id)
        .filter((id): id is string => id !== null);
      const reactionCounts = await fetchPublicItemReactionCounts(itemIds);
      content = <AvailableRoom preview={result.preview} reactionCounts={reactionCounts} />;
    } else if (result.status === "malformed") {
      content = (
        <FallbackState
          eyebrow="Shared Dressing Room"
          title="This room link looks incomplete."
          body="K Scan AI recognized the shared-room path, but this link is missing a valid room reference. Nothing private is exposed."
        />
      );
    } else {
      content = (
        <FallbackState
          eyebrow="Shared Dressing Room"
          title="This shared room is no longer available."
          body="The link may have been disabled, expired, or entered incorrectly. No private room data is exposed."
        />
      );
    }
  }

  return (
    <main id="main-content" className="min-h-screen bg-[#F7F4EF] text-stone-950">
      <SiteNav />
      {content}
    </main>
  );
}
