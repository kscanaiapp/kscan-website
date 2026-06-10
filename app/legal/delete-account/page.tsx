import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/ui/SiteNav";

export const metadata: Metadata = {
  title: "Delete Your K Scan AI Account",
  description:
    "Request deletion of your K Scan AI account and personal data. Learn what data is deleted, what may be retained, and how to contact us.",
  robots: { index: false, follow: true },
};

export default function DeleteAccountPage() {
  const linkClassName =
    "text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-500";

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <h1 className="font-display text-[38px] leading-[1.05] text-stone-900 sm:text-[46px] md:text-[56px]">
          Delete Your K Scan AI Account
        </h1>

        <div className="mt-8 space-y-6 text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          <p>
            You can request deletion of your K Scan AI account and associated personal data. Account deletion is handled
            through a request workflow and is not immediate.
          </p>

          <p>
            Want a copy of your account data before deletion? Request a data export before deleting
            your account.{" "}
            <Link href="/support" className={linkClassName}>
              Request Data Export
            </Link>
          </p>

          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-400">
              How to Request Deletion
            </h2>
            <ul className="space-y-2 pl-4">
              <li>In app: Sign in to K Scan AI, then go to Privacy and choose Delete Account.</li>
              <li>
                Email: Send a request to{" "}
                <a href="mailto:kscanai.app@gmail.com?subject=Account%20Deletion%20Request" className={linkClassName}>
                  kscanai.app@gmail.com
                </a>{" "}
                with the subject &ldquo;Account Deletion Request&rdquo; and include the email address associated with
                your account.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-400">
              Data Deleted
            </h2>
            <p>
              Deletion covers account and profile data, privacy preferences, saved style scans, scan history, Dressing
              Room contents, Dressing Room share links, and user-linked app data where applicable.
            </p>
            <ul className="space-y-2 pl-4">
              <li>StyleChat conversations, saved style preferences, Style Memory, and personalization context connected to your account.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-400">
              Data Retained
            </h2>
            <p>
              K Scan may retain information where required or permitted for legal compliance, security, fraud
              prevention, dispute resolution, accounting or tax obligations, or de-identified and aggregated analytics.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-400">
              Processing Time
            </h2>
            <p>
              Deletion requests are processed within 30 days unless a legal, security, or technical exception applies.
              If you have shared Dressing Room links, account deletion processing will revoke those share tokens and
              make the links inaccessible to anyone who has them, where technically available.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="mt-10 text-[11px] font-semibold uppercase tracking-widest text-stone-400">
              Related Resources
            </h2>
            <p>
              You can also review the{" "}
              <Link href="/legal/privacy" className={linkClassName}>
                Privacy Policy
              </Link>{" "}
              or visit{" "}
              <Link href="/support" className={linkClassName}>
                Support
              </Link>{" "}
              for account help.
            </p>
          </section>

          <section className="space-y-2 pt-4">
            <h2 className="text-[11px] font-semibold uppercase tracking-widest text-stone-400">Contact</h2>
            <p>
              For account deletion requests or questions, contact{" "}
              <a href="mailto:kscanai.app@gmail.com?subject=Account%20Deletion%20Request" className={linkClassName}>
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
