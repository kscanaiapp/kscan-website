import type { Metadata } from "next";
import { SiteNav } from "@/components/ui/SiteNav";
import { PrivacyControlsClient } from "./PrivacyControlsClient";

export const metadata: Metadata = {
  title: "Do Not Sell or Share My Personal Information",
  description:
    "Manage opt-out rights and privacy choices for certain K Scan AI commercial, analytics, preference, and marketing data uses.",
  robots: { index: true, follow: true },
  alternates: {
    canonical: "https://kscan.app/do-not-sell-or-share",
  },
  openGraph: {
    title: "Do Not Sell or Share My Personal Information | K Scan AI",
    description:
      "Manage opt-out rights and privacy choices for certain K Scan AI commercial, analytics, preference, and marketing data uses.",
    url: "https://kscan.app/do-not-sell-or-share",
  },
  twitter: {
    card: "summary_large_image",
    title: "Do Not Sell or Share My Personal Information | K Scan AI",
    description:
      "Manage opt-out rights and privacy choices for certain K Scan AI commercial, analytics, preference, and marketing data uses.",
  },
};

export default function DoNotSellPage() {
  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />
      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <PrivacyControlsClient />
      </section>
    </main>
  );
}
