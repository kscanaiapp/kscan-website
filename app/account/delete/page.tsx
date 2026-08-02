import type { Metadata } from "next";
import DeleteRequestClient from "./DeleteRequestClient";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { absolute: "Delete Your K Scan AI Account | K Scan AI" },
  description: "Securely authenticate and request deletion of your K Scan AI account.",
  robots: { index: false, follow: false, nocache: true },
  referrer: "no-referrer",
  alternates: { canonical: "https://kscan.app/account/delete" },
};

export default function AccountDeletePage() {
  return <DeleteRequestClient />;
}

