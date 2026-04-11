"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, Fragment, useState } from "react";

// ─── Static data ──────────────────────────────────────────────────────────────

const moatPoints = [
  {
    title: "Fashion-Specific Intelligence",
    body: "The product is designed around fashion attributes and outfit-level context, not generic image recognition.",
  },
  {
    title: "Retailer-Neutral Infrastructure",
    body: "K Scan is positioned as a conversion layer across commerce endpoints rather than a closed marketplace, preserving flexibility across brands, catalogs, and monetization paths.",
  },
  {
    title: "Privacy-First Architecture",
    body: "The platform direction emphasizes edge-aware processing and local PII masking before cloud transit, supporting a more privacy-conscious model for visual commerce.",
  },
];

const archSteps = [
  { step: "01", title: "Visual Input", body: "Camera capture, screenshot, or video frame from any surface." },
  { step: "02", title: "Fashion Parsing", body: "Silhouette, material, layering, and brand cues read from the full look." },
  { step: "03", title: "Match Retrieval", body: "Ranked results pulled from indexed retailer catalogs." },
  { step: "04", title: "Retailer Routing", body: "Pricing, availability, and purchase paths surfaced across commerce endpoints." },
  { step: "05", title: "Save or Purchase", body: "User saves, compares, or moves directly to transaction." },
];

const progressCards = [
  {
    title: "Built",
    body: "Prototype product experience, brand system, and investor-facing materials are in place.",
  },
  {
    title: "In Validation",
    body: "User flow refinement, match-routing logic, and initial private-beta readiness are underway.",
  },
  {
    title: "Next",
    body: "Controlled testing, expanded commerce-link pathways, and tighter measurement of discovery-to-click behavior.",
  },
];

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Mobile Validation",
    body: "Prove the consumer use case around real-world fashion discovery and ranked retrieval.",
  },
  {
    phase: "Phase 2",
    title: "Commerce Layer Expansion",
    body: "Deepen retailer connectivity, routing logic, and partner-facing infrastructure.",
  },
  {
    phase: "Phase 3",
    title: "Wearable Interface Readiness",
    body: "Extend the same interaction model into devices closer to real-time visual intent.",
  },
];

// ─── Shared primitives ────────────────────────────────────────────────────────

function SectionLabel({ n, text }: { n: string; text: string }) {
  return (
    <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-stone-400">
      {n} — {text}
    </p>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[14px] leading-[1.82] text-stone-500">
          <span aria-hidden className="mt-[0.5em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-stone-300" />
          {item}
        </li>
      ))}
    </ul>
  );
}

const inputBase =
  "w-full rounded-[14px] border border-stone-200 bg-white px-4 py-3 text-[14px] text-stone-900 placeholder:text-stone-400 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-100";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InvestorsPage() {
  const [form, setForm] = useState({ name: "", email: "", firm: "", message: "" });
  const [submitState, setSubmitState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitError, setSubmitError] = useState("");

  function handleChange(key: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
  }

  function scrollToAccess() {
    document.getElementById("investor-access")?.scrollIntoView({ behavior: "smooth" });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitState === "loading") return;
    setSubmitState("loading");
    setSubmitError("");

    try {
      const res = await fetch("/api/investor-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, page: window.location.pathname }),
      });
      const data = (await res.json()) as { status: string; message?: string };

      if (data.status === "success") {
        setSubmitState("success");
        setForm({ name: "", email: "", firm: "", message: "" });
      } else {
        setSubmitState("error");
        setSubmitError(data.message ?? "Something went wrong. Please try again.");
      }
    } catch {
      setSubmitState("error");
      setSubmitError("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-[#FAFAF8] font-sans text-[#111111]">

      {/* ─── Nav ──────────────────────────────────────────────────────────── */}
      <header className="border-b border-stone-100 bg-white/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 md:px-10">
          <Link
            href="/"
            className="text-[12px] uppercase tracking-[0.18em] text-stone-400 transition-colors hover:text-stone-700"
          >
            K Scan AI
          </Link>
          <nav className="hidden items-center gap-6 text-[12px] uppercase tracking-[0.16em] text-stone-400 md:flex">
            <Link href="/demo" className="transition-colors hover:text-stone-700">
              Demo
            </Link>
            <Link href="/investors" className="text-stone-700">
              Investors
            </Link>
          </nav>
        </div>
        <div className="border-t border-stone-100/80 md:hidden">
          <div className="mx-auto flex max-w-6xl items-center gap-6 overflow-x-auto px-6 text-[12px] uppercase tracking-[0.16em] text-stone-400 [&::-webkit-scrollbar]:hidden">
            <Link href="/" className="whitespace-nowrap py-4 transition-colors hover:text-stone-700">
              Home
            </Link>
            <Link href="/demo" className="whitespace-nowrap py-4 transition-colors hover:text-stone-700">
              Demo
            </Link>
            <Link href="/investors" className="whitespace-nowrap py-4 text-stone-700">
              Investors
            </Link>
          </div>
        </div>
      </header>

      {/* ─── 01 Hero ──────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionLabel n="01" text="Investor Briefing" />
            <h1 className="font-display text-[40px] leading-[1.04] text-stone-900 sm:text-[48px] md:text-[60px]">
              The Commerce Layer for Fashion Discovery
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
              K Scan turns real-world fashion inspiration into ranked retail matches, pricing, and purchase paths.
              Built for fashion-specific intent, architected to stay retailer-neutral, and designed for a mobile-first
              world moving toward wearables.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={scrollToAccess}
                className="rounded-full bg-stone-900 px-7 py-3.5 text-[13px] font-medium text-white transition-colors hover:bg-stone-800"
              >
                Request Investor Materials
              </button>
              <button
                onClick={scrollToAccess}
                className="rounded-full border border-stone-300 px-7 py-3.5 text-[13px] font-medium text-stone-600 transition-colors hover:border-stone-400 hover:text-stone-900"
              >
                Schedule a Conversation
              </button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-stone-200/80 bg-[#F4F0EA] p-3 shadow-[0_16px_36px_rgba(35,28,22,0.06)] md:p-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
              <Image
                src="/group-street.jpeg"
                alt="Fashion context for K Scan investor materials"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover object-[center_20%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,248,244,0.04),rgba(28,21,18,0.18))]" />
              <div className="absolute left-3 top-3 rounded-full border border-white/40 bg-white/72 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-stone-500 backdrop-blur-sm">
                Early stage
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 02 Executive Summary ─────────────────────────────────────────── */}
      <section className="border-t border-stone-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
          <SectionLabel n="02" text="Executive Summary" />
          <div className="max-w-2xl">
            <h2 className="font-display text-[28px] leading-[1.1] text-stone-900 md:text-[36px]">
              K Scan is building the commerce layer for fashion discovery.
            </h2>
            <p className="mt-6 text-[15px] leading-[1.9] text-stone-500">
              Fashion discovery increasingly starts outside traditional ecommerce search: on the street, in video, in
              social feeds, and in everyday life. K Scan is building the layer that translates that visual intent into
              shoppable outcomes across retailers.
            </p>
            <p className="mt-4 text-[15px] leading-[1.9] text-stone-500">
              The near-term wedge is mobile fashion discovery. The long-term platform opportunity is wearable commerce.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 03 Why Now ───────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
        <SectionLabel n="03" text="Why Now" />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-[28px] leading-[1.1] text-stone-900 md:text-[36px]">
              Consumer intent is shifting upstream.
            </h2>
            <p className="mt-6 text-[15px] leading-[1.9] text-stone-500">
              People increasingly discover fashion visually, long before they type a search query or land on a product
              page. At the same time, multimodal AI, mobile capture behavior, and API-driven commerce infrastructure
              have matured enough to support a new interface layer between inspiration and purchase.
            </p>
            <p className="mt-4 text-[15px] leading-[1.9] text-stone-500">
              K Scan is being built for that shift.
            </p>
          </div>
          <div className="rounded-[24px] border border-stone-200/80 bg-white p-6 md:p-8">
            <Bullets
              items={[
                "Visual discovery is overtaking typed discovery",
                "Fashion intent is often contextual, not keyword-first",
                "Commerce infrastructure is now modular enough to route that intent",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ─── 04 The Wedge ─────────────────────────────────────────────────── */}
      <section className="border-t border-stone-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
          <SectionLabel n="04" text="The Wedge" />
          <div className="max-w-2xl">
            <h2 className="font-display text-[28px] leading-[1.1] text-stone-900 md:text-[36px]">
              A specific, high-value moment that existing tools fail to capture.
            </h2>
            <p className="mt-6 text-[15px] leading-[1.9] text-stone-500">
              K Scan is not trying to solve visual search broadly. It is focused on a specific, high-value moment: when
              a user sees a look they want and existing tools fail to turn that moment into action. By centering the
              product on fashion-specific cues—silhouette, material, layering, and styling context—K Scan aims to close
              the gap between inspiration and transaction more effectively than generic object recognition.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 05 The Moat ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
        <SectionLabel n="05" text="The Moat" />
        <div className="grid gap-4 md:grid-cols-3">
          {moatPoints.map(({ title, body }) => (
            <div key={title} className="rounded-[22px] border border-stone-200/80 bg-white p-6 md:p-7">
              <h3 className="font-display text-[19px] leading-[1.15] text-stone-900">{title}</h3>
              <p className="mt-3 text-[13px] leading-[1.82] text-stone-500">{body}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-xl text-[13px] leading-[1.85] text-stone-400">
          Mobile is the wedge. Wearables deepen the moat by moving the interface closer to the moment of discovery.
        </p>
      </section>

      {/* ─── 06 Product Architecture ──────────────────────────────────────── */}
      <section className="border-t border-stone-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
          <SectionLabel n="06" text="Product Architecture" />
          <div className="mb-8 max-w-lg">
            <h2 className="font-display text-[28px] leading-[1.1] text-stone-900 md:text-[36px]">
              K Scan sits between inspiration and transaction.
            </h2>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
            {archSteps.map(({ step, title, body }, i) => (
              <Fragment key={step}>
                <div className="flex-1 rounded-[18px] border border-stone-200/80 bg-[#F5F3EF] p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">{step}</p>
                  <p className="mt-3 font-display text-[16px] leading-[1.2] text-stone-900">{title}</p>
                  <p className="mt-2 text-[12px] leading-[1.75] text-stone-500">{body}</p>
                </div>
                {i < archSteps.length - 1 && (
                  <div className="hidden flex-shrink-0 items-center px-1 text-stone-300 lg:flex" aria-hidden="true">
                    →
                  </div>
                )}
              </Fragment>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-[14px] leading-[1.85] text-stone-500">
            The architecture is being developed as a modular commerce layer: mobile-first today, API-first by design,
            and extensible to future wearable interfaces.
          </p>
        </div>
      </section>

      {/* ─── 07 Market Opportunity ────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
        <SectionLabel n="07" text="Market Opportunity" />
        <div className="max-w-2xl">
          <h2 className="font-display text-[28px] leading-[1.1] text-stone-900 md:text-[36px]">
            The conversion layer between fashion discovery and commerce.
          </h2>
          <p className="mt-6 text-[15px] leading-[1.9] text-stone-500">
            The opportunity is not simply apparel ecommerce. It is the conversion layer between fashion discovery and
            commerce. As more purchase intent originates in images, video, public environments, and creator-led
            channels, the value shifts toward systems that can capture and route that intent in real time. K Scan is
            being built around that interface shift.
          </p>
        </div>
      </section>

      {/* ─── 08 Current Progress ──────────────────────────────────────────── */}
      <section className="border-t border-stone-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
          <SectionLabel n="08" text="Current Progress" />
          <div className="grid gap-4 md:grid-cols-3">
            {progressCards.map(({ title, body }) => (
              <div key={title} className="rounded-[22px] border border-stone-200/80 bg-[#F5F3EF] p-6">
                <h3 className="font-display text-[20px] leading-[1.15] text-stone-900">{title}</h3>
                <p className="mt-3 text-[13px] leading-[1.82] text-stone-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 09 Business Model ────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
        <SectionLabel n="09" text="Business Model" />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-[28px] leading-[1.1] text-stone-900 md:text-[36px]">
              User utility first. Platform leverage second.
            </h2>
            <p className="mt-6 text-[15px] leading-[1.9] text-stone-500">
              The initial monetization path is commerce-linked revenue from successful referral and conversion flows.
              Over time, the platform can expand into premium user functionality and infrastructure licensing for
              retailer, partner, or wearable ecosystem integrations.
            </p>
            <p className="mt-4 text-[15px] leading-[1.9] text-stone-500">
              The sequencing matters: user utility first, platform leverage second.
            </p>
          </div>
          <div className="rounded-[24px] border border-stone-200/80 bg-white p-6 md:p-8">
            <Bullets
              items={[
                "Commerce-linked revenue from referral and conversion flows",
                "Premium subscription opportunities for advanced users",
                "Infrastructure licensing for retailer and ecosystem integrations",
              ]}
            />
          </div>
        </div>
      </section>

      {/* ─── 10 Roadmap ───────────────────────────────────────────────────── */}
      <section className="border-t border-stone-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
          <SectionLabel n="10" text="Roadmap" />
          <div className="grid gap-4 md:grid-cols-3">
            {roadmapPhases.map(({ phase, title, body }) => (
              <div key={phase} className="rounded-[22px] border border-stone-200/80 bg-[#F5F3EF] p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-400">{phase}</p>
                <h3 className="mt-3 font-display text-[20px] leading-[1.15] text-stone-900">{title}</h3>
                <p className="mt-3 text-[13px] leading-[1.82] text-stone-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 11 Leadership ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
        <SectionLabel n="11" text="Leadership" />
        <div className="max-w-2xl">
          <h2 className="font-display text-[28px] leading-[1.1] text-stone-900 md:text-[36px]">
            Leadership
          </h2>
          <p className="mt-6 text-[15px] leading-[1.9] text-stone-500">
            K Scan is being built around a focused thesis: fashion-specific discovery should convert as easily as
            traditional search. The company combines product direction, premium brand sensibility, and privacy-aware
            commerce architecture to pursue that opportunity.
          </p>
        </div>
      </section>

      {/* ─── 12 Investor Access ───────────────────────────────────────────── */}
      <section id="investor-access" className="border-t border-stone-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14 pb-20 md:px-10 md:py-20 md:pb-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

            <div>
              <SectionLabel n="12" text="Investor Access" />
              <h2 className="font-display text-[28px] leading-[1.1] text-stone-900 md:text-[36px]">
                Investor Access
              </h2>
              <p className="mt-5 text-[15px] leading-[1.9] text-stone-500">
                Additional materials are available for qualified investors and strategic partners. Materials are shared
                selectively as K Scan prepares for broader external circulation.
              </p>
              <p className="mt-8 text-[12px] leading-[1.75] text-stone-400">
                Prefer email?{" "}
                <a
                  href="mailto:investors@kscan.ai"
                  className="text-stone-600 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-500"
                >
                  investors@kscan.ai
                </a>
              </p>
            </div>

            <div className="rounded-[28px] border border-stone-200/80 bg-[#F5F3EF] p-6 md:p-8">
              {submitState === "success" ? (
                <div className="flex min-h-[300px] flex-col justify-center">
                  <p className="font-display text-[26px] text-stone-900">Request received.</p>
                  <p className="mt-3 text-[14px] leading-[1.85] text-stone-500">
                    Thank you. We review all inquiries and will follow up with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-stone-400">
                        Name
                      </span>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange("name")}
                        className={inputBase}
                      />
                    </label>
                    <label className="block">
                      <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-stone-400">
                        Email
                      </span>
                      <input
                        type="email"
                        required
                        placeholder="you@firm.com"
                        value={form.email}
                        onChange={handleChange("email")}
                        className={inputBase}
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-stone-400">
                      Firm{" "}
                      <span className="normal-case tracking-normal text-stone-300">(optional)</span>
                    </span>
                    <input
                      type="text"
                      placeholder="Fund or firm name"
                      value={form.firm}
                      onChange={handleChange("firm")}
                      className={inputBase}
                    />
                  </label>

                  <label className="block">
                    <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-stone-400">
                      Message
                    </span>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your interest or what you'd like to receive."
                      value={form.message}
                      onChange={handleChange("message")}
                      className={`${inputBase} resize-none`}
                    />
                  </label>

                  {submitState === "error" && (
                    <p className="text-[12px] text-stone-500">{submitError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={submitState === "loading"}
                    className="rounded-full bg-stone-900 px-7 py-3.5 text-[13px] font-medium text-white transition-colors hover:bg-stone-800 disabled:opacity-60"
                  >
                    {submitState === "loading" ? "Sending…" : "Request Deck Access"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
