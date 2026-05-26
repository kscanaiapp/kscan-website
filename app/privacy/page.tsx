import Link from "next/link";
import { SiteNav } from "@/components/ui/SiteNav";

const linkClassName =
  "text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-500";

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
              <div>
                <h3 className="font-semibold text-stone-700">No Facial Recognition:</h3>
                <p>We do not use scan data for facial recognition, biometric identification, or to identify individuals.</p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-700">Raw Scan Protection:</h3>
                <p>We do not sell raw uploaded scans or images.</p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-700">{"Face & Bystander Protection:"}</h3>
                <p>
                  K Scan is architected for privacy. We are currently implementing on-device edge processing intended
                  to auto-obscure detected faces and other bystander-identifying visual data before cloud processing.
                  During this beta phase, scan images are transmitted through secure, encrypted channels for processing.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-700">Transient Processing:</h3>
                <p>
                  Raw visual data is typically processed transiently and deleted within 24–72 hours unless you choose to
                  save it or another permitted exception applies.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-700">No Microphone in Initial Release:</h3>
                <p>
                  The initial mobile release does not request microphone permission or collect voice, speech-recognition,
                  raw audio, or voiceprint data.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="commercial-data" className="space-y-4">
            <h2 id="commercial-data" className="text-[15px] font-semibold text-stone-700 md:text-[16px]">
              2. Commercial Data &amp; Partnership Transparency
            </h2>
            <p>
              To support our discovery and commerce tools, K Scan AI may use limited commercial, attribution,
              analytics, and preference signals where permitted by law and subject to applicable consent, opt-out
              rights, and platform rules.
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-stone-700">Raw Scan Limits:</h3>
                <p>
                  We do not sell raw scans, uploaded images, biometric identifiers, facial recognition data, or
                  sensitive personal information.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-700">Aggregated Demand Intelligence:</h3>
                <p>
                  K Scan may create, use, or commercialize aggregated, anonymized, or de-identified demand intelligence
                  that does not reasonably identify you.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-700">Service Providers:</h3>
                <p>
                  We also share limited information with providers that help us operate K Scan, including cloud hosting,
                  analytics, security, customer support, and app infrastructure partners.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="rights-controls" className="space-y-4">
            <h2 id="rights-controls" className="text-[15px] font-semibold text-stone-700 md:text-[16px]">
              3. Your Rights &amp; Controls
            </h2>
            <p>You remain in control of your data and how it may be used.</p>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-stone-700">Opt-Out Rights:</h3>
                <p>
                  You may opt out of the sale, sharing, or similar use of personal information where required by law at:{" "}
                  <Link href="/do-not-sell-or-share" className={linkClassName}>
                    kscan.app/do-not-sell-or-share
                  </Link>
                  .
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-700">Global Privacy Control:</h3>
                <p>We honor Global Privacy Control signals as valid opt-out requests where required by law.</p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-700">Access &amp; Deletion:</h3>
                <p>
                  You may request access to, correction of, or deletion of your personal information, subject to
                  applicable law. If you create an account, you may also delete it in-app through Settings &gt; Account
                  &gt; Delete Account.
                </p>
              </div>
            </div>
          </section>

          <p>
            For more details, review our full{" "}
            <a href="/docs/kscan-privacy-policy.pdf" target="_blank" rel="noopener noreferrer" className={linkClassName}>
              Privacy Policy
            </a>{" "}
            or contact our privacy team at{" "}
            <a href="mailto:kscanai.app@gmail.com" className={linkClassName}>
              kscanai.app@gmail.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
