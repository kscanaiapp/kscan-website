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
        <PrivacyControlsClient />
      </section>
    </main>
  );
}
