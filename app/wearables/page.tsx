import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "@/components/ui/SiteNav";
import { surfaces, buttons } from "@/lib/theme";

// ─── Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: { absolute: "Wearables | K Scan AI" },
  description:
    "K Scan AI is exploring connected smart glasses experiences that help people capture fashion inspiration in the moment and continue discovery, saving, and shopping on their phone.",
  keywords: [
    "K Scan AI smart glasses",
    "connected smart glasses fashion",
    "wearable fashion discovery",
    "Meta Ray-Ban smart glasses shopping",
    "AI fashion search wearables",
  ],
  alternates: {
    canonical: "/wearables",
  },
  openGraph: {
    title: "Wearables | K Scan AI",
    description:
      "K Scan AI is exploring connected smart glasses experiences that help people capture fashion inspiration in the moment and continue discovery, saving, and shopping on their phone.",
    url: "https://kscan.app/wearables",
    siteName: "K Scan AI",
    locale: "en_US",
    images: [
      {
        url: "/group-street.jpeg",
        width: 2048,
        height: 1365,
        alt: "Stylish person wearing smart glasses in an urban street-style setting",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wearables | K Scan AI",
    description:
      "K Scan AI is exploring connected smart glasses experiences that help people capture fashion inspiration in the moment and continue discovery, saving, and shopping on their phone.",
    images: ["/group-street.jpeg"],
  },
};

// ─── Static data ──────────────────────────────────────────────────────────

const howItWorks = [
  {
    step: "01",
    title: "See it",
    description: "Spot a look, item, or outfit while you are out in the world.",
  },
  {
    step: "02",
    title: "Capture it",
    description:
      "Use connected smart glasses to capture the inspiration in the moment, without breaking the flow.",
  },
  {
    step: "03",
    title: "Continue it",
    description:
      "Open K Scan AI on your phone to understand the fashion item, explore product options, save discoveries, and decide what to wear or buy.",
  },
];

// ─── Page ───────────────────────────────────────────────────────────────────

export default function WearablesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pb-14 pt-16 md:px-10 md:pb-20 md:pt-24">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-14">
          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-600">
              K Scan AI for Wearables
            </p>
            <h1 className="font-display max-w-md text-[42px] leading-[1.02] text-stone-900 sm:text-[52px] md:text-[62px]">
              Fashion discovery, now in view
            </h1>
            <p className="mt-6 max-w-md text-[15px] leading-[1.85] text-stone-500 md:text-[16px]">
              K Scan AI is extending visual fashion discovery to connected smart glasses, helping people
              capture style inspiration in the moment and continue the experience on their phone to
              explore, save, and shop.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-indigo-700">
              <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-indigo-400" aria-hidden="true" />
              Currently in pre-production and controlled testing
            </div>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link href="/test-center" className={`fashion-cursor ${buttons.primaryLg}`}>
                Visit Test Center
              </Link>
              <Link
                href="/download"
                className="text-[13px] text-stone-600 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-700 hover:decoration-stone-400"
              >
                Get the App
              </Link>
            </div>
          </div>

          <div className={`${surfaces.imageFrame}`}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
              <Image
                src="/glasses-HUD.jpeg"
                alt="Smart glasses HUD view on a city street identifying a woman's trench coat, trousers, and blouse in real time"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 46vw"
                className="object-cover object-[50%_18%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <hr className="border-stone-100" />
      </div>

      {/* ── Continuity / connected smart glasses copy ────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="max-w-2xl space-y-6 text-[15px] leading-[1.88] text-stone-500">
          <p>
            K Scan AI helps people find clothes from photos, identify outfits from screenshots, and turn
            visual inspiration, including inspiration captured with smart glasses, into a practical
            shopping path. Instead of trying to describe a jacket, dress, sneaker, or full look with the
            right keywords, you can start with the image you already have.
          </p>
          <p>
            K Scan AI is exploring connected smart glasses experiences, including browser-enabled
            workflows designed for devices such as Meta Ray-Ban smart glasses. The goal is simple: make
            it easier to capture fashion inspiration in the moment, then continue the deeper discovery,
            saving, and shopping experience on your phone.
          </p>
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <hr className="border-stone-100" />
      </div>

      {/* ── How It Works ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-center lg:gap-14">
          <div>
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-600">
              How It Works
            </p>
            <h2 className="font-display mb-10 text-[30px] leading-tight text-stone-900 sm:text-[36px]">
              From spotted in the world to shoppable on your phone.
            </h2>

            <div className="space-y-8">
              {howItWorks.map(({ step, title, description }) => (
                <div key={step} className="flex gap-5">
                  <span
                    className="step-num flex-shrink-0 select-none font-display text-[34px] leading-none text-stone-300"
                    aria-hidden="true"
                  >
                    {step}
                  </span>
                  <div>
                    <h3 className="mb-1.5 text-[16px] font-medium text-stone-900">{title}</h3>
                    <p className="text-[14px] leading-[1.75] text-stone-500">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`${surfaces.imageFrame}`}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[18px]">
              <Image
                src="/wearables-city-color.jpeg"
                alt="Smart glasses worn on the head with a phone in hand, illustrating the transition from capture on glasses to continued discovery on the K Scan AI phone app"
                fill
                sizes="(max-width: 1024px) 92vw, 42vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────────────── */}
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <hr className="border-stone-100" />
      </div>

      {/* ── Why It Matters ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-14">
          <div className={`${surfaces.imageFrame} order-2 lg:order-1`}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[18px]">
              <Image
                src="/wearables-face-blur.jpeg"
                alt="Smart glasses HUD view in a lobby showing Privacy Lens active with bystander protection while an outfit is detected for capture"
                fill
                sizes="(max-width: 1024px) 92vw, 42vw"
                className="object-cover object-[center_30%]"
              />
            </div>
          </div>

          <div className="order-1 max-w-lg lg:order-2">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-600">
              Why It Matters
            </p>
            <h2 className="font-display mb-6 text-[30px] leading-tight text-stone-900 sm:text-[36px]">
              Why smart glasses matter for fashion
            </h2>
            <p className="text-[15px] leading-[1.88] text-stone-500">
              Great style inspiration often appears in motion: on the street, in a cafe, at an event,
              during travel, or in everyday life. Smart glasses make fashion discovery more immediate by
              letting the capture happen closer to the moment of inspiration. K Scan AI is exploring that
              shift so discovery can start in the world around you and continue in a more detailed way on
              your phone.
            </p>
          </div>
        </div>
      </section>

      {/* ── Privacy / Trust ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pb-16 md:px-10 md:pb-24">
        <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-stone-950 px-6 py-9 shadow-[0_22px_60px_rgba(28,22,16,0.14)] md:rounded-[36px] md:px-10 md:py-12">
          <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(125,211,252,0.42),transparent)]" />
          <div className="relative max-w-2xl">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-cyan-200/70">
              Privacy
            </p>
            <h2 className="font-display mb-5 text-[28px] leading-[1.1] text-white sm:text-[34px]">
              Designed with privacy in mind
            </h2>
            <p className="text-[14px] leading-[1.82] text-stone-300 md:text-[15px]">
              K Scan AI&rsquo;s wearable and mobile privacy architecture is designed to apply privacy
              protections at the capture boundary before analysis. Privacy Lens technology is part of that
              direction, while certification and broader rollout remain in progress.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10 md:pb-28">
        <div className={`${surfaces.linenCard} flex flex-col gap-8 p-8 md:flex-row md:items-center md:justify-between md:p-12`}>
          <div className="max-w-lg">
            <h2 className="font-display mb-3 text-[26px] leading-tight text-stone-900 sm:text-[30px]">
              Want early access to wearable experiences?
            </h2>
            <p className="text-[14px] leading-[1.75] text-stone-500">
              K Scan AI&rsquo;s smart glasses direction is still in controlled testing. If you are
              interested in product updates or demos, you can visit the Test Center and follow
              current platform progress.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link href="/test-center" className={`fashion-cursor ${buttons.primaryLg}`}>
              Visit Test Center
            </Link>
            <Link
              href="/download"
              className="text-[13px] text-stone-600 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-700 hover:decoration-stone-400"
            >
              Get the App
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
