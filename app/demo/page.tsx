"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteNav } from "@/components/ui/SiteNav";
import { useCallback, useEffect, useRef, useState } from "react";

const SITE_URL = "https://kscan.app";

// ─── Motion variants ─────────────────────────────────────────────────────────

const pageReveal: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
    },
  },
};

const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Types ────────────────────────────────────────────────────────────────────

type DemoCardData = {
  id: string;
  label: string;
  title: string;
  highlight: string;   // bold editorial statement line
  description: string; // supporting sentence
  videoSrc: string;
  signal: string;
};

type DemoCardProps = DemoCardData & {
  reversed?: boolean;  // flip to video-left / text-right on desktop
  copied: boolean;
  onCopy: () => void;
  isTargeted: boolean;
  reducedMotion: boolean;
  registerVideo: (id: string, node: HTMLVideoElement | null) => void;
  onVideoFocus: (id: string) => void;
};

// ─── CopyButton ───────────────────────────────────────────────────────────────
// Fixed-width button: "Link copied" overlays at absolute position so the button
// never resizes or reflows on state change.

function CopyButton({ copied, onClick }: { copied: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative inline-flex h-10 w-[13.5rem] items-center justify-center gap-2 overflow-hidden rounded-full border border-stone-300 bg-stone-50 px-4 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-600 transition-colors hover:border-stone-400 hover:bg-stone-100 hover:text-stone-900"
    >
      {/* Default state */}
      <span
        className={`absolute inset-0 flex items-center justify-center gap-2 transition-opacity duration-200 ${
          copied ? "opacity-0" : "opacity-100"
        }`}
        aria-hidden={copied}
      >
        <span>Copy Link to Demo</span>
        <svg aria-hidden="true" viewBox="0 0 14 14" className="h-3.5 w-3.5 opacity-75" fill="none">
          <path
            d="M5.1 4.1h5.1a1.8 1.8 0 0 1 1.8 1.8V11"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="2.1" y="2.1" width="6.8" height="6.8" rx="1.4" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      </span>

      {/* Success state — same width, absolutely overlaid */}
      <span
        className={`absolute inset-0 flex items-center justify-center gap-2 transition-opacity duration-200 ${
          copied ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={!copied}
        aria-live="polite"
      >
        <svg aria-hidden="true" viewBox="0 0 14 14" className="h-3.5 w-3.5 text-stone-500" fill="none">
          <path
            d="M3 7.2 5.6 9.8 11 4.4"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[10px] tracking-[0.16em] text-stone-400">Link copied</span>
      </span>
    </button>
  );
}

// ─── DemoCard ─────────────────────────────────────────────────────────────────

function DemoCard({
  id,
  label,
  title,
  highlight,
  description,
  videoSrc,
  signal,
  reversed = false,
  copied,
  onCopy,
  isTargeted,
  reducedMotion,
  registerVideo,
  onVideoFocus,
}: DemoCardProps) {
  // Pulse fires once when isTargeted becomes true, then stops.
  // Uses site violet accent to match the homepage CTA color.
  const baseShadow = "0 16px 36px rgba(35,28,22,0.06)";
  const pulseAnimate = isTargeted && !reducedMotion
    ? {
        borderColor: ["rgba(214,211,209,0.8)", "rgba(139,92,246,0.45)", "rgba(214,211,209,0.8)"],
        boxShadow: [
          baseShadow,
          `0 20px 48px rgba(124,58,237,0.08), ${baseShadow}`,
          baseShadow,
        ],
      }
    : {
        borderColor: "rgba(214,211,209,0.8)",
        boxShadow: baseShadow,
      };

  return (
    <motion.section
      id={id}
      variants={sectionReveal}
      animate={pulseAnimate}
      transition={{
        duration: isTargeted && !reducedMotion ? 1.6 : 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="scroll-mt-28 rounded-[32px] border border-stone-200/80 bg-white p-5 sm:p-6 md:p-8 lg:p-10"
    >
      {/* Alternating 60/40 editorial grid — text/video or video/text on desktop */}
      <div
        className={`flex flex-col gap-8 lg:grid lg:items-start lg:gap-12 ${
          reversed ? "lg:grid-cols-[3fr_2fr]" : "lg:grid-cols-[2fr_3fr]"
        }`}
      >
        {/* ── Text column ───────────────────────────────────── */}
        <div className={`flex flex-col ${reversed ? "lg:order-2" : "lg:order-1"}`}>
          <p className="text-[11px] uppercase tracking-[0.22em] text-stone-400">{label}</p>
          <h2 className="mt-3 font-display text-[28px] leading-[1.05] text-stone-900 sm:text-[32px] lg:text-[34px]">
            {title}
          </h2>
          <p className="mt-5 text-[15px] font-medium leading-[1.5] text-stone-800">
            {highlight}
          </p>
          <p className="mt-2.5 text-[14px] leading-[1.78] text-stone-500">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-start gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-stone-400">{signal}</p>
            <CopyButton copied={copied} onClick={onCopy} />
          </div>
        </div>

        {/* ── Video column ──────────────────────────────────── */}
        <div className={reversed ? "lg:order-1" : "lg:order-2"}>
          {/* Warm linen outer frame matches investors page image card pattern */}
          <div className="overflow-hidden rounded-[24px] border border-stone-200/80 bg-[#F4F0EA] p-3 shadow-[0_16px_36px_rgba(35,28,22,0.06)]">
            {/* Dark inner shell — video always reads better on a dark surround */}
            <div className="overflow-hidden rounded-[18px] bg-stone-900">
              <div className="border-b border-white/10 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-white/15 ring-1 ring-white/8" />
                  <span className="h-2 w-2 rounded-full bg-white/10 ring-1 ring-white/6" />
                  <span className="h-2 w-2 rounded-full bg-white/8 ring-1 ring-white/4" />
                </div>
              </div>
              <div className="relative aspect-video w-full">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  ref={(node) => registerVideo(id, node)}
                  onPlay={() => onVideoFocus(id)}
                  className="h-full w-full object-contain"
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DemoPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [targetedId, setTargetedId] = useState<string | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  // Track which videos the user has manually started — observer backs off until
  // the card drops below 10% visibility.
  const manuallyStarted = useRef<Set<string>>(new Set());

  const demoCards: DemoCardData[] = [
    {
      id: "mobile-experience",
      label: "Today",
      title: "Demo 01 — Mobile Experience",
      highlight: "Conversion-Focused Mobile Search.",
      description:
        "Bridging the gap between visual inspiration and immediate acquisition through our Style-Parse engine.",
      videoSrc: "/demo/kscan-demo-v16.mp4",
      signal: "[ MOBILE PRODUCT · PURCHASE PATHS LIVE ]",
    },
    {
      id: "smart-glasses-vision",
      label: "Next",
      title: "Demo 02 — Smart Glasses Vision",
      highlight: "Hands-Free Agentic Commerce.",
      description:
        "A near-instant wearable interface designed for the luxury retail environment.",
      videoSrc: "/demo/kscan-demo-smartglasses-groupstreet.mp4",
      signal: "[ WEARABLE VISION · HANDS-FREE DISCOVERY ]",
    },
  ];

  // ── Reduced-motion detection ────────────────────────────────────────────────
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // ── Hash tracking ───────────────────────────────────────────────────────────
  useEffect(() => {
    const syncHash = () => {
      const next = window.location.hash.replace("#", "");
      setTargetedId(next || null);
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  // Clear targeted state after pulse completes (1.6 s + small buffer).
  useEffect(() => {
    if (!targetedId) return;
    const t = window.setTimeout(() => setTargetedId(null), 2200);
    return () => window.clearTimeout(t);
  }, [targetedId]);

  // ── Copy link ───────────────────────────────────────────────────────────────
  async function handleCopyLink(id: string) {
    const origin = typeof window !== "undefined" ? window.location.origin : SITE_URL;
    const url = `${origin}/demo#${id}`;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = url;
      ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopiedId(id);
  }

  useEffect(() => {
    if (!copiedId) return;
    const t = window.setTimeout(() => setCopiedId(null), 1800);
    return () => window.clearTimeout(t);
  }, [copiedId]);

  // ── Video registration & manual-play tracking ───────────────────────────────
  function registerVideo(id: string, node: HTMLVideoElement | null) {
    videoRefs.current[id] = node;
  }

  function handleVideoFocus(id: string) {
    // Mark this video as manually started — observer backs off.
    manuallyStarted.current.add(id);
    // Pause other videos (do NOT reset position).
    Object.entries(videoRefs.current).forEach(([vid, node]) => {
      if (!node || vid === id) return;
      if (!node.paused) node.pause();
    });
  }

  // ── Scroll-driven active-video observer ────────────────────────────────────
  // Uses closest-to-viewport-center heuristic with a 10% floor.
  // Manually started videos are exempt until they drop below 10% visibility.
  const observerRef = useRef<IntersectionObserver | null>(null);

  // We need the latest reducedMotion inside the observer callback.
  const reducedMotionRef = useRef(reducedMotion);
  useEffect(() => { reducedMotionRef.current = reducedMotion; }, [reducedMotion]);

  const setupObserver = useCallback(() => {
    if (typeof IntersectionObserver === "undefined") return;

    observerRef.current?.disconnect();

    const entries = Object.entries(videoRefs.current).filter(([, n]) => Boolean(n)) as Array<
      [string, HTMLVideoElement]
    >;
    if (!entries.length) return;

    // Track latest ratio per video to pick the most-visible one.
    const ratioMap: Record<string, number> = {};

    observerRef.current = new IntersectionObserver(
      (observed) => {
        // Update the ratio map with latest readings.
        for (const entry of observed) {
          const id = (entry.target as HTMLVideoElement).dataset.demoId;
          if (!id) continue;
          ratioMap[id] = entry.intersectionRatio;

          // If a manually-started video drops below 10%, release observer control.
          if (entry.intersectionRatio < 0.1) {
            manuallyStarted.current.delete(id);
          }
        }

        if (reducedMotionRef.current) return;

        // Find the video nearest viewport center with >10% visibility.
        const viewportMid = window.innerHeight / 2;
        let bestId: string | null = null;
        let bestDist = Infinity;

        for (const [id, node] of Object.entries(videoRefs.current)) {
          if (!node) continue;
          if ((ratioMap[id] ?? 0) < 0.1) continue;
          if (manuallyStarted.current.has(id)) continue;

          const rect = node.getBoundingClientRect();
          const cardMid = (rect.top + rect.bottom) / 2;
          const dist = Math.abs(cardMid - viewportMid);
          if (dist < bestDist) {
            bestDist = dist;
            bestId = id;
          }
        }

        if (!bestId) return;

        // Pause others (no reset).
        Object.entries(videoRefs.current).forEach(([vid, node]) => {
          if (!node || vid === bestId) return;
          if (!node.paused) node.pause();
        });
      },
      {
        // Fine-grained thresholds for smooth distance tracking.
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      },
    );

    entries.forEach(([id, node]) => {
      node.dataset.demoId = id;
      observerRef.current!.observe(node);
    });
  }, []);

  useEffect(() => {
    setupObserver();
    return () => observerRef.current?.disconnect();
  }, [setupObserver]);

  return (
    <main className="min-h-screen">
      <SiteNav />

      {/* ─── Hero + cards ─────────────────────────────────────────────────── */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={pageReveal}
        className="relative"
      >
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:px-10 md:pb-32 md:pt-24">
          <motion.div variants={sectionReveal} className="max-w-3xl">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">Demo</p>
            <h1 className="font-display text-[42px] leading-[1.02] text-stone-900 sm:text-[52px] md:text-[68px]">
              Mobile now. Wearables next.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.9] text-stone-500 md:text-[17px]">
              Two views of the K Scan product roadmap: the current mobile experience built for fashion conversion,
              and the wearable interface shaping where hands-free commerce goes next.
            </p>
          </motion.div>

          {/* ─── Live Product Vision — editorial bridge ──────────────── */}
          <motion.section variants={sectionReveal} className="mt-0">
            {/* Chapter transition marker */}
            <div className="mb-8 flex items-center gap-5 md:mb-10">
              <div aria-hidden="true" className="h-px flex-1 bg-stone-200" />
              <p className="shrink-0 text-[10px] font-medium uppercase tracking-[0.28em] text-stone-400">
                Live Product Vision
              </p>
              <div aria-hidden="true" className="h-px flex-1 bg-stone-200" />
            </div>

            {/* Full-column image — warm linen frame matches investors page pattern */}
            <div className="group overflow-hidden rounded-[24px] border border-stone-200/80 bg-[#F4F0EA] p-3 shadow-[0_16px_36px_rgba(35,28,22,0.06)]">
              <div className="relative overflow-hidden rounded-[18px]">
                <Image
                  src="/demo/kscan-demo-image-1.jpeg"
                  alt="K Scan in the real world — visual inspiration to commerce-ready output"
                  width={1600}
                  height={1067}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                  priority
                />
              </div>
            </div>

            {/* Editorial caption */}
            <p className="mt-5 text-[13px] leading-[1.8] text-stone-400 md:mt-6 md:max-w-2xl">
              A grounded look at how K Scan appears in the real world — turning visual inspiration into
              commerce-ready output without breaking the flow of discovery.
            </p>
          </motion.section>

          {/* ─── Demo 01 ─────────────────────────────────────────────── */}
          <div className="mt-20 md:mt-24">
            <DemoCard
              {...demoCards[0]}
              copied={copiedId === demoCards[0].id}
              onCopy={() => void handleCopyLink(demoCards[0].id)}
              isTargeted={targetedId === demoCards[0].id}
              reducedMotion={reducedMotion}
              registerVideo={registerVideo}
              onVideoFocus={handleVideoFocus}
            />
          </div>

          {/* Narrative separator — creates chapter break between the two demos */}
          <div aria-hidden="true" className="my-10 h-px bg-stone-100 md:my-14" />

          {/* ─── Demo 02 ─────────────────────────────────────────────── */}
          <DemoCard
            {...demoCards[1]}
            reversed
            copied={copiedId === demoCards[1].id}
            onCopy={() => void handleCopyLink(demoCards[1].id)}
            isTargeted={targetedId === demoCards[1].id}
            reducedMotion={reducedMotion}
            registerVideo={registerVideo}
            onVideoFocus={handleVideoFocus}
          />

          {/* ─── Next step ────────────────────────────────────────────────── */}
          <motion.section
            variants={sectionReveal}
            className="mt-16 rounded-[30px] border border-stone-200/80 bg-[#F4F0EA] px-6 py-8 shadow-[0_16px_36px_rgba(35,28,22,0.06)] md:mt-20 md:px-8 md:py-10"
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-stone-400">Next Step</p>
            <h2 className="mt-4 font-display text-[34px] leading-[1.06] text-stone-900 md:text-[42px]">
              Continue from the demo.
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-[1.85] text-stone-500">
              Join the waitlist for early product access, or continue to the investor portal for protected materials.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="/#waitlist"
                className="rounded-full bg-violet-600 px-8 py-4 text-[14px] font-medium text-white shadow-[0_14px_30px_rgba(124,58,237,0.18)] transition-colors hover:bg-violet-700"
              >
                Join Waitlist
              </Link>
              <Link
                href="/investors"
                className="text-[13px] text-stone-400 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-700 hover:decoration-stone-400"
              >
                Investor Access
              </Link>
            </div>
          </motion.section>
        </div>
      </motion.section>

      <SiteFooter
        links={[
          { href: "/", label: "Home" },
          { href: "/demo", label: "Demo" },
          { href: "/investors", label: "Investors" },
          { href: "/#waitlist", label: "Waitlist" },
        ]}
      />
    </main>
  );
}
