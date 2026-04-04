"use client";

import Image from "next/image";
import { useState } from "react";

const coreFlow = [
  {
    step: "01",
    title: "Point",
    description:
      "Aim K Scan at any outfit on the street, on a magazine page, or paused inside a clip. Live camera or still frame, the intake stays effortless.",
  },
  {
    step: "02",
    title: "Parse",
    description:
      "The engine reads fabric behavior, silhouette, tonal story, and styling intent. It understands the outfit as a composed look, not a loose pile of pixels.",
  },
  {
    step: "03",
    title: "Purchase",
    description:
      "Every identified piece surfaces with live retailer links, exact pricing, and refined alternatives when the original is gone. Desire moves cleanly to checkout.",
  },
];

const featureList = [
  {
    title: "Live Parsing",
    body: "K Scan works in motion or stillness, reading passing crowds, paused reels, and editorial flat lays with the same composure.",
  },
  {
    title: "Outfit-Level Intelligence",
    body: "We model proportion, layering, and intent so the full look resolves with fashion logic instead of generic object detection.",
  },
  {
    title: "Cross-Retailer Coverage",
    body: "Luxury boutiques and high-street retailers are checked together, with exact matches and tasteful substitutes surfaced in the same view.",
  },
  {
    title: "Price Tier Awareness",
    body: "Find the designer original or the sharpest adjacent option at a lower tier without losing the integrity of the look.",
  },
  {
    title: "Style Memory",
    body: "K Scan remembers what you have scanned, saved, and bought so recommendations evolve with your wardrobe instead of repeating it.",
  },
  {
    title: "Trend Signal Layer",
    body: "Inventory pressure, velocity, and resale heat add context so you know whether a piece is rising, peaking, or already disappearing.",
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
          src="/kathleen-texture.jpg"
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

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
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
            <a href="#waitlist" className="transition-colors hover:text-stone-900">
              Waitlist
            </a>
          </nav>
          <a
            href="#waitlist"
            className="rounded-full bg-violet-600 px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-violet-700"
          >
            Join Waitlist
          </a>
        </div>
      </header>

      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 pb-24 pt-12 md:px-10 md:pb-40 md:pt-24 lg:flex-row lg:items-center lg:gap-16 lg:pt-28">
        <div className="relative z-20 w-full max-w-[540px] flex-1">
          <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">
            Early access - 2026
          </p>
          <h1 className="mb-6 max-w-[10ch] font-display text-[46px] leading-[1.01] text-stone-900 sm:text-[52px] md:text-[66px] lg:text-[78px]">
            See it anywhere.
            <br />
            <em className="italic">Own it</em> by tonight.
          </h1>
          <p className="mb-9 max-w-[27rem] text-[15px] leading-[1.85] text-stone-500 md:text-[16px]">
            K Scan turns a fashion sighting into a shoppable result in seconds.
          </p>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
            <a
              href="#waitlist"
              className="rounded-full bg-violet-600 px-8 py-4 text-[14px] font-medium text-white shadow-[0_14px_30px_rgba(124,58,237,0.18)] transition-colors hover:bg-violet-700"
            >
              Join Waitlist
            </a>
            <a
              href="#how-it-works"
              className="text-[13px] text-stone-400 underline decoration-stone-200 underline-offset-4 transition-colors hover:text-stone-700 hover:decoration-stone-400"
            >
              See how it works
            </a>
          </div>
        </div>

        <div className="w-full flex-shrink-0 lg:w-[48%]">
          <div className="relative mx-auto max-w-[600px] md:mr-0">
            <div className="absolute inset-x-[10%] top-[12%] hidden h-[78%] rounded-[40px] bg-[radial-gradient(circle_at_top,rgba(167,139,250,0.09),transparent_58%)] blur-3xl md:block" />

            <div className="relative overflow-hidden rounded-[28px] bg-[#f3efe8] shadow-[0_30px_80px_rgba(28,22,16,0.12)] ring-1 ring-black/5">
              <div className="relative aspect-[5/6] md:aspect-[11/10]">
                <Image
                  src="/kathleen-hero.jpeg"
                  alt="Kathleen in the red dress anchoring the K Scan hero composition"
                  fill
                  priority
                  sizes="(max-width: 768px) 92vw, 46vw"
                  className="object-cover object-[center_12%] md:object-[center_16%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,248,244,0.06),rgba(29,20,16,0.16))]" />

                <div className="absolute inset-x-4 bottom-4 h-20 rounded-[22px] bg-[linear-gradient(180deg,rgba(250,248,244,0),rgba(250,248,244,0.95))] md:hidden" />

                <div className="absolute -bottom-1 left-0 right-0 hidden h-32 bg-[linear-gradient(180deg,rgba(244,240,233,0),rgba(244,240,233,0.98))] md:block" />

                <div className="absolute right-3 bottom-5 z-20 md:right-6 md:bottom-7 lg:right-7">
                  <div className="animate-float relative h-[278px] w-[134px] overflow-hidden rounded-[28px] border-[3px] border-stone-700 bg-stone-900 shadow-[0_20px_50px_rgba(0,0,0,0.24)] md:h-[344px] md:w-[166px]">
                    <div className="absolute left-1/2 top-0 z-20 h-[18px] w-16 -translate-x-1/2 rounded-b-xl bg-stone-900 md:h-[20px] md:w-[74px]" />
                    <PhoneScreen size="sm" />
                  </div>
                </div>

                <div className="absolute left-2 top-3 z-10 max-w-[170px] rounded-[20px] border border-white/45 bg-white/68 px-4 py-3 shadow-[0_18px_36px_rgba(30,23,17,0.08)] backdrop-blur-sm md:left-3 md:top-4 md:max-w-[210px] md:px-5 md:py-4 lg:left-4 lg:top-5">
                  <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-stone-400">
                    Editorial signal
                  </p>
                  <p className="font-display text-[18px] leading-[1.06] text-stone-900 md:text-[22px]">
                    One image, one parse, one immediate path to purchase.
                  </p>
                </div>
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

      <section className="border-y border-stone-100 bg-white py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="grid grid-cols-2 gap-x-4 gap-y-7 md:flex md:items-center md:justify-between md:gap-0">
            {trustMetrics.map(({ label, value }, i) => (
              <div key={label} className="flex items-center gap-8 md:gap-12">
                <div className="text-left">
                  <div className="font-display text-xl text-stone-900">{value}</div>
                  <div className="mt-0.5 text-[10px] uppercase tracking-wider text-stone-400">{label}</div>
                </div>
                {i < trustMetrics.length - 1 && <div className="hidden h-8 w-px flex-shrink-0 bg-stone-100 md:block" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-44">
        <div className="mb-20 md:mb-28">
          <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400">
            The Core Flow
          </p>
          <h2 className="font-display text-4xl font-medium text-stone-900 md:text-[52px]">
            Three moments.
            <br />
            One seamless experience.
          </h2>
        </div>

        <div className="grid divide-y divide-stone-100 md:grid-cols-3 md:divide-x md:divide-y-0">
          {coreFlow.map(({ step, title, description }, idx) => (
            <div
              key={step}
              className={`pb-12 md:px-12 md:pb-0 first:md:pl-0 last:md:pr-0 ${idx === 0 ? "pt-0" : "pt-12 md:pt-0"}`}
            >
              <span className="mb-6 block select-none font-display text-[72px] leading-none text-stone-100">
                {step}
              </span>
              <h3 className="mb-5 font-display text-[30px] font-medium text-stone-900">{title}</h3>
              <p className="text-[15px] leading-[1.82] text-stone-500">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="bg-white py-32 md:py-44">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-20 max-w-lg md:mb-28">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400">
              What Sets It Apart
            </p>
            <h2 className="font-display text-4xl font-medium text-stone-900 md:text-[52px]">
              Built for fashion.
              <br />
              Not for search.
            </h2>
          </div>

          <div className="mb-12 grid gap-10 md:mb-16 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <div className="relative overflow-hidden rounded-[30px] bg-[#F5F1EB] shadow-[0_18px_50px_rgba(28,22,16,0.07)] ring-1 ring-black/5">
              <div className="relative aspect-[5/4]">
                <Image
                  src="/kathleen-leisure.jpg"
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
                A visual system grounded in garments, tailoring, and taste, not generic commerce UI.
              </p>
            </div>
          </div>

          <div className="grid gap-x-12 md:grid-cols-2 md:gap-x-16 lg:grid-cols-3">
            {featureList.map(({ title, body }) => (
              <div key={title} className="border-t border-stone-100 py-9 md:py-10">
                <h3 className="mb-3 text-[15px] font-medium text-stone-900">{title}</h3>
                <p className="text-[14px] leading-[1.82] text-stone-400">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-44">
        <div className="flex flex-col gap-14 rounded-3xl bg-[#F5F3EF] px-8 py-16 md:rounded-[44px] md:px-16 md:py-24 lg:flex-row lg:items-start lg:gap-20">
          <div className="max-w-lg flex-1">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400">
              Under the Hood
            </p>
            <h2 className="mb-7 font-display text-3xl font-medium leading-[1.1] text-stone-900 md:text-[42px]">
              Fashion AI that reads context, not just pixels.
            </h2>
            <p className="mb-5 text-[15px] leading-[1.88] text-stone-500">
              Most visual search stops at surface similarity. K Scan was trained on fashion language, from construction and proportion to brand signatures and styling intent.
            </p>
            <p className="text-[15px] leading-[1.88] text-stone-500">
              The result feels less like search and more like informed fashion direction with retailer precision underneath it.
            </p>
          </div>

          <div className="w-full flex-shrink-0 lg:w-[31rem]">
            <div className="overflow-hidden rounded-[28px] border border-white/60 bg-white/55 p-4 shadow-[0_16px_36px_rgba(34,28,24,0.06)] backdrop-blur-sm md:p-5">
              <div className="relative aspect-[5/6] overflow-hidden rounded-[22px]">
                <Image
                  src="/kathleen-texture.jpg"
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
      </section>

      <section className="border-y border-stone-100 bg-[#F5F3EF] py-[4.5rem] md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-6 md:flex-row md:items-end md:justify-between md:px-10">
          <div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400">
              K Scan AI
            </p>
            <h3 className="max-w-xl font-display text-[26px] font-medium leading-snug text-stone-900 md:text-[32px]">
              Building the commerce layer
              <br className="hidden md:block" /> fashion has been missing.
            </h3>
          </div>
          <a
            href="mailto:invest@kscan.ai"
            className="whitespace-nowrap text-[13px] text-stone-400 underline decoration-stone-200 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-500"
          >
            Investor inquiries
          </a>
        </div>
      </section>

      <section id="waitlist" className="bg-white py-36 md:py-52">
        <div className="mx-auto grid max-w-5xl items-center gap-12 px-6 md:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
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

          <div className="order-1 text-center lg:order-2 lg:max-w-[34rem] lg:text-left">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.15em] text-stone-400">
              Early Access
            </p>
            <h2 className="mb-6 font-display text-[40px] font-medium leading-[1.02] text-stone-900 sm:text-[44px] md:text-[58px]">
              The waitlist
              <br />
              is open.
            </h2>
            <p className="mx-auto mb-10 max-w-xs text-[15px] leading-[1.82] text-stone-400 lg:mx-0">
              Be among the first. One email when your access is ready, and nothing before then.
            </p>

            {submitted ? (
              <p className="font-display text-[22px] italic text-stone-600">You&apos;re on the list.</p>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto flex max-w-sm flex-col gap-2.5 sm:flex-row lg:mx-0">
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 rounded-full border border-stone-200 bg-[#FAFAF8] px-6 py-4 text-[14px] text-stone-900 placeholder:text-stone-300 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-violet-200"
                />
                <button
                  type="submit"
                  className="rounded-full bg-violet-600 px-8 py-4 text-[14px] font-medium text-white shadow-[0_14px_30px_rgba(124,58,237,0.16)] transition-colors hover:bg-violet-700"
                >
                  Join Waitlist
                </button>
              </form>
            )}

            <p className="mt-6 text-[11px] tracking-wide text-stone-300">No credit card. No commitment.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-100 bg-[#FAFAF8] py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 px-6 md:flex-row md:px-10">
          <div>
            <div className="mb-1 flex items-center gap-1.5">
              <span className="font-display text-base font-medium text-stone-900">K Scan</span>
              <span className="text-[9px] uppercase tracking-widest text-stone-300">AI</span>
            </div>
            <p className="text-[11px] text-stone-400">Fashion, made shoppable.</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-7 text-[13px] text-stone-400">
            <a href="#how-it-works" className="transition-colors hover:text-stone-700">
              How It Works
            </a>
            <a href="#features" className="transition-colors hover:text-stone-700">
              Features
            </a>
            <a href="#waitlist" className="transition-colors hover:text-stone-700">
              Waitlist
            </a>
            <a href="mailto:hello@kscan.ai" className="transition-colors hover:text-stone-700">
              Contact
            </a>
          </nav>
          <p className="text-[11px] text-stone-300">(c) 2026 K Scan AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
