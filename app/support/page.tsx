import { SiteNav } from "@/components/ui/SiteNav";

export default function SupportPage() {
  const linkClassName =
    "text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-500";

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <h1 className="font-display text-[38px] leading-[1.05] text-stone-900 sm:text-[46px] md:text-[56px]">
          K Scan AI Support
        </h1>

        <div className="mt-8 space-y-6 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <section className="space-y-2">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-400">Contact</h2>
            <p>
              Support:{" "}
              <a href="mailto:support@kscan.app" className={linkClassName}>
                support@kscan.app
              </a>
            </p>
            <p>
              Privacy:{" "}
              <a href="mailto:privacy@kscan.app" className={linkClassName}>
                privacy@kscan.app
              </a>
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-400">
              Camera and Scan Troubleshooting
            </h2>
            <ul className="space-y-2 pl-4">
              <li>Confirm camera permission is granted in iOS Settings.</li>
              <li>Ensure stable network connectivity before scanning.</li>
              <li>Retry a scan if the backend request times out, especially after inactivity.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-400">
              Account Deletion Help
            </h2>
            <ul className="space-y-2 pl-4">
              <li>Use the in-app deletion request workflow from Privacy controls.</li>
              <li>Requests are reviewed and processed within beta operations policy timelines.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-400">
              Data Export and Correction Help
            </h2>
            <p>Submit export and correction requests from the in-app Privacy screen when signed in.</p>
          </section>

          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-400">
              Beta Support Expectations
            </h2>
            <ul className="space-y-2 pl-4">
              <li>Initial response times may vary during beta.</li>
              <li>Feature behavior may change as reliability and safety updates ship.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-400">
              Reviewer and Tester Help
            </h2>
            <ul className="space-y-2 pl-4">
              <li>
                Testers can report crashes, permission issues, and scan-result concerns to{" "}
                <a href="mailto:support@kscan.app" className={linkClassName}>
                  support@kscan.app
                </a>
                .
              </li>
              <li>Include device model, iOS version, and timestamp when possible.</li>
            </ul>
          </section>
        </div>

        <div className="mt-14 border-t border-stone-100 pt-8 text-[13px] text-stone-400">
          <p>&copy; 2026 K SCAN AI. All rights reserved.</p>
        </div>
      </section>
    </main>
  );
}
