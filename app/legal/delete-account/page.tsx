import type { Metadata } from "next";
import { SiteNav } from "@/components/ui/SiteNav";

export const metadata: Metadata = {
  title: { absolute: "Delete Your K Scan AI Account | K Scan AI" },
  description: "Delete Your K Scan AI Account for K Scan AI, operated by Forest Hills Media Inc.",
  alternates: { canonical: "/legal/delete-account" },
  robots: { index: false, follow: true },
};

export default function Page() {
  return <main id="main-content" className="min-h-screen bg-[#FAFAF8]">
    <SiteNav />
    <article className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
      <h1 className="font-display text-[38px] leading-[1.05] text-stone-900 sm:text-[46px] md:text-[56px]">Delete Your K Scan AI Account</h1>

      <div className="mt-10 space-y-10 text-[15px] leading-8 text-stone-600 md:text-base">
      <section><h2 className="mb-3 text-lg font-semibold text-stone-900">Before You Delete</h2><p>Account deletion begins with deactivation and may provide an approximately 30-day restoration opportunity. If the account is not restored, it proceeds to permanent deletion processing subject to lawful retention and technical exceptions. Deactivation is not the same as completed erasure. Some data on an offline device or copies made by other people can remain outside our direct control.</p></section>
<section><h2 className="mb-3 text-lg font-semibold text-stone-900">Important Subscription Warning</h2><p>Deleting the K Scan AI account will not cancel your Apple or Google K+ subscription. Cancel first at <a className="break-words text-violet-700 underline underline-offset-4" href="https://apps.apple.com/account/subscriptions/">https://apps.apple.com/account/subscriptions/</a> or <a className="break-words text-violet-700 underline underline-offset-4" href="https://play.google.com/store/account/subscriptions">https://play.google.com/store/account/subscriptions</a> if you want to prevent future charges.</p></section>
<section><h2 className="mb-3 text-lg font-semibold text-stone-900">Request and Verification</h2><p>You can request deletion from the Privacy or Account settings inside K Scan AI. If you cannot or do not wish to use the app, email <a className="break-words text-violet-700 underline underline-offset-4" href="mailto:kscanai.app@gmail.com?subject=Account%20Deletion%20Request">kscanai.app@gmail.com</a> with the subject Account Deletion Request. Do not send account passwords or payment-card numbers. We may need to verify account ownership. You can also request privacy help or access your deletion status through available app controls.</p></section>
<section><h2 className="mb-3 text-lg font-semibold text-stone-900">Additional Information</h2><p>See the full Account Deletion and Restoration Policy at <a className="break-words text-violet-700 underline underline-offset-4" href="https://kscan.app/legal/delete-policy">https://kscan.app/legal/delete-policy</a> and Privacy Policy at <a className="break-words text-violet-700 underline underline-offset-4" href="https://kscan.app/legal/privacy">https://kscan.app/legal/privacy</a> for account, cloud, local, shared content, legal exceptions and deletion rights.</p></section>
      </div>
    </article>
  </main>;
}
