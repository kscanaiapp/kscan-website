import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/ui/SiteNav";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Summary | K Scan AI",
  },
  description:
    "Review K Scan AI privacy information, including uploads, account data, AI-assisted results, and privacy request options.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Summary | K Scan AI",
    description:
      "Review K Scan AI privacy information, including uploads, account data, AI-assisted results, and privacy request options.",
    url: "https://kscan.app/privacy",
    siteName: "K Scan AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Summary | K Scan AI",
    description:
      "Review K Scan AI privacy information, including uploads, account data, AI-assisted results, and privacy request options.",
  },
};

const legalLinkClassName =
  "rounded-sm font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-2 transition-colors hover:text-indigo-800 hover:decoration-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2";

const linkClassName =
  "text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-500";

const h2Class = "text-[15px] font-semibold text-stone-700 md:text-[16px]";

export default function PrivacyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <h1 className="font-display text-[38px] leading-[1.05] text-stone-900 sm:text-[46px] md:text-[56px]">
          K Scan AI Privacy Summary
        </h1>

        <p className="mt-4 text-[13px] font-medium uppercase tracking-widest text-stone-400">
          Last updated: November 5, 2026
        </p>

        <div className="mt-8 space-y-6 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <section aria-labelledby="key-point" className="space-y-4">
            <h2 id="key-point" className={h2Class}>
              Key Point
            </h2>
            <p>
              K Scan AI is operated by Forest Hills Media Inc. and provides AI-assisted fashion discovery, styling,
              wardrobe and retailer referral functions for adults age 18 and older. This summary is not a
              replacement for the full{" "}
              <Link href="/legal/privacy" className={legalLinkClassName}>
                Privacy Policy
              </Link>{" "}
              at https://kscan.app/legal/privacy.
            </p>
          </section>

          <section aria-labelledby="what-you-choose-to-share" className="space-y-4">
            <h2 id="what-you-choose-to-share" className={h2Class}>
              What You Choose to Share
            </h2>
            <p>
              When you select images or type queries, our systems may process the content for fashion analysis. We
              do not automatically scan all photos on your device. Scan images can include people or personal
              details; resizing or metadata removal does not guarantee face or plate masking.
            </p>
          </section>

          <section aria-labelledby="google-gemini-ai-permission" className="space-y-4">
            <h2 id="google-gemini-ai-permission" className={h2Class}>
              Google Gemini and AI Permission
            </h2>
            <p>
              Selected photos, text, Elise chats and authorized fashion context may be sent through K Scan AI to
              Google Gemini for requested AI processing. The app has a separate consent choice for affected
              operations. Turning permission off can prevent future Gemini-dependent requests, but does not erase
              earlier provider processing.
            </p>
          </section>

          <section aria-labelledby="where-other-data-goes" className="space-y-4">
            <h2 id="where-other-data-goes" className={h2Class}>
              Where Other Data Goes
            </h2>
            <p>
              Supabase supports accounts and cloud functions. Relevant shopping search terms may go to Serper or
              Brave Search. RevenueCat helps manage Apple or Google subscription records. Optional spoken Elise
              text may go to ElevenLabs, optional Photo Virtual Try-On images to AILabTools through RapidAPI, and
              optional approximate weather location to Open-Meteo. Email, push and analytics providers operate only
              for relevant enabled workflows.
            </p>
          </section>

          <section aria-labelledby="wardrobe-and-rooms" className="space-y-4">
            <h2 id="wardrobe-and-rooms" className={h2Class}>
              Your Wardrobe and Rooms
            </h2>
            <p>
              Recent Scans or wardrobe data can be local, while authorized chats, shared Rooms, entitlements and
              other account information can be cloud-backed. General Cloud Closet upload and restore is not
              promised as available. Other people you intentionally share with may see or copy your posts.
            </p>
          </section>

          <section aria-labelledby="purchases-and-retailers" className="space-y-4">
            <h2 id="purchases-and-retailers" className={h2Class}>
              Purchases and Retailers
            </h2>
            <p>
              Apple and Google bill native K+ subscriptions. Independent merchants handle purchases of clothing
              through external links. K Scan AI does not collect full payment-card numbers for the described native
              store-billed subscription flow.
            </p>
          </section>

          <section aria-labelledby="choices-and-requests" className="space-y-4">
            <h2 id="choices-and-requests" className={h2Class}>
              Choices and Requests
            </h2>
            <p>
              Use available app settings for supported consent, privacy, access, correction, deletion and export
              functions. Some controls are local; others follow your account. Contact{" "}
              <a href="mailto:kscanai.app@gmail.com" className={linkClassName}>
                kscanai.app@gmail.com
              </a>{" "}
              for privacy requests. Applicable state-specific rights depend on the law and the company&apos;s
              activities.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
