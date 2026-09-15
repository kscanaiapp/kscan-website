import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/ui/SiteNav";

export const metadata: Metadata = {
  title: {
    absolute: "Billing, Cancellation & Refunds | K Scan AI",
  },
  description:
    "Review K Scan AI billing, subscription cancellation, and refund information, including prorated refunds, app-store purchases, and no-charge K+ access.",
  alternates: {
    canonical: "/billing",
  },
  openGraph: {
    title: "Billing, Cancellation & Refunds | K Scan AI",
    description:
      "Review K Scan AI billing, subscription cancellation, and refund information, including prorated refunds, app-store purchases, and no-charge K+ access.",
    url: "https://kscan.app/billing",
    siteName: "K Scan AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Billing, Cancellation & Refunds | K Scan AI",
    description:
      "Review K Scan AI billing, subscription cancellation, and refund information, including prorated refunds, app-store purchases, and no-charge K+ access.",
  },
};

const linkClassName =
  "text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-500";

const legalLinkClassName =
  "rounded-sm font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-2 transition-colors hover:text-indigo-800 hover:decoration-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2";

const h2Class = "text-[15px] font-semibold text-stone-700 md:text-[16px]";

export default function BillingPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <h1 className="font-display text-[38px] leading-[1.05] text-stone-900 sm:text-[46px] md:text-[56px]">
          K Scan AI Billing, Cancellation &amp; Refunds
        </h1>

        <p className="mt-4 text-[13px] font-medium uppercase tracking-widest text-stone-400">
          Last updated: September 12, 2026
        </p>

        <div className="mt-8 space-y-6 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <p>
            K Scan AI may offer subscription access, including K+, through supported billing platforms. This page
            summarizes how cancellations, refunds, no-charge access, and app-store purchases are handled. The full{" "}
            <Link href="/legal/refund-policy" className={legalLinkClassName}>
              Refund and Cancellation Policy
            </Link>{" "}
            is the controlling document.
          </p>

          <section aria-labelledby="cancelling-subscription" className="space-y-4">
            <h2 id="cancelling-subscription" className={h2Class}>
              1. Cancelling a Subscription
            </h2>
            <p>
              Cancelling stops future renewal of an automatically renewing subscription. Cancellation and refunds are
              separate actions, so cancelling does not automatically refund a charge that has already been paid.
            </p>
            <p>Uninstalling K Scan AI does not cancel an Apple App Store or Google Play subscription.</p>
          </section>

          <section aria-labelledby="prorated-refund-window" className="space-y-4">
            <h2 id="prorated-refund-window" className={h2Class}>
              2. 30-Day Prorated Refund Window
            </h2>
            <p>
              For an eligible monthly subscription charge, you may request a prorated refund during the
              30-calendar-day period beginning on the charge date.
            </p>
            <p>The refund is based on the amount actually paid and the unused portion of that 30-day service period.</p>
            <p className="rounded-md border border-stone-200 bg-white px-5 py-4 font-medium text-stone-700">
              Prorated refund = amount actually paid × unused service days ÷ 30
            </p>
            <p>
              Each monthly charge is reviewed separately, and K Scan AI will not refund more than the amount actually
              paid for the charge at issue.
            </p>
          </section>

          <section aria-labelledby="complimentary-access" className="space-y-4">
            <h2 id="complimentary-access" className={h2Class}>
              3. Complimentary, Trial &amp; Promotional Access
            </h2>
            <p>
              K+ may be offered without charge, as a trial, or as a promotion. If you paid nothing for an access
              period, there is no monetary amount to refund for that period. No-charge or promotional access has no
              separate cash value.
            </p>
          </section>

          <section aria-labelledby="apple-purchases" className="space-y-4">
            <h2 id="apple-purchases" className={h2Class}>
              4. Apple App Store Purchases
            </h2>
            <p>
              Apple processes App Store transactions and controls the App Store refund mechanism. You may need to
              request an Apple-billed refund directly from Apple.
            </p>
            <p>
              K Scan AI&apos;s standard policy supports the prorated framework described above, but Apple may
              approve, deny, calculate, or process refunds under Apple&apos;s systems, policies, and applicable law.
            </p>
          </section>

          <section aria-labelledby="google-play-purchases" className="space-y-4">
            <h2 id="google-play-purchases" className={h2Class}>
              5. Google Play Purchases
            </h2>
            <p>
              Google Play processes native Android subscription transactions. K Scan AI applies its prorated policy
              where Google Play tools and applicable law allow it.
            </p>
            <p>Google may also handle some refund requests directly, and a refund can change or end the related K+ entitlement.</p>
          </section>

          <section aria-labelledby="requests-after-30-days" className="space-y-4">
            <h2 id="requests-after-30-days" className={h2Class}>
              6. Requests After 30 Days
            </h2>
            <p>
              After the standard 30-day prorated refund window ends, refunds may still be issued or supported when
              required by law, when a duplicate or incorrect charge occurred, when a paid service was materially not
              delivered, when an unauthorized transaction is established, when the payment platform requires it, or
              when K Scan AI determines a refund is appropriate.
            </p>
          </section>

          <section aria-labelledby="billing-problems" className="space-y-4">
            <h2 id="billing-problems" className={h2Class}>
              7. Billing Problems
            </h2>
            <p>
              Contact K Scan AI promptly if you believe you were charged twice, charged the wrong amount, charged
              after cancellation should have taken effect, charged for a service you did not receive, or charged
              without authorization.
            </p>
            <p>The applicable app store, bank, or payment provider may also require you to use its own process.</p>
          </section>

          <section aria-labelledby="consumer-rights" className="space-y-4">
            <h2 id="consumer-rights" className={h2Class}>
              8. Your Consumer Rights
            </h2>
            <p>
              Nothing in the Refund and Cancellation Policy limits refund, withdrawal, cancellation, warranty, or
              other rights that cannot legally be waived. If applicable law gives you greater rights, that law
              controls.
            </p>
          </section>

          <section aria-labelledby="full-policy-contact" className="space-y-4">
            <h2 id="full-policy-contact" className={h2Class}>
              9. Full Policy &amp; Contact
            </h2>
            <p>The full Refund and Cancellation Policy is available at:</p>
            <p>
              <Link href="/legal/refund-policy" className={linkClassName}>
                kscan.app/legal/refund-policy
              </Link>
            </p>
            <p>Refund or billing questions:</p>
            <p>
              <a href="mailto:kscanai.app@gmail.com" className={linkClassName}>
                kscanai.app@gmail.com
              </a>
            </p>
            <p>
              <Link href="/legal/refund-policy" className={legalLinkClassName}>
                Read the Full Refund and Cancellation Policy
              </Link>
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
