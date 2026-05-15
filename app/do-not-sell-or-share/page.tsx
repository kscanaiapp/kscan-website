import type { Metadata } from "next";
import { SiteNav } from "@/components/ui/SiteNav";
import { PrivacyControlsClient } from "./PrivacyControlsClient";

export const metadata: Metadata = {
  title: "Do Not Sell or Share My Personal Information",
  description:
    "Manage your K Scan AI data privacy choices, including opting out of the sale or sharing of personal information and requesting account data deletion.",
  robots: { index: true, follow: true },
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
