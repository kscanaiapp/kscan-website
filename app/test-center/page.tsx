import type { Metadata } from "next";
import Image from "next/image";
import { SiteNav } from "@/components/ui/SiteNav";
import { surfaces, buttons } from "@/lib/theme";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    absolute: "K Scan AI Test Center | Product Status & What's Next",
  },
  description:
    "Explore the K Scan AI Test Center to see what's live, what we're testing, current product availability, smart-glasses prototypes, feedback opportunities, and what's coming next.",
  keywords: [
    "K Scan AI Test Center",
    "product status",
    "AI fashion search",
    "visual fashion discovery app",
    "fashion recognition",
    "fashion product roadmap",
  ],
  alternates: {
    canonical: "https://kscan.app/test-center",
  },
  openGraph: {
    title: "K Scan AI Test Center | Product Status & What's Next",
    description:
      "Explore the K Scan AI Test Center to see what's live, what we're testing, current product availability, smart-glasses prototypes, feedback opportunities, and what's coming next.",
    url: "https://kscan.app/test-center",
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
    title: "K Scan AI Test Center | Product Status & What's Next",
    description:
      "Explore the K Scan AI Test Center to see what's live, what we're testing, current product availability, smart-glasses prototypes, feedback opportunities, and what's coming next.",
    images: ["/group-street.jpeg"],
  },
};

// ─── Static data ──────────────────────────────────────────────────────────────

type StoreLink = {
  href: string;
  ariaLabel: string;
  platform: "google-play" | "apple";
};

const productStatus: {
  label: string;
  status: string;
  statusHref?: string;
  storeLink?: StoreLink;
  dotClass: string;
  badgeClass: string;
}[] = [
  {
    label: "Android",
    status: "ACTIVE",
    storeLink: {
      href: "https://play.google.com/store/apps/details?id=com.kscanai.app",
      ariaLabel: "Get K Scan AI on Google Play",
      platform: "google-play",
    },
    dotClass: "bg-emerald-400",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    label: "iOS",
    status: "ACTIVE",
    storeLink: {
      href: "https://testflight.apple.com/join/UcxK6GVm",
      ariaLabel: "Get K Scan AI for iOS",
      platform: "apple",
    },
    dotClass: "bg-emerald-400",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    label: "Scan-to-Closet",
    status: "LIVE",
    dotClass: "bg-emerald-400",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    label: "VoiceScan",
    status: "COMING SOON",
    dotClass: "bg-orange-400",
    badgeClass: "border-orange-200 bg-orange-50 text-orange-700",
  },
  {
    label: "TextScan",
    status: "LIVE",
    dotClass: "bg-emerald-400",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    label: "Dressing Rooms",
    status: "LIVE",
    dotClass: "bg-emerald-400",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    label: "Share by Link",
    status: "LIVE",
    dotClass: "bg-emerald-400",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    label: "AI Stylist",
    status: "LIVE",
    dotClass: "bg-emerald-400",
    badgeClass: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  {
    label: "App Native Face Blurring",
    status: "IN DEVELOPMENT",
    dotClass: "bg-indigo-400",
    badgeClass: "border-indigo-200 bg-indigo-50 text-indigo-700",
  },
  {
    label: "Smart Glasses *",
    status: "PROTOTYPE",
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
    title: "Plan With Friends",
    description:
      "Plan a trip, a night on the town, an event, or just decide what to wear together. Dressing Rooms let you share outfit ideas, compare options, react to looks, and keep the conversation connected to each decision.",
    badge: "EXPANDING",
  },
  {
    title: "Deeper Closet Intelligence",
    description:
      "Closet is live. We’re exploring deeper organization, personalization, and outfit-planning capabilities, connecting Signature Style and Elise to help K Scan AI make better use of what you already own.",
    badge: "EXPLORING",
  },
  {
    title: "Outfit Remix",
    description:
      "Designing ways to remix inspiration looks with saved closet pieces, similar finds, and retailer-neutral alternatives before the experience is available in the product.",
    badge: "IN DESIGN",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TestCenterPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />

      {/* ── 1. Hero + Product Status ───────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-16 md:px-10 md:pb-20 md:pt-24">
        <p className="mb-5 font-mono text-[12px] uppercase tracking-[0.22em] text-stone-500">
          01. Test Center
        </p>
        <h1 className="font-display max-w-xl text-[42px] leading-[1.02] text-stone-900 sm:text-[52px] md:text-[64px]">
          K Scan AI Test Center
        </h1>
        <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-stone-500">
          See what&apos;s live, what we&apos;re testing, and what we&apos;re building next.
        </p>

        {/* Status module + mock image */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] lg:items-start">
          <div className="max-w-md">
            <div className={`${surfaces.linenCard} p-6`}>
              <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-stone-500">
                Product Status
              </p>
              <ul className="space-y-3.5">
                {productStatus.map(({ label, storeLink, ...badgeProps }) => (
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

        <div className="grid gap-6 sm:grid-cols-3 sm:items-start">
          {/* Current focus */}
          <div className={`${surfaces.card} p-6`}>
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-stone-600">
              Current Focus
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="mb-3 text-[15px] font-semibold text-stone-900">
                  Scan-to-Closet
                </h3>
                <p className="text-[13px] leading-relaxed text-stone-500">
                  We&apos;re focused on making scan-to-closet fast, reliable, and
                  useful in real wardrobe workflows, including AI tagging, closet
                  organization, and wardrobe management end to end.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-[15px] font-semibold text-stone-900">
                  Smarter Product Matching
                </h3>
                <p className="text-[13px] leading-relaxed text-stone-500">
                  Improving how K Scan identifies brands, materials, silhouettes, and
                  product details, then connects each scan to more relevant shopping
                  results across retailers.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-[15px] font-semibold text-stone-900">
                  Scanner Accuracy &amp; Recognition
                </h3>
                <p className="text-[13px] leading-relaxed text-stone-500">
                  Refining item detection, brand awareness, duplicate handling, and
                  multi-item recognition so scans are more accurate without slowing down
                  the experience.
                </p>
              </div>
            </div>
          </div>

          {/* Newly released — Dressing Rooms */}
          <div className={`${surfaces.linenCard} p-6`}>
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-stone-600">
              Newly Released
            </p>
            <div className="space-y-6">
              <div>
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
              <div>
                <h3 className="mb-3 text-[15px] font-semibold text-stone-900">
                  Signature Style
                </h3>
                <p className="text-[13px] leading-relaxed text-stone-500">
                  K Scan can learn from the preferences you choose to share, helping
                  Elise make future outfit, styling, and discovery suggestions more
                  relevant to you.
                </p>
              </div>
              <div>
                <h3 className="mb-3 text-[15px] font-semibold text-stone-900">
                  Multi-Item Outfit Scanning
                </h3>
                <p className="text-[13px] leading-relaxed text-stone-500">
                  K Scan can identify multiple fashion items within a single image and
                  return separate results for each piece, making full-look scanning more
                  useful.
                </p>
              </div>
            </div>
          </div>

          {/* Live — Elise */}
          <div className={`${surfaces.linenCard} p-6`}>
            <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-stone-600">
              Live
            </p>
            <h3 className="mb-3 text-[15px] font-semibold text-stone-900">
              Elise, Your Customizable AI Stylist
            </h3>
            <p className="text-[13px] leading-relaxed text-stone-500">
              Elise is a personalized AI stylist designed to get to know your style over time. You can customize how she interacts with you, ask questions naturally, and use her to build outfits, compare looks, style pieces you scan or save, and discover new ways to wear what you already own.
            </p>
            <p className="mt-3 text-[13px] leading-relaxed text-stone-500">
              Elise can respond with natural speech and expressive animation, creating a more personal styling experience that feels conversational rather than transactional. As you share preferences and use K Scan AI, Signature Style helps Elise make her recommendations more relevant to you.
            </p>
          </div>
        </div>

        {/* Availability */}
        <div className={`${surfaces.card} mt-6 max-w-lg p-6`}>
          <h3 className="mb-3 text-[15px] font-semibold text-stone-900">
            Availability
          </h3>
          <p className="text-[13px] leading-relaxed text-stone-500">
            K Scan AI is available on Android and iOS. Download the app from
            Google Play or the Apple App Store to start scanning fashion, saving
            discoveries, building your Closet, styling with Elise, and exploring
            new looks.
          </p>
        </div>
      </section>

      {/* ── Divider ────────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <hr className="border-stone-100" />
      </div>

      {/* ── 4. Feedback CTA ────────────────────────────────────────────────── */}
      <section
        id="feedback"
        className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24"
      >
        <p className="mb-5 font-mono text-[12px] uppercase tracking-[0.22em] text-stone-500">
          04. Feedback
        </p>
        <div className="max-w-xl">
          <h2 className="font-display mb-4 text-[28px] leading-tight text-stone-900 sm:text-[34px]">
            Help shape what we build next.
          </h2>
          <p className="mb-8 text-[14px] leading-relaxed text-stone-500">
            Tell us what worked, what didn&apos;t, and what you want K Scan AI to
            do next. Feedback from people using the product directly helps guide
            improvements and future features.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScTd8Oc14bwTFOl5q8jPsQ5-RbzdxlkM8zqBjJJvU2v0Ry68g/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className={buttons.primaryLg}
          >
            Send Us Feedback
          </a>
        </div>
      </section>

      {/* ── Divider ────────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <hr className="border-stone-100" />
      </div>

      {/* ── 5. What's next ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <p className="mb-5 font-mono text-[12px] uppercase tracking-[0.22em] text-stone-500">
          05. What&apos;s Next
        </p>
        <h2 className="font-display mb-3 text-[28px] leading-tight text-stone-900 sm:text-[34px]">
          What&apos;s Next
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
          Want to influence what&apos;s next?{" "}
          <a
            href="mailto:kscanai.app@gmail.com?subject=Product Feedback"
            className="underline underline-offset-2 transition-colors hover:text-stone-600"
          >
            Send us your top pick.
          </a>
        </p>
      </section>

    </main>
  );
}
