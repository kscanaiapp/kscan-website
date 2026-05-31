import { SiteNav } from "@/components/ui/SiteNav";

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
        <p className="mt-4 text-[14px] text-stone-400">Last updated: May 2026</p>

        <div className="mt-8 space-y-6 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <p>
            K Scan AI helps users scan fashion items and receive AI-assisted style and product discovery results.
          </p>

          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-400">
              Data Flow for Scans
            </h2>
            <ul className="space-y-2 pl-4">
              <li>
                Scan images are transmitted securely as data URI/base64 payloads to the K Scan backend for AI fashion
                analysis.
              </li>
              <li>Backend service endpoint: kscan-app-1.onrender.com.</li>
              <li>Analysis is performed through a backend AI fashion-analysis service.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-400">
              Account and Infrastructure
            </h2>
            <ul className="space-y-2 pl-4">
              <li>
                Supabase is used for authentication, database infrastructure, privacy settings, deletion/export/correction
                requests, and style-library storage where applicable.
              </li>
              <li>Saved images may be stored when users explicitly save items or use storage-backed features.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-400">
              Privacy Sanitization Status (Beta)
            </h2>
            <ul className="space-y-2 pl-4">
              <li>
                A privacy sanitizer hook exists as infrastructure and may operate in pass-through mode during beta unless
                Face Blur v2 is completed.
              </li>
              <li>K Scan does not represent this beta as active on-device face blurring.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-400">
              Product Scope
            </h2>
            <p>K Scan is not designed for facial recognition, biometric identification, or surveillance.</p>
          </section>

          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-400">
              Requests and Retention
            </h2>
            <ul className="space-y-2 pl-4">
              <li>Account deletion requests are routed through an in-app deletion-request workflow.</li>
              <li>Requests are processed within 30 days unless retention is legally required or permitted.</li>
            </ul>
          </section>

          <section className="space-y-2 pt-4">
            <h2 className="text-[11px] font-semibold uppercase tracking-widest text-stone-400">Contact</h2>
            <p>
              For support or privacy requests, contact{" "}
              <a href="mailto:kscanai.app@gmail.com" className={linkClassName}>
                kscanai.app@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-14 border-t border-stone-100 pt-8 text-[13px] text-stone-400">
          <p>&copy; 2026 K SCAN AI. All rights reserved.</p>
        </div>
      </section>
    </main>
  );
}
