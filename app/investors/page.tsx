"use client";

import Image from "next/image";
import { FormEvent, Fragment, useEffect, useState } from "react";
import { InvestorDeckLauncher } from "@/components/InvestorDeckLauncher";
import { SiteNav } from "@/components/ui/SiteNav";
import { SectionShell } from "@/components/ui/SectionShell";

// ─── Password gate constants (restored exactly) ───────────────────────────────
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
    <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-stone-700">
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
  "w-full rounded-[14px] border border-stone-200 bg-white px-4 py-3 text-[14px] text-stone-900 placeholder:text-stone-600 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-100";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InvestorsPage() {
  // ── Password gate state (restored exactly) ──────────────────────────────────
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [shakeField, setShakeField] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [deckState, setDeckState] = useState<"idle" | "checking" | "ready" | "missing">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/investor/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        throw new Error("Access rejected.");
      }

      setUnlocked(true);
      setPassword("");
      setPasswordVisible(false);
      setError("");
      setShakeField(false);
      return;
    } catch {
      setUnlocked(false);
      setDeckState("idle");
      setShakeField(true);
      setError("Access could not be verified. Please check the password and try again.");
    }
  }

  useEffect(() => {
    if (!shakeField) return;
    const timeout = window.setTimeout(() => { setShakeField(false); }, 460);
    return () => { window.clearTimeout(timeout); };
  }, [shakeField]);

  useEffect(() => {
    if (!unlocked) return;
    let active = true;
    async function checkDeck() {
      setDeckState("checking");
      try {
        const response = await fetch("/api/investor/deck", {
          method: "HEAD",
          credentials: "same-origin",
        });
        if (!active) return;
        setDeckState(response.ok ? "ready" : "missing");
      } catch {
        if (!active) return;
        setDeckState("missing");
      }
    }
    checkDeck();
    return () => { active = false; };
  }, [unlocked]);

  // ── Inquiry form state ───────────────────────────────────────────────────────
  const [form, setForm] = useState({ name: "", email: "", firm: "", message: "" });
  const [inquiryState, setInquiryState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [inquiryError, setInquiryError] = useState("");

  function handleChange(key: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
  }

  function scrollToAccess() {
    document.getElementById("investor-access")?.scrollIntoView({ behavior: "smooth" });
  }

  async function handleInquirySubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inquiryState === "loading") return;
    setInquiryState("loading");
    setInquiryError("");

    try {
      const res = await fetch("/api/investor-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, page: window.location.pathname }),
      });
      const data = (await res.json()) as { status: string; message?: string };

      if (data.status === "success") {
        setInquiryState("success");
        setForm({ name: "", email: "", firm: "", message: "" });
      } else {
        setInquiryState("error");
        const isValidationError = res.status >= 400 && res.status < 500;
        setInquiryError(
          isValidationError
            ? (data.message ?? "We couldn't submit your request. Please email kscanai.app@gmail.com directly.")
            : "We couldn't submit your request. Please email kscanai.app@gmail.com directly.",
        );
      }
    } catch {
      setInquiryState("error");
      setInquiryError("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="min-h-screen">

      <SiteNav />

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
              <a
                href="https://cal.com/k-scan-app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-stone-300 px-7 py-3.5 text-[13px] font-medium text-stone-600 transition-colors hover:border-stone-400 hover:text-stone-900"
              >
                Schedule a Conversation
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-stone-200/80 bg-[#F4F0EA] p-3 shadow-[0_16px_36px_rgba(35,28,22,0.06)] md:p-4">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
              <Image
                src="/group-street.jpeg"
                alt="Street-style group image supporting the K Scan investor briefing"
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
        <p className="mt-6 max-w-xl text-[13px] leading-[1.85] text-stone-600">
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
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-700">{step}</p>
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
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-stone-600">{phase}</p>
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

      {/* ─── 12 Access Gate (restored exactly from prior version) ─────────── */}
      <SectionShell id="investor-access" className="mx-auto max-w-6xl px-6 pb-10 md:px-10 md:pb-14">
        <div className="rounded-[34px] border border-stone-200/80 bg-white p-6 shadow-[0_18px_40px_rgba(35,28,22,0.05)] md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.44fr_0.56fr] lg:gap-10">
            <div className="max-w-md">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-600">
                Access Gate
              </p>
              <h2 className="font-display text-[30px] leading-[1.08] text-stone-900 md:text-[36px]">
                Confidential Investor Materials
              </h2>
              <p className="mt-4 text-[14px] leading-[1.85] text-stone-500">
                Secure access to deck materials, market framing, and company overview.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-3">
                <label className="block">
                  <span className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-stone-600">
                    Password
                  </span>
                  <div className="relative">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      autoComplete="current-password"
                      autoCapitalize="none"
                      autoCorrect="off"
                      spellCheck={false}
                      aria-label="Investor password"
                      placeholder="Enter investor password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      className={`w-full appearance-none rounded-xl border bg-white px-4 py-3 pr-20 text-left text-[16px] normal-case leading-normal tracking-normal text-stone-900 outline-none placeholder:text-stone-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-200 ${shakeField ? "border-violet-300" : "border-violet-200"}`}
                    />
                    <button
                      type="button"
                      aria-label={passwordVisible ? "Hide password" : "Show password"}
                      aria-pressed={passwordVisible}
                      onClick={() => {
                        setPasswordVisible((visible) => !visible);
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-stone-500 transition-colors hover:bg-stone-100 hover:text-stone-800 focus:outline-none focus:ring-2 focus:ring-violet-200"
                    >
                      {passwordVisible ? "Hide" : "Show"}
                    </button>
                  </div>
                </label>
                <button
                  type="submit"
                  className="rounded-full bg-stone-900 px-6 py-3 text-[13px] font-medium text-white transition-colors hover:bg-stone-800"
                >
                  View Materials
                </button>
              </form>

              <div className="mt-4 min-h-6">
                {error ? (
                  <p className="text-[12px] leading-relaxed text-stone-500">{error}</p>
                ) : unlocked ? (
                  <p className="text-[12px] leading-relaxed text-stone-600">
                    Access confirmed. Deck materials are now visible below.
                  </p>
                ) : null}
              </div>

              <p className="mt-6 text-[11px] leading-[1.75] text-stone-700">
                Confidentiality Notice: Investor materials are intended for qualified recipients only and are provided for evaluation purposes.
              </p>
            </div>

            <div className="rounded-[28px] bg-[#F7F4EF] p-3 ring-1 ring-stone-200/70 md:p-4">
              {!unlocked ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[24px] border border-dashed border-stone-200 bg-white/70 px-8 text-center">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-stone-200 bg-[#FAFAF8]">
                    <div className="relative h-5 w-4 rounded-sm border border-stone-500/70">
                      <div className="absolute -top-3 left-1/2 h-3 w-3 -translate-x-1/2 rounded-t-full border border-b-0 border-stone-500/70" />
                    </div>
                  </div>
                  <p className="font-display text-[28px] text-stone-900">Materials remain locked.</p>
                  <p className="mt-3 max-w-sm text-[14px] leading-[1.8] text-stone-500">
                    Investor materials will appear here once access is verified. The presentation area is intentionally understated while private review is in progress.
                  </p>
                </div>
              ) : deckState === "ready" ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[24px] border border-stone-200/80 bg-white px-8 py-10 text-center shadow-[0_22px_50px_rgba(35,28,22,0.08)]">
                  <p className="text-[11px] uppercase tracking-[0.18em] text-stone-600">Pitch Deck</p>
                  <h3 className="mt-4 font-display text-[32px] leading-[1.08] text-stone-900">
                    Investor deck is ready.
                  </h3>
                  <p className="mt-4 max-w-sm text-[14px] leading-[1.8] text-stone-500">
                    Open the deck in a dedicated tab for the best review experience across mobile and desktop.
                  </p>
                  <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
                    <InvestorDeckLauncher
                      className="inline-flex rounded-full bg-stone-900 px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-stone-800"
                    >
                      View Deck
                    </InvestorDeckLauncher>
                    <InvestorDeckLauncher
                      href="/api/investor/deck-mobile"
                      className="inline-flex rounded-full border border-stone-300 bg-white px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-stone-700 transition-colors hover:border-stone-400 hover:text-stone-900"
                    >
                      Open Mobile Deck
                    </InvestorDeckLauncher>
                    <InvestorDeckLauncher
                      href="/investors/memo"
                      className="inline-flex rounded-full border border-stone-300 bg-white px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-stone-700 transition-colors hover:border-stone-400 hover:text-stone-900"
                    >
                      Read Investor Memo
                    </InvestorDeckLauncher>
                    <InvestorDeckLauncher
                      href="/investors/revenue-brief"
                      className="inline-flex rounded-full border border-stone-300 bg-white px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-stone-700 transition-colors hover:border-stone-400 hover:text-stone-900"
                    >
                      Revenue Strategy Brief
                    </InvestorDeckLauncher>
                  </div>
                </div>
              ) : deckState === "checking" ? (
                <div className="flex min-h-[420px] items-center justify-center rounded-[24px] border border-stone-200 bg-white/75 px-8 text-center">
                  <p className="text-[14px] tracking-[0.08em] text-stone-500">Preparing deck materials...</p>
                </div>
              ) : (
                <div className="flex min-h-[420px] flex-col justify-between rounded-[24px] border border-stone-200 bg-white p-8">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-stone-600">Deck Placeholder</p>
                    <h3 className="mt-4 font-display text-[30px] leading-[1.08] text-stone-900">
                      The embed is ready once the deck file is added.
                    </h3>
                    <p className="mt-4 max-w-lg text-[14px] leading-[1.85] text-stone-500">
                      This page is configured to display the protected investor deck after access is granted.
                      The deck is not available right now.
                    </p>
                  </div>
                  <div className="mt-8 rounded-[22px] bg-[#F7F4EF] p-5">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-stone-600">Next step</p>
                    <p className="mt-2 text-[14px] leading-[1.8] text-stone-500">
                      Confirm the protected deck file is available on the server and this stage will automatically
                      switch from placeholder to presentation after access is granted.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </SectionShell>

      {/* ─── Cal.com Scheduling ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pb-6 md:px-10">
        <div className="flex flex-col gap-5 rounded-[24px] border border-stone-200/80 bg-white px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-600">
              Scheduling
            </p>
            <h2 className="font-display text-[22px] leading-[1.1] text-stone-900">
              Schedule a Conversation
            </h2>
            <p className="mt-2 max-w-sm text-[14px] leading-[1.85] text-stone-500">
              For investor or strategic partner conversations, schedule time through K Scan&apos;s booking link.
            </p>
          </div>
          <a
            href="https://cal.com/k-scan-app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-stone-300 px-7 py-3.5 text-[13px] font-medium text-stone-600 transition-colors hover:border-stone-400 hover:text-stone-900 md:flex-shrink-0"
          >
            Open Cal.com Booking
          </a>
        </div>
      </section>

      {/* ─── Inquiry form (for those without the password) ────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10 md:pb-28">
        <div className="grid gap-8 rounded-[30px] border border-stone-200/80 bg-[#F5F3EF] p-6 md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
          <div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-600">
              Investor Contact
            </p>
            <h2 className="font-display text-[26px] leading-[1.1] text-stone-900">
              Don&apos;t have access yet?
            </h2>
            <p className="mt-4 text-[14px] leading-[1.85] text-stone-500">
              Submit an inquiry and we&apos;ll follow up with credentials and materials. All inquiries are reviewed personally.
            </p>
            <p className="mt-6 text-[12px] leading-[1.75] text-stone-600">
              Prefer email?{" "}
              <a
                href="mailto:kscanai.app@gmail.com"
                className="text-stone-600 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-500"
              >
                kscanai.app@gmail.com
              </a>
            </p>
          </div>

          <div>
            {inquiryState === "success" ? (
              <div className="rounded-[22px] border border-stone-200/80 bg-white p-6">
                <p className="font-display text-[22px] text-stone-900">Request received.</p>
                <p className="mt-3 text-[13px] leading-[1.85] text-stone-500">
                  Thank you. Your investor access request has been received.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-3">
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-stone-600">Name</span>
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
                    <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-stone-600">Email</span>
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
                  <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-stone-600">
                    Firm <span className="normal-case tracking-normal text-stone-300">(optional)</span>
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
                  <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-stone-600">Message</span>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about your interest or what you'd like to receive."
                    value={form.message}
                    onChange={handleChange("message")}
                    className={`${inputBase} resize-none`}
                  />
                </label>
                {inquiryState === "error" && (
                  <p className="text-[12px] text-stone-500">{inquiryError}</p>
                )}
                <button
                  type="submit"
                  disabled={inquiryState === "loading"}
                  className="rounded-full bg-stone-900 px-7 py-3 text-[13px] font-medium text-white transition-colors hover:bg-stone-800 disabled:opacity-60"
                >
                  {inquiryState === "loading" ? "Sending…" : "Request Access"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
