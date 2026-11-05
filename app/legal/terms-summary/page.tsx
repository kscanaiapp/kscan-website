import type { Metadata } from "next";
import { SiteNav } from "@/components/ui/SiteNav";

export const metadata: Metadata = {
  title: { absolute: "Terms Summary | K Scan AI" },
  description: "Terms Summary for K Scan AI, operated by Forest Hills Media Inc.",
  alternates: { canonical: "/legal/terms-summary" },

};

export default function Page() {
  return <main id="main-content" className="min-h-screen bg-[#FAFAF8]">
    <SiteNav />
    <article className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
      <h1 className="font-display text-[38px] leading-[1.05] text-stone-900 sm:text-[46px] md:text-[56px]">Terms Summary</h1>
      <p className="mt-6 text-sm leading-7 text-stone-600">Forest Hills Media Inc. | Prepared for approval: November 5, 2026 | Effective on approved publication</p>
      <p className="mt-4 text-sm italic leading-7 text-stone-600">This is a proposed replacement document for management and qualified legal review. It is not effective until approved and published.</p>
      <div className="mt-10 space-y-10 text-[15px] leading-8 text-stone-600 md:text-base">
      <section><h2 className="mb-3 text-lg font-semibold text-stone-900">What K Scan AI Does</h2><p>K Scan AI helps adults explore fashion, identify likely clothing and accessories from selected photos or text, receive AI styling suggestions, organize chosen wardrobe information, collaborate in Dressing Rooms and follow links to independent retailers. Available features depend on your device, permissions, region, account, and current activation.</p></section>
<section><h2 className="mb-3 text-lg font-semibold text-stone-900">Shopping and AI</h2><p>Scanner and Elise may send selected photos, text and relevant fashion context to Google Gemini with required permission. AI results can be wrong, incomplete or out of date. Retailer offers are from independent sellers. K Scan AI does not authenticate goods, guarantee price/stock or complete retailer checkout.</p></section>
<section><h2 className="mb-3 text-lg font-semibold text-stone-900">Your Fashion Information</h2><p>Saving a scan or wishlisting an item does not mean you own it. Some content stays on your device; other permitted account and Room data uses cloud services. Cloud Closet backup and cross-device restoration are not promised as generally available.</p></section>
<section><h2 className="mb-3 text-lg font-semibold text-stone-900">K+ Subscriptions</h2><p>K+ Monthly and Annual plans may be purchased through Apple or Google where the stores approve them. Actual prices, trial eligibility, billing cycle and renewals appear at purchase. Plans renew automatically unless cancelled. A subscription does not guarantee all optional or experimental tools. You can keep using eligible Free features without a K+ purchase.</p></section>
<section><h2 className="mb-3 text-lg font-semibold text-stone-900">Cancellation and Refunds</h2><p>Cancel from Apple Account subscriptions or Google Play subscriptions, depending on how you purchased. Uninstalling or deleting your K Scan AI account does not cancel the subscription. Eligible monthly-charge prorated refund requests are described in the full Refund and Cancellation Policy at <a className="break-words text-violet-700 underline underline-offset-4" href="https://kscan.app/legal/refund-policy">https://kscan.app/legal/refund-policy</a>. Apple and Google control relevant refund processing, and annual purchases follow distinct terms.</p></section>
<section><h2 className="mb-3 text-lg font-semibold text-stone-900">Your Content and Controls</h2><p>Your photos and messages remain yours. You authorize limited handling needed for requested features. You can manage supported privacy permissions, report and block abuse, and request deletion. K Scan AI is for users 18 and older.</p></section>
<section><h2 className="mb-3 text-lg font-semibold text-stone-900">Governing Documents</h2><p>The full Terms at <a className="break-words text-violet-700 underline underline-offset-4" href="https://kscan.app/legal/terms">https://kscan.app/legal/terms</a>, Privacy Policy at <a className="break-words text-violet-700 underline underline-offset-4" href="https://kscan.app/legal/privacy">https://kscan.app/legal/privacy</a>, and linked K+ and refund policies control over this plain-language summary. Operator: Forest Hills Media Inc. Support: <a className="break-words text-violet-700 underline underline-offset-4" href="mailto:kscanai.app@gmail.com?subject=Account%20Deletion%20Request">kscanai.app@gmail.com</a>.</p></section>
      </div>
    </article>
  </main>;
}
