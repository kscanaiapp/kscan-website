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
              AI-Powered Fashion Discovery:
            </h3>
            <p>
              K Scan AI may generate product suggestions, visual matches, fashion insights, and retailer links based on
              uploaded or captured content. AI outputs are probabilistic and may be incomplete, approximate,
              inaccurate, outdated, or based on visually similar items.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-[15px] font-semibold text-stone-700 md:text-[16px]">
              Your Content Stays Yours:
            </h3>
            <p>
              You retain ownership of the photos, screenshots, prompts, and other content you submit. K Scan AI
              receives only the limited permissions needed to operate, secure, maintain, and improve the Service as
              described in the full Terms and Conditions.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-[15px] font-semibold text-stone-700 md:text-[16px]">Raw Scan Protection:</h3>
            <p>
              K Scan AI does not sell raw uploaded scans or images. We do not use uploaded scan content for facial
              recognition, biometric identification, or surveillance.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-[15px] font-semibold text-stone-700 md:text-[16px]">
              Beta Image Handling:
            </h3>
            <p>
              K Scan AI is a fashion-discovery tool and is not designed for facial recognition, biometric
              identification, or surveillance. In this beta release, images are transmitted to our backend for AI
              analysis without active on-device face blurring. The app&apos;s privacy sanitizer infrastructure may
              operate in pass-through mode. K Scan does not represent this beta as applying active face blurring.
            </p>
          </div>
        </div>

        <h2 className="mt-14 text-[11px] font-semibold uppercase tracking-widest text-stone-400">
          {"2. Commercial Data & Partner Activity"}
        </h2>

        <div className="mt-6 space-y-4 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <p>
            To support our discovery and commerce tools, K Scan AI may share limited non-sensitive information with
            service providers, retail partners, affiliate partners, analytics providers, attribution providers, and
            marketing partners where permitted by law and subject to applicable consent, opt-out rights, contractual
            restrictions, platform rules, and user privacy controls.
          </p>
          <p>
            K Scan AI may create, use, or commercialize aggregated, anonymized, or de-identified demand intelligence
            that does not reasonably identify you.
          </p>
          <p>
            K Scan AI may also earn affiliate fees, referral commissions, advertising revenue, partner reporting
            revenue, aggregated demand-intelligence revenue, or other commercial consideration from partners. Sponsored
            or paid placements, where used, are identified as such where required by law or platform rules.
          </p>
        </div>

        <h2 className="mt-14 text-[11px] font-semibold uppercase tracking-widest text-stone-400">3. Important Limits</h2>

        <div className="mt-6 space-y-8 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <div>
            <h3 className="mb-2 text-[15px] font-semibold text-stone-700 md:text-[16px]">
              AI Outputs Are Not Guarantees:
            </h3>
            <p>
              AI-generated fashion matches, recommendations, and product suggestions may be incomplete, approximate,
              inaccurate, visually similar but non-identical, or outdated. Users should independently evaluate results
              before relying on them or making a purchase.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-[15px] font-semibold text-stone-700 md:text-[16px]">
              Third-Party Retailers:
            </h3>
            <p>
              K Scan AI may link to outside retailers, marketplaces, affiliate partners, and commerce providers. We do
              not manufacture, inspect, authenticate, ship, fulfill, or guarantee third-party products or transactions.
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-[15px] font-semibold text-stone-700 md:text-[16px]">
              Pricing and Availability:
            </h3>
            <p>
              Retail prices, inventory, shipping terms, return policies, authenticity, sizing, and seller details may
              change without notice and are controlled by the third party, not K Scan AI.
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
            products, retailers, and sellers before purchase.
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
            If you create an account, you may delete it in the app through{" "}
            {"Settings > Account > Delete Account"}, subject to limited legal exceptions described in the full Terms and
            Privacy Policy.
          </p>
          <p>
            K Scan AI&apos;s liability, disclaimers, acceptable-use rules, platform terms, dispute provisions, and other
            legal terms are governed by the full Terms and Conditions.
          </p>
        </div>

        <div className="mt-14 space-y-4 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <p>
            For questions, or to obtain a full copy of our{" "}
            <a
              href="/docs/kscan-terms-and-conditions.pdf"
              className="rounded-sm font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-2 transition-colors hover:text-indigo-800 hover:decoration-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
            >
              Terms and Conditions
            </a>{" "}
            please contact us at kscanai.app@gmail.com.
          </p>
        </div>

        <div className="mt-14 border-t border-stone-100 pt-8 text-[13px] text-stone-400">
          <p>&copy; 2026 K SCAN AI. All rights reserved.</p>
        </div>
      </section>
    </main>
  );
}
