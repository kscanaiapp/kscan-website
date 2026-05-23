import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/ui/SiteNav";
import { surfaces, buttons } from "@/lib/theme";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    absolute: "K Scan Beta Center | Early Access & Product Roadmap",
  },
  description:
    "Explore the K Scan beta, current testing focus, roadmap priorities, and early access information.",
  keywords: [
    "K Scan beta",
    "beta access",
    "closet organizer app",
    "scan to closet beta",
    "AI wardrobe app",
    "fashion app early access",
  ],
  alternates: {
    canonical: "/beta",
  },
  openGraph: {
    title: "K Scan Beta Center | Early Access & Product Roadmap",
    description:
      "Explore the K Scan beta, current testing focus, roadmap priorities, and early access information.",
    url: "https://kscan.app/beta",
    siteName: "K Scan AI",
    locale: "en_US",
    images: [
      {
        url: "/group-street.jpeg",
        width: 2048,
        height: 1365,
        alt: "K Scan AI visual fashion search preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "K Scan Beta Center | Early Access & Product Roadmap",
    description:
      "Explore the K Scan beta, current testing focus, roadmap priorities, and early access information.",
    images: ["/group-street.jpeg"],
  },
};

// ─── Static data ──────────────────────────────────────────────────────────────

const betaStatus = [
  {
    label: "Android Beta",
    status: "Active",
    dotClass: "bg-emerald-400",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    label: "iOS",
    status: "Preparing",
    dotClass: "bg-amber-400",
    badgeClass: "border-amber-200 bg-amber-50 text-amber-700",
  },
  {
    label: "Current Focus",
    status: "Scan-to-Closet",
    dotClass: "bg-stone-300",
    badgeClass: "border-stone-200 bg-stone-100 text-stone-600",
  },
];

const roadmapCards = [
  {
    title: "Collaborative Rooms",
    description:
      "Style together for trips, events, and group outfit decisions.",
    badge: "Exploring",
  },
  {
    title: "Circular Closet",
    description:
      "Secondhand-first recommendations and resale-aware wardrobe planning.",
    badge: "Exploring",
  },
  {
    title: "StyleChat",
    description:
      "Conversational styling guidance designed around personal wardrobe context.",
    badge: "Coming Soon",
  },
  {
    title: "Outfit Remix",
    description:
      "Recreate inspiration looks using pieces already in your closet.",
    badge: "Coming Soon",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BetaPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />

      {/* ── 1. Hero + Beta Status ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-stone-400">
          01 — Beta Center
        </p>
        <h1 className="font-display max-w-xl text-[42px] leading-[1.02] text-stone-900 sm:text-[52px] md:text-[64px]">
          K Scan Beta Center
        </h1>
        <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-stone-500">
          Help shape the future of intelligent closet organization and fashion
          discovery.
        </p>

        {/* Status module */}
        <div
          className={`${surfaces.linenCard} mt-10 max-w-sm p-5 sm:max-w-md`}
        >
          <p className="mb-4 font-mono text-[9px] uppercase tracking-[0.22em] text-stone-400">
            Beta Status
          </p>
          <ul className="space-y-3">
            {betaStatus.map(({ label, status, dotClass, badgeClass }) => (
              <li key={label} className="flex items-center justify-between">
                <span className="text-[13px] text-stone-600">{label}</span>
                <span
                  className={`flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.12em] ${badgeClass}`}
                >
                  <span
                    className={`inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full ${dotClass}`}
                    aria-hidden="true"
                  />
                  {status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Divider ────────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <hr className="border-stone-100" />
      </div>

      {/* ── 2. What We're Testing ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-stone-400">
          02 — Current Testing Focus
        </p>
        <h2 className="font-display mb-8 text-[28px] leading-tight text-stone-900 sm:text-[34px]">
          What We&rsquo;re Testing
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Core focus */}
          <div className={`${surfaces.card} p-6`}>
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-stone-400">
              Core Beta Focus
            </p>
            <h3 className="mb-3 text-[15px] font-semibold text-stone-900">
              Scan-to-Closet
            </h3>
            <p className="text-[13px] leading-relaxed text-stone-500">
              The current beta is focused on making scan-to-closet fast,
              reliable, and useful in real wardrobe workflows — AI tagging,
              closet organization, and wardrobe management end to end.
            </p>
          </div>

          {/* Experimental */}
          <div className={`${surfaces.linenCard} p-6`}>
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-stone-400">
              Also In Testing
            </p>
            <h3 className="mb-3 text-[15px] font-semibold text-stone-900">
              Experimental Features
            </h3>
            <p className="text-[13px] leading-relaxed text-stone-500">
              Dressing Rooms and Share Rooms may appear during testing. These
              are early-stage and not the core focus — your feedback on these
              helps us understand how far to take them.
            </p>
          </div>
        </div>
      </section>

      {/* ── Divider ────────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <hr className="border-stone-100" />
      </div>

      {/* ── 3. Roadmap Preview ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-stone-400">
          03 — Product Direction
        </p>
        <h2 className="font-display mb-3 text-[28px] leading-tight text-stone-900 sm:text-[34px]">
          What We&rsquo;re Exploring Next
        </h2>
        <p className="mb-10 max-w-md text-[13px] leading-relaxed text-stone-500">
          These are directions we&rsquo;re actively thinking through — not
          commitments, but honest signals of where the product is heading.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {roadmapCards.map(({ title, description, badge }) => (
            <div
              key={title}
              className={`${surfaces.linenCard} flex flex-col p-5`}
            >
              <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-stone-400">
                {badge}
              </p>
              <h3 className="mb-2 text-[14px] font-semibold text-stone-900">
                {title}
              </h3>
              <p className="text-[12px] leading-relaxed text-stone-500">
                {description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[12px] text-stone-400">
          Want to influence the roadmap?{" "}
          <a
            href="mailto:beta@kscan.app?subject=Beta Feedback"
            className="underline underline-offset-2 transition-colors hover:text-stone-600"
          >
            Send us your top pick.
          </a>
        </p>
      </section>

      {/* ── Divider ────────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <hr className="border-stone-100" />
      </div>

      {/* ── 4. Feedback CTA ────────────────────────────────────────────────── */}
      <section
        id="beta-feedback"
        className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24"
      >
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-stone-400">
          04 — Feedback
        </p>
        <div className="max-w-xl">
          <h2 className="font-display mb-4 text-[28px] leading-tight text-stone-900 sm:text-[34px]">
            Tell Us What You Find
          </h2>
          <p className="mb-8 text-[14px] leading-relaxed text-stone-500">
            Found a bug, a confusing moment, or a feature you want prioritized?
            Send feedback directly to the K Scan team.
          </p>
          <a
            href="mailto:beta@kscan.app?subject=Beta Feedback"
            className={buttons.primaryLg}
          >
            Send Beta Feedback
          </a>
        </div>
      </section>

      {/* ── Divider ────────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <hr className="border-stone-100" />
      </div>

      {/* ── 5. Beta Access Reinforcement ───────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.22em] text-stone-400">
          05 — Early Access
        </p>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-md">
            <h2 className="font-display mb-3 text-[24px] leading-tight text-stone-900 sm:text-[28px]">
              Not in beta yet?
            </h2>
            <p className="text-[14px] leading-relaxed text-stone-500">
              Request early access and help shape K Scan before launch.
              Invitations are sent in limited waves.
            </p>
          </div>
          <Link href="/#waitlist" className={`${buttons.primaryLg} flex-shrink-0`}>
            Request Beta Access
          </Link>
        </div>
      </section>
    </main>
  );
}
