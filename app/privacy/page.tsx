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
            K Scan AI is a fashion-specific visual discovery and shopping-assistance service. When you choose to scan
            or upload an image, K Scan uses that image to identify fashion items, generate style signals, and return
            product matches. During the Beta phase, submitted scan images are securely transmitted to K Scan&apos;s cloud
            processing environment to provide the Service.
          </p>

          <section aria-labelledby="data-protection" className="space-y-4">
            <h2 id="data-protection" className="text-[15px] font-semibold text-stone-700 md:text-[16px]">
              1. Data Protection &amp; Visual Privacy
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-stone-700">No Facial Recognition:</h3>
                <p>
                  K Scan AI does not use facial recognition technology. We do not identify, verify, or analyze
                  individual faces.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-700">Cloud Scan Processing:</h3>
                <p>
                  During the Beta phase, scan images you submit are transmitted through secure, encrypted connections
                  to K Scan&apos;s cloud processing environment for AI visual processing and product matching.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-700">Photo &amp; Media Library Access:</h3>
                <p>
                  If you choose to upload screenshots, photos, outfit images, shopping screenshots, social-media
                  screenshots, or other images into Style Library, Dressing Rooms, saved items, style boards, or related
                  private visual-inspiration features, K Scan may request access to your device&apos;s photo or media
                  library. K Scan uses this access only for user-selected uploads or media you grant permission to
                  access.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-700">Face &amp; Bystander Protection:</h3>
                <p>
                  K Scan does not currently apply on-device face blurring or bystander-obscuring before upload. If a
                  submitted image contains a face, bystander, license plate, private document, or other identifying
                  element, that content may be included in the image transmitted for cloud processing.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-700">Future Privacy Roadmap:</h3>
                <p>
                  On-device face and bystander-obscuring technology is planned as a future privacy improvement, but it
                  is not currently available in the Beta release.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-700">Raw Scan Handling:</h3>
                <p>
                  Raw scan data is retained only as long as reasonably necessary to service the scan request and
                  related security, fraud-prevention, troubleshooting, support, quality-improvement, or
                  legal-compliance needs, and is then deleted or de-identified.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-700">No Microphone in Initial Release:</h3>
                <p>
                  The initial mobile release does not request microphone permission or collect voice,
                  speech-recognition, raw audio, or voiceprint data.
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
              analytics, commerce, and preference signals where permitted by law and subject to applicable consent,
              opt-out rights, platform rules, and user privacy controls.
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-stone-700">Raw Scan Limits:</h3>
                <p>
                  K Scan does not sell raw scans, uploaded images, biometric identifiers, facial recognition data,
                  payment card data, or sensitive personal information. Limited non-sensitive information may be shared
                  with partners for attribution, analytics, commerce routing, fraud prevention, and service
                  operations. Aggregated, anonymized, or de-identified demand intelligence may be commercialized where
                  it does not reasonably identify you. Some data sharing may be considered a &ldquo;sale&rdquo; or
                  &ldquo;sharing&rdquo; under broad privacy laws. Where required, we provide opt-out rights.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-700">Aggregated Demand Intelligence:</h3>
                <p>
                  K Scan may create, use, disclose, license, sell, or commercialize aggregated, anonymized, or
                  de-identified demand intelligence that does not reasonably identify an individual. This may include
                  fashion trend signals, category interest, product demand patterns, retailer performance insights, and
                  aggregated commercial intelligence.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-700">Service Providers:</h3>
                <p>
                  K Scan may share information with providers that help operate the Service, including cloud hosting,
                  storage, infrastructure, AI inference, analytics, security, fraud prevention, customer support, email
                  delivery, diagnostics, and app operations partners. If a third-party AI, cloud, or plugin API
                  provider receives submitted scan images, that provider may process those images under its agreement
                  with K Scan, its applicable provider terms, this Privacy Summary, the full Privacy Policy,
                  applicable law, platform rules, and user privacy controls.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="rights-controls" className="space-y-4">
            <h2 id="rights-controls" className="text-[15px] font-semibold text-stone-700 md:text-[16px]">
              3. Your Rights &amp; Controls
            </h2>
            <p>You remain in control of your data and how it may be used, subject to applicable law.</p>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-stone-700">Opt-Out Rights:</h3>
                <p>
                  You may opt out of the sale, sharing, or similar use of personal information where required by law
                  at:{" "}
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
                  applicable law. If you create an account, you may delete it in the app through{" "}
                  {"Settings > Account > Delete Account"}. This option is available regardless of whether you created
                  your account using email, Sign in with Apple, Google Sign-In, or another supported login method.
                </p>
              </div>
            </div>
          </section>

          <section aria-labelledby="contact" className="space-y-4">
            <h2 id="contact" className="text-[15px] font-semibold text-stone-700 md:text-[16px]">
              4. Contact
            </h2>
            <p>
              Our full{" "}
              <a
                href="/docs/kscan-privacy-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-2 transition-colors hover:text-indigo-800 hover:decoration-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
              >
                Privacy Policy
              </a>{" "}
              is available online or by email at kscanai.app@gmail.com.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
