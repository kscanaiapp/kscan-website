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

const linkClassName =
  "text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-500";

export default function PrivacyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <h1 className="font-display text-[38px] leading-[1.05] text-stone-900 sm:text-[46px] md:text-[56px]">
          K Scan AI Privacy Summary
        </h1>

        <div className="mt-8 space-y-6 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <p>
            K Scan AI is intended for users 18 and older and is not directed to children or minors. Users under 18
            should not use the Service. Users should upload clothing-focused images only. Images, StyleChat messages,
            and related content may be processed through secure cloud systems and AI providers to provide scan results,
            StyleChat, product matching, shopping links, support, safety, and service improvement.
          </p>

          <section aria-labelledby="data-protection" className="space-y-4">
            <h2 id="data-protection" className="text-[15px] font-semibold text-stone-700 md:text-[16px]">
              1. Data Protection &amp; Visual Privacy
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-stone-700">No Facial Recognition:</h3>
                <p>
                  K Scan is not designed for surveillance, facial recognition, biometric identification, or
                  identifying people. K Scan does not create biometric templates, faceprints, or identity profiles.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-700">Cloud and AI Processing:</h3>
                <p>
                  Images, StyleChat messages, and related content may be processed through secure cloud systems and AI
                  providers to provide scan results, StyleChat, product matching, shopping links, support, safety, and
                  service improvement. AI outputs and product matches may be incomplete, inaccurate, unavailable, or
                  based on similar rather than exact matches.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-700">Clothing-Focused Uploads:</h3>
                <p>
                  Users should upload clothing-focused images only. Avoid uploading faces, bystanders, license plates,
                  sensitive documents, or private information about other people unless you intend that content to be
                  processed as part of the image.
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
                <h3 className="font-semibold text-stone-700">18+ Use Only:</h3>
                <p>
                  K Scan AI is intended for users 18 and older, is not directed to children or minors, and users under
                  18 should not use the Service.
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
                  The current iOS App Store submission build does not request microphone permission or collect voice,
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
              opt-out rights, platform rules, and user privacy controls. Retailer links lead to third-party sites or
              services with their own terms and privacy policies.
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
                <h3 className="font-semibold text-stone-700">Advertising &amp; Tracking:</h3>
                <p>
                  K Scan does not currently use third-party advertising SDKs or collect Advertising ID for targeted
                  advertising unless later disclosed.
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
                  applicable law. Deletion requests are generally processed within 30 days, subject to legal,
                  security, fraud-prevention, backup, and operational limits.
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
              <Link
                href="/legal/privacy"
                className="rounded-sm font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-2 transition-colors hover:text-indigo-800 hover:decoration-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
              >
                Privacy Policy
              </Link>{" "}
              is available online or by email at kscanai.app@gmail.com.
            </p>
            <p className="text-[13px]">
              <a
                href="https://wyyuqfdxucjksghsmhry.supabase.co/storage/v1/object/public/legal-documents/kscan-privacy-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                Download Privacy Policy PDF
              </a>
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
