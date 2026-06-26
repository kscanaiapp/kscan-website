import { SiteNav } from "@/components/ui/SiteNav";

export default function LegalTermsPage() {
  const linkClassName =
    "text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-500";

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <h1 className="font-display text-[38px] leading-[1.05] text-stone-900 sm:text-[46px] md:text-[56px]">
          K Scan AI Terms
        </h1>
        <p className="mt-4 text-[14px] text-stone-600">Last updated: May 2026</p>

        <div className="mt-8 space-y-6 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-600">Beta Status</h2>
            <p>K Scan AI is currently in beta and functionality may evolve.</p>
          </section>

          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-600">
              AI-Assisted Results
            </h2>
            <ul className="space-y-2 pl-4">
              <li>Results are AI-assisted suggestions for fashion discovery.</li>
              <li>
                K Scan does not guarantee exact matches, product availability, pricing, or retailer inventory.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-600">
              Third-Party Links
            </h2>
            <ul className="space-y-2 pl-4">
              <li>Product and retailer links may point to third-party destinations.</li>
              <li>Third-party content, pricing, and availability are outside K Scan control.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-600">
              User Responsibilities
            </h2>
            <ul className="space-y-2 pl-4">
              <li>Do not upload faces, identity documents, license plates, or other sensitive identifiers.</li>
              <li>You are responsible for the content you upload.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-600">
              Intended Use
            </h2>
            <p>K Scan is not an emergency, identity, surveillance, or biometric tool.</p>
          </section>

          <section className="space-y-2 pt-4">
            <h2 className="text-[11px] font-semibold uppercase tracking-widest text-stone-600">Contact</h2>
            <p>
              For questions or to obtain a full copy of our{" "}
              <a
                href="/docs/kscan-terms-and-conditions.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-2 transition-colors hover:text-indigo-800 hover:decoration-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
              >
                Terms and Conditions
              </a>{" "}
              please contact us at kscanai.app@gmail.com.
            </p>
          </section>
        </div>

        <div className="mt-14 border-t border-stone-100 pt-8 text-[13px] text-stone-600">
          <p>&copy; 2026 K SCAN AI. All rights reserved.</p>
        </div>
      </section>
    </main>
  );
}
