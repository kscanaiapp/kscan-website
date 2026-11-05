import type { Metadata } from "next";
import { SiteNav } from "@/components/ui/SiteNav";
import { PrivacyControlsClient } from "./PrivacyControlsClient";

export const metadata: Metadata = {
  title: {
    absolute: "Do Not Sell or Share My Personal Information | K Scan AI",
  },
  description:
    "Use K Scan AI privacy controls for sale, sharing, targeted advertising, and Global Privacy Control-related requests where applicable.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://kscan.app/do-not-sell-or-share",
  },
  openGraph: {
    title: "Do Not Sell or Share My Personal Information | K Scan AI",
    description:
      "Use K Scan AI privacy controls for sale, sharing, targeted advertising, and Global Privacy Control-related requests where applicable.",
    url: "https://kscan.app/do-not-sell-or-share",
    siteName: "K Scan AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Do Not Sell or Share My Personal Information | K Scan AI",
    description:
      "Use K Scan AI privacy controls for sale, sharing, targeted advertising, and Global Privacy Control-related requests where applicable.",
  },
};

export default function DoNotSellPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />
      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <div className="mb-12 space-y-7 text-[15px] leading-8 text-stone-600">
          <h1 className="font-display text-4xl text-stone-900">Do Not Sell or Share My Personal Information</h1>
          <h2 className="text-xl font-semibold text-stone-900">Your Privacy Choices</h2>
          <p>K Scan AI offers relevant privacy settings in the app, including Google Gemini processing permission, applicable data access/export/deletion options, supported notification/location controls and optional brand-source search preferences. Device-specific settings are managed through iOS or Android.</p>
          <section><h3 className="font-semibold text-stone-900">Google Gemini Consent</h3><p>Your app can request consent before sending selected photos, text, Elise chats and permitted styling context to Google Gemini. You can decline or withdraw that permission through the supported privacy control; dependent AI operations may no longer work until you re-enable it. Withdrawal does not retroactively undo prior transfers.</p></section>
          <section><h3 className="font-semibold text-stone-900">Sale and Sharing Opt-Outs</h3><p>If an applicable U.S. privacy law gives you an opt-out for a K Scan AI data activity that legally qualifies as a sale, share or targeted advertising, use the applicable functioning control or contact <a className="text-violet-700 underline" href="mailto:kscanai.app@gmail.com">kscanai.app@gmail.com</a>. This page does not represent that every analytics transfer is a legal sale or that a general toggle blocks all necessary service processing.</p></section>
          <section><h3 className="font-semibold text-stone-900">Access, Correction, Export and Deletion</h3><p>Use the app Privacy screen where available, or contact kscanai.app@gmail.com. Account deletion information appears at <a className="text-violet-700 underline" href="/legal/delete-account">Delete Your K Scan AI Account</a>. We may verify the request to protect your data.</p></section>
          <section><h3 className="font-semibold text-stone-900">Full Notice</h3><p>Read the full <a className="text-violet-700 underline" href="/legal/privacy">Privacy Policy</a> for actual categories, recipients, retention criteria, and applicable rights. Website controls and app controls are not necessarily the same.</p></section>
        </div>
        <PrivacyControlsClient />
      </section>
    </main>
  );
}
