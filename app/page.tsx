"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  type Variants,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";

const coreFlow = [
  {
    step: "01",
    title: "Point",
    description:
      "Point K Scan at any outfit on the street, in a photo, or inside a video. The product starts with whatever caught your eye.",
  },
  {
    step: "02",
    title: "Parse",
    description:
      "K Scan identifies the pieces, reads the styling, and separates the look into clear purchase paths. It understands fashion, not just objects.",
  },
  {
    step: "03",
    title: "Purchase",
    description:
      "Buy the exact piece when it is available, or move straight to the closest alternative. No screenshots, no manual search, no dead ends.",
  },
];

const featureList = [
  {
    title: "Live Parsing",
    body: "K Scan works on moving footage, paused video, and still images with the same speed and clarity.",
  },
  {
    title: "Outfit-Level Intelligence",
    body: "It reads the look as fashion: proportion, layering, silhouette, and intent resolved together.",
  },
  {
    title: "Cross-Retailer Coverage",
    body: "Exact matches and refined alternatives appear across retailers in one view, ready for purchase.",
  },
  {
    title: "Price Tier Awareness",
    body: "See the designer original or the closest lower-tier option without losing the look.",
  },
  {
    title: "Style Memory",
    body: "Saved scans and purchases build a sharper profile, so recommendations improve instead of repeating.",
  },
  {
    title: "Trend Signal Layer",
    body: "Stock movement and demand signals add context before you commit to the piece.",
  },
];

const trustMetrics = [
  { label: "Brands indexed", value: "40,000+" },
  { label: "Avg. parse time", value: "< 2s" },
  { label: "Retailer coverage", value: "200+ stores" },
  { label: "Beta cohort", value: "NYFW '26" },
];

const benchmarkStats = [
  { label: "Silhouette recognition", pct: 94 },
  { label: "Brand identification", pct: 89 },
  { label: "Fabric classification", pct: 81 },
  { label: "Styling context read", pct: 76 },
];

const parseTags = ["Monochromatic Leather", "Tailored Blazer", "Sheer Mesh"];

// ─── Motion primitives ────────────────────────────────────────────────────

/** Fade + slide-up on first viewport entry. Fires once. */
function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-6% 0px" });
  const reduced = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduced ? false : { opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/** Container that staggers its direct FadeUp children. */
const staggerContainer = {
  visible: { transition: { staggerChildren: 0.07 } },
};
const staggerChild: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

/** Button / link with spring scale on hover + tap. */
const btnMotion = {
  whileHover: { scale: 1.025 },
  whileTap: { scale: 0.97 },
  transition: { type: "spring", stiffness: 300, damping: 30 },
} as const;

// ──────────────────────────────────────────────────────────────────────────

function PhoneScreen({ size }: { size: "sm" | "lg" }) {
  const s = {
    statusPx: size === "lg" ? "px-5 pt-7 pb-2" : "px-4 pt-6 pb-1.5",
    statusText: size === "lg" ? "text-[9px]" : "text-[8px]",
    viewH: size === "lg" ? 220 : 184,
    cornerSize: size === "lg" ? "h-5 w-5" : "h-4 w-4",
    cornerBorder: size === "lg" ? "border-l border-t" : "border-l border-t",
    cornerBorderR: size === "lg" ? "border-r border-t" : "border-r border-t",
    cornerBorderBL: size === "lg" ? "border-b border-l" : "border-b border-l",
    cornerBorderBR: size === "lg" ? "border-b border-r" : "border-b border-r",
    logoText: size === "lg" ? "text-[9px]" : "text-[8px]",
    parseLabel: size === "lg" ? "text-[8px]" : "text-[7px]",
    box1: size === "lg" ? { top: 42, left: 24, w: 84, h: 100 } : { top: 32, left: 18, w: 62, h: 78 },
    box2: size === "lg" ? { top: 122, left: 48, w: 102, h: 48 } : { top: 98, left: 34, w: 78, h: 38 },
    dot: size === "lg" ? "h-1.5 w-1.5" : "h-1 w-1",
    labelPad: size === "lg" ? "px-2.5 py-1.5" : "px-2 py-1",
    tagText: size === "lg" ? "text-[8px]" : "text-[7px]",
    statusLabel: size === "lg" ? "text-[8px]" : "text-[7px]",
    resultPx: size === "lg" ? "px-3 pt-3" : "px-2 pt-2",
    resultItem: size === "lg" ? "gap-2.5 px-3 py-2.5" : "gap-2 px-2 py-2",
    resultThumb: size === "lg" ? "h-7 w-7 rounded-lg" : "h-6 w-6 rounded-md",
    resultName: size === "lg" ? "text-[10px]" : "text-[9px]",
    resultSub: size === "lg" ? "text-[9px]" : "text-[8px]",
    resultMore: size === "lg" ? "text-[9px]" : "text-[8px]",
  };

  return (
    <div className="absolute inset-0 flex flex-col bg-[#0C0C0F]">
      <div className={`flex items-center justify-between ${s.statusPx}`}>
        <span className={`${s.statusText} ${s.logoText} font-medium uppercase tracking-widest text-white/40`}>
          K Scan
        </span>
        <div className="flex items-center gap-1.5">
          <div className="h-1 w-1 rounded-full bg-white/30" />
          <span className="text-[7px] uppercase tracking-[0.22em] text-white/24">Live</span>
        </div>
      </div>

      <div
        className="relative mx-2 overflow-hidden rounded-xl"
        style={{
          height: s.viewH,
          background: "linear-gradient(155deg, #17171c 0%, #0c0c10 100%)",
        }}
      >
        <Image
          src="/katlike-texture.jpeg"
          alt="Leather look inside the K Scan parsing interface"
          fill
          sizes={size === "lg" ? "210px" : "160px"}
          className="object-cover object-[center_20%] opacity-68"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,11,14,0.1),rgba(11,11,14,0.46))]" />

        <div className={`absolute left-2.5 top-2.5 ${s.cornerSize} ${s.cornerBorder} border-white/32`} />
        <div className={`absolute right-2.5 top-2.5 ${s.cornerSize} ${s.cornerBorderR} border-white/32`} />
        <div className={`absolute bottom-2.5 left-2.5 ${s.cornerSize} ${s.cornerBorderBL} border-white/32`} />
        <div className={`absolute bottom-2.5 right-2.5 ${s.cornerSize} ${s.cornerBorderBR} border-white/32`} />

        <div className="absolute left-1/2 top-3 -translate-x-1/2">
          <span className={`${s.parseLabel} uppercase tracking-[0.18em] text-white/58`}>
            Style-Parse
          </span>
        </div>

        <div
          className="animate-scan absolute left-3 right-3 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.22), transparent)",
          }}
        />

        <div
          className="absolute"
          style={{
            top: s.box1.top,
            left: s.box1.left,
            width: s.box1.w,
            height: s.box1.h,
          }}
        >
          <div className="absolute left-0 top-0 h-4 w-4 border-l border-t border-white/38" />
          <div className="absolute right-0 top-0 h-4 w-4 border-r border-t border-white/38" />
          <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-white/38" />
          <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-white/38" />
          <div className={`absolute left-[22%] top-[18%] rounded-full bg-white/48 ${s.dot}`} />
          <div className={`absolute right-[18%] top-[24%] rounded-full bg-white/38 ${s.dot}`} />
          <div className={`absolute bottom-[24%] left-[28%] rounded-full bg-white/44 ${s.dot}`} />
          <div className="absolute inset-x-2 bottom-2 border-t border-white/14 pt-1.5">
            <span className={`${s.tagText} font-medium uppercase tracking-[0.16em] text-white/84`}>
              Tailored Blazer
            </span>
          </div>
        </div>

        <div
          className="absolute"
          style={{
            top: s.box2.top,
            left: s.box2.left,
            width: s.box2.w,
            height: s.box2.h,
          }}
        >
          <div className="absolute left-0 top-1/2 h-px w-full bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,0.14),rgba(255,255,255,0))]" />
          <div className={`absolute left-[8%] top-1/2 -translate-y-1/2 rounded-full bg-white/38 ${s.dot}`} />
          <div className={`absolute right-[14%] top-1/2 -translate-y-1/2 rounded-full bg-white/34 ${s.dot}`} />
          <div className="absolute left-0 top-0 -translate-y-[calc(100%+2px)]">
            <span className={`${s.tagText} font-medium uppercase tracking-[0.16em] text-white/76`}>
              Leather Skirt
            </span>
          </div>
          <div className="absolute bottom-0 right-0 translate-y-[calc(100%+4px)]">
            <span className={`${s.tagText} font-medium uppercase tracking-[0.16em] text-white/62`}>
              Monochromatic Leather
            </span>
          </div>
        </div>

        <div className="absolute bottom-3 left-0 right-0 text-center">
          <span className={`${s.statusLabel} uppercase tracking-[0.2em] text-white/16`}>
            Actively resolving material and silhouette
          </span>
        </div>
      </div>

      <div className={`flex-1 space-y-1.5 overflow-hidden ${s.resultPx}`}>
        {[
          { name: "Tailored Blazer", detail: "Structured leather - exact match" },
          { name: "Leather Skirt", detail: "Monochromatic finish - nearest retail" },
        ].map((item) => (
          <div key={item.name} className={`flex items-center rounded-lg bg-white/[0.055] ${s.resultItem}`}>
            <div className={`${s.resultThumb} bg-stone-800/90 ring-1 ring-white/8`} />
            <div className="min-w-0 flex-1">
              <div className={`${s.resultName} truncate font-medium text-white/96`}>{item.name}</div>
              <div className={`${s.resultSub} text-white/20`}>{item.detail}</div>
            </div>
            <div className={`${s.resultSub} text-white/10`} aria-hidden="true">
              -&gt;
            </div>
          </div>
        ))}
        <p className={`pt-0.5 text-center text-white/8 ${s.resultMore}`}>Parsing tonal match and silhouette</p>
      </div>
    </div>
  );
}

function LockIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <rect x="2" y="5.5" width="9" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M4.5 5.5V4a2 2 0 0 1 4 0v1.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function InvestorSheet({ onClose }: { onClose: () => void }) {
  const reduced = useReducedMotion();
  return (
    <>
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
      />

      {/* Sheet */}
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Investor portal access"
        className="fixed bottom-0 left-0 right-0 z-50 rounded-t-[28px] border-t border-white/10 bg-[#0E0E10] px-6 pb-10 pt-6 shadow-[0_-24px_64px_rgba(0,0,0,0.36)]"
        initial={reduced ? false : { y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 280, damping: 32 }}
      >
        {/* Drag handle */}
        <div className="mx-auto mb-6 h-1 w-10 rounded-full bg-white/15" />

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close investor panel"
          className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/8 text-white/50 transition-colors hover:bg-white/14 hover:text-white"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M1 1l10 10M11 1 1 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </button>

        {/* Content */}
        <div className="space-y-1 mb-7">
          <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-stone-500">
            Private access
          </p>
          <h2 className="font-display text-[26px] font-medium leading-snug text-white">
            Investor Portal
          </h2>
        </div>

        <p className="mb-7 text-[14px] leading-[1.78] text-stone-400">
          The K Scan deck and supporting materials are shared privately. Tap below to continue to the protected portal, or reach us directly if you haven&apos;t received access credentials.
        </p>

        <div className="space-y-3">
          <motion.a
            href="/investors"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-7 py-4 text-[14px] font-medium text-stone-900 transition-colors hover:bg-stone-100"
            {...btnMotion}
          >
            <LockIcon />
            Enter Investor Portal
          </motion.a>
          <motion.a
            href="mailto:invest@kscan.ai"
            className="block w-full rounded-full border border-white/12 px-7 py-4 text-center text-[13px] text-stone-400 transition-colors hover:border-white/24 hover:text-stone-200"
            {...btnMotion}
          >
            Request access by email
          </motion.a>
        </div>

        <p className="mt-6 text-center text-[11px] text-stone-600">
          Confidential. Not for public distribution.
        </p>
      </motion.div>
    </>
  );
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [submissionState, setSubmissionState] = useState<"idle" | "loading" | "success" | "duplicate" | "error">("idle");
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [investorOpen, setInvestorOpen] = useState(false);

  // Prevent background scroll while sheet is open
  useEffect(() => {
    if (investorOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [investorOpen]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setSubmissionState("loading");
    setSubmissionMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source: "homepage",
          page: window.location.pathname,
          referrer: window.location.href,
        }),
      });

      const result = (await response.json()) as { status?: string; message?: string };

      if (result.status === "success") {
        setSubmissionState("success");
        setSubmissionMessage("");
        return;
      }

      if (result.status === "duplicate") {
        setSubmissionState("duplicate");
        setSubmissionMessage("");
        return;
      }

      setSubmissionState("error");
      setSubmissionMessage(result.message ?? "Something went wrong. Please try again.");
    } catch {
      setSubmissionState("error");
      setSubmissionMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFAF8] font-sans text-[#111111]">
      <header className="sticky top-0 z-50 border-b border-stone-100 bg-[#FAFAF8]/92 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
          <div className="flex items-center gap-1.5">
            <span className="font-display text-lg font-medium text-stone-900">K Scan</span>
            <span className="text-[9px] uppercase tracking-widest text-stone-300">AI</span>
          </div>
          <nav className="hidden items-center gap-8 text-[13px] text-stone-400 md:flex">
            <a href="#how-it-works" className="transition-colors hover:text-stone-900">
              How It Works
            </a>
            <a href="#features" className="transition-colors hover:text-stone-900">
              Features
            </a>
            <Link href="/demo" className="transition-colors hover:text-stone-900">
              Demo
            </Link>
            <Link href="/investors" className="transition-colors hover:text-stone-900">
              Investors
            </Link>
            <a href="#waitlist" className="transition-colors hover:text-stone-900">
              Waitlist
            </a>
          </nav>
          <motion.a
            href="#waitlist"
            className="rounded-full bg-violet-600 px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-violet-700"
            {...btnMotion}
          >
            Join Waitlist
          </motion.a>
        </div>
        <div className="border-t border-stone-100/80 md:hidden">
          <div className="mx-auto flex max-w-7xl items-center gap-6 overflow-x-auto px-6 text-[12px] uppercase tracking-[0.16em] text-stone-400 [&::-webkit-scrollbar]:hidden">
            <Link href="/" className="whitespace-nowrap py-4 transition-colors hover:text-stone-900">
              Home
            </Link>
            <a href="#how-it-works" className="whitespace-nowrap py-4 transition-colors hover:text-stone-900">
              How It Works
            </a>
            <a href="#features" className="whitespace-nowrap py-4 transition-colors hover:text-stone-900">
              Features
            </a>
            <Link href="/demo" className="whitespace-nowrap py-4 transition-colors hover:text-stone-900">
              Demo
            </Link>
            <Link href="/investors" className="whitespace-nowrap py-4 transition-colors hover:text-stone-900">
              Investors
            </Link>
            <a href="#waitlist" className="whitespace-nowrap py-4 transition-colors hover:text-stone-900">
              Waitlist
            </a>
          </div>
        </div>
      </header>

      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 pb-16 pt-12 md:px-10 md:pb-40 md:pt-24 lg:flex-row lg:items-center lg:gap-16 lg:pt-28">
        <motion.div
          className="relative z-20 w-full max-w-[540px] flex-1"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p
            className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400 md:mb-8"
            variants={staggerChild}
          >
            Private beta - 2026
          </motion.p>
          <motion.h1
            className="mb-5 max-w-[10ch] font-display text-[46px] leading-[1.01] text-stone-900 sm:text-[52px] md:mb-6 md:text-[66px] lg:text-[78px]"
            variants={staggerChild}
          >
            See it. Scan it. Own it.
          </motion.h1>
          <motion.p
            className="mb-8 max-w-[90%] text-[15px] leading-[1.85] text-stone-500 sm:max-w-[27rem] md:mb-9 md:text-[16px]"
            variants={staggerChild}
          >
            K Scan turns real-world fashion into instant purchase in seconds.
          </motion.p>
          <motion.div
            className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5"
            variants={staggerChild}
          >
            <div className="flex flex-col items-start gap-2.5">
              <motion.a
                href="#waitlist"
                className="rounded-full bg-violet-600 px-8 py-4 text-[14px] font-medium text-white shadow-[0_14px_30px_rgba(124,58,237,0.18)] transition-colors hover:bg-violet-700"
                {...btnMotion}
              >
                Get Early Access
              </motion.a>
              <p className="text-[11px] tracking-[0.04em] text-stone-400">
                No search. No guesswork. Just results.
              </p>
            </div>
            <motion.a
              href="#how-it-works"
              className="text-[13px] text-stone-400 underline decoration-stone-200 underline-offset-4 transition-colors hover:text-stone-700 hover:decoration-stone-400"
              {...btnMotion}
            >
              See how it works
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="w-full flex-shrink-0 lg:w-[48%]">
          <div className="relative mx-auto max-w-[600px] md:mr-0">
            <div className="absolute inset-x-[10%] top-[12%] hidden h-[78%] rounded-[40px] bg-[radial-gradient(circle_at_top,rgba(167,139,250,0.09),transparent_58%)] blur-3xl md:block" />

            <div className="relative overflow-hidden rounded-[28px] bg-[#f3efe8] shadow-[0_30px_80px_rgba(28,22,16,0.12)] ring-1 ring-black/5">
              <div className="relative aspect-[5/6] md:aspect-[11/10]">
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                <Image
                  src="/kathleen-hero.jpeg"
                  alt="Kathleen in the red dress anchoring the K Scan hero composition"
                  fill
                  priority
                  sizes="(max-width: 768px) 92vw, 46vw"
                  className="object-cover object-[center_12%] md:object-[center_16%]"
                />
                </motion.div>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,248,244,0.06),rgba(29,20,16,0.16))]" />

                <div className="absolute inset-x-4 bottom-4 h-20 rounded-[22px] bg-[linear-gradient(180deg,rgba(250,248,244,0),rgba(250,248,244,0.95))] md:hidden" />

                <div className="absolute -bottom-1 left-0 right-0 hidden h-32 bg-[linear-gradient(180deg,rgba(244,240,233,0),rgba(244,240,233,0.98))] md:block" />


                <div className="absolute right-3 bottom-5 z-20 md:right-6 md:bottom-7 lg:right-7">
                  <div className="animate-float relative h-[278px] w-[134px] overflow-hidden rounded-[28px] border-[3px] border-stone-700 bg-stone-900 shadow-[0_20px_50px_rgba(0,0,0,0.24)] md:h-[344px] md:w-[166px]">
                    <div className="absolute left-1/2 top-0 z-20 h-[18px] w-16 -translate-x-1/2 rounded-b-xl bg-stone-900 md:h-[20px] md:w-[74px]" />
                    <PhoneScreen size="sm" />
                  </div>
                </div>

                <motion.div
                  className="absolute bottom-4 left-3 max-w-[160px] p-3 sm:bottom-auto sm:top-[30%] sm:max-w-[180px] sm:p-3.5 md:top-4 md:left-3 md:max-w-[210px] md:px-5 md:py-4 lg:left-4 lg:top-5 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl z-20"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="mb-1 text-[9px] font-medium uppercase tracking-[0.2em] text-stone-400 md:text-[10px]">
                    Editorial signal
                  </p>
                  <p className="text-[14px] leading-[1.15] sm:text-[16px] md:text-[22px] font-serif text-stone-900">
                    One image, one parse, one immediate path to purchase.
                  </p>
                </motion.div>
              </div>
            </div>

            <div className="pointer-events-none absolute -left-1 bottom-10 hidden w-[142px] overflow-hidden rounded-[24px] border border-white/40 bg-[rgba(239,232,223,0.72)] shadow-[0_16px_36px_rgba(36,29,21,0.06)] backdrop-blur-[6px] md:block lg:-left-6">
              <div className="relative aspect-[4/5]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover object-center opacity-68 saturate-[0.9]"
                >
                  <source src="/kathleen-founder.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,248,244,0.14),rgba(23,20,18,0.1))]" />
              </div>
              <div className="px-4 py-3">
                <p className="font-display text-[11px] italic text-stone-500">Founder, K Scan AI</p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-stone-400">Editorial layer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-[#FAFAF8]">
        <div className="mx-auto max-w-7xl px-6 py-4 md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600 md:text-xs">
            <span>AVG SCAN TIME: 1.4S</span>
            <span className="hidden h-3 w-px bg-neutral-200 md:inline-block" aria-hidden="true" />
            <span>NEURAL MATCH ACCURACY</span>
            <span className="hidden h-3 w-px bg-neutral-200 md:inline-block" aria-hidden="true" />
            <span>10+ INTEGRATED RETAILERS</span>
          </div>
        </div>
      </section>

      <section className="border-y border-stone-100 bg-white py-8 md:py-12">
        <FadeUp>
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid grid-cols-2 gap-x-4 gap-y-5 md:flex md:items-center md:justify-between md:gap-0">
              {trustMetrics.map(({ label, value }, i) => (
                <div key={label} className="flex items-center gap-8 md:gap-12">
                  <div className="text-left">
                    <div className="font-display text-2xl font-semibold text-stone-900 md:text-xl md:font-medium">{value}</div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-wider text-stone-400">{label}</div>
                  </div>
                  {i < trustMetrics.length - 1 && <div className="hidden h-8 w-px flex-shrink-0 bg-stone-100 md:block" />}
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-44">
        <FadeUp className="mb-12 md:mb-28">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400 md:mb-5">
            The Core Flow
          </p>
          <h2 className="font-display text-4xl font-medium text-stone-900 md:text-[52px]">
            See it.
            <br />
            Buy it.
          </h2>
        </FadeUp>

        <FadeUp className="mb-8 md:mb-14">
          <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr] md:items-end md:gap-8">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#F2EEE7] shadow-[0_18px_46px_rgba(35,28,22,0.08)]">
              <div className="relative aspect-[16/10] w-full bg-[#F2EEE7]">
                <Image
                  src="/demo/How%20It%20Works%201.png"
                  alt="K Scan real-world capture to conversion flow"
                  fill
                  sizes="(max-width: 768px) 100vw, 46vw"
                  className="object-cover object-[center_18%] md:object-center"
                />
              </div>
            </div>
            <div className="max-w-md">
              <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-400">
                Live Product Flow
              </p>
              <p className="text-[14px] leading-[1.78] text-stone-500">
                From live capture to purchase-ready output.
              </p>
            </div>
          </div>
        </FadeUp>

        <div className="grid divide-y divide-stone-100 md:grid-cols-3 md:divide-x md:divide-y-0">
          {coreFlow.map(({ step, title, description }, idx) => (
            <FadeUp
              key={step}
              delay={idx * 0.08}
              className={`pb-10 md:px-12 md:pb-0 first:md:pl-0 last:md:pr-0 ${idx === 0 ? "pt-0" : "pt-10 md:pt-0"}`}
            >
              <span className="mb-4 block select-none font-display text-[64px] leading-none text-stone-100 md:mb-6 md:text-[72px]">
                {step}
              </span>
              <h3 className="mb-4 font-display text-[28px] font-medium text-stone-900 md:mb-5 md:text-[30px]">{title}</h3>
              <p className="text-[15px] leading-[1.82] text-stone-500">{description}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      <section id="features" className="bg-white py-20 md:py-44">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <FadeUp className="mb-12 max-w-lg md:mb-28">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400 md:mb-5">
              What Sets It Apart
            </p>
            <h2 className="font-display text-4xl font-medium text-stone-900 md:text-[52px]">
              Built for fashion.
              <br />
              Built to convert.
            </h2>
          </FadeUp>

          <FadeUp className="mb-10 grid gap-8 md:mb-16 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-10">
            <div className="relative overflow-hidden rounded-[30px] bg-[#F5F1EB] shadow-[0_18px_50px_rgba(28,22,16,0.07)] ring-1 ring-black/5">
              <div className="relative aspect-[5/4]">
                <Image
                  src="/group-street.jpeg"
                  alt="Kathleen in a white leisure set illustrating K Scan's fashion-first feature system"
                  fill
                  sizes="(max-width: 768px) 92vw, 48vw"
                  className="object-cover object-[center_25%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,240,233,0.02),rgba(34,28,24,0.12))]" />
              </div>
            </div>
            <div className="max-w-md">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-400">
                Fashion-first signal
              </p>
              <p className="font-display text-[30px] leading-[1.15] text-stone-900 md:text-[36px]">
                A commerce layer for fashion, not another browse-and-search workflow.
              </p>
            </div>
          </FadeUp>

          <div className="grid gap-x-12 md:grid-cols-2 md:gap-x-16 lg:grid-cols-3">
            {featureList.map(({ title, body }, idx) => (
              <FadeUp key={title} delay={idx * 0.05} className="border-t border-stone-100 py-9 md:py-10">
                <h3 className="mb-3 text-[15px] font-medium text-stone-900">{title}</h3>
                <p className="text-[14px] leading-[1.82] text-stone-400">{body}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-44">
        <FadeUp>
        <div className="flex flex-col gap-10 rounded-3xl bg-[#F5F3EF] px-6 py-10 md:rounded-[44px] md:px-16 md:py-24 md:gap-14 lg:flex-row lg:items-start lg:gap-20">
          <div className="max-w-lg flex-1">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400 md:mb-6">
              Under the Hood
            </p>
            <h2 className="mb-5 font-display text-3xl font-medium leading-[1.1] text-stone-900 md:mb-7 md:text-[42px]">
              Fashion intelligence built for purchase, not lookup.
            </h2>
            <p className="mb-4 text-[15px] leading-[1.88] text-stone-500 md:mb-5">
              Most visual search stops at rough similarity. K Scan reads construction, silhouette, material, and styling intent to surface better buying matches.
            </p>
            <p className="text-[15px] leading-[1.88] text-stone-500">
              The result feels direct: see the look, understand the pieces, and move to purchase.
            </p>
          </div>

          <div className="w-full flex-shrink-0 lg:w-[31rem]">
            <div className="overflow-hidden rounded-[28px] border border-white/60 bg-white/55 p-4 shadow-[0_16px_36px_rgba(34,28,24,0.06)] backdrop-blur-sm md:p-5">
              <div className="relative aspect-[5/6] overflow-hidden rounded-[22px]">
                <Image
                  src="/katlike-texture.jpeg"
                  alt="Kathleen in a leather-forward look used for the technical Style-Parse section"
                  fill
                  sizes="(max-width: 768px) 92vw, 31rem"
                  className="object-cover object-[center_22%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,16,18,0.1),rgba(16,16,18,0.24))]" />

                <div className="absolute left-4 right-4 top-4 flex items-center justify-between rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-sm">
                  <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/68">
                    Style-Parse
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.18em] text-white/48">Context engine</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 space-y-3">
                  <div className="flex flex-wrap gap-2.5">
                    {parseTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/18 bg-black/28 px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-white/82 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="rounded-[20px] border border-white/16 bg-black/28 p-4 backdrop-blur-sm">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white/52">Technical readout</p>
                    <p className="mt-2 font-display text-[24px] leading-none text-white">Material, silhouette, and layering resolved together.</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 space-y-0">
                {benchmarkStats.map(({ label, pct }) => (
                  <div key={label} className="flex items-baseline gap-4 border-t border-stone-200 py-5">
                    <span className="w-[4.5rem] flex-shrink-0 font-display text-[40px] leading-none tabular-nums text-stone-900">
                      {pct}%
                    </span>
                    <span className="text-[13px] leading-snug text-stone-500">{label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[11px] leading-relaxed text-stone-400">
                Internal benchmark across 50,000 test outfit images. Independent audit pending.
              </p>
            </div>
          </div>
        </div>
        </FadeUp>
      </section>

      <section className="border-y border-stone-100 bg-[#F5F3EF] py-10 md:py-20">
        <FadeUp>
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:flex-row md:items-end md:justify-between md:gap-7 md:px-10">
            <div className="space-y-3">
              <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400">
                K Scan AI
              </p>
              <h3 className="max-w-xl font-display text-[26px] font-medium leading-snug text-stone-900 md:text-[32px]">
                Private materials for
                <br className="hidden md:block" /> qualified investors.
              </h3>
              <p className="max-w-sm text-[13px] leading-[1.72] text-stone-500 md:hidden">
                The deck and supporting materials are available to qualified investors under private access.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              {/* Mobile: opens bottom sheet */}
              <motion.button
                onClick={() => setInvestorOpen(true)}
                className="flex w-full items-center justify-center gap-2.5 rounded-full bg-stone-900 px-7 py-4 text-[14px] font-medium text-white transition-colors hover:bg-stone-800 md:hidden"
                {...btnMotion}
              >
                <LockIcon />
                Access Investor Materials
              </motion.button>

              {/* Desktop: direct link */}
              <motion.a
                href="/investors"
                className="hidden items-center gap-2 rounded-full bg-stone-900 px-7 py-3.5 text-center text-[14px] font-medium text-white transition-colors hover:bg-stone-800 md:flex"
                {...btnMotion}
              >
                <LockIcon />
                Enter Secure Portal
              </motion.a>

              <a
                href="mailto:invest@kscan.ai"
                className="text-center text-[12px] text-stone-400 underline decoration-stone-200 underline-offset-4 transition-colors hover:text-stone-700 hover:decoration-stone-400 md:text-right"
              >
                or request credentials
              </a>
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Investor bottom sheet — AnimatePresence for smooth exit */}
      <AnimatePresence>
        {investorOpen && <InvestorSheet onClose={() => setInvestorOpen(false)} />}
      </AnimatePresence>

      <section id="waitlist" className="bg-white py-14 md:py-40">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 md:px-10 md:gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="order-2 mx-auto hidden w-full max-w-sm lg:order-1 lg:block lg:max-w-none">
            <div className="relative overflow-hidden rounded-[28px] bg-[#f6f2ec] shadow-[0_16px_38px_rgba(34,28,24,0.06)] ring-1 ring-black/5">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/kathleen-glam.jpg"
                  alt="Kathleen in a pink gown beside the K Scan waitlist call to action"
                  fill
                  sizes="(max-width: 1024px) 80vw, 32vw"
                  className="object-cover object-[center_20%] opacity-88"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,241,236,0.18),rgba(31,23,23,0.08))]" />
              </div>
            </div>
          </div>

          <FadeUp className="order-1 text-center lg:order-2 lg:max-w-[34rem] lg:text-left">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400 md:mb-6">
              Priority Beta Access
            </p>
            <h2 className="mb-5 font-display text-[40px] font-medium leading-[1.02] text-stone-900 sm:text-[44px] md:mb-6 md:text-[58px]">
              Request access.
            </h2>
            <p className="mx-auto mb-8 max-w-xs text-[15px] leading-[1.82] text-stone-400 md:mb-10 lg:mx-0">
              Apply for early access to the private beta. Invitations are released in limited waves.
            </p>

            {submissionState === "success" ? (
              <motion.p
                className="font-display text-[22px] italic text-stone-600"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                Your access request is in.
              </motion.p>
            ) : submissionState === "duplicate" ? (
              <motion.p
                className="font-display text-[22px] italic text-stone-600"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                You&apos;ve already requested access.
              </motion.p>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto flex max-w-sm flex-col gap-3 sm:flex-row sm:gap-2.5 lg:mx-0">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full flex-1 rounded-full border border-stone-200 bg-white px-6 py-4 text-[14px] text-stone-900 placeholder:text-stone-400 focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-100 sm:w-auto"
                />
                <motion.button
                  type="submit"
                  disabled={submissionState === "loading"}
                  className="w-full rounded-full bg-violet-600 px-8 py-4 text-[14px] font-medium text-white shadow-[0_14px_30px_rgba(124,58,237,0.16)] transition-colors hover:bg-violet-700 disabled:opacity-60 sm:w-auto"
                  {...btnMotion}
                >
                  {submissionState === "loading" ? "Requesting..." : "Request Access"}
                </motion.button>
              </form>
            )}

            <p className={`mt-6 text-[11px] tracking-wide ${submissionState === "error" ? "text-stone-400" : "text-stone-300"}`}>
              {submissionState === "error" ? submissionMessage : "No credit card. No commitment."}
            </p>
          </FadeUp>
        </div>
      </section>

      <footer className="border-t border-stone-100 bg-[#FAFAF8] py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          {/* Top row: wordmark + nav */}
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between md:gap-0">
            <div className="text-center md:text-left">
              <div className="mb-1 flex items-center justify-center gap-1.5 md:justify-start">
                <span className="font-display text-base font-medium text-stone-900">K Scan</span>
                <span className="text-[9px] uppercase tracking-widest text-stone-300">AI</span>
              </div>
              <p className="text-[11px] text-stone-400">Fashion, made shoppable.</p>
            </div>

            <nav className="grid grid-cols-2 gap-x-8 gap-y-1 md:flex md:gap-7">
              {[
                { href: "#how-it-works", label: "How It Works" },
                { href: "#features", label: "Features" },
                { href: "#waitlist", label: "Waitlist" },
                { href: "mailto:hello@kscan.ai", label: "Contact" },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center justify-center py-3 text-[13px] text-stone-400 transition-colors hover:text-stone-800 md:py-0 md:justify-start"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom row: copyright */}
          <p className="mt-8 text-center text-[11px] text-stone-300 md:mt-6 md:text-right">
            © 2026 K Scan AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
