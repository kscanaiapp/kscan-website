import type { Metadata } from "next";
import { SecurityPage } from "@/components/security/SecurityPage";

export const metadata: Metadata = {
  title: { absolute: "Security | K Scan AI" },
  description: "Learn how K Scan AI protects accounts, images, AI interactions, and app activity through secure development, pre-push scans, weekly production audits, access controls, monitoring, and responsible vulnerability response.",
  alternates: { canonical: "https://kscan.app/security" },
  openGraph: {
    title: "Security | K Scan AI",
    description: "Learn how K Scan AI protects accounts, images, AI interactions, and app activity through secure development, pre-push scans, weekly production audits, access controls, monitoring, and responsible vulnerability response.",
    url: "https://kscan.app/security",
    siteName: "K Scan AI",
    type: "website",
    images: [{ url: "/security-og.png", width: 1656, height: 932, alt: "K Scan AI security infrastructure" }],
  },
  twitter: { card: "summary_large_image", title: "Security | K Scan AI", description: "How K Scan AI protects accounts, images, AI interactions, and app activity.", images: ["/security-og.png"] },
};

export default function SecurityRoute() {
  return <SecurityPage />;
}
