import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/ui/SiteNav";
import { PlatformDownload } from "./PlatformDownload";

export const metadata: Metadata = {
  title: {
    absolute: "K Scan AI | Get the App",
  },
  description:
    "Get the K Scan AI beta on Android through Google Play or access the iOS beta through TestFlight.",
  alternates: {
    canonical: "/download",
  },
  openGraph: {
    title: "K Scan AI | Get the App",
    description:
      "Get the K Scan AI beta on Android through Google Play or access the iOS beta through TestFlight.",
    url: "https://kscan.app/download",
    siteName: "K Scan AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "K Scan AI | Get the App",
    description:
      "Get the K Scan AI beta on Android through Google Play or access the iOS beta through TestFlight.",
  },
};

export default function DownloadPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />

      <section className="mx-auto max-w-3xl px-6 py-16 md:px-10 md:py-24">
        <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-600">
          Available in Beta
        </p>
        <h1 className="font-display text-[38px] leading-[1.05] text-stone-900 sm:text-[46px] md:text-[56px]">
          Get K Scan AI
        </h1>
        <p className="mt-6 max-w-xl text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
          Start scanning fashion from real life, photos, and screenshots. Download the Android beta
          through Google Play or access the iOS beta through TestFlight.
        </p>

        <div className="mt-10">
          <PlatformDownload />
        </div>

        <p className="mt-8 text-[13px] text-stone-500">
          <Link
            href="/test-center"
            className="underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-800 hover:decoration-stone-500"
          >
            Visit Test Center
          </Link>
        </p>
      </section>
    </main>
  );
}
