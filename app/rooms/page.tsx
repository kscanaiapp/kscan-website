import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/ui/SiteNav";

export const metadata: Metadata = {
  title: {
    absolute: "Shared Dressing Room | K Scan AI",
  },
  description:
    "Open a shared K Scan AI dressing room and explore scan-to-closet beta access.",
  alternates: {
    canonical: "/rooms",
  },
};

export default function MissingRoomPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#F7F4EF] text-stone-950">
      <SiteNav />
      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-4xl flex-col justify-center px-6 py-16 md:px-10 md:py-24">
        <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-[#B6924E]">
          Shared Dressing Room
        </p>
        <h1 className="mt-5 font-display text-[44px] font-medium leading-[1.03] text-stone-950 sm:text-[58px]">
          This room link looks incomplete.
        </h1>
        <p className="mt-6 max-w-2xl text-[16px] leading-[1.9] text-stone-600 md:text-[18px]">
          K Scan recognized the shared-room path, but there is no room reference in this link. Nothing private is exposed.
        </p>
        <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link
            href="/demo"
            className="rounded-full bg-[#C7A86B] px-8 py-4 text-[14px] font-semibold uppercase tracking-[0.16em] text-stone-950 shadow-[0_18px_36px_rgba(64,48,24,0.16)] transition-colors hover:bg-[#B6924E]"
          >
            Preview K Scan
          </Link>
          <Link
            href="/"
            className="rounded-full border border-stone-200 bg-white px-8 py-4 text-[13px] font-medium uppercase tracking-[0.16em] text-stone-600 shadow-[0_12px_26px_rgba(35,28,22,0.06)] transition-colors hover:text-stone-950"
          >
            Explore K Scan
          </Link>
        </div>
      </section>
    </main>
  );
}
