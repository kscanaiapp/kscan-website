"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SiteNav } from "@/components/ui/SiteNav";
import StyleParseHero from "@/components/StyleParseHero";
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
    title: "Scan",
    description: "Capture a look from real life, a photo, or a screenshot.",
    image: {
      src: "/how-it-works/capture-frame-the-look.png",
      alt: "K Scan AI capture mockup showing a fashion look framed through a camera viewfinder.",
    },
  },
  {
    step: "02",
    title: "Discover",
    description:
      "K Scan AI identifies the clothing, color, silhouette, material, and relevant style context.",
    image: {
      src: "/how-it-works/identify-style-parse.png",
      alt: "K Scan AI identify mockup showing fashion attributes detected inside an outfit photo.",
    },
  },
  {
    step: "03",
    title: "Save",
    description:
      "Keep items you own in Closet, and revisit fashion discoveries in Recent Scans.",
    image: null,
  },
  {
    step: "04",
    title: "Style",
    description:
      "Use Signature Style and Elise to plan outfits, save Looks, and decide together in Dressing Rooms.",
    image: null,
  },
  {
    step: "05",
    title: "Shop",
    description:
      "Explore relevant products, alternatives, and retailer-neutral pathways to complete the look.",
    image: {
      src: "/how-it-works/match-shop-results.png",
      alt: "K Scan AI match results mockup showing product results and retailer pathways from a scanned outfit.",
    },
  },
];

const featureList = [
  {
    title: "Fashion-First Intelligence",
    body: "We do not just identify objects. K Scan AI reads proportion, layering, silhouette, and intent so each piece is understood in context.",
  },
  {
    title: "Built for Speed and Context",
    body: "Designed for photos, screenshots, and saved video frames, K Scan AI turns real-world inspiration into ranked matches. Capture the look and move on.",
  },
  {
    title: "One View, Multiple Retailers",
    body: "Explore relevant matches and useful alternatives across indexed retailers. Compare relevant matches and alternatives across retailer pathways in one view.",
  },
  {
    title: "Price Tier Awareness",
    body: "Explore relevant options across price tiers, including lower-priced alternatives when available.",
  },
  {
    title: "Personalized Recall",
    body: "Saved scans, saved items, and styling preferences help K Scan AI understand your taste over time.",
  },
  {
    title: "Dressing Rooms",
    body: "Plan looks together. Save outfit ideas in Dressing Rooms, compare options, share a link, and keep reactions and conversations connected to the looks being considered. Whether you are planning for a trip, event, or night out, every option stays organized in one place. Signature Style helps make future suggestions more relevant to the preferences you share.",
  },
];

const trustMetrics = [
  { label: "Visual Parsing", value: "AI-Powered" },
  { label: "recognition", value: "Silhouette" },
  { label: "resale discovery", value: "Retailer +" },
];

const benchmarkStats = [
  { label: "recognition", value: "Outfit image" },
  { label: "signals", value: "Material + texture" },
  { label: "discovery", value: "Retailer-neutral" },
  { label: "matching", value: "Custom silhouette" },
];

const parseTags = ["Monochromatic Leather", "Tailored Blazer", "Sheer Mesh"];

const faqs = [
  {
    question: "How does AI fashion search work?",
    answer:
      "K Scan AI analyzes a photo, screenshot, or a saved frame from a video for fashion signals like garment type, silhouette, color, material, styling context, and brand cues. Those signals are used to surface relevant products and alternatives across retailer pathways.",
  },
  {
    question: "Can K Scan AI identify outfits from screenshots?",
    answer:
      "Yes. K Scan AI supports photos and screenshots, so you can scan inspiration from TikTok, Instagram, Pinterest, editorial images, or saved photos without describing the outfit manually.",
  },
  {
    question: "Can it find affordable alternatives?",
    answer:
      "K Scan AI is designed to surface relevant products and useful alternatives when the original piece is unavailable, sold out, or outside your price range.",
  },
  {
    question: "Does it work with TikTok or Instagram screenshots?",
    answer:
      "K Scan AI is designed around social discovery behavior. K Scan AI helps you move from a screenshot, post, saved video frame, or creator outfit into a clearer shopping path.",
  },
  {
    question: "Is K Scan AI a retailer or marketplace?",
    answer:
      "No. K Scan AI is a visual commerce layer for fashion discovery. It helps identify what you are seeing and routes you toward products from retailers rather than replacing the shopping destination.",
  },
];

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
          The K Scan AI deck and supporting materials are shared privately. Tap below to continue to the protected portal, or reach us directly if you haven&apos;t received access credentials.
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
            href="mailto:kscanai.app@gmail.com"
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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "K Scan AI",
    applicationCategory: "ShoppingApplication",
    operatingSystem: "iOS, Android, Web",
    description:
      "AI-powered visual fashion search for identifying clothes from photos, screenshots, and social inspiration.",
    url: "https://kscan.app",
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

    const formData = new FormData(e.currentTarget);
    const website = String(formData.get("website") ?? "");

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
          website,
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
    <main id="main-content" className="min-h-screen">
      <SiteNav />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 pb-16 pt-12 md:px-10 md:pb-40 md:pt-24 lg:flex-row lg:items-center lg:gap-16 lg:pt-28">
        <motion.div
          className="relative z-20 w-full max-w-[540px] flex-1"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.p
            className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-600 md:mb-8"
            variants={staggerChild}
          >
            Now available in beta on Android and iOS.
          </motion.p>
          <motion.h1
            className="mb-5 max-w-[10ch] font-display text-[46px] leading-[1.01] text-stone-900 sm:text-[52px] md:mb-6 md:text-[66px] lg:text-[78px]"
            variants={staggerChild}
          >
            See it. Scan it. Style it.
          </motion.h1>
          <motion.p
            className="mb-8 max-w-[90%] text-[15px] leading-[1.85] text-stone-500 sm:max-w-[27rem] md:mb-9 md:text-[16px]"
            variants={staggerChild}
          >
            Scan fashion from real life, photos, or screenshots. K Scan AI identifies the look, finds relevant products and alternatives, saves your discoveries, and helps you style them.
          </motion.p>
          <motion.div
            className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5"
            variants={staggerChild}
          >
            <motion.a
              href="/download"
              className="fashion-cursor whitespace-nowrap rounded-full bg-violet-600 px-8 py-4 text-[14px] font-medium text-white shadow-[0_14px_30px_rgba(124,58,237,0.18)] transition-colors hover:bg-violet-700"
              {...btnMotion}
            >
              Get the App
            </motion.a>
            <motion.a
              href="/demo"
              className="fashion-cursor text-[13px] text-stone-600 underline decoration-stone-200 underline-offset-4 transition-colors hover:text-stone-700 hover:decoration-stone-400"
              {...btnMotion}
            >
              Watch the Demo
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="w-full flex-shrink-0 lg:w-[48%]">
          <div className="relative mx-auto max-w-[600px] md:mr-0">
            <div className="absolute inset-x-[10%] top-[12%] hidden h-[78%] rounded-[40px] bg-[radial-gradient(circle_at_top,rgba(167,139,250,0.09),transparent_58%)] blur-3xl md:block" />

            <div className="relative overflow-hidden rounded-[28px] bg-[#f3efe8] shadow-[0_30px_80px_rgba(28,22,16,0.12)] ring-1 ring-black/5">
              <div className="relative aspect-[4/3] md:aspect-[16/10] lg:aspect-[1881/836]">
                <motion.div
                  className="absolute inset-0"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                <Image
                  src="/images/homepage-street-discovery.png"
                  alt="Street fashion discovery scene showing K Scan AI visual search callouts around a tailored look"
                  fill
                  priority
                  sizes="(max-width: 768px) 92vw, 46vw"
                  className="object-cover object-[58%_50%] md:object-[56%_50%] lg:object-center"
                />
                </motion.div>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,248,244,0.15),rgba(29,20,16,0.16))]" />

                <div className="absolute inset-x-4 bottom-4 h-20 rounded-[22px] bg-[linear-gradient(180deg,rgba(250,248,244,0),rgba(250,248,244,0.95))] md:hidden" />

                <div className="absolute -bottom-1 left-0 right-0 hidden h-32 bg-[linear-gradient(180deg,rgba(244,240,233,0),rgba(244,240,233,0.98))] md:block" />

                {/* ── Active Vision overlay ─────────────────────────────────────────── */}
                <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">

                  <div className="absolute left-4 top-4 md:left-6 md:top-6">
                    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-zinc-950/75 px-3.5 py-2 shadow-[0_14px_32px_rgba(0,0,0,0.22)] backdrop-blur-sm">
                      <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-500" />
                      <div>
                        <p className="text-[9px] font-medium uppercase leading-none tracking-[0.18em] text-white/90">
                          Active Vision
                        </p>
                        <p className="mt-0.5 text-[8px] uppercase leading-none tracking-[0.14em] text-white/55">
                          Parsing fashion signals
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
                {/* ─────────────────────────────────────────────────────────────────── */}

                <motion.div
                  className="absolute bottom-4 left-3 max-w-[160px] p-3 sm:bottom-auto sm:top-[42%] sm:max-w-[180px] sm:p-3.5 md:top-4 md:left-3 md:max-w-[210px] md:px-5 md:py-4 lg:left-4 lg:top-5 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl z-20"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="mb-1 text-[9px] font-medium uppercase tracking-[0.2em] text-stone-600 md:text-[10px]">
                    STYLE SIGNAL
                  </p>
                  <p className="text-[14px] leading-[1.15] sm:text-[16px] md:text-[22px] font-serif text-stone-900">
                    See the look. Find the match. Shop the style.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="visual-fashion-search" className="border-y border-stone-100 bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <FadeUp>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.15em] text-stone-600">
              Visual Shopping
            </p>
            <h2 id="visual-fashion-search" className="font-display text-[34px] font-medium leading-[1.08] text-stone-900 md:text-[46px]">
              AI fashion search for the way inspiration actually happens.
            </h2>
          </FadeUp>

          <FadeUp delay={0.06} className="space-y-5 text-[15px] leading-[1.88] text-stone-500">
            <p>
              K Scan AI helps people find clothes from photos, identify outfits from screenshots, and turn visual
              inspiration, including inspiration captured with{" "}
              <a
                href="/wearables"
                className="text-violet-600 underline decoration-violet-200 underline-offset-4 transition-colors hover:text-violet-700 hover:decoration-violet-400"
              >
                smart glasses
              </a>
              , into a practical shopping path. Instead of trying to describe a jacket, dress, sneaker, or
              full look with the right keywords, you can start with the image you already have.
            </p>
            <p>
              The product is built for AI fashion search across real-world captures, saved images, screenshots or
              saved frames from short-form videos, and social posts from places like TikTok, Instagram, and Pinterest.
              K Scan AI reads fashion-specific signals such as silhouette, material, color, layering, and styling
              context, then helps surface relevant products and alternatives across retailers.
            </p>
            <div className="flex flex-wrap gap-4 pt-1 text-[13px]">
              <a href="/download" className="fashion-cursor text-violet-600 underline decoration-violet-200 underline-offset-4 transition-colors hover:text-violet-700 hover:decoration-violet-400">
                Get the App
              </a>
              <a href="/demo" className="text-stone-500 underline decoration-stone-200 underline-offset-4 transition-colors hover:text-stone-800 hover:decoration-stone-400">
                View the demo
              </a>
              <a href="#how-it-works" className="text-stone-500 underline decoration-stone-200 underline-offset-4 transition-colors hover:text-stone-800 hover:decoration-stone-400">
                See how it works
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      <StyleParseHero />

      <section className="border-y border-black/5 bg-[#FAFAF8]">
        <div className="mx-auto max-w-7xl px-6 py-4 md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600 md:text-xs">
            <span>AI-POWERED FASHION SEARCH</span>
            <span className="hidden h-3 w-px bg-neutral-200 md:inline-block" aria-hidden="true" />
            <span>RETAILER + RESALE DISCOVERY</span>
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
                    <div className="mt-0.5 text-[10px] uppercase tracking-wider text-stone-600">{label}</div>
                  </div>
                  {i < trustMetrics.length - 1 && <div className="hidden h-8 w-px flex-shrink-0 bg-stone-100 md:block" />}
                </div>
              ))}
            </div>
            <p className="mt-4 text-[11px] leading-relaxed text-stone-600">
              Beta results may vary by image quality, lighting, garment visibility, and retailer availability.
            </p>
          </div>
        </FadeUp>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-44">
        <FadeUp className="mb-12 md:mb-28">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.15em] text-stone-600 md:mb-5">
            The Core Flow
          </p>
          <h2 className="font-display text-4xl font-medium text-stone-900 md:text-[52px]">
            From spotted
            <br />
            to shoppable.
          </h2>
        </FadeUp>

        <FadeUp className="mb-8 md:mb-14">
          <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr] md:items-end md:gap-8">
            <div className="overflow-hidden rounded-[28px] border border-white/10 bg-[#F2EEE7] shadow-[0_18px_46px_rgba(35,28,22,0.08)]">
              <div className="relative aspect-[16/10] w-full bg-[#F2EEE7]">
                <Image
                  src="/demo/how-it-works-1.png"
                  alt="K Scan AI interface showing a captured outfit moving into matched shopping results"
                  fill
                  sizes="(max-width: 768px) 100vw, 46vw"
                  className="object-cover object-[center_18%] md:object-center"
                />
              </div>
            </div>
            <div className="max-w-md">
              <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-600">
                Live Product Flow
              </p>
              <p className="text-[14px] leading-[1.78] text-stone-500">
                No more “I’ll find it later.” K Scan AI closes the gap between inspiration and action.
              </p>
            </div>
          </div>
        </FadeUp>

        <div className="grid divide-y divide-stone-100 md:grid-cols-3 md:divide-x md:divide-y-0 lg:grid-cols-5">
          {coreFlow.map(({ step, title, description, image }, idx) => (
            <FadeUp
              key={step}
              delay={idx * 0.08}
              className={`flex h-full flex-col pb-10 md:px-12 md:pb-0 ${idx === 0 ? "pt-0" : "pt-10 md:pt-0"}`}
            >
              <span
                className="step-num mb-4 block select-none font-display text-[64px] leading-none md:text-[80px]"
                aria-hidden="true"
              >
                {step}
              </span>
              <h3 className="mb-4 font-display text-[28px] font-medium text-stone-900 md:mb-5 md:text-[30px]">
                <span className="sr-only">Step {idx + 1}:{" "}</span>
                {title}
              </h3>
              <p className="mb-4 text-[15px] leading-[1.82] text-stone-500">{description}</p>
              {image && (
                <div className="relative mt-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-lg border border-white/10 bg-zinc-950/40 mx-auto lg:max-w-none">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-top"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                  />
                </div>
              )}
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Signature Style */}
      <section id="features" className="bg-white py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <FadeUp className="mb-12 max-w-lg md:mb-28">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.15em] text-stone-600 md:mb-5">
              What Sets It Apart
            </p>
            <h2 className="font-display text-4xl font-medium text-stone-900 md:text-[52px]">
              Built for fashion.
              <br />
              Designed for discovery.
            </h2>
          </FadeUp>

          <FadeUp className="mb-10 grid gap-8 md:mb-16 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-10">
            <div className="relative overflow-hidden rounded-[30px] bg-[#F5F1EB] shadow-[0_18px_50px_rgba(28,22,16,0.07)] ring-1 ring-black/5">
              <div className="relative aspect-[5/4]">
                <Image
                  src="/group-street.jpeg"
                  alt="Kathleen in a white leisure set illustrating K Scan AI's fashion-first feature system"
                  fill
                  sizes="(max-width: 768px) 92vw, 48vw"
                  className="object-cover object-[center_25%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,240,233,0.02),rgba(34,28,24,0.12))]" />
              </div>
            </div>
            <div className="max-w-md">
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-600">
                Fashion-first signal
              </p>
              <p className="font-display text-[30px] leading-[1.15] text-stone-900 md:text-[36px]">
                A commerce layer for fashion, not another browse-and-search workflow.
              </p>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="mb-4 overflow-hidden rounded-[30px] border border-stone-200 bg-stone-50 shadow-[0_18px_48px_rgba(28,22,16,0.08)] md:mb-5 md:rounded-[34px]">
              <div className="relative aspect-[7/2] lg:aspect-[4/1]">
                <Image
                  src="/images/shoes_and_bag_hero.png"
                  alt="K Scan AI fashion product preview with leather shoes and a structured bag"
                  fill
                  sizes="(max-width: 768px) 92vw, (max-width: 1280px) 86vw, 1200px"
                  className="object-cover object-[center_85%]"
                />
              </div>
            </div>
          </FadeUp>

          <FadeUp>
            <div className="grid gap-9 rounded-[30px] border border-white/5 bg-zinc-950 px-6 py-10 shadow-[0_24px_70px_rgba(28,22,16,0.12)] md:gap-10 md:rounded-[34px] md:px-10 md:py-12 lg:grid-cols-[0.45fr_0.55fr] lg:items-center lg:px-12">
              <div>
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.15em] text-indigo-300/85 md:mb-5">
                  Signature Style
                </p>
                <h2 className="mb-5 max-w-xl font-display text-4xl font-medium leading-[1.05] text-white md:text-[52px]">
                  Style signals that make recommendations more relevant.
                </h2>
                <p className="max-w-xl text-[15px] leading-[1.82] text-stone-300/75">
                  Saved items, styling preferences, and feedback can help K Scan AI tailor future recommendations without turning style into personal identity.
                </p>
                <span className="mt-7 inline-flex rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[13px] font-medium leading-relaxed text-stone-100 shadow-[0_18px_48px_rgba(0,0,0,0.18)]">
                  Built from style signals, not personal identity.
                </span>
              </div>

              <div className="divide-y divide-white/10 border-y border-white/10 lg:border-y-0">
                {[featureList[0], featureList[1], featureList[4]].map(({ title, body }) => (
                  <div
                    key={title}
                    className="py-5 first:pt-0 last:pb-0 lg:py-6"
                  >
                    <h3 className="mb-3 text-[15px] font-medium text-white">{title}</h3>
                    <p className="text-[14px] leading-[1.82] text-stone-300/65">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>

          <FadeUp className="mt-12 md:mt-16">
            <div className="grid gap-8 border-t border-stone-100 pt-10 md:gap-10 lg:grid-cols-[minmax(320px,0.42fr)_minmax(0,0.58fr)] lg:items-center">
              <div className="max-w-md">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-600">
                  Mirror Selfie
                </p>
                <h3 className="mb-3 font-display text-[26px] leading-[1.15] text-stone-900 md:text-[30px]">
                  Turn the mirror into a Closet starting point.
                </h3>
                <p className="text-[15px] leading-[1.82] text-stone-500">
                  Choose a mirror or selfie image and let K Scan AI help identify the fashion you are wearing. Review the detected clothing and move the pieces that are actually yours toward Closet.
                </p>
                <p className="mt-4 text-[12px] leading-relaxed text-stone-600">
                  Available in supported beta flows. Results may vary by image, garment visibility, and release environment.
                </p>
              </div>
              <div className="w-full">
                <div className="relative overflow-hidden rounded-[28px] border border-stone-200 bg-stone-50 shadow-[0_18px_50px_rgba(28,22,16,0.08)]">
                  <div className="relative aspect-[4/5]">
                    <Image
                      src="/mirror-selfie.jpeg"
                      alt="Fashionable person taking a mirror selfie to illustrate K Scan AI Mirror Selfie wardrobe intake."
                      fill
                      sizes="(max-width: 1024px) 92vw, 40vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp className="mt-10 md:mt-14">
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-stone-950 px-6 py-7 shadow-[0_22px_60px_rgba(28,22,16,0.14)] md:rounded-[36px] md:px-9 md:py-8">
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.42),transparent)]" />
              <div className="relative grid gap-8 lg:grid-cols-[0.55fr_0.45fr] lg:items-start lg:gap-10">
                <div className="max-w-2xl">
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-200/70">
                    Live in Beta
                  </p>
                  <h3 className="mb-3 font-display text-[30px] font-medium leading-[1.05] text-white md:text-[38px]">
                    Elise, Your AI Stylist
                  </h3>
                  <p className="max-w-3xl text-[14px] leading-[1.82] text-stone-300 md:text-[15px]">
                    Elise helps turn a scan into a styling decision. Ask how to wear an item, style something from Closet, refine a Saved Look, or use fashion shared through a Dressing Room as context.
                  </p>
                  <p className="mt-4 max-w-3xl text-[14px] leading-[1.82] text-stone-300 md:text-[15px]">
                    StyleChat is how you talk with her. Where spoken responses are enabled, Elise can also read eligible styling responses aloud.
                  </p>
                </div>
                <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
                  {[
                    { title: "Style This Item", body: "Turn a scan or Closet item into styling ideas." },
                    { title: "Closet Context", body: "Use the fashion you own as context for outfit suggestions." },
                    { title: "Dressing Room Context", body: "Refine shared fashion choices with the items being discussed." },
                    { title: "Spoken Responses", body: "Hear eligible Elise styling responses where voice is enabled." },
                  ].map(({ title, body }) => (
                    <div key={title} className="bg-stone-950 p-5">
                      <h4 className="mb-2 text-[13px] font-medium text-white">{title}</h4>
                      <p className="text-[12px] leading-[1.6] text-stone-400">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp className="mt-5 md:mt-6">
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-stone-950 px-6 py-7 shadow-[0_22px_60px_rgba(28,22,16,0.14)] md:rounded-[36px] md:px-9 md:py-8">
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.42),transparent)]" />
              <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-10">
                <div className="max-w-2xl">
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-200/70">
                    Coming Soon
                  </p>
                  <h3 className="mb-3 font-display text-[30px] font-medium leading-[1.05] text-white md:text-[38px]">
                    Calendar to Closet
                  </h3>
                  <p className="max-w-3xl text-[14px] leading-[1.82] text-stone-300 md:text-[15px]">
                    A planned way to help connect upcoming plans with Closet and Saved Looks, so Elise can help you think ahead about what to wear.
                  </p>
                </div>
                <div className="hidden h-20 w-20 flex-shrink-0 rounded-full border border-cyan-200/20 bg-cyan-200/5 shadow-[0_0_44px_rgba(125,211,252,0.12)] md:block" />
              </div>
            </div>
          </FadeUp>

          <FadeUp className="mt-5 md:mt-6">
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-stone-950 px-6 py-7 shadow-[0_22px_60px_rgba(28,22,16,0.14)] md:rounded-[36px] md:px-9 md:py-8">
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.42),transparent)]" />
              <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-10">
                <div className="max-w-2xl">
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-200/70">
                    Exploring
                  </p>
                  <h3 className="mb-3 font-display text-[30px] font-medium leading-[1.05] text-white md:text-[38px]">
                    A More Present Elise
                  </h3>
                  <p className="max-w-3xl text-[14px] leading-[1.82] text-stone-300 md:text-[15px]">
                    We are continuing to explore richer ways for Elise to feel present across the K Scan AI experience.
                  </p>
                </div>
                <div className="hidden h-20 w-20 flex-shrink-0 rounded-full border border-cyan-200/20 bg-cyan-200/5 shadow-[0_0_44px_rgba(125,211,252,0.12)] md:block" />
              </div>
            </div>
          </FadeUp>

          <FadeUp className="mt-12 md:mt-16">
            <div className="grid gap-8 border-t border-stone-100 pt-10 md:gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(320px,0.38fr)] lg:items-center">
              <div className="w-full lg:max-w-[800px]">
                <div className="relative overflow-hidden rounded-[28px] border border-stone-200 bg-stone-50 shadow-[0_18px_50px_rgba(28,22,16,0.08)]">
                  <div className="relative aspect-[1672/941]">
                    <Image
                      src="/images/dressing-rooms-v6.png"
                      alt="K Scan AI Dressing Rooms preview showing shared styling and link sharing"
                      fill
                      sizes="(max-width: 1024px) 92vw, 56vw"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="max-w-md lg:ml-auto">
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-600">
                  {featureList[5].title}
                </p>
                <p className="text-[15px] leading-[1.82] text-stone-500">
                  {featureList[5].body}
                </p>
              </div>
            </div>
          </FadeUp>

          <FadeUp className="mt-10 md:mt-14">
            <div className="grid gap-x-12 gap-y-8 border-t border-stone-100 pt-9 md:grid-cols-2 md:gap-x-16 md:pt-10">
              {[featureList[2], featureList[3]].map(({ title, body }) => (
                <article key={title}>
                  <h3 className="mb-3 text-[15px] font-medium text-stone-900">{title}</h3>
                  <p className="text-[14px] leading-[1.82] text-stone-600">{body}</p>
                </article>
              ))}
            </div>
          </FadeUp>

          <FadeUp className="mt-10 md:mt-14">
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-stone-950 px-6 py-7 shadow-[0_22px_60px_rgba(28,22,16,0.14)] md:rounded-[36px] md:px-9 md:py-8">
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.42),transparent)]" />
              <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-10">
                <div className="max-w-2xl">
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-200/70">
                    Coming Soon
                  </p>
                  <h3 className="mb-3 font-display text-[30px] font-medium leading-[1.05] text-white md:text-[38px]">
                    K Scan AI Web Lens
                  </h3>
                  <p className="max-w-3xl text-[14px] leading-[1.82] text-stone-300 md:text-[15px]">
                    A browser-first visual search experience designed to move from inspiration to discovery across desktop and mobile, with future-ready try-on pathways.
                  </p>
                </div>
                <div className="hidden h-20 w-20 flex-shrink-0 rounded-full border border-cyan-200/20 bg-cyan-200/5 shadow-[0_0_44px_rgba(125,211,252,0.12)] md:block" />
              </div>
            </div>
          </FadeUp>

          <FadeUp className="mt-5 md:mt-6">
            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-stone-950 px-6 py-7 shadow-[0_22px_60px_rgba(28,22,16,0.14)] md:rounded-[36px] md:px-9 md:py-8">
              <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.42),transparent)]" />
              <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-10">
                <div className="max-w-2xl">
                  <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-200/70">
                    Coming Soon
                  </p>
                  <h3 className="mb-3 font-display text-[30px] font-medium leading-[1.05] text-white md:text-[38px]">
                    Outfit Remix
                  </h3>
                  <p className="max-w-3xl text-[14px] leading-[1.82] text-stone-300 md:text-[15px]">
                    Recreate inspiration from your own closet. K Scan AI will help reinterpret favorite looks using pieces you already own, with smart substitutions, layering ideas, and remix guidance when there is no exact match.
                  </p>
                </div>
                <div className="hidden h-20 w-20 flex-shrink-0 rounded-full border border-cyan-200/20 bg-cyan-200/5 shadow-[0_0_44px_rgba(125,211,252,0.12)] md:block" />
              </div>
            </div>
          </FadeUp>

        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-44">
        <FadeUp>
        <div className="flex flex-col gap-10 rounded-3xl bg-[#F5F3EF] px-6 py-10 md:rounded-[44px] md:px-16 md:py-24 md:gap-14 lg:flex-row lg:items-start lg:gap-20">
          <div className="max-w-lg flex-1">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.15em] text-stone-600 md:mb-6">
              Under the Hood
            </p>
            <h2 className="mb-5 font-display text-3xl font-medium leading-[1.1] text-stone-900 md:mb-7 md:text-[42px]">
              The Fashion Intelligence Engine
            </h2>
            <p className="mb-5 text-[15px] leading-[1.88] text-stone-500">
              Built for real-world fashion discovery. K Scan AI reads silhouette, material, layering, and context for fast visual matching.
            </p>
            <p className="mb-5 text-[15px] leading-[1.88] text-stone-500">
              Unlike generic image search, K Scan AI is designed to understand how fashion works together. It interprets the full look, then maps it to closer matches and more useful alternatives across retailers.
            </p>
          </div>

          <div className="w-full flex-shrink-0 lg:w-[31rem]">
            <div className="overflow-hidden rounded-[28px] border border-white/60 bg-white/55 p-4 shadow-[0_16px_36px_rgba(34,28,24,0.06)] backdrop-blur-sm md:p-5">
              <div className="relative aspect-[5/6] overflow-hidden rounded-[22px]">
                <Image
                  src="/texture-dinner.png"
                  alt="Kathleen in a leather-forward look used for the technical Fashion Intelligence section"
                  fill
                  sizes="(max-width: 768px) 92vw, 31rem"
                  className="object-cover object-[center_22%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,16,18,0.1),rgba(16,16,18,0.24))]" />

                <div className="absolute left-4 right-4 top-4 flex items-center justify-between rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-sm">
                  <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-white/68">
                    Fashion Intelligence
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
                {benchmarkStats.map(({ label, value }) => (
                  <div key={label} className="flex items-baseline gap-4 border-t border-stone-200 py-5">
                    <span className="w-[9rem] flex-shrink-0 font-display text-[24px] leading-none text-stone-900 md:text-[28px]">
                      {value}
                    </span>
                    <span className="text-[13px] leading-snug text-stone-500">{label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[11px] leading-relaxed text-stone-600">
                Beta results may vary by image quality, lighting, garment visibility, and retailer availability.
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
              <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-stone-600">
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
                href="mailto:kscanai.app@gmail.com"
                className="text-center text-[12px] text-stone-600 underline decoration-stone-200 underline-offset-4 transition-colors hover:text-stone-700 hover:decoration-stone-400 md:text-right"
              >
                or request credentials
              </a>
            </div>
          </div>
        </FadeUp>
      </section>

      <section aria-labelledby="faq-heading" className="bg-white py-16 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
          <FadeUp>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.15em] text-stone-600">
              Questions
            </p>
            <h2 id="faq-heading" className="font-display text-[34px] font-medium leading-[1.08] text-stone-900 md:text-[46px]">
              What shoppers ask before they scan.
            </h2>
          </FadeUp>

          <div className="divide-y divide-stone-100">
            {faqs.map(({ question, answer }, idx) => (
              <FadeUp key={question} delay={idx * 0.04} className="py-6 first:pt-0">
                <article>
                  <h3 className="text-[16px] font-medium leading-snug text-stone-900">
                    {question}
                  </h3>
                  <p className="mt-3 text-[14px] leading-[1.82] text-stone-500">
                    {answer}
                  </p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Investor bottom sheet — AnimatePresence for smooth exit */}
      <AnimatePresence>
        {investorOpen && <InvestorSheet onClose={() => setInvestorOpen(false)} />}
      </AnimatePresence>

      <section id="get-the-app" className="bg-white py-14 md:py-40">
        <div className="mx-auto grid max-w-5xl items-center gap-10 px-6 md:px-10 md:gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div className="order-2 mx-auto hidden w-full max-w-sm lg:order-1 lg:block lg:max-w-none">
            <div className="relative overflow-hidden rounded-[28px] bg-[#f6f2ec] shadow-[0_16px_38px_rgba(34,28,24,0.06)] ring-1 ring-black/5">
              <div className="relative aspect-[4/5]">
                  <Image
                    src="/white-tan-hat.png"
                    alt="Editorial pink gown portrait beside the K Scan AI Get the App call to action"
                    fill
                    sizes="(max-width: 1024px) 80vw, 32vw"
                    className="object-cover object-[center_20%] opacity-88"
                  />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,241,236,0.18),rgba(31,23,23,0.08))]" />
              </div>
            </div>
          </div>

          <FadeUp className="order-1 text-center lg:order-2 lg:max-w-[34rem] lg:text-left">
            {/* Mobile image — hidden at lg and above where the sidebar image takes over */}
            <div className="mx-auto mb-8 w-full max-w-xs lg:hidden">
              <div className="relative overflow-hidden rounded-[28px] bg-[#f6f2ec] shadow-[0_16px_38px_rgba(34,28,24,0.06)] ring-1 ring-black/5">
                <div className="relative aspect-[4/5]">
                  <Image
                    src="/white-tan-hat.png"
                    alt="Editorial pink gown portrait beside the K Scan AI Get the App call to action"
                    fill
                    sizes="80vw"
                    className="object-cover object-[center_20%] opacity-88"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,241,236,0.18),rgba(31,23,23,0.08))]" />
                </div>
              </div>
            </div>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.15em] text-stone-600 md:mb-6">
              Available in Beta
            </p>
            <h2 className="mb-5 font-display text-[40px] font-medium leading-[1.02] text-stone-900 sm:text-[44px] md:mb-6 md:text-[58px]">
              Start Scanning Today
            </h2>
            <p className="mx-auto mb-8 max-w-xs text-[15px] leading-[1.82] text-stone-600 md:mb-10 lg:mx-0">
              K Scan AI is now available in beta. Get the Android app through Google Play or access the iOS beta through TestFlight.
            </p>

            <div className="mx-auto mb-10 flex max-w-sm flex-col items-center gap-4 sm:flex-row sm:justify-center lg:mx-0 lg:justify-start">
              <a
                href="/download"
                className="fashion-cursor w-full rounded-full bg-violet-600 px-8 py-4 text-center text-[14px] font-medium text-white shadow-[0_14px_30px_rgba(124,58,237,0.16)] transition-colors hover:bg-violet-700 sm:w-auto"
              >
                Get the App
              </a>
              <a
                href="/beta"
                className="text-[13px] text-stone-600 underline decoration-stone-200 underline-offset-4 transition-colors hover:text-stone-700 hover:decoration-stone-400"
              >
                View Beta Details
              </a>
            </div>

            <div className="mx-auto max-w-sm rounded-[24px] border border-stone-200 bg-[#F5F3EF] p-6 text-left lg:mx-0">
              <h3 className="font-display text-[18px] font-medium text-stone-900">Get Beta Updates</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-stone-500">
                Receive K Scan AI product updates, beta news, and release announcements.
              </p>

              {submissionState === "success" ? (
                <motion.p
                  className="mt-4 font-display text-[16px] italic text-stone-600"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  You&apos;re signed up for updates.
                </motion.p>
              ) : submissionState === "duplicate" ? (
                <motion.p
                  className="mt-4 font-display text-[16px] italic text-stone-600"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  You&apos;re already signed up for updates.
                </motion.p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2.5 sm:flex-row">
                  <input
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full flex-1 rounded-full border border-stone-200 bg-white px-5 py-3 text-[14px] text-stone-900 placeholder:text-stone-600 focus:border-violet-300 focus:outline-none focus:ring-2 focus:ring-violet-100 sm:w-auto"
                  />
                  <motion.button
                    type="submit"
                    disabled={submissionState === "loading"}
                    className="w-full rounded-full bg-stone-900 px-6 py-3 text-[13px] font-medium text-white transition-colors hover:bg-stone-800 disabled:opacity-60 sm:w-auto"
                    {...btnMotion}
                  >
                    {submissionState === "loading" ? "Submitting..." : "Keep Me Updated"}
                  </motion.button>
                </form>
              )}

              {submissionState === "error" ? (
                <p className="mt-4 text-[11px] tracking-wide text-stone-600">{submissionMessage}</p>
              ) : (
                <p className="mt-4 text-[11px] leading-relaxed text-stone-500">
                  By subscribing, you agree to receive K Scan AI product and beta updates. You can unsubscribe at any time.{" "}
                  <a
                    href="/legal/privacy"
                    className="text-violet-600 underline decoration-violet-200 underline-offset-4 transition-colors hover:text-violet-700 hover:decoration-violet-400"
                  >
                    Read our Privacy Policy
                  </a>
                  .
                </p>
              )}
            </div>
          </FadeUp>
        </div>
      </section>
    </main>
  );
}
