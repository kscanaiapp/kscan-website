"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const DEMO_VIDEO_URL = "/demo/kscan%20demo%20v1.mp4";
const DEMO_POSTER_URL = "/demo/Gemini_Generated_Image_5bvaqm5bvaqm5bva.png";
const DEMO_LEAD_IMAGE_URL = "/demo/kscan%20demo%20image%201.jpeg";

export default function DemoPage() {
  const [copied, setCopied] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  async function handleCopyLink() {
    const url = typeof window !== "undefined" ? window.location.href : "";

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      const textarea = document.createElement("textarea");
      textarea.value = url;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
    }
  }

  useEffect(() => {
    if (!copied) return;

    const timeout = window.setTimeout(() => {
      setCopied(false);
    }, 1800);

    return () => window.clearTimeout(timeout);
  }, [copied]);

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#111111]">
      <header className="sticky top-0 z-50 border-b border-stone-100 bg-[#FAFAF8]/92 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
          <Link href="/" className="flex items-center gap-1.5">
            <span className="font-display text-lg font-medium text-stone-900">K Scan</span>
            <span className="text-[9px] uppercase tracking-widest text-stone-300">AI</span>
          </Link>
          <nav className="hidden items-center gap-8 text-[13px] text-stone-400 md:flex">
            <Link href="/demo" className="transition-colors hover:text-stone-900">
              Demo
            </Link>
            <Link href="/investors" className="transition-colors hover:text-stone-900">
              Investors
            </Link>
          </nav>
          <Link
            href="/#waitlist"
            className="rounded-full bg-violet-600 px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-violet-700"
          >
            Join Waitlist
          </Link>
        </div>
        <div className="border-t border-stone-100/80 md:hidden">
          <div className="mx-auto flex max-w-6xl items-center gap-6 overflow-x-auto px-6 text-[12px] uppercase tracking-[0.16em] text-stone-400 [&::-webkit-scrollbar]:hidden">
            <Link href="/" className="whitespace-nowrap py-4 transition-colors hover:text-stone-900">
              Home
            </Link>
            <Link href="/demo" className="whitespace-nowrap py-4 transition-colors hover:text-stone-900">
              Demo
            </Link>
            <Link href="/investors" className="whitespace-nowrap py-4 transition-colors hover:text-stone-900">
              Investors
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
        <div className="max-w-3xl">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-400">
            Private product view
          </p>
          <h1 className="font-display text-[42px] leading-[1.02] text-stone-900 md:text-[58px]">
            Sighting to checkout. Instantaneous.
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
            A direct look at how K Scan moves from visual inspiration to purchase-ready output across the fashion workflow.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10 md:px-10 md:pb-14">
        <div className="rounded-[34px] border border-stone-200/80 bg-white p-4 shadow-[0_24px_60px_rgba(35,28,22,0.07)] md:p-6">
          <div className="mb-5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-stone-400">Live Product Vision</p>
            <p className="mt-1 text-[14px] text-stone-500">A grounded view of how K Scan appears in the real world before the full demo begins.</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#F2EEE7] shadow-2xl">
            <div className="relative aspect-[16/10] w-full bg-[#F2EEE7] sm:aspect-[16/9]">
              <Image
                src={DEMO_LEAD_IMAGE_URL}
                alt="K Scan real-world product vision with AR-style fashion commerce overlays"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover object-[center_22%] sm:object-[center_20%] lg:object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10 md:px-10 md:pb-14">
        <div className="rounded-[34px] border border-stone-200/80 bg-white p-4 shadow-[0_24px_60px_rgba(35,28,22,0.07)] md:p-6">
          <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-[0.18em] text-stone-400">Demo Film</p>
              <p className="mt-1 text-[14px] text-stone-500">Private review copy for product, partner, and investor conversations.</p>
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-neutral-400">
                [ LIVE CAPTURE · RESOLVES IN ~5S ]
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleCopyLink}
                className="inline-flex min-w-[12.5rem] items-center justify-center gap-2 rounded-full border border-stone-200 bg-[#FAFAF8] px-4 py-2.5 text-[12px] font-medium uppercase tracking-[0.14em] text-stone-600 transition-colors hover:border-stone-300 hover:text-stone-900"
              >
                <span>Copy Link to Demo</span>
                <span className="relative h-3.5 w-3.5">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 14 14"
                    className={`absolute inset-0 h-3.5 w-3.5 transition-opacity duration-200 ${copied ? "opacity-0" : "opacity-70"}`}
                    fill="none"
                  >
                    <path
                      d="M5.1 4.1h5.1a1.8 1.8 0 0 1 1.8 1.8V11"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect x="2.1" y="2.1" width="6.8" height="6.8" rx="1.4" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 14 14"
                    className={`absolute inset-0 h-3.5 w-3.5 transition-opacity duration-200 ${copied ? "opacity-100" : "opacity-0"}`}
                    fill="none"
                  >
                    <path
                      d="M3 7.2 5.6 9.8 11 4.4"
                      stroke="currentColor"
                      strokeWidth="1.35"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#F2EEE7] shadow-2xl">
            <div className="border-b border-stone-200/80 px-5 py-4">
              <div className="flex items-center gap-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-stone-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-stone-300/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-stone-300/50" />
              </div>
            </div>

            <div className="relative aspect-[16/10] w-full bg-[#0E0E10]">
              {!videoReady && (
                <div className="pointer-events-none absolute inset-0 flex items-end bg-[linear-gradient(180deg,rgba(18,18,20,0.1),rgba(18,18,20,0.36))] p-6 text-white transition-opacity duration-300">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/55">Loading demo</p>
                    <p className="mt-2 max-w-sm font-display text-[24px] leading-[1.08] text-white/88">
                      Preparing the K Scan product walkthrough.
                    </p>
                  </div>
                </div>
              )}

              <video
                autoPlay
                muted
                loop
                controls
                playsInline
                preload="metadata"
                poster={DEMO_POSTER_URL}
                className="h-full w-full object-cover"
                onLoadedData={() => setVideoReady(true)}
              >
                <source src={DEMO_VIDEO_URL} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10 md:px-10 md:pb-16">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Instant product recognition",
              body: "The demo shows how K Scan identifies the fashion item and resolves the right purchase path quickly.",
            },
            {
              title: "Editorial to commerce",
              body: "The product translates inspiration into a buying action without forcing the user into manual search behavior.",
            },
            {
              title: "Mobile-ready interaction",
              body: "The experience is designed to feel immediate on-device, with a clean handoff from seeing to shopping.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[24px] border border-stone-200/80 bg-white px-5 py-6 shadow-[0_14px_30px_rgba(35,28,22,0.04)]">
              <p className="text-[15px] font-medium text-stone-900">{item.title}</p>
              <p className="mt-3 text-[14px] leading-[1.8] text-stone-500">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10 md:pb-28">
        <div className="rounded-[30px] border border-stone-200/80 bg-[#F5F3EF] px-6 py-8 md:px-8 md:py-10">
          <p className="text-[11px] uppercase tracking-[0.18em] text-stone-400">Next Step</p>
          <h2 className="mt-4 font-display text-[34px] leading-[1.06] text-stone-900 md:text-[42px]">
            Continue from the demo.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.85] text-stone-500">
            Join the waitlist for product access, or enter the investor portal for the protected materials and deck.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/#waitlist"
              className="rounded-full bg-violet-600 px-8 py-4 text-[14px] font-medium text-white transition-colors hover:bg-violet-700"
            >
              Join Waitlist
            </Link>
            <Link
              href="/investors"
              className="text-[13px] text-stone-500 underline decoration-stone-200 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-500"
            >
              Investor Access
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
