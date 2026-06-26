import { SiteNav } from "@/components/ui/SiteNav";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Privacy Policy | K Scan AI",
  },
  description:
    "Read the K Scan AI Privacy Policy, including how the service handles account data, uploads, AI-assisted results, privacy requests, and user controls.",
  alternates: {
    canonical: "https://kscan.app/legal/privacy",
  },
  openGraph: {
    title: "Privacy Policy | K Scan AI",
    description:
      "Read the K Scan AI Privacy Policy, including how the service handles account data, uploads, AI-assisted results, privacy requests, and user controls.",
    url: "https://kscan.app/legal/privacy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | K Scan AI",
    description:
      "Read the K Scan AI Privacy Policy, including how the service handles account data, uploads, AI-assisted results, privacy requests, and user controls.",
  },
};

export default function LegalPrivacyPage() {
  const linkClassName =
    "text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-500";

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <h1 className="font-display text-[38px] leading-[1.05] text-stone-900 sm:text-[46px] md:text-[56px]">
          K Scan AI Privacy Notice
        </h1>
        <p className="mt-4 text-[14px] text-stone-600">Last updated: May 2026</p>

        <div className="mt-8 space-y-6 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <p>
            K Scan AI is intended for users 18 and older and is not directed to children or minors. Users under 18
            should not use the Service. Users should upload clothing-focused images only.
          </p>

          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-600">
              Data Flow for Scans
            </h2>
            <ul className="space-y-2 pl-4">
              <li>
                Images, StyleChat messages, and related content may be processed through secure cloud systems and AI
                providers to provide scan results, StyleChat, product matching, shopping links, support, safety, and
                service improvement.
              </li>
              <li>AI outputs and product matches may be incomplete, inaccurate, unavailable, or based on similar rather than exact matches.</li>
              <li>Retailer links lead to third-party sites or services with their own terms and privacy policies.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-600">
              Account and Infrastructure
            </h2>
            <ul className="space-y-2 pl-4">
              <li>
                Supabase is used for authentication, database infrastructure, privacy settings, deletion/export/correction
                requests, and account-level privacy workflows.
              </li>
              <li>The current iOS submission build saves scan thumbnails locally on the device when users save scans.</li>
              <li>K Scan does not currently use third-party advertising SDKs or collect Advertising ID for targeted advertising unless later disclosed.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-600">
              Privacy Sanitization Status (Beta)
            </h2>
            <ul className="space-y-2 pl-4">
              <li>
                K Scan is not designed for surveillance, facial recognition, biometric identification, or identifying
                people.
              </li>
              <li>K Scan does not create biometric templates, faceprints, or identity profiles.</li>
              <li>Users should avoid uploading faces, bystanders, license plates, sensitive documents, or private information about other people.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-600">
              Product Scope
            </h2>
            <p>K Scan AI is intended for users 18 and older, is not directed to children or minors, and users under 18 should not use the Service.</p>
            <p>K Scan does not currently apply automatic face blurring or automatic bystander filtering before upload.</p>
          </section>

          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-600">
              Requests and Retention
            </h2>
            <ul className="space-y-2 pl-4">
              <li>Account deletion requests are routed through Privacy &gt; Delete Account in the app.</li>
              <li>Deletion requests are generally processed within 30 days, subject to legal, security, fraud-prevention, backup, and operational limits.</li>
            </ul>
            <p>
              For sale, sharing, or sensitive-data preference choices, visit our{" "}
              <a href="/do-not-sell-or-share" className={linkClassName}>
                Do Not Sell or Share page
              </a>
              .
            </p>
          </section>

          <section className="space-y-2 pt-4">
            <h2 className="text-[11px] font-semibold uppercase tracking-widest text-stone-600">Contact</h2>
            <p>
              For questions, or to obtain a full copy of our{" "}
              <a
                href="/docs/kscan-privacy-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm font-medium text-indigo-600 underline decoration-indigo-300 underline-offset-2 transition-colors hover:text-indigo-800 hover:decoration-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2"
              >
                Privacy Policy
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
