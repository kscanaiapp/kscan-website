import type { Metadata } from "next";
import { SiteNav } from "@/components/ui/SiteNav";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { deletePolicy } from "@/lib/legal/delete-policy";

export const metadata: Metadata = {
  title: { absolute: "Deletion Policy | K Scan AI" },
  description:
    "K Scan AI account deletion, recovery period, permanent deletion, retained data, and subscription information.",
  alternates: {
    canonical: "https://kscan.app/legal/delete-policy",
  },
  openGraph: {
    title: "Deletion Policy | K Scan AI",
    description:
      "K Scan AI account deletion, recovery period, permanent deletion, retained data, and subscription information.",
    url: "https://kscan.app/legal/delete-policy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deletion Policy | K Scan AI",
    description:
      "K Scan AI account deletion, recovery period, permanent deletion, retained data, and subscription information.",
  },
};

export default function LegalDeletePolicyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />
      <LegalDocument
        document={deletePolicy}
        downloadHref="https://wyyuqfdxucjksghsmhry.supabase.co/storage/v1/object/public/legal-documents/kscan-delete-policy.pdf"
        downloadLabel="Download Deletion Policy PDF"
      />
    </main>
  );
}
