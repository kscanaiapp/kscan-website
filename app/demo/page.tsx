import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { DemoEnvironmentSwitcher } from "@/components/DemoEnvironmentSwitcher";
import { SiteNav } from "@/components/ui/SiteNav";
import { demoMetadata } from "./metadata";

export const metadata = demoMetadata;

export default function DemoPage() {
  return (
    <main id="main-content" className="min-h-screen">
      <SiteNav />

      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:px-10 md:pb-32 md:pt-24">
          <div className="max-w-3xl">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-600">Demo</p>
            <h1 className="font-display text-[42px] leading-[1.02] text-stone-900 sm:text-[52px] md:text-[68px]">
              Mobile now. Wearables next.
            </h1>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.9] text-stone-500 md:text-[17px]">
              Two views of the K Scan product roadmap: the current mobile experience built for fashion conversion,
              and a browser-enabled smart glasses prototype shaping where hands-free commerce goes next.
            </p>
          </div>

          <section className="mt-0">
            <div className="mb-8 flex items-center gap-5 md:mb-10">
              <div aria-hidden="true" className="h-px flex-1 bg-stone-200" />
              <p className="shrink-0 text-[10px] font-medium uppercase tracking-[0.28em] text-stone-600">
                Product Vision Demo
              </p>
              <div aria-hidden="true" className="h-px flex-1 bg-stone-200" />
            </div>

            <div className="group overflow-hidden rounded-[24px] border border-stone-200/80 bg-[#F4F0EA] p-3 shadow-[0_16px_36px_rgba(35,28,22,0.06)]">
              <div className="relative overflow-hidden rounded-[18px]">
                <Image
                  src="/demo/kscan-demo-image-1.jpeg"
                  alt="K Scan in the real world - visual inspiration to commerce-ready output"
                  width={1600}
                  height={1067}
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                  priority
                />
              </div>
            </div>

            <p className="mt-5 text-[13px] leading-[1.8] text-stone-600 md:mt-6 md:max-w-2xl">
              A grounded look at how K Scan appears in the real world - turning visual inspiration into
              commerce-ready output without breaking the flow of discovery.
            </p>
          </section>

          <section className="mt-20 md:mt-24">
            <Suspense
              fallback={
                <div className="mx-auto flex w-full max-w-[68rem] flex-col">
                  <div className="mx-auto flex max-w-[44rem] flex-col items-center gap-3 text-center">
                    <div className="h-3 w-40 animate-pulse rounded-full bg-stone-200/80" />
                    <div className="h-11 w-[20rem] animate-pulse rounded-full border border-stone-200/80 bg-stone-100 shadow-[0_10px_24px_rgba(0,0,0,0.04)]" />
                  </div>
                  <div className="mt-6 overflow-hidden rounded-2xl border border-stone-200/80 bg-stone-100 shadow-[0_0_50px_rgba(0,0,0,0.08)]">
                    <div className="aspect-video animate-pulse bg-stone-200/70" />
                  </div>
                  <div className="mt-4 rounded-[24px] border border-stone-200/80 bg-stone-100 px-6 py-6 shadow-[0_16px_36px_rgba(35,28,22,0.04)]">
                    <div className="grid gap-4 md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.2fr)] md:gap-8">
                      <div className="space-y-3">
                        <div className="h-3 w-28 animate-pulse rounded-full bg-stone-200/80" />
                        <div className="h-8 w-60 animate-pulse rounded-full bg-stone-200/75" />
                      </div>
                      <div className="space-y-3">
                        <div className="h-3 w-56 animate-pulse rounded-full bg-stone-200/80" />
                        <div className="h-4 w-full animate-pulse rounded-full bg-stone-200/70" />
                        <div className="h-4 w-[88%] animate-pulse rounded-full bg-stone-200/70" />
                      </div>
                    </div>
                  </div>
                </div>
              }
            >
              <DemoEnvironmentSwitcher />
            </Suspense>
          </section>

          <section className="mt-16 rounded-[30px] border border-stone-200/80 bg-[#F4F0EA] px-6 py-8 shadow-[0_16px_36px_rgba(35,28,22,0.06)] md:mt-20 md:px-8 md:py-10">
            <p className="text-[11px] uppercase tracking-[0.18em] text-stone-600">Next Step</p>
            <h2 className="mt-4 font-display text-[34px] leading-[1.06] text-stone-900 md:text-[42px]">
              Continue from the demo.
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-[1.85] text-stone-500">
              Join the waitlist for early product access, or continue to the investor portal for protected materials.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="/#waitlist"
                className="rounded-full bg-violet-600 px-8 py-4 text-[14px] font-medium text-white shadow-[0_14px_30px_rgba(124,58,237,0.18)] transition-colors hover:bg-violet-700"
              >
                Join Waitlist
              </Link>
              <Link
                href="/investors"
                className="text-[13px] text-stone-600 underline decoration-stone-300 underline-offset-4 transition-colors hover:text-stone-700 hover:decoration-stone-400"
              >
                Investor Access
              </Link>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
