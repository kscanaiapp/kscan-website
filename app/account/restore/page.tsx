import type { Metadata } from "next";
import { Suspense } from "react";
import AccountRestoreClient from "./AccountRestoreClient";

export const metadata: Metadata = {
  title: {
    absolute: "Restore Your K Scan AI Account | K Scan AI",
  },
  description: "Restore a K Scan AI account during the 30-day deletion grace period.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://kscan.app/account/restore",
  },
};

export default function Page() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-[#0B0B0F] text-white p-10">Loading…</main>}>
      <AccountRestoreClient />
    </Suspense>
  );
}
