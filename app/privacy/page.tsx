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
            K Scan AI is built privacy-first. We collect only what’s needed to run the service, process scans, and
            communicate with you. Fashion scans are processed on-device where possible, or through encrypted cloud
            systems when needed. We avoid storing personal data beyond what is necessary to operate the product.
          </p>

          <p>
            We do not sell your personal information. We share limited data only with trusted service providers —
            including hosting, analytics, email, and security partners — solely to operate K Scan.
          </p>

          <p>You can request access, correction, or deletion of your data at any time.</p>

          <p>
            For more details, see our full Privacy Policy or contact{" "}
            <a
              href="mailto:kscanai.app@gmail.com"
              className="text-stone-700 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-900 hover:decoration-stone-500"
            >
              kscanai.app@gmail.com
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
