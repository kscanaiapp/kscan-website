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
    absolute: "Revenue Strategy Brief | K Scan AI",
  },
  description: "Protected K Scan AI revenue strategy brief.",
  alternates: {
    canonical: "/investors/revenue-brief",
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
    console.error("Revenue brief page requested, but access password is not configured.");
    return false;
  }

  const cookieStore = await cookies();
  const provided = cookieStore.get(INVESTOR_ACCESS_COOKIE)?.value ?? "";
  return isInvestorAccessCookieValid(provided, configuredPassword);
}

export default async function InvestorRevenueBriefPage() {
  if (!(await hasInvestorAccess())) {
    redirect("/investors");
  }

  return (
    <main id="main-content" className="min-h-screen bg-[#FAFAF8]">
      <SiteNav />

      <section className="mx-auto flex max-w-6xl flex-col gap-7 px-6 py-10 md:px-10 md:py-14">
        <div className="border-b border-stone-200/80 pb-7">
          <div>
            <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-600">
              K Scan AI
            </p>
            <h1 className="font-display text-[40px] leading-[1.04] text-stone-900 md:text-[56px]">
              Revenue Strategy Brief
            </h1>
            <p className="mt-4 max-w-xl text-[14px] leading-[1.85] text-stone-500 md:text-[15px]">
              Monetization path, revenue layers, and profitability logic.
            </p>
          </div>
        </div>

        <div className="rounded-[28px] border border-stone-200/80 bg-white px-6 py-14 text-center shadow-[0_22px_50px_rgba(35,28,22,0.08)] sm:px-10 md:py-18">
          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-600">
              Secure Review
            </p>
            <h2 className="font-display text-[34px] leading-[1.08] text-stone-900 md:text-[46px]">
              Revenue Strategy Brief Ready
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-[1.8] text-stone-500">
              For optimal security and readability, open the brief in a dedicated browser tab.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
              <Link
                href="/api/investor/revenue-brief"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full bg-stone-900 px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-stone-800"
              >
                Open Revenue Brief PDF
              </Link>
              <Link
                href="/investors"
                className="inline-flex justify-center rounded-full border border-stone-300 bg-white px-7 py-3.5 text-[12px] font-medium uppercase tracking-[0.14em] text-stone-700 transition-colors hover:border-stone-400 hover:text-stone-900"
              >
                Return to Portal
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
