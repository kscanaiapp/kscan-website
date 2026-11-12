import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/ui/SiteNav";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Terms Summary",
  description:
    "Review a plain-language summary of key K Scan AI terms, beta limitations, user responsibilities, and third-party shopping disclosures.",
  alternates: {
    canonical: "https://kscan.app/legal/terms-summary",
  },
  openGraph: {
    title: "Terms Summary | K Scan AI",
    description:
      "Review a plain-language summary of key K Scan AI terms, beta limitations, user responsibilities, and third-party shopping disclosures.",
    url: "https://kscan.app/legal/terms-summary",
    siteName: "K Scan AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms Summary | K Scan AI",
    description:
      "Review a plain-language summary of key K Scan AI terms, beta limitations, user responsibilities, and third-party shopping disclosures.",
  },
};

const h2Class = "mt-14 text-[11px] font-semibold uppercase tracking-widest text-stone-600";
const legalLinkClassName =
  "rounded-sm font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-2 transition-colors hover:text-indigo-800 hover:decoration-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2";
const bodyClass = "mt-6 space-y-6 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]";

export default function TermsSummaryPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <h1 className="font-display text-[38px] leading-[1.05] text-stone-900 sm:text-[46px] md:text-[56px]">
          K Scan AI Terms Summary
        </h1>

        <p className="mt-4 text-[13px] font-medium uppercase tracking-widest text-stone-400">
          Last updated: November 5, 2026
        </p>

        <h2 className={h2Class}>What K Scan AI Does</h2>
        <div className={bodyClass}>
          <p>
            K Scan AI helps adults explore fashion, identify likely clothing and accessories from selected photos or
            text, receive AI styling suggestions, organize chosen wardrobe information, collaborate in Dressing
            Rooms and follow links to independent retailers. Available features depend on your device, permissions,
            region, account, and current activation.
          </p>
        </div>

        <h2 className={h2Class}>Shopping and AI</h2>
        <div className={bodyClass}>
          <p>
            Scanner and Elise may send selected photos, text and relevant fashion context to Google Gemini with
            required permission. AI results can be wrong, incomplete or out of date. Retailer offers are from
            independent sellers. K Scan AI does not authenticate goods, guarantee price/stock or complete retailer
            checkout.
          </p>
        </div>

        <h2 className={h2Class}>Your Fashion Information</h2>
        <div className={bodyClass}>
          <p>
            Saving a scan or wishlisting an item does not mean you own it. Some content stays on your device; other
            permitted account and Room data uses cloud services. Cloud Closet backup and cross-device restoration
            are not promised as generally available.
          </p>
        </div>

        <h2 className={h2Class}>K+ Subscriptions</h2>
        <div className={bodyClass}>
          <p>
            K+ Monthly and Annual plans may be purchased through Apple or Google where the stores approve them.
            Actual prices, trial eligibility, billing cycle and renewals appear at purchase. Plans renew
            automatically unless cancelled. A subscription does not guarantee all optional or experimental tools.
            You can keep using eligible Free features without a K+ purchase.
          </p>
        </div>

        <h2 className={h2Class}>Cancellation and Refunds</h2>
        <div className={bodyClass}>
          <p>
            Cancel from Apple Account subscriptions or Google Play subscriptions, depending on how you purchased.
            Uninstalling or deleting your K Scan AI account does not cancel the subscription. Eligible
            monthly-charge prorated refund requests are described in the full Refund and Cancellation Policy. Apple
            and Google control relevant refund processing, and annual purchases follow distinct terms.
          </p>
        </div>

        <h2 className={h2Class}>Your Content and Controls</h2>
        <div className={bodyClass}>
          <p>
            Your photos and messages remain yours. You authorize limited handling needed for requested features.
            You can manage supported privacy permissions, report and block abuse, and request deletion. K Scan AI
            is for users 18 and older.
          </p>
        </div>

        <h2 className={h2Class}>Governing Documents</h2>
        <div className={bodyClass}>
          <p>
            The full{" "}
            <Link href="/legal/terms" className={legalLinkClassName}>
              Terms
            </Link>{" "}
            at https://kscan.app/legal/terms,{" "}
            <Link href="/legal/privacy" className={legalLinkClassName}>
              Privacy Policy
            </Link>{" "}
            at https://kscan.app/legal/privacy, and linked K+ and refund policies control over this plain-language
            summary. Operator: Forest Hills Media Inc. Support:{" "}
            <a href="mailto:kscanai.app@gmail.com" className={legalLinkClassName}>
              kscanai.app@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
