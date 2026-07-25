import type { Metadata } from "next";
import { SiteNav } from "@/components/ui/SiteNav";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { privacyPolicy } from "@/lib/legal/privacy-policy";

export const metadata: Metadata = {
  title: { absolute: "K Scan AI Privacy Policy" },
  description:
    "Read the full K Scan AI Privacy Policy, including how K Scan collects, uses, protects, retains, and shares information across its website and mobile application.",
  alternates: {
    canonical: "https://kscan.app/legal/privacy",
  },
  openGraph: {
    title: "K Scan AI Privacy Policy",
    description:
      "Read the full K Scan AI Privacy Policy, including how K Scan collects, uses, protects, retains, and shares information across its website and mobile application.",
    url: "https://kscan.app/legal/privacy",
  },
  twitter: {
    card: "summary_large_image",
    title: "K Scan AI Privacy Policy",
    description:
      "Read the full K Scan AI Privacy Policy, including how K Scan collects, uses, protects, retains, and shares information across its website and mobile application.",
  },
};

export default function LegalPrivacyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />
      <LegalDocument
        document={privacyPolicy}
        downloadHref="https://wyyuqfdxucjksghsmhry.supabase.co/storage/v1/object/public/legal-documents/kscan-privacy-policy.pdf"
        downloadLabel="Download Privacy Policy PDF"
      />
    </main>
  );
}
