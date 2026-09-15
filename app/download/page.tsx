import type { Metadata } from "next";
import { SiteNav } from "@/components/ui/SiteNav";
import { PlatformDownload } from "./PlatformDownload";

export const metadata: Metadata = {
  title: {
    absolute: "K Scan AI | Get the App",
  },
  description:
    "Get K Scan AI on Android through Google Play or on iOS through the Apple App Store.",
  alternates: {
    canonical: "/download",
  },
  openGraph: {
    title: "K Scan AI | Get the App",
    description:
      "Get K Scan AI on Android through Google Play or on iOS through the Apple App Store.",
    url: "https://kscan.app/download",
    siteName: "K Scan AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "K Scan AI | Get the App",
    description:
      "Get K Scan AI on Android through Google Play or on iOS through the Apple App Store.",
  },
};

export default function DownloadPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-600">
          Available Now
        </p>
        <h1 className="font-display text-[38px] leading-[1.05] text-stone-900 sm:text-[46px] md:text-[56px]">
          Get K Scan AI
        </h1>
        <p className="mt-6 max-w-xl text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          Start scanning fashion from real life, photos, and screenshots. Download K Scan AI on Google Play
          or the Apple App Store.
        </p>

        <div className="mt-10">
          <PlatformDownload />
        </div>
      </section>
    </main>
  );
}
