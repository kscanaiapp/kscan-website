"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
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
      className="relative inline-flex h-10 w-[13.5rem] items-center justify-center gap-2 overflow-hidden rounded-full border border-white/10 bg-white/[0.03] px-4 text-[11px] font-medium uppercase tracking-[0.18em] text-zinc-200 transition-colors hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
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
        <svg aria-hidden="true" viewBox="0 0 14 14" className="h-3.5 w-3.5 text-zinc-300" fill="none">
          <path
            d="M3 7.2 5.6 9.8 11 4.4"
            stroke="currentColor"
            strokeWidth="1.35"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[10px] tracking-[0.16em] text-zinc-400">Link copied</span>
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
  // Chrome-glint inset is baked into every box-shadow state so it persists
  // through the cyan pulse and remains at rest.
  const glint = "inset 0 1px 0 rgba(255,255,255,0.09)";
  const baseShadow = `0 24px 60px rgba(0,0,0,0.45), ${glint}`;
  const pulseAnimate = isTargeted && !reducedMotion
    ? {
        borderColor: ["rgba(255,255,255,0.10)", "rgba(103,232,249,0.38)", "rgba(255,255,255,0.10)"],
        boxShadow: [
          baseShadow,
          `0 28px 72px rgba(6,182,212,0.12), 0 24px 60px rgba(0,0,0,0.45), ${glint}`,
          baseShadow,
        ],
      }
    : {
        borderColor: "rgba(255,255,255,0.10)",
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
      className="scroll-mt-28 rounded-[32px] border border-white/10 bg-[#0E0E10] p-5 sm:p-6 md:p-8 lg:p-10"
    >
      {/* Alternating 60/40 editorial grid — text/video or video/text on desktop */}
      <div
        className={`flex flex-col gap-8 lg:grid lg:items-start lg:gap-12 ${
          reversed ? "lg:grid-cols-[3fr_2fr]" : "lg:grid-cols-[2fr_3fr]"
        }`}
      >
        {/* ── Text column ───────────────────────────────────── */}
        <div className={`flex flex-col ${reversed ? "lg:order-2" : "lg:order-1"}`}>
          <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-500">{label}</p>
          <h2 className="mt-3 font-display text-[28px] leading-[1.05] text-white sm:text-[32px] lg:text-[34px]">
            {title}
          </h2>
          <p className="mt-5 text-[15px] font-medium leading-[1.5] text-zinc-100">
            {highlight}
          </p>
          <p className="mt-2.5 text-[14px] leading-[1.78] text-zinc-400">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-start gap-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">{signal}</p>
            <CopyButton copied={copied} onClick={onCopy} />
          </div>
        </div>

        {/* ── Video column ──────────────────────────────────── */}
        <div className={reversed ? "lg:order-1" : "lg:order-2"}>
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[#0C0C0F] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_24px_60px_rgba(0,0,0,0.45)]">
            <div className="border-b border-white/10 px-5 py-3.5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-zinc-600/45 ring-1 ring-white/[0.06]" />
                <span className="h-2 w-2 rounded-full bg-zinc-700/32 ring-1 ring-white/[0.04]" />
                <span className="h-2 w-2 rounded-full bg-zinc-800/28 ring-1 ring-white/[0.03]" />
              </div>
            </div>
            <div className="relative aspect-video w-full bg-zinc-950">
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
              {/* Cinematic lens vignette */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.45)_100%)]"
              />
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
      videoSrc: "/demo/KScan-demo-v16.mp4",
      signal: "[ MOBILE PRODUCT · PURCHASE PATHS LIVE ]",
    },
    {
      id: "smart-glasses-vision",
      label: "Next",
      title: "Demo 02 — Smart Glasses Vision",
      highlight: "Hands-Free Agentic Commerce.",
      description:
        "A near-instant wearable interface designed for the luxury retail environment.",
      videoSrc: "/demo/KScan-demo-smartglasses-groupstreet.mp4",
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
    <main
      className="relative min-h-screen overflow-x-hidden bg-[#0C0C0F] text-white"
      style={{
        // Single zinc-neutral hero glow — no blue channel bias, reads on mobile and desktop
        backgroundImage:
          "radial-gradient(ellipse 80% 45% at 50% -5%, rgba(113,113,122,0.10) 0%, transparent 62%)",
      }}
    >
      {/* ─── Nav ──────────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0C0C0F]/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10">
          <Link href="/" className="flex items-center gap-1.5">
            <span className="font-display text-lg font-medium text-white">K Scan</span>
            <span className="text-[9px] uppercase tracking-widest text-zinc-500">AI</span>
          </Link>
          <nav className="hidden items-center gap-8 text-[13px] text-zinc-400 md:flex">
            <Link href="/demo" className="transition-colors hover:text-white">Demo</Link>
            <Link href="/investors" className="transition-colors hover:text-white">Investors</Link>
          </nav>
          <Link
            href="/#waitlist"
            className="rounded-full border border-cyan-400/10 bg-[#1E293B] px-4 py-2 text-[13px] font-medium text-white shadow-[0_14px_32px_rgba(6,182,212,0.08)] transition-colors hover:bg-[#273449]"
          >
            Join Waitlist
          </Link>
        </div>
        <div className="border-t border-white/10 md:hidden">
          <div className="mx-auto flex max-w-6xl items-center gap-6 overflow-x-auto px-6 text-[12px] uppercase tracking-[0.16em] text-zinc-500 [&::-webkit-scrollbar]:hidden">
            <Link href="/" className="whitespace-nowrap py-4 transition-colors hover:text-white">Home</Link>
            <Link href="/demo" className="whitespace-nowrap py-4 transition-colors hover:text-white">Demo</Link>
            <Link href="/investors" className="whitespace-nowrap py-4 transition-colors hover:text-white">Investors</Link>
          </div>
        </div>
      </header>

      {/* ─── Hero + cards ─────────────────────────────────────────────────── */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={pageReveal}
        className="relative"
      >
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:px-10 md:pb-32 md:pt-24">
          <motion.div variants={sectionReveal} className="max-w-3xl">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">Demo</p>
            <h1 className="font-display text-[42px] leading-[1.02] text-white sm:text-[52px] md:text-[68px]">
              Mobile now. Wearables next.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.9] text-zinc-300 md:text-[17px]">
              Two views of the K Scan product roadmap: the current mobile experience built for fashion conversion,
              and the wearable interface shaping where hands-free commerce goes next.
            </p>
          </motion.div>

          {/* ─── Live Product Vision — editorial bridge ──────────────── */}
          <motion.section variants={sectionReveal} className="mt-0">
            {/* Chapter transition marker */}
            <div className="mb-8 flex items-center gap-5 md:mb-10">
              <div aria-hidden="true" className="h-px flex-1 bg-white/[0.08]" />
              <p className="shrink-0 text-[10px] font-medium uppercase tracking-[0.28em] text-zinc-600">
                Live Product Vision
              </p>
              <div aria-hidden="true" className="h-px flex-1 bg-white/[0.08]" />
            </div>

            {/* Full-column image — no card framing, image is the hero */}
            <div className="group relative overflow-hidden rounded-[24px] border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
              <Image
                src="/demo/kscan-demo-image-1.jpeg"
                alt="K Scan in the real world — visual inspiration to commerce-ready output"
                width={1600}
                height={1067}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="pointer-events-none absolute inset-0 bg-black/[0.06] transition-opacity duration-500 group-hover:opacity-0" />
            </div>

            {/* Editorial caption */}
            <p className="mt-5 text-[13px] leading-[1.8] text-zinc-500 md:mt-6 md:max-w-2xl">
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
          <div aria-hidden="true" className="my-10 h-px bg-white/[0.08] md:my-14" />

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
            className="mt-16 rounded-[30px] border border-white/10 bg-[#0E0E10] px-6 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_24px_60px_rgba(0,0,0,0.45)] md:mt-20 md:px-8 md:py-10"
          >
            <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">Next Step</p>
            <h2 className="mt-4 font-display text-[34px] leading-[1.06] text-white md:text-[42px]">
              Continue from the demo.
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-[1.85] text-zinc-300">
              Join the waitlist for early product access, or continue to the investor portal for protected materials.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="/#waitlist"
                className="rounded-full border border-cyan-400/10 bg-[#1E293B] px-8 py-4 text-[14px] font-medium text-white shadow-[0_18px_40px_rgba(6,182,212,0.08)] transition-colors hover:bg-[#273449]"
              >
                Join Waitlist
              </Link>
              <Link
                href="/investors"
                className="text-[13px] text-zinc-400 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-white hover:decoration-zinc-400"
              >
                Investor Access
              </Link>
            </div>
          </motion.section>
        </div>
      </motion.section>
    </main>
  );
}
