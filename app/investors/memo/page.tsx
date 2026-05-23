import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import type { Metadata } from "next";
import {
  INVESTOR_ACCESS_COOKIE,
  isInvestorAccessCookieValid,
} from "@/lib/investorAccess";
import { SiteNav } from "@/components/ui/SiteNav";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    absolute: "Investor Memo | K Scan AI",
  },
  description: "Protected K Scan AI investor memo.",
  alternates: {
    canonical: "/investors/memo",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

async function hasInvestorAccess() {
  const configuredPassword = process.env.INVESTOR_ACCESS_PASSWORD;
  if (!configuredPassword) {
    console.error("Investor memo page requested, but access password is not configured.");
    return false;
  }

  const cookieStore = await cookies();
  const provided = cookieStore.get(INVESTOR_ACCESS_COOKIE)?.value ?? "";
  return isInvestorAccessCookieValid(provided, configuredPassword);
}

export default async function InvestorMemoPage() {
  if (!(await hasInvestorAccess())) {
    redirect("/investors");
  }

  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />

      <section className="mx-auto flex max-w-6xl flex-col gap-7 px-6 py-10 md:px-10 md:py-14">
        <div className="flex flex-col gap-6 border-b border-stone-200/80 pb-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-400">
              K Scan AI
            </p>
            <h1 className="font-display text-[40px] leading-[1.04] text-stone-900 md:text-[56px]">
              Investor Memo
            </h1>
            <p className="mt-4 max-w-xl text-[14px] leading-[1.85] text-stone-500 md:text-[15px]">
              Thesis, market, product, and proof-gate overview.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Link
              href="/api/investor/memo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full bg-stone-900 px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-stone-800"
            >
              Open PDF
            </Link>
            <Link
              href="/investors"
              className="inline-flex justify-center rounded-full border border-stone-300 bg-white px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-stone-700 transition-colors hover:border-stone-400 hover:text-stone-900"
            >
              Back to Investor Portal
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-[28px] border border-stone-200/80 bg-white p-2 shadow-[0_22px_50px_rgba(35,28,22,0.08)] md:p-3">
          <div className="h-[calc(100vh-200px)] min-h-[520px] overflow-auto rounded-[22px] bg-[#F7F4EF] md:h-[80vh]">
            <iframe
              src="/api/investor/memo"
              title="K Scan AI Investor Memo"
              className="h-full w-full border-0 bg-white"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
