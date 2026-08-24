import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/ui/SiteNav";
import { surfaces, buttons } from "@/lib/theme";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    absolute: "K Scan AI Beta | Product Status and App Access",
  },
  description:
    "Explore the current K Scan AI beta, see which features are live, get the Android app through Google Play, or access the iOS beta through TestFlight.",
  keywords: [
    "K Scan AI beta",
    "beta access",
    "AI fashion search beta",
    "visual fashion discovery app",
    "fashion recognition beta",
    "fashion app beta access",
  ],
  alternates: {
    canonical: "/beta",
  },
  openGraph: {
    title: "K Scan AI Beta | Product Status and App Access",
    description:
      "Explore the current K Scan AI beta, see which features are live, get the Android app through Google Play, or access the iOS beta through TestFlight.",
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
    title: "K Scan AI Beta | Product Status and App Access",
    description:
      "Explore the current K Scan AI beta, see which features are live, get the Android app through Google Play, or access the iOS beta through TestFlight.",
    images: ["/group-street.jpeg"],
  },
};

// ─── Static data ──────────────────────────────────────────────────────────────

type StoreLink = {
  href: string;
  ariaLabel: string;
  platform: "google-play" | "testflight";
};

const betaStatus: {
  label: string;
  status: string;
  statusHref?: string;
  storeLink?: StoreLink;
  dotClass: string;
  badgeClass: string;
}[] = [
  {
    label: "Android Beta",
    status: "Active",
    storeLink: {
      href: "https://play.google.com/store/apps/details?id=com.kscanai.app",
      ariaLabel: "Get K Scan AI on Google Play",
      platform: "google-play",
    },
    dotClass: "bg-emerald-400",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    label: "iOS Beta",
    status: "Active",
    storeLink: {
      href: "https://testflight.apple.com/join/UcxK6GVm",
      ariaLabel: "Open K Scan AI beta access in TestFlight",
      platform: "testflight",
    },
    dotClass: "bg-emerald-400",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    label: "Scan-to-Closet",
    status: "Live in Beta",
    dotClass: "bg-emerald-400",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
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
    label: "AI Stylist",
    status: "Live in Beta",
    dotClass: "bg-emerald-400",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    label: "App Native Face Blurring",
    status: "In Development",
    dotClass: "bg-indigo-400",
    badgeClass: "border-indigo-200 bg-indigo-50 text-indigo-700",
  },
  {
    label: "Smart Glasses *",
    status: "Browser-Enabled Prototype",
    dotClass: "bg-indigo-400",
    badgeClass: "border-indigo-200 bg-indigo-50 text-indigo-700",
  },
];

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      focusable="false"
    >
      <path
        fill="#EA4335"
        d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85C3.34 21.6 3 21.09 3 20.5z"
      />
      <path
        fill="#FBBC04"
        d="M16.81 15.12 13.69 12l3.12-3.12 3.35 1.91c1.01.57 1.01 1.85 0 2.42l-3.35 1.91z"
      />
      <path
        fill="#4285F4"
        d="M3.84 21.85 13.69 12l3.12 3.12-10.46 6.87c-1.08.59-2.26.4-2.51-.14z"
      />
      <path
        fill="#34A853"
        d="M3.84 2.15C4.09 1.61 5.27 1.42 6.35 2.01L16.81 8.88 13.69 12 3.84 2.15z"
      />
    </svg>
  );
}

function AppleMarkIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
      />
    </svg>
  );
}

function PlatformIconLink({ storeLink }: { storeLink: StoreLink }) {
  const icon =
    storeLink.platform === "google-play" ? (
      <GooglePlayIcon className="h-5 w-5" />
    ) : (
      <AppleMarkIcon className="h-5 w-5 text-stone-800" />
    );

  return (
    <a
      href={storeLink.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={storeLink.ariaLabel}
      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-stone-700 transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F4F0EA]"
    >
      {icon}
    </a>
  );
}

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
    "inline-flex max-w-[9.5rem] items-center gap-2 rounded-full border px-3 py-1.5 text-center text-[11px] font-medium uppercase leading-tight tracking-[0.12em] whitespace-normal sm:max-w-[15rem]";
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
          className="underline decoration-stone-400 underline-offset-2 transition-colors hover:decoration-stone-600 hover:opacity-80"
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
    title: "Deeper Closet Intelligence",
    description:
      "Closet is live in beta. We’re exploring deeper organization, personalization, and outfit-planning capabilities, connecting Signature Style and Elise to help K Scan AI make better use of what you already own.",
    badge: "Exploring",
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
          K Scan AI Beta Center
        </h1>
        <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-stone-500">
          Help shape the future of intelligent closet organization and fashion
          discovery.
        </p>

        {/* Status module + mock image */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:items-start">
          <div className="max-w-md">
            <div className={`${surfaces.linenCard} p-6`}>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-stone-500">
                Beta Status
              </p>
              <ul className="space-y-3.5">
                {betaStatus.map(({ label, storeLink, ...badgeProps }) => (
                  <li key={label} className="min-w-0">
                    <div className="flex w-full items-start justify-between gap-x-3">
                      <div className="flex min-w-0 shrink items-center gap-2">
                        <span className="text-[14px] leading-snug text-stone-600 break-words">
                          {label}
                        </span>
                        {storeLink ? (
                          <PlatformIconLink storeLink={storeLink} />
                        ) : null}
                      </div>
                      <StatusBadge {...badgeProps} />
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-5 space-y-1 text-[11px] leading-relaxed text-stone-600">
                <p>
                  *{" "}
                  <a
                    href="/simulator/kscan-simulator-v5_3.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 transition-colors hover:text-stone-600"
                  >
                    Smart Glasses Demo
                  </a>
                </p>
                <p>
                  **{" "}
                  <a
                    href="https://kscan-visionos-demo.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 transition-colors hover:text-stone-600"
                  >
                    Apple Vision Pro Browser Demo
                  </a>
                </p>
              </div>
            </div>

            <p className="mt-4 text-[12px] leading-relaxed text-stone-600">
              K Scan AI is exploring browser-enabled smart glasses experiences
              through a unified simulated demo environment, alongside a
              spatial-commerce simulation of the visionOS Experience for Apple
              Vision Pro.
            </p>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-stone-200/80 shadow-[0_16px_36px_rgba(35,28,22,0.06)]">
            <Image
              src="/wearables-telfar.jpeg"
              alt="Concept view through a K Scan AI smart glasses heads-up display, identifying a Telfar bag and other fashion items on a city street"
              width={2752}
              height={1536}
              className="h-full w-full object-cover"
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

        <div className="grid gap-6 sm:grid-cols-3">
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
              Save outfit ideas in Dressing Rooms, compare options, share a
              link, and keep reactions and conversations connected to each
              look. Signature Style helps make future suggestions more
              relevant to the preferences you share.
            </p>
          </div>

          {/* Live beta features — StyleChat */}
          <div className={`${surfaces.linenCard} p-6`}>
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-stone-600">
              Live in Beta
            </p>
            <h3 className="mb-3 text-[15px] font-semibold text-stone-900">
              Elise, Your AI Stylist
            </h3>
            <p className="text-[13px] leading-relaxed text-stone-500">
              Ask questions, explore styling options, compare looks, and discover new ways to wear what you scan and save. Elise uses your preferences and Signature Style to provide personalized recommendations with clear, relevant explanations.
            </p>
          </div>
        </div>

        {/* Mobile beta testing notice */}
        <div className={`${surfaces.card} mt-6 max-w-lg p-6`}>
          <h3 className="mb-3 text-[15px] font-semibold text-stone-900">
            Mobile Beta Testing
          </h3>
          <p className="text-[13px] leading-relaxed text-stone-500">
            K Scan AI is now available in beta on Android and iOS. Android users
            can join open testing through Google Play, while iOS users can
            access the beta through TestFlight. Users must be 18 or older to
            participate, or{" "}
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
            Send feedback directly to the K Scan AI team.
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

      {/* ── 5. Get the App ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <p className="mb-5 font-mono text-[12px] uppercase tracking-[0.22em] text-stone-500">
          05. Get the App
        </p>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-md">
            <h2 className="font-display mb-3 text-[24px] leading-tight text-stone-900 sm:text-[28px]">
              Start Testing K Scan AI
            </h2>
            <p className="text-[14px] leading-relaxed text-stone-500">
              Download the Android beta through Google Play or access the iOS beta through
              TestFlight. Beta users can also send feedback directly to the K Scan AI team.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col items-start gap-4 sm:items-end">
            <Link href="/download" className={`fashion-cursor ${buttons.primaryLg}`}>
              Get the App
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScTd8Oc14bwTFOl5q8jPsQ5-RbzdxlkM8zqBjJJvU2v0Ry68g/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-stone-600 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-700 hover:decoration-stone-400"
            >
              Send Beta Feedback
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
