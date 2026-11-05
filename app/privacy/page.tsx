import type { Metadata } from "next";
import { SiteNav } from "@/components/ui/SiteNav";

export const metadata: Metadata = {
  title: { absolute: "Privacy Summary | K Scan AI" },
  description: "Privacy Summary for K Scan AI, operated by Forest Hills Media Inc.",
  alternates: { canonical: "/privacy" },

};

export default function Page() {
  return <main id="main-content" className="min-h-screen bg-[#FAFAF8]">
    <SiteNav />
    <article className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
      <h1 className="font-display text-[38px] leading-[1.05] text-stone-900 sm:text-[46px] md:text-[56px]">Privacy Summary</h1>
      <p className="mt-6 text-sm leading-7 text-stone-600">Forest Hills Media Inc. | Prepared for approval: November 5, 2026 | Effective on approved publication</p>
      <p className="mt-4 text-sm italic leading-7 text-stone-600">This is a proposed replacement document for management and qualified legal review. It is not effective until approved and published.</p>
      <div className="mt-10 space-y-10 text-[15px] leading-8 text-stone-600 md:text-base">
      <section><h2 className="mb-3 text-lg font-semibold text-stone-900">Key Point</h2><p>K Scan AI is operated by Forest Hills Media Inc. and provides AI-assisted fashion discovery, styling, wardrobe and retailer referral functions for adults age 18 and older. This summary is not a replacement for the full Privacy Policy at <a className="break-words text-violet-700 underline underline-offset-4" href="https://kscan.app/legal/privacy">https://kscan.app/legal/privacy</a>.</p></section>
<section><h2 className="mb-3 text-lg font-semibold text-stone-900">What You Choose to Share</h2><p>When you select images or type queries, our systems may process the content for fashion analysis. We do not automatically scan all photos on your device. Scan images can include people or personal details; resizing or metadata removal does not guarantee face or plate masking.</p></section>
<section><h2 className="mb-3 text-lg font-semibold text-stone-900">Google Gemini and AI Permission</h2><p>Selected photos, text, Elise chats and authorized fashion context may be sent through K Scan AI to Google Gemini for requested AI processing. The app has a separate consent choice for affected operations. Turning permission off can prevent future Gemini-dependent requests, but does not erase earlier provider processing.</p></section>
<section><h2 className="mb-3 text-lg font-semibold text-stone-900">Where Other Data Goes</h2><p>Supabase supports accounts and cloud functions. Relevant shopping search terms may go to Serper or Brave Search. RevenueCat helps manage Apple or Google subscription records. Optional spoken Elise text may go to ElevenLabs, optional Photo Virtual Try-On images to AILabTools through RapidAPI, and optional approximate weather location to Open-Meteo. Email, push and analytics providers operate only for relevant enabled workflows.</p></section>
<section><h2 className="mb-3 text-lg font-semibold text-stone-900">Your Wardrobe and Rooms</h2><p>Recent Scans or wardrobe data can be local, while authorized chats, shared Rooms, entitlements and other account information can be cloud-backed. General Cloud Closet upload and restore is not promised as available. Other people you intentionally share with may see or copy your posts.</p></section>
<section><h2 className="mb-3 text-lg font-semibold text-stone-900">Purchases and Retailers</h2><p>Apple and Google bill native K+ subscriptions. Independent merchants handle purchases of clothing through external links. K Scan AI does not collect full payment-card numbers for the described native store-billed subscription flow.</p></section>
<section><h2 className="mb-3 text-lg font-semibold text-stone-900">Choices and Requests</h2><p>Use available app settings for supported consent, privacy, access, correction, deletion and export functions. Some controls are local; others follow your account. Contact <a className="break-words text-violet-700 underline underline-offset-4" href="mailto:kscanai.app@gmail.com?subject=Account%20Deletion%20Request">kscanai.app@gmail.com</a> for privacy requests. Applicable state-specific rights depend on the law and the company&apos;s activities.</p></section>
      </div>
    </article>
  </main>;
}
