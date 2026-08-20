import type { Metadata } from "next";
import { SiteNav } from "@/components/ui/SiteNav";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { termsAndConditions } from "@/lib/legal/terms-and-conditions";

export const metadata: Metadata = {
  title: { absolute: "K Scan AI Terms and Conditions" },
  description:
    "Read the full Terms and Conditions governing use of the K Scan AI website, mobile application, AI systems, and related services.",
  alternates: {
    canonical: "https://kscan.app/legal/terms",
  },
  openGraph: {
    title: "K Scan AI Terms and Conditions",
    description:
      "Read the full Terms and Conditions governing use of the K Scan AI website, mobile application, AI systems, and related services.",
    url: "https://kscan.app/legal/terms",
  },
  twitter: {
    card: "summary_large_image",
    title: "K Scan AI Terms and Conditions",
    description:
      "Read the full Terms and Conditions governing use of the K Scan AI website, mobile application, AI systems, and related services.",
  },
};

export default function LegalTermsPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />
      <LegalDocument
        document={termsAndConditions}
        downloadHref="https://wyyuqfdxucjksghsmhry.supabase.co/storage/v1/object/public/legal-documents/kscan-terms-and-conditions.pdf?v=2026-08-20"
        downloadLabel="Download Terms and Conditions PDF"
      />
    </main>
  );
}
