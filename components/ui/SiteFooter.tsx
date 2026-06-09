"use client";

import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-100 bg-[#FAFAF8] py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Brand row */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between md:gap-0">
          <div className="text-center md:text-left">
            <div className="mb-1 flex items-center justify-center gap-1.5 md:justify-start">
              <span className="font-display text-base font-medium text-stone-900">K Scan</span>
              <span className="text-[9px] uppercase tracking-widest text-stone-500">AI</span>
            </div>
            <p className="text-[11px] text-stone-500">Fashion, made shoppable.</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center gap-4 text-[11px] md:mt-6 md:flex-row md:justify-between">
          <p className="text-center text-stone-500 md:text-left">© 2026 K Scan AI. All rights reserved.</p>

          {/* Legal links + social icons */}
          <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:gap-3">

            {/* Legal links — wrap on mobile, single row on md+ */}
            <div className="flex flex-wrap items-center justify-center">
              <Link
                href="/beta"
                className="flex h-11 items-center justify-center px-2 text-stone-600 transition-colors hover:text-stone-900 focus:outline-none focus-visible:text-stone-900"
              >
                Beta
              </Link>
              <span aria-hidden="true" className="hidden select-none text-stone-400 md:inline">|</span>
              <Link
                href="/legal/privacy"
                className="flex h-11 items-center justify-center px-2 text-stone-600 transition-colors hover:text-stone-900 focus:outline-none focus-visible:text-stone-900"
              >
                Privacy
              </Link>
              <span aria-hidden="true" className="hidden select-none text-stone-400 md:inline">|</span>
              <Link
                href="/legal/terms"
                className="flex h-11 items-center justify-center px-2 text-stone-600 transition-colors hover:text-stone-900 focus:outline-none focus-visible:text-stone-900"
              >
                Terms
              </Link>
              <span aria-hidden="true" className="hidden select-none text-stone-400 md:inline">|</span>
              <Link
                href="/legal/delete-account"
                className="flex h-11 items-center justify-center px-2 text-stone-600 transition-colors hover:text-stone-900 focus:outline-none focus-visible:text-stone-900"
              >
                Delete Account
              </Link>
              <span aria-hidden="true" className="hidden select-none text-stone-400 md:inline">|</span>
              <Link
                href="/do-not-sell-or-share"
                className="flex h-11 items-center justify-center px-2 text-stone-600 transition-colors hover:text-stone-900 focus:outline-none focus-visible:text-stone-900"
              >
                Do Not Sell or Share
              </Link>
              <span aria-hidden="true" className="hidden select-none text-stone-400 md:inline">|</span>
              <Link
                href="/support"
                className="flex h-11 items-center justify-center px-2 text-stone-600 transition-colors hover:text-stone-900 focus:outline-none focus-visible:text-stone-900"
              >
                Support
              </Link>
            </div>

            {/* Social icons — centered row below legal links on mobile, inline on md+ */}
            <div className="flex items-center">
              <a
                href="https://www.instagram.com/KScan_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="-m-3 flex h-11 w-11 items-center justify-center text-stone-600 transition-colors hover:text-stone-900 focus:outline-none focus-visible:text-stone-900"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.7">
                  <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="4.5" />
                  <circle cx="12" cy="12" r="3.85" />
                  <circle cx="17.35" cy="6.65" r="0.9" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@KScan_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="-m-3 flex h-11 w-11 items-center justify-center text-stone-600 transition-colors hover:text-stone-900 focus:outline-none focus-visible:text-stone-900"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M14.08 3c.26 2.17 1.48 3.86 3.88 4.05v2.5a6.56 6.56 0 0 1-3.83-1.17l-.03 6.24c0 3.27-2.42 5.63-5.67 5.63A5.56 5.56 0 0 1 2.9 14.7a5.6 5.6 0 0 1 8.1-4.97v2.63a3.1 3.1 0 0 0-1.83-.6 3.03 3.03 0 0 0-3.05 3 3.03 3.03 0 0 0 3.05 3.01c1.84 0 2.93-1.24 2.93-3.08V3h1.98Z" />
                </svg>
              </a>
              <a
                href="https://x.com/Kscan_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow K Scan on X"
                className="-m-3 flex h-11 w-11 items-center justify-center text-stone-600 transition-colors hover:text-stone-900 focus:outline-none focus-visible:text-stone-900"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
                </svg>
              </a>
              <a
                href="https://www.reddit.com/user/kscan_app"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="K Scan on Reddit"
                className="-m-3 flex h-11 w-11 items-center justify-center text-stone-600 transition-colors hover:text-stone-900 focus:outline-none focus-visible:text-stone-900"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
                </svg>
              </a>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
