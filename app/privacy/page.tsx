import { SiteNav } from "@/components/ui/SiteNav";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <h1 className="font-display text-[38px] leading-[1.05] text-stone-900 sm:text-[46px] md:text-[56px]">
          K Scan AI Privacy Summary
        </h1>

        <div className="mt-8 space-y-6 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <p>
            K Scan AI is designed to protect your visual privacy while delivering intelligent fashion insights. Scans
            may be processed locally on your device where possible, or through secure cloud systems when needed to
            provide the Service.
          </p>

          <section aria-labelledby="data-protection" className="space-y-4">
            <h2 id="data-protection" className="text-[15px] font-semibold text-stone-700 md:text-[16px]">
              1. Data Protection &amp; Visual Privacy
            </h2>
            <div className="space-y-3">
              <p>
                <span className="font-semibold text-stone-700">No Facial Recognition:</span>
                <br />
                We do not use scan data for facial recognition or to identify individuals.
              </p>
              <p>
                <span className="font-semibold text-stone-700">Raw Scan Protection:</span>
                <br />
                We do not sell raw uploaded scans or images.
              </p>
              <p>
                <span className="font-semibold text-stone-700">Transient Processing:</span>
                <br />
                Raw visual data is typically processed transiently and deleted within 24–72 hours unless you choose to
                save it or another permitted exception applies.
              </p>
              <p>
                <span className="font-semibold text-stone-700">Data Minimization:</span>
                <br />
                Personally identifiable elements are minimized, masked, deleted, aggregated, or de-identified where
                technically feasible.
              </p>
            </div>
          </section>

          <section aria-labelledby="commercial-data" className="space-y-4">
            <h2 id="commercial-data" className="text-[15px] font-semibold text-stone-700 md:text-[16px]">
              2. Commercial Data &amp; Partnership Transparency
            </h2>
            <p>
              To support our discovery and commerce tools, K Scan AI may monetize certain non-sensitive information
              where permitted by law.
            </p>
            <div className="space-y-3">
              <p>
                <span className="font-semibold text-stone-700">What May Be Sold, Shared, or Licensed:</span>
                <br />
                Product preferences, style interests, app interaction data, marketing engagement data, and inferred
                fashion affinity information may be used with retail, analytics, advertising, or marketing partners,
                subject to applicable rights and consent requirements.
              </p>
              <p>
                <span className="font-semibold text-stone-700">Service Providers:</span>
                <br />
                We also share limited information with providers that help us operate K Scan, including cloud hosting,
                email delivery, analytics, and security partners.
              </p>
            </div>
          </section>

          <section aria-labelledby="rights-controls" className="space-y-4">
            <h2 id="rights-controls" className="text-[15px] font-semibold text-stone-700 md:text-[16px]">
              3. Your Rights &amp; Controls
            </h2>
            <p>You remain in control of your data and how it may be used.</p>
            <div className="space-y-3">
              <p>
                <span className="font-semibold text-stone-700">Opt-Out Rights:</span>
                <br />
                You may opt out of the sale or sharing of personal information where required by law.
              </p>
              <p>
                <span className="font-semibold text-stone-700">Global Privacy Control:</span>
                <br />
                We honor Global Privacy Control signals as valid opt-out requests where required by law.
              </p>
              <p>
                <span className="font-semibold text-stone-700">Access &amp; Deletion:</span>
                <br />
                You may request access to, correction of, or deletion of your personal information, subject to
                applicable law.
              </p>
            </div>
          </section>

          <p>
            For more details, review our full{" "}
            <a
              href="/docs/kscan-privacy-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-500"
            >
              Privacy Policy
            </a>{" "}
            or contact our privacy team at{" "}
            <a
              href="mailto:kscanai.app@gmail.com"
              className="text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-500"
            >
              kscanai.app@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
