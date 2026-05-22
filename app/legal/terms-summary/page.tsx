import { SiteNav } from "@/components/ui/SiteNav";

export const dynamic = "force-dynamic";

export default function TermsSummaryPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <h1 className="font-display text-[38px] leading-[1.05] text-stone-900 sm:text-[46px] md:text-[56px]">
          K Scan AI Terms Summary
        </h1>

        <div className="mt-8 space-y-6 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <p>
            K Scan AI provides AI-powered fashion discovery, visual analysis, and commerce-routing tools designed to
            help users move from inspiration to product discovery.
          </p>
        </div>

        <h2 className="mt-14 text-[11px] font-semibold uppercase tracking-widest text-stone-400">
          1. What You Can Expect
        </h2>

        <div className="mt-6 space-y-8 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <div>
            <h3 className="mb-2 text-[15px] font-semibold text-stone-700 md:text-[16px]">
              AI-Powered Fashion Discovery
            </h3>
            <p>
              K Scan AI may generate product suggestions, visual matches, fashion insights, and retailer links based on
              uploaded or captured content.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-[15px] font-semibold text-stone-700 md:text-[16px]">Your Content Stays Yours</h3>
            <p>
              You retain ownership of the photos, screenshots, prompts, and other content you submit. K Scan AI
              receives only the limited permissions needed to operate, secure, maintain, and improve the Service as
              described in the full Terms and Conditions.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-[15px] font-semibold text-stone-700 md:text-[16px]">Raw Scan Protection</h3>
            <p>
              K Scan AI does not sell raw uploaded scans or images, and we do not use uploaded scan content for facial
              recognition or biometric surveillance.
            </p>
          </div>
        </div>

        <h2 className="mt-14 text-[11px] font-semibold uppercase tracking-widest text-stone-400">
          2. Commercial Data &amp; Partner Activity
        </h2>

        <div className="mt-6 space-y-4 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <p>
            Certain non-sensitive commercial, analytics, preference, marketing, and inference data may be used, sold,
            shared, licensed, or disclosed where permitted by law and subject to applicable privacy rights, consent
            requirements, and opt-out controls.
          </p>
          <p>
            K Scan AI may also earn affiliate revenue, referral fees, advertising revenue, data licensing revenue, or
            other commercial consideration from partners.
          </p>
        </div>

        <h2 className="mt-14 text-[11px] font-semibold uppercase tracking-widest text-stone-400">3. Important Limits</h2>

        <div className="mt-6 space-y-8 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <div>
            <h3 className="mb-2 text-[15px] font-semibold text-stone-700 md:text-[16px]">
              AI Outputs Are Not Guarantees
            </h3>
            <p>
              AI-generated fashion matches, recommendations, and product suggestions may be incomplete, approximate,
              inaccurate, or outdated. Users should independently evaluate results before relying on them.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-[15px] font-semibold text-stone-700 md:text-[16px]">Third-Party Retailers</h3>
            <p>
              K Scan AI may link to outside retailers, marketplaces, affiliate partners, and commerce providers. We do
              not manufacture, inspect, authenticate, ship, fulfill, or guarantee third-party products or transactions.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-[15px] font-semibold text-stone-700 md:text-[16px]">
              Pricing and Availability
            </h3>
            <p>
              Retail prices, inventory, shipping terms, return policies, authenticity, and seller details may change
              without notice and are controlled by the third party, not K Scan AI.
            </p>
          </div>
        </div>

        <h2 className="mt-14 text-[11px] font-semibold uppercase tracking-widest text-stone-400">
          4. Your Responsibilities
        </h2>

        <div className="mt-6 space-y-4 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <p>
            Use K Scan AI lawfully and responsibly. Do not upload content you do not have the right to use, sensitive
            documents, confidential records, copyrighted materials without permission, or unlawful or abusive content.
          </p>
          <p>
            You are responsible for maintaining the security of your account credentials and for evaluating third-party
            products and sellers before purchase.
          </p>
        </div>

        <h2 className="mt-14 text-[11px] font-semibold uppercase tracking-widest text-stone-400">
          5. Your Rights and Legal Protections
        </h2>

        <div className="mt-6 space-y-4 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <p>
            Depending on where you live, you may have rights related to access, deletion, correction, portability,
            consent withdrawal, or opt-out choices for certain data uses.
          </p>
          <p>
            K Scan AI&apos;s liability, disclaimers, acceptable-use rules, dispute provisions, and other legal terms are
            governed by the full Terms and Conditions.
          </p>
        </div>

        <div className="mt-14 space-y-4 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <p>
            For complete details, please review our full{" "}
            <a
              href="/docs/kscan-terms-and-conditions.pdf"
              className="text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-500"
            >
              Terms and Conditions
            </a>{" "}
            or contact us at{" "}
            <a
              href="mailto:kscanai.app@gmail.com"
              className="text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-500"
            >
              kscanai.app@gmail.com
            </a>
            .
          </p>
        </div>

        <div className="mt-14 border-t border-stone-100 pt-8 text-[13px] text-stone-400">
          <p>&copy; 2026 K SCAN AI. All rights reserved.</p>
        </div>
      </section>
    </main>
  );
}
