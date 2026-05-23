import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/ui/SiteNav";

export const dynamic = "force-dynamic";

const SITE_URL = "https://kscan.app";
const PREVIEW_IMAGE_URL = `${SITE_URL}/group-street.jpeg`;
const SAFE_ROOM_ID_PATTERN = /^[A-Za-z0-9_-]+$/;

type RoomPageParams = {
  id: string;
};

type RoomPageProps = {
  params: Promise<RoomPageParams>;
};

function normalizeRoomId(value: string) {
  const decoded = value.trim();
  if (!decoded || !SAFE_ROOM_ID_PATTERN.test(decoded)) return null;
  return decoded;
}

function getRoomReference(roomId: string) {
  const tail = roomId.slice(-4).toUpperCase();
  return `Room link ending in ${tail}`;
}

export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  const { id } = await params;
  const roomId = normalizeRoomId(id);
  const canonicalPath = roomId ? `/rooms/${encodeURIComponent(roomId)}` : "/rooms";
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;

  return {
    title: {
      absolute: "Shared Dressing Room | K Scan AI",
    },
    description:
      "Open a shared K Scan AI dressing room and explore scan-to-closet beta access.",
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: "Shared Dressing Room | K Scan AI",
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
          alt: "K Scan AI shared Dressing Room preview",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Shared Dressing Room | K Scan AI",
      description:
        "Open a shared K Scan AI dressing room and explore scan-to-closet beta access.",
      images: [PREVIEW_IMAGE_URL],
    },
  };
}

export default async function SharedRoomPage({ params }: RoomPageProps) {
  const { id } = await params;
  const roomId = normalizeRoomId(id);
  const appHref = roomId ? `kscan://rooms/${encodeURIComponent(roomId)}` : "/demo";

  return (
    <main className="min-h-screen bg-[#F7F4EF] text-stone-950">
      <SiteNav />

      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl flex-col justify-center px-6 py-16 md:px-10 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.72fr)]">
          <div className="max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#B6924E]">
              Room access link recognized
            </p>
            <h1 className="mt-5 font-display text-[44px] font-medium leading-[1.02] text-stone-950 sm:text-[58px] md:text-[72px]">
              Shared Dressing Room
            </h1>
            <p className="mt-6 max-w-2xl text-[16px] leading-[1.9] text-stone-600 md:text-[18px]">
              {roomId
                ? "This K Scan room is ready to open in the app. For privacy, this web preview does not expose room contents."
                : "This room link looks incomplete. Open K Scan or explore the beta to continue safely."}
            </p>

            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              {roomId ? (
                <a
                  href={appHref}
                  className="rounded-full bg-[#C7A86B] px-8 py-4 text-[14px] font-semibold uppercase tracking-[0.16em] text-stone-950 shadow-[0_18px_36px_rgba(64,48,24,0.16)] transition-colors hover:bg-[#B6924E]"
                >
                  Open in K Scan App
                </a>
              ) : (
                <Link
                  href="/demo"
                  className="rounded-full bg-[#C7A86B] px-8 py-4 text-[14px] font-semibold uppercase tracking-[0.16em] text-stone-950 shadow-[0_18px_36px_rgba(64,48,24,0.16)] transition-colors hover:bg-[#B6924E]"
                >
                  Preview K Scan
                </Link>
              )}
              <Link
                href={roomId ? "/demo" : "/"}
                className="rounded-full border border-stone-200 bg-white px-8 py-4 text-[13px] font-medium uppercase tracking-[0.16em] text-stone-600 shadow-[0_12px_26px_rgba(35,28,22,0.06)] transition-colors hover:text-stone-950"
              >
                Explore K Scan
              </Link>
            </div>
          </div>

          <aside className="rounded-[28px] border border-stone-200/80 bg-white p-6 shadow-[0_22px_52px_rgba(35,28,22,0.08)]">
            <div className="rounded-[22px] border border-stone-100 bg-[#FAF8F5] p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-400">
                K Scan AI
              </p>
              <h2 className="mt-5 font-display text-[30px] leading-tight text-stone-950">
                {roomId ? getRoomReference(roomId) : "Incomplete room link"}
              </h2>
              <div className="mt-6 space-y-3 text-[13px] leading-[1.8] text-stone-500">
                <p>No private room data is displayed on this public page.</p>
                <p>Use the K Scan app to access shared room workflows during beta.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
