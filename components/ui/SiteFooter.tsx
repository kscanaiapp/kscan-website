"use client";

import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-100 bg-[#FAFAF8] py-12 md:py-14">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between md:gap-0">
          <div className="text-center md:text-left">
            <div className="mb-1 flex items-center justify-center gap-1.5 md:justify-start">
              <span className="font-display text-base font-medium text-stone-900">K Scan</span>
              <span className="text-[9px] uppercase tracking-widest text-stone-300">AI</span>
            </div>
            <p className="text-[11px] text-stone-400">Fashion, made shoppable.</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 text-[11px] text-stone-300 md:mt-6 md:flex-row md:justify-between">
          <p className="text-center md:text-left">© 2026 K Scan AI. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <Link
              href="/beta"
              className="-my-3 flex h-11 items-center justify-center text-[11px] transition-colors hover:text-stone-500 focus:outline-none focus-visible:text-stone-500"
            >
              Beta
            </Link>
            <span aria-hidden="true" className="select-none">|</span>
            <Link
              href="/legal/privacy"
              className="-my-3 flex h-11 items-center justify-center text-[11px] transition-colors hover:text-stone-500 focus:outline-none focus-visible:text-stone-500"
            >
              Privacy
            </Link>
            <span aria-hidden="true" className="select-none">|</span>
            <Link
              href="/legal/terms"
              className="-my-3 flex h-11 items-center justify-center text-[11px] transition-colors hover:text-stone-500 focus:outline-none focus-visible:text-stone-500"
            >
              Terms
            </Link>
            <span aria-hidden="true" className="select-none">|</span>
            <Link
              href="/legal/delete-account"
              className="-my-3 flex h-11 items-center justify-center text-[11px] transition-colors hover:text-stone-500 focus:outline-none focus-visible:text-stone-500"
            >
              Delete Account
            </Link>
            <span aria-hidden="true" className="select-none">|</span>
            <Link
              href="/do-not-sell-or-share"
              className="-my-3 flex h-11 items-center justify-center text-[11px] transition-colors hover:text-stone-500 focus:outline-none focus-visible:text-stone-500"
            >
              Do Not Sell or Share
            </Link>
            <span aria-hidden="true" className="select-none">|</span>
            <Link
              href="/support"
              className="-my-3 flex h-11 items-center justify-center text-[11px] transition-colors hover:text-stone-500 focus:outline-none focus-visible:text-stone-500"
            >
              Support
            </Link>
            <a
              href="https://www.instagram.com/KScan_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="-m-3 flex h-11 w-11 items-center justify-center transition-colors hover:text-stone-500 focus:outline-none focus-visible:text-stone-500"
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
              className="-m-3 flex h-11 w-11 items-center justify-center transition-colors hover:text-stone-500 focus:outline-none focus-visible:text-stone-500"
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
              className="-m-3 flex h-11 w-11 items-center justify-center transition-colors hover:text-stone-500 focus:outline-none focus-visible:text-stone-500"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
