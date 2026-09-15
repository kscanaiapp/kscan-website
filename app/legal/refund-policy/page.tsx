import type { Metadata } from "next";
import { SiteNav } from "@/components/ui/SiteNav";
import { LegalDocument } from "@/components/legal/LegalDocument";
import { refundPolicy } from "@/lib/legal/refund-policy";

export const metadata: Metadata = {
  title: { absolute: "K Scan AI Refund and Cancellation Policy" },
  description:
    "Read the full K Scan AI Refund and Cancellation Policy covering eligible subscription refunds, cancellations, app-store purchases, promotional access, billing disputes, and consumer rights.",
  alternates: {
    canonical: "https://kscan.app/legal/refund-policy",
  },
  openGraph: {
    title: "K Scan AI Refund and Cancellation Policy",
    description:
      "Read the full K Scan AI Refund and Cancellation Policy covering eligible subscription refunds, cancellations, app-store purchases, promotional access, billing disputes, and consumer rights.",
    url: "https://kscan.app/legal/refund-policy",
  },
  twitter: {
    card: "summary_large_image",
    title: "K Scan AI Refund and Cancellation Policy",
    description:
      "Read the full K Scan AI Refund and Cancellation Policy covering eligible subscription refunds, cancellations, app-store purchases, promotional access, billing disputes, and consumer rights.",
  },
};

export default function LegalRefundPolicyPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />
      <LegalDocument document={refundPolicy} />
    </main>
  );
}
