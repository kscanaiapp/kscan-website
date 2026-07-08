import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/ui/SiteNav";
import { surfaces, buttons } from "@/lib/theme";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    absolute: "K Scan AI Beta | Product Status and Early Access",
  },
  description:
    "Follow K Scan AI beta progress across scan-to-style discovery, dressing rooms, StyleChat, TextScan, and upcoming product direction.",
  keywords: [
    "K Scan beta",
    "beta access",
    "AI fashion search beta",
    "visual fashion discovery app",
    "fashion recognition beta",
    "fashion app early access",
  ],
  alternates: {
    canonical: "/beta",
  },
  openGraph: {
    title: "K Scan AI Beta | Product Status and Early Access",
    description:
      "Follow K Scan AI beta progress across scan-to-style discovery, dressing rooms, StyleChat, TextScan, and upcoming product direction.",
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
    title: "K Scan AI Beta | Product Status and Early Access",
    description:
      "Follow K Scan AI beta progress across scan-to-style discovery, dressing rooms, StyleChat, TextScan, and upcoming product direction.",
    images: ["/group-street.jpeg"],
  },
};

// ─── Static data ──────────────────────────────────────────────────────────────

const betaStatus: {
  label: string;
  status: string;
  statusHref?: string;
  dotClass: string;
  badgeClass: string;
}[] = [
  {
    label: "Android Beta",
    status: "Active",
    dotClass: "bg-emerald-400",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    label: "iOS Beta",
    status: "Active",
    dotClass: "bg-emerald-400",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    label: "Current Focus",
    status: "Scan-to-Closet",
    dotClass: "bg-stone-300",
    badgeClass: "border-stone-200 bg-stone-100 text-stone-600",
  },
  {
    label: "VoiceScan",
    status: "Coming Soon",
    dotClass: "bg-orange-400",
    badgeClass: "border-orange-200 bg-orange-50 text-orange-700",
  },
  {
    label: "TextScan",
    status: "Live in Beta",
    dotClass: "bg-emerald-400",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    label: "Dressing Rooms",
    status: "Live in Beta",
    dotClass: "bg-emerald-400",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    label: "Share by Link",
    status: "Live in Beta",
    dotClass: "bg-emerald-400",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    label: "StyleChat",
    status: "Live in Beta",
    dotClass: "bg-emerald-400",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    label: "App Native Face Blurring",
    status: "In Development",
    statusHref: "https://sjkh3b27ibz4g.kimi.page/",
    dotClass: "bg-indigo-400",
    badgeClass: "border-indigo-200 bg-indigo-50 text-indigo-700",
  },
  {
    label: "Smart Glasses *",
    status: "In Development",
    dotClass: "bg-indigo-400",
    badgeClass: "border-indigo-200 bg-indigo-50 text-indigo-700",
  },
];

// Shared status pill renderer — ensures linked and unlinked badges stay identical in size/style.
const StatusBadge = ({
  status,
  statusHref,
  dotClass,
  badgeClass,
}: {
  status: string;
  statusHref?: string;
  dotClass: string;
  badgeClass: string;
}) => {
  const baseClasses =
    "inline-flex w-fit max-w-max shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] leading-none whitespace-nowrap";
  const dot = (
    <span
      className={`inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full ${dotClass}`}
      aria-hidden="true"
    />
  );

  if (statusHref) {
    return (
      <span className={`${baseClasses} ${badgeClass}`}>
        {dot}
        <a
          href={statusHref}
          target="_blank"
          rel="noopener noreferrer"
          className="leading-none underline decoration-stone-400 underline-offset-2 transition-colors hover:decoration-stone-600 hover:opacity-80"
        >
          {status}
        </a>
      </span>
    );
  }

  return (
    <span className={`${baseClasses} ${badgeClass}`}>
      {dot}
      {status}
    </span>
  );
};

const roadmapCards = [
  {
    title: "Collaborative Rooms",
    description:
      "Shared rooms are live in beta. We’re expanding them into richer group planning for trips, events, voting, reactions 🔥, and shared style decisions.",
    badge: "Expanding in Beta",
  },
  {
    title: "Smart Closet",
    description:
      "A connected closet layer for saved scans, Style Memory, StyleChat, and TextScan. We’re exploring how K Scan can help users organize what they own, rediscover saved pieces, describe items by text, and get smarter outfit suggestions from their personal style context.",
    badge: "Research & Design",
  },
  {
    title: "Outfit Remix",
    description:
      "Designing ways to remix inspiration looks with saved closet pieces, similar finds, and retailer-neutral alternatives before moving the experience into beta testing.",
    badge: "In Design",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BetaPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />

      {/* ── 1. Hero + Beta Status ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-16 md:px-10 md:pb-20 md:pt-24">
        <p className="mb-5 font-mono text-[12px] uppercase tracking-[0.22em] text-stone-500">
          01. Beta Center
        </p>
        <h1 className="font-display max-w-xl text-[42px] leading-[1.02] text-stone-900 sm:text-[52px] md:text-[64px]">
          K Scan Beta Center
        </h1>
        <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-stone-500">
          Help shape the future of intelligent closet organization and fashion
          discovery.
        </p>

        {/* Status module + mock image */}
        <div className="mt-10 grid gap-6 md:grid-cols-[5fr_8fr] lg:grid-cols-[0.65fr_1.6fr] md:items-stretch">
          <div className="flex flex-col">
            <div
              className={`${surfaces.linenCard} max-w-md p-6`}
            >
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-stone-500">
                Beta Status
              </p>
              <ul className="space-y-3.5">
                {betaStatus.map(({ label, ...badgeProps }) => (
                  <li key={label} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                    <span className="text-[14px] text-stone-600">{label}</span>
                    <StatusBadge {...badgeProps} />
                  </li>
                ))}
              </ul>
              <div className="mt-5 space-y-1 text-[11px] leading-relaxed text-stone-600">
                <p>
                  *{" "}
                  <a
                    href="https://kscan-glasses-demo.vercel.app/simulator.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 transition-colors hover:text-stone-600"
                  >
                    Meta Browser Demo
                  </a>
                </p>
                <p>
                  **{" "}
                  <a
                    href="https://kscan-google-glasses-demo.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 transition-colors hover:text-stone-600"
                  >
                    Google XR Browser Demo
                  </a>
                </p>
              </div>
            </div>

            <p className="mt-4 max-w-md text-[12px] leading-relaxed text-stone-600">
              Fashion discovery is moving beyond the screen. K Scan is bringing
              real world style recognition into wearable tech through immersive
              hands free visual experiences.
            </p>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-stone-100 shadow-sm md:aspect-auto md:h-full">
            <Image
              src="/images/general-mock.png"
              alt="K Scan smart glasses interface and app bridge mockup"
              fill
              sizes="(max-width: 768px) 100vw, 65vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* ── Divider ────────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <hr className="border-stone-100" />
      </div>

      {/* ── 2. What We're Testing ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <p className="mb-5 font-mono text-[12px] uppercase tracking-[0.22em] text-stone-500">
          02. Current Testing Focus
        </p>
        <h2 className="font-display mb-8 text-[28px] leading-tight text-stone-900 sm:text-[34px]">
          What We&rsquo;re Testing
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Core focus */}
          <div className={`${surfaces.card} p-6`}>
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-stone-600">
              Core Beta Focus
            </p>
            <h3 className="mb-3 text-[15px] font-semibold text-stone-900">
              Scan-to-Closet
            </h3>
            <p className="text-[13px] leading-relaxed text-stone-500">
              The current beta is focused on making scan-to-closet fast,
              reliable, and useful in real wardrobe workflows, including AI
              tagging, closet organization, and wardrobe management end to end.
            </p>
          </div>

          {/* Live beta features — Dressing Rooms */}
          <div className={`${surfaces.linenCard} p-6`}>
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-stone-600">
              Also Live in Beta
            </p>
            <h3 className="mb-3 text-[15px] font-semibold text-stone-900">
              Dressing Rooms &amp; Share by Link
            </h3>
            <p className="text-[13px] leading-relaxed text-stone-500">
              Plan outfits together, compare looks, react with emoji, and keep
              every decision in one place. Native in-app chat keeps
              conversations connected to each look, while StyleDNA helps K Scan
              understand your group&rsquo;s preferences and suggest better options
              over time based on style, weather, and occasion.
            </p>
          </div>

          {/* Live beta features — StyleChat */}
          <div className={`${surfaces.linenCard} p-6`}>
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-stone-600">
              Live in Beta
            </p>
            <h3 className="mb-3 text-[15px] font-semibold text-stone-900">
              StyleChat
            </h3>
            <p className="text-[13px] leading-relaxed text-stone-500">
              A conversational stylist powered by your StyleDNA that learns
              from what you wear, save, and respond to. Get personalized
              recommendations with clear explanations, adapted to your
              preferences, your plans, and the weather so every suggestion
              feels more relevant over time.
            </p>
          </div>

          {/* Feature preview image */}
          <div className="overflow-hidden rounded-xl border border-stone-100 shadow-sm">
            <Image
              src="/images/rooms-chat-beta.png"
              alt="Dressing Rooms chat and collaboration preview"
              width={1536}
              height={1024}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        {/* Mobile beta testing notice */}
        <div className={`${surfaces.card} mt-6 max-w-lg p-6`}>
          <h3 className="mb-3 text-[15px] font-semibold text-stone-900">
            Mobile Beta Testing
          </h3>
          <p className="text-[13px] leading-relaxed text-stone-500">
            K Scan is now in active beta testing on iOS and Android for
            approved testers. Invited users can install the beta through Apple
            TestFlight or Google Play testing. To request access,{" "}
            <Link
              href="/#waitlist"
              className="underline underline-offset-2 transition-colors hover:text-stone-700"
            >
              join the waitlist
            </Link>{" "}
            (18+ only) or{" "}
            <Link
              href="/support"
              className="underline underline-offset-2 transition-colors hover:text-stone-700"
            >
              contact support
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── Divider ────────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <hr className="border-stone-100" />
      </div>

      {/* ── 3. Roadmap Preview ─────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <p className="mb-5 font-mono text-[12px] uppercase tracking-[0.22em] text-stone-500">
          03. Product Direction
        </p>
        <h2 className="font-display mb-3 text-[28px] leading-tight text-stone-900 sm:text-[34px]">
          What We&rsquo;re Exploring Next
        </h2>
        <p className="mb-10 max-w-md text-[13px] leading-relaxed text-stone-500">
          These are directions we&rsquo;re actively thinking through, not
          commitments, but honest signals of where the product is heading.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {roadmapCards.map(({ title, description, badge }) => (
            <div
              key={title}
              className={`${surfaces.linenCard} flex flex-col p-5`}
            >
              <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-stone-600">
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
          <div className="hidden md:flex items-stretch overflow-hidden rounded-xl border border-stone-100 shadow-sm">
            <Image
              src="/dressing-rooms-v2.png"
              alt="Dressing Room collaborative styling preview"
              width={1122}
              height={1402}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <p className="mt-8 text-[12px] text-stone-600">
          Want to influence the roadmap?{" "}
          <a
            href="mailto:kscanai.app@gmail.com?subject=Beta Feedback"
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
        <p className="mb-5 font-mono text-[12px] uppercase tracking-[0.22em] text-stone-500">
          04. Feedback
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
            href="https://docs.google.com/forms/d/e/1FAIpQLScTd8Oc14bwTFOl5q8jPsQ5-RbzdxlkM8zqBjJJvU2v0Ry68g/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
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
        <p className="mb-5 font-mono text-[12px] uppercase tracking-[0.22em] text-stone-500">
          05. Early Access
        </p>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-md">
            <h2 className="font-display mb-3 text-[24px] leading-tight text-stone-900 sm:text-[28px]">
              Not in beta yet?
            </h2>
            <p className="text-[14px] leading-relaxed text-stone-500">
              Request early access and help shape K Scan before launch.
              Invitations are sent in limited waves. You must be 18 or older to participate.
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
