import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/ui/SiteNav";
import { buttons, surfaces } from "@/lib/theme";

// ─── Metadata ─────────────────────────────────────────────────────────────

const PAGE_TITLE = "K Scan AI Features | Visual Fashion Search, AI Styling & Shopping";
const PAGE_DESCRIPTION =
  "Scan fashion from real life, photos, and screenshots. Organize what you own in Closet, style it with Elise, and explore product matches and alternatives across retailers. Available now.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESCRIPTION,
  keywords: [
    "AI fashion search",
    "visual fashion search app",
    "find clothes from photos",
    "identify outfits from screenshots",
    "AI stylist app",
    "digital closet app",
  ],
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: "https://kscan.app/features",
    siteName: "K Scan AI",
    locale: "en_US",
    images: [
      {
        url: "/group-street.jpeg",
        width: 2048,
        height: 1365,
        alt: "Three women in coordinated street-style outfits walking and talking on a city sidewalk",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: ["/group-street.jpeg"],
  },
};

// ─── Status vocabulary ────────────────────────────────────────────────────

/**
 * Badges mark a future-state distinction only. A feature that is part of the
 * current product carries no badge.
 */
type Status = "Coming Soon" | "Exploring" | "Preview";

/** Verified, non-numeric product facts. No usage metrics are published here. */
const PROOF_POINTS = [
  "Available now",
  "AI-powered fashion search",
  "Retailer-neutral discovery",
];

const PILLARS = [
  { id: "scan-discover", label: "Scan & Discover" },
  { id: "organize", label: "Organize" },
  { id: "style", label: "Style" },
  { id: "shop", label: "Shop" },
];

// ─── Structured-data feature list ─────────────────────────────────────────
// Derived from the feature blocks actually rendered on this page.

const SCHEMA_FEATURES: { name: string; description: string }[] = [
  {
    name: "Visual Search",
    description:
      "Scan fashion from real life, photos, screenshots, and supported saved visual sources, then explore ranked product matches and alternatives.",
  },
  {
    name: "Screenshots & Saved Frames",
    description:
      "Turn a photo, screenshot, social post, or supported saved video frame into the beginning of a fashion search.",
  },
  {
    name: "Mirror Selfie",
    description:
      "Turn a mirror or selfie photo into a Closet starting point. K Scan AI identifies the fashion you are wearing so you can move what is yours toward Closet.",
  },
  {
    name: "Closet",
    description: "Organize the fashion you own so it can become context for styling and outfit planning.",
  },
  {
    name: "Recent Scans",
    description: "Revisit visual searches and the products behind them without digging through your camera roll.",
  },
  {
    name: "Inspiration",
    description:
      "Save the inspiration you want to return to, kept distinct from the discoveries in Recent Scans and the items you own in Closet.",
  },
  {
    name: "Elise, your AI stylist",
    description:
      "Ask how to wear an item, style something from Closet, or think through an outfit. StyleChat is how you talk with Elise.",
  },
  {
    name: "Signature Style",
    description:
      "Saved items, styling preferences, and feedback sharpen future recommendations over time.",
  },
  {
    name: "Dressing Rooms",
    description:
      "Plan looks together, compare options, share a link, and keep reactions connected to the items being considered.",
  },
  {
    name: "Spoken Responses",
    description: "Where voice is enabled, Elise can read eligible styling responses aloud.",
  },
  {
    name: "One View, Multiple Retailers",
    description:
      "Explore ranked matches and useful alternatives across retailer pathways in one view, then continue to the retailer to shop.",
  },
  {
    name: "Price-Tier Awareness",
    description: "Explore options across price tiers, including lower-priced alternatives when available.",
  },
];

// ─── Presentational pieces ────────────────────────────────────────────────

const STATUS_STYLES: Record<Status, string> = {
  "Coming Soon": "bg-stone-100 text-stone-700 ring-stone-300",
  Exploring: "bg-white text-stone-600 ring-stone-300",
  Preview: "bg-indigo-50 text-indigo-800 ring-indigo-200",
};

function StatusBadge({ status, dark = false }: { status: Status; dark?: boolean }) {
  const tone = dark ? "bg-white/10 text-stone-100 ring-white/20" : STATUS_STYLES[status];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] ring-1 ${tone}`}
    >
      {status}
    </span>
  );
}

function PlatformTag({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span className={`text-[12px] tracking-[0.02em] ${dark ? "text-stone-400" : "text-stone-600"}`}>
      {children}
    </span>
  );
}

function FeatureMeta({
  status,
  platforms,
  dark = false,
}: {
  /** Omit for features that are part of the current product. */
  status?: Status;
  /** Omit where a feature carries no platform qualifier. */
  platforms?: string;
  dark?: boolean;
}) {
  if (!status && !platforms) return null;

  return (
    <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2">
      {status ? <StatusBadge status={status} dark={dark} /> : null}
      {platforms ? <PlatformTag dark={dark}>{platforms}</PlatformTag> : null}
    </div>
  );
}

function SectionHeader({
  id,
  eyebrow,
  heading,
  intro,
}: {
  id: string;
  eyebrow: string;
  heading: string;
  intro: string;
}) {
  return (
    <div className="mb-12 max-w-2xl md:mb-16">
      <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-violet-700">{eyebrow}</p>
      <h2
        id={`${id}-heading`}
        className="mb-4 font-display text-[34px] font-medium leading-[1.06] text-stone-900 md:text-[46px]"
      >
        {heading}
      </h2>
      <p className="text-[16px] leading-[1.8] text-stone-600 md:text-[17px]">{intro}</p>
    </div>
  );
}

function MicroCta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-violet-700 underline decoration-violet-200 underline-offset-4 transition-colors hover:text-violet-900 hover:decoration-violet-400 focus:outline-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
    >
      {children}
      <span aria-hidden="true">&rarr;</span>
    </Link>
  );
}

/**
 * Standard feature block: copy on one side, optional visual on the other.
 * `reverse` flips the visual to the left on large screens.
 */
function FeatureBlock({
  id,
  name,
  status,
  platforms,
  children,
  image,
  imageAspect = "aspect-[4/3]",
  imageFit = "object-cover",
  cta,
  reverse = false,
}: {
  id?: string;
  name: string;
  /** Omit for features that are part of the current product. */
  status?: Status;
  /** Omit where a feature carries no platform qualifier. */
  platforms?: string;
  children: React.ReactNode;
  image?: { src: string; alt: string; position?: string };
  imageAspect?: string;
  imageFit?: string;
  cta?: { href: string; label: string };
  reverse?: boolean;
}) {
  return (
    <article
      id={id}
      className={`grid gap-8 border-t border-stone-200/70 pt-10 md:gap-12 md:pt-12 ${
        image ? "lg:grid-cols-2 lg:items-center" : ""
      } ${id ? "scroll-mt-32 md:scroll-mt-24" : ""}`}
    >
      <div className={reverse ? "lg:order-2" : ""}>
        <FeatureMeta status={status} platforms={platforms} />
        <h3 className="mb-4 font-display text-[26px] font-medium leading-[1.14] text-stone-900 md:text-[32px]">
          {name}
        </h3>
        <div className="space-y-4 text-[15px] leading-[1.82] text-stone-600">{children}</div>
        {cta ? <MicroCta href={cta.href}>{cta.label}</MicroCta> : null}
      </div>

      {image ? (
        <div className={reverse ? "lg:order-1" : ""}>
          <div className={surfaces.imageFrame}>
            <div className={`relative w-full overflow-hidden rounded-[14px] ${imageAspect}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 1024px) 92vw, 46vw"
                className={`${imageFit} ${image.position ?? ""}`}
              />
            </div>
          </div>
        </div>
      ) : null}
    </article>
  );
}

/** Dark future-facing card, visually distinct from the live-product blocks. */
function FutureCard({
  status,
  heading,
  body,
  footnote,
  cta,
  image,
}: {
  status: Status;
  heading: string;
  body: string;
  footnote?: string;
  cta: { href: string; label: string; external?: boolean };
  image?: { src: string; alt: string };
}) {
  const ctaClasses =
    "inline-flex w-fit items-center gap-1.5 rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-white/[0.14] focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950";

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-stone-950 shadow-[0_22px_60px_rgba(28,22,16,0.14)]">
      {image ? (
        <div className="relative aspect-[16/9] w-full">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 1024px) 92vw, 46vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,9,0.1),rgba(12,10,9,0.72))]" />
        </div>
      ) : (
        /* Typographic cover for cards with no real product visual — keeps the
           future-facing cards balanced without fabricating UI. */
        <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden bg-[radial-gradient(120%_120%_at_50%_0%,rgba(124,58,237,0.22),rgba(12,10,9,0)_62%)]">
          <span
            aria-hidden="true"
            className="font-display text-[84px] font-medium leading-none text-white/90 md:text-[104px]"
          >
            {heading}
          </span>
          <div className="absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(167,139,250,0.5),transparent)]" />
        </div>
      )}

      <div className="flex flex-1 flex-col p-7 md:p-9">
        <div className="mb-4">
          <StatusBadge status={status} dark />
        </div>
        <h3 className="mb-4 font-display text-[28px] font-medium leading-[1.08] text-white md:text-[34px]">
          {heading}
        </h3>
        <p className="mb-4 text-[15px] leading-[1.82] text-stone-300">{body}</p>
        {footnote ? <p className="mb-6 text-[13px] leading-[1.7] text-stone-400">{footnote}</p> : null}
        <div className="mt-auto pt-2">
          {cta.external ? (
            <a href={cta.href} target="_blank" rel="noopener noreferrer" className={ctaClasses}>
              {cta.label}
              <span aria-hidden="true">&rarr;</span>
            </a>
          ) : (
            <Link href={cta.href} className={ctaClasses}>
              {cta.label}
              <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────

export default function FeaturesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "K Scan AI",
        applicationCategory: "ShoppingApplication",
        operatingSystem: "iOS, Android",
        url: "https://kscan.app",
        description: PAGE_DESCRIPTION,
        featureList: SCHEMA_FEATURES.map((feature) => feature.name),
      },
      {
        "@type": "ItemList",
        name: "K Scan AI Features",
        itemListOrder: "https://schema.org/ItemListOrderAscending",
        numberOfItems: SCHEMA_FEATURES.length,
        itemListElement: SCHEMA_FEATURES.map((feature, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: feature.name,
          description: feature.description,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://kscan.app" },
          { "@type": "ListItem", position: 2, name: "Features", item: "https://kscan.app/features" },
        ],
      },
    ],
  };

  return (
    <main id="main-content" className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <SiteNav />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section aria-labelledby="features-hero-heading" className="mx-auto max-w-7xl px-6 pb-14 pt-12 md:px-10 md:pb-20 md:pt-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-16">
          <div>
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.2em] text-violet-700">Features</p>
            <h1
              id="features-hero-heading"
              className="mb-6 font-display text-[40px] font-medium leading-[1.02] text-stone-900 sm:text-[48px] md:text-[62px]"
            >
              See it. Scan it.{" "}
              <br />
              Style it. Shop it.
            </h1>
            <p className="mb-6 max-w-xl text-[16px] leading-[1.82] text-stone-600 md:text-[17px]">
              K Scan AI turns real-world inspiration into shoppable fashion. Scan garments from life, photos, or
              screenshots. Organize what you own. Style it with Elise. Explore products and alternatives across
              retailers &mdash; all in one app.
            </p>

            <p className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-[13px] font-medium text-violet-800">
              <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-violet-600" />
              Available now.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/download" className={`fashion-cursor text-center ${buttons.primaryLg}`}>
                Get the App
              </Link>
              <Link
                href="/demo"
                className="rounded-full border border-stone-300 px-8 py-4 text-center text-[14px] font-medium text-stone-800 transition-colors hover:border-stone-400 hover:bg-stone-50"
              >
                Watch the Demo
              </Link>
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-[28px] bg-[#F5F1EB] shadow-[0_18px_50px_rgba(28,22,16,0.08)] ring-1 ring-black/5">
              <div className="relative aspect-[5/4]">
                <Image
                  src="/group-street.jpeg"
                  alt="Three women in coordinated street-style outfits walking and talking on a city sidewalk"
                  fill
                  priority
                  sizes="(max-width: 1024px) 92vw, 46vw"
                  className="object-cover object-[center_25%]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,240,233,0.02),rgba(34,28,24,0.12))]" />
              </div>
            </div>
          </div>
        </div>

        {/* Proof strip — verified, non-numeric product facts */}
        <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 border-t border-stone-200/70 pt-8 md:mt-16">
          {PROOF_POINTS.map((point) => (
            <li key={point} className="flex items-center gap-2 text-[13px] text-stone-600">
              <span aria-hidden="true" className="h-1 w-1 rounded-full bg-violet-500" />
              {point}
            </li>
          ))}
        </ul>
      </section>

      {/* ── Pillar navigation ─────────────────────────────────────────── */}
      <nav
        aria-label="Feature sections"
        className="border-b border-stone-200/70 bg-[#FAFAF8]/95 backdrop-blur-sm"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <ul className="flex flex-wrap items-center gap-x-2 gap-y-1 py-3 md:gap-x-4">
            {PILLARS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="inline-flex rounded-full px-3 py-2 text-[12px] font-medium uppercase tracking-[0.12em] text-stone-600 transition-colors hover:bg-white hover:text-stone-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── 1. Scan & Discover ────────────────────────────────────────── */}
      <section
        id="scan-discover"
        aria-labelledby="scan-discover-heading"
        className="scroll-mt-32 bg-[#FAFAF8] py-16 md:scroll-mt-24 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeader
            id="scan-discover"
            eyebrow="01 — Scan & Discover"
            heading="Scan & Discover"
            intro="Start with what you see, not the words you can remember."
          />

          <div className="space-y-14 md:space-y-20">
            <FeatureBlock
              name="Visual Search"
              image={{
                src: "/how-it-works/identify-style-parse.png",
                alt: "K Scan AI detecting garment type, color, and silhouette inside an outfit photo.",
                position: "object-top",
              }}
              cta={{ href: "/#how-it-works", label: "See How It Works" }}
            >
              <p>
                Scan fashion from real life, photos, screenshots, saved images, and other supported visual sources.
              </p>
              <p>
                K Scan AI analyzes fashion-specific signals &mdash; garment type, color, silhouette, material,
                layering, and styling context &mdash; then surfaces ranked product matches and useful alternatives.
              </p>
            </FeatureBlock>

            <FeatureBlock
              name="Screenshots & Saved Frames"
              reverse
              image={{
                src: "/how-it-works/capture-frame-the-look.png",
                alt: "A fashion look framed inside the K Scan AI capture viewfinder.",
                position: "object-top",
              }}
            >
              <p>
                That outfit in your camera roll, screenshot, social post, or supported saved frame can become the
                beginning of a fashion search.
              </p>
              <p>
                Scan inspiration from TikTok, Instagram, Pinterest, editorial images, or saved photos without
                describing the outfit manually.
              </p>
            </FeatureBlock>

            <FeatureBlock
              name="Mirror Selfie"
              image={{
                src: "/mirror-selfie.jpeg",
                alt: "Mirror selfie used as a Closet starting point in K Scan AI.",
                position: "object-top",
              }}
              imageAspect="aspect-[4/5]"
            >
              <p>Turn a mirror or selfie photo into a Closet starting point.</p>
              <p>
                K Scan AI identifies the fashion you are wearing, lets you review the detected pieces, and helps move
                the items that are actually yours toward Closet.
              </p>
              <p className="text-[13px] text-stone-500">
                Results may vary by image quality and garment visibility.
              </p>
            </FeatureBlock>
          </div>
        </div>
      </section>

      {/* ── 2. Organize ───────────────────────────────────────────────── */}
      <section
        id="organize"
        aria-labelledby="organize-heading"
        className="scroll-mt-32 border-y border-stone-200/70 bg-white py-16 md:scroll-mt-24 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeader
            id="organize"
            eyebrow="02 — Organize"
            heading="Organize"
            intro="Keep inspiration, discoveries, and owned pieces distinct."
          />

          {/* Typographic distinction card — no fabricated UI */}
          <div className={`${surfaces.linenCard} mb-14 grid gap-6 p-7 sm:grid-cols-2 md:mb-20 md:p-10`}>
            <p className="font-display text-[26px] leading-[1.14] text-stone-900 md:text-[32px]">
              Scanned <span className="text-violet-700">&ne;</span> Owned
            </p>
            <p className="font-display text-[26px] leading-[1.14] text-stone-900 md:text-[32px]">
              Saved <span className="text-violet-700">&ne;</span> Owned
            </p>
          </div>

          <div className="space-y-14 md:space-y-20">
            <FeatureBlock name="Closet">
              <p>Closet is for the fashion you own.</p>
              <p>
                Keep owned pieces organized so they can become useful context for styling and outfit planning.
                Scanned discoveries do not enter Closet on their own &mdash; you decide what is actually yours.
              </p>
            </FeatureBlock>

            <FeatureBlock name="Recent Scans">
              <p>Every discovery has somewhere to go.</p>
              <p>
                Recent Scans keeps your visual searches available so you can revisit products and ideas without
                digging through your camera roll.
              </p>
            </FeatureBlock>

            <FeatureBlock name="Inspiration">
              <p>Save the inspiration you want to return to without treating it as something you own.</p>
              <p>
                Saving is its own layer. Recent Scans holds what you discovered, Closet holds what you own, and
                Inspiration holds what you want to come back to.
              </p>
            </FeatureBlock>
          </div>
        </div>
      </section>

      {/* ── 3. Style ──────────────────────────────────────────────────── */}
      <section
        id="style"
        aria-labelledby="style-heading"
        className="scroll-mt-32 bg-[#FAFAF8] py-16 md:scroll-mt-24 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeader
            id="style"
            eyebrow="03 — Style"
            heading="Style"
            intro="Turn discovery into a decision."
          />

          <div className="space-y-14 md:space-y-20">
            <FeatureBlock
              id="elise"
              name="Elise, Your AI Stylist"
              image={{
                src: "/images/stylechat.png",
                alt: "StyleChat conversation with Elise, the K Scan AI stylist.",
              }}
              imageAspect="aspect-[3/2]"
            >
              <p>
                Ask how to wear an item, style something from Closet, refine inspiration, or think through an outfit.
              </p>
              <p>
                StyleChat is how you talk with Elise. Where spoken responses are enabled, Elise can read eligible
                styling responses aloud.
              </p>
            </FeatureBlock>

            <FeatureBlock id="signature-style" name="Signature Style">
              <p>Saved items, styling preferences, and feedback help sharpen future recommendations.</p>
              <p>
                Signature Style gives K Scan AI more context about the preferences you share over time &mdash; built
                from style signals, not personal identity.
              </p>
            </FeatureBlock>

            <FeatureBlock
              id="dressing-rooms"
              name="Dressing Rooms"
              reverse
              image={{
                src: "/images/dressing-rooms-v6.png",
                alt: "K Scan AI Dressing Rooms showing shared outfit planning and link sharing.",
              }}
              imageAspect="aspect-[1672/941]"
              imageFit="object-contain"
            >
              <p>Plan looks together.</p>
              <p>
                Save outfit ideas in a Dressing Room, compare options, share a link, and keep reactions and
                conversation connected to the items being considered.
              </p>
            </FeatureBlock>

            <FeatureBlock name="Spoken Responses" platforms="Where voice is enabled">
              <p>Elise can read eligible styling responses aloud where spoken responses are supported and enabled.</p>
              <p className="text-[13px] text-stone-500">
                Spoken responses are an optional output capability, separate from voice-driven scanning.
              </p>
            </FeatureBlock>

            <FeatureBlock name="Calendar to Closet" status="Coming Soon" platforms="Planned">
              <p>
                A planned way to connect upcoming plans with Closet and saved fashion context, so Elise can help you
                think ahead about what to wear.
              </p>
            </FeatureBlock>

            <FeatureBlock name="Outfit Remix" status="Coming Soon" platforms="Planned">
              <p>
                Recreate inspiration from your own closet. K Scan AI will help reinterpret favorite looks using pieces
                you already own, with smart substitutions, layering ideas, and remix guidance when there is no exact
                match.
              </p>
            </FeatureBlock>

            <FeatureBlock name="A More Present Elise" status="Exploring" platforms="Product research">
              <p>K Scan AI is exploring richer ways for Elise to feel present across the experience.</p>
            </FeatureBlock>
          </div>
        </div>
      </section>

      {/* ── 4. Shop ───────────────────────────────────────────────────── */}
      <section
        id="shop"
        aria-labelledby="shop-heading"
        className="scroll-mt-32 border-y border-stone-200/70 bg-white py-16 md:scroll-mt-24 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <SectionHeader
            id="shop"
            eyebrow="04 — Shop"
            heading="Shop"
            intro="From “where did they get that?” to useful options."
          />

          <div className="space-y-14 md:space-y-20">
            <FeatureBlock
              name="One View, Multiple Retailers"
              image={{
                src: "/how-it-works/match-shop-results.png",
                alt: "K Scan AI product results showing matches and retailer pathways from a scanned outfit.",
                position: "object-top",
              }}
            >
              <p>Explore ranked matches and useful alternatives across retailer pathways in one view.</p>
              <p>
                Compare options, then continue to the retailer to shop. K Scan AI is a discovery layer, not a
                retailer, marketplace, or checkout provider.
              </p>
            </FeatureBlock>

            <FeatureBlock
              name="Price-Tier Awareness"
              reverse
              image={{
                src: "/images/shoes_and_bag_hero.png",
                alt: "Leather shoes and a structured bag shown as K Scan AI product discovery results.",
                position: "object-[center_80%]",
              }}
              imageAspect="aspect-[16/9]"
            >
              <p>Explore useful options across price tiers, including lower-priced alternatives when available.</p>
              <p>
                Pricing, inventory, and availability are set by each retailer and can change, so options shown will
                vary.
              </p>
            </FeatureBlock>
          </div>
        </div>
      </section>

      {/* ── What's Next ───────────────────────────────────────────────── */}
      <section aria-labelledby="whats-next-heading" className="border-t border-stone-200/70 bg-white py-16 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <div className="mb-12 max-w-2xl md:mb-16">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-violet-700">
              Beyond the app
            </p>
            <h2
              id="whats-next-heading"
              className="mb-4 font-display text-[34px] font-medium leading-[1.06] text-stone-900 md:text-[46px]"
            >
              What’s Next
            </h2>
            <p className="text-[16px] leading-[1.8] text-stone-600 md:text-[17px]">
              See where K Scan AI is going next &mdash; from advanced K+ experiences to connected smart glasses
              concepts.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <FutureCard
              status="Preview"
              heading="K+"
              body="K+ is the future premium layer of K Scan AI, exploring more advanced styling, planning, and personalized fashion experiences."
              footnote="K+ is not a paid membership today. The preview is an interactive concept experience."
              cta={{ href: "/demo/kplusdemoship13.html", label: "Explore K+ Preview", external: true }}
            />

            <FutureCard
              status="Preview"
              heading="Smart Glasses"
              body="K Scan AI is exploring connected smart glasses experiences that let fashion discovery begin in the world around you and continue on your phone."
              footnote="Prototype and pre-production. Not commercially available, and not an indication of hardware-manufacturer support or partnership."
              cta={{ href: "/wearables", label: "Explore Smart Glasses" }}
              image={{
                src: "/wearables-telfar.jpeg",
                alt: "Street fashion viewed through a connected smart glasses concept for K Scan AI.",
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Closing CTA ───────────────────────────────────────────────── */}
      <section aria-labelledby="features-cta-heading" className="bg-[#F5F3EF] py-16 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center md:px-10">
          <h2
            id="features-cta-heading"
            className="mb-5 font-display text-[36px] font-medium leading-[1.04] text-stone-900 md:text-[52px]"
          >
            Your next look is already out there.
          </h2>
          <p className="mx-auto mb-10 max-w-lg text-[16px] leading-[1.82] text-stone-600">
            Get K Scan AI and turn what you see into what you wear.
          </p>

          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/download" className={`fashion-cursor w-full text-center sm:w-auto ${buttons.primaryLg}`}>
              Get the App
            </Link>
            <Link
              href="/demo"
              className="w-full rounded-full border border-stone-300 bg-white px-8 py-4 text-center text-[14px] font-medium text-stone-800 transition-colors hover:border-stone-400 hover:bg-stone-50 sm:w-auto"
            >
              View Demo
            </Link>
          </div>

          <div className={`${surfaces.card} mx-auto max-w-md p-6 text-left`}>
            <h3 className="font-display text-[18px] font-medium text-stone-900">Be first to know what’s next</h3>
            <p className="mt-2 text-[13px] leading-relaxed text-stone-500">
              Hear about new K Scan AI features as they arrive, plus early looks at what we’re building.
            </p>
            <MicroCta href="/#beta-updates">Sign up for updates</MicroCta>
          </div>

          <p className="mt-10 text-[13px] text-stone-500">
            <Link
              href="/#how-it-works"
              className="underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-800"
            >
              See How It Works
            </Link>
            <span aria-hidden="true" className="mx-3 text-stone-400">
              |
            </span>
            <Link
              href="/security"
              className="underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-800"
            >
              Security
            </Link>
            <span aria-hidden="true" className="mx-3 text-stone-400">
              |
            </span>
            <Link
              href="/demo"
              className="underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-800"
            >
              Demo
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
