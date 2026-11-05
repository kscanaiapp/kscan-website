"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { buttons } from "@/lib/theme";

type NavEntry = {
  id: string;
  label: string;
  type: "anchor" | "route";
  value: string;
  cursor: boolean;
};

const NAV_ITEMS: NavEntry[] = [
  { id: "how-it-works", label: "How It Works", type: "anchor", value: "how-it-works", cursor: true },
  { id: "features",     label: "Features",     type: "route",  value: "/features",    cursor: true },
  { id: "demo",         label: "Demo",         type: "route",  value: "/demo",        cursor: true },
  { id: "investors",    label: "Investors",    type: "route",  value: "/investors",   cursor: false },
  { id: "security",     label: "Security",     type: "route",  value: "/security",    cursor: false },
];

export function SiteNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    // Reaching the desktop breakpoint swaps in the inline nav, so drop the open state.
    const mq = window.matchMedia("(min-width: 768px)");
    const onBreakpoint = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    mq.addEventListener("change", onBreakpoint);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      mq.removeEventListener("change", onBreakpoint);
    };
  }, [menuOpen]);

  function href(entry: NavEntry): string {
    if (entry.type === "route") return entry.value;
    return isHome ? `#${entry.value}` : `/#${entry.value}`;
  }

  return (
    <header className={`sticky top-0 z-50 border-b transition-all duration-300 ease-in-out ${menuOpen ? "border-stone-100 bg-[#FAFAF8]" : isScrolled ? "border-stone-100 bg-[#FAFAF8]/92 backdrop-blur-md" : "border-transparent bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Logo — always links back to / */}
        <Link href="/" className="flex items-center gap-1.5">
          <span className="font-display text-lg font-medium text-stone-900">K Scan AI</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-[13px] text-stone-600 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={href(item)}
              aria-current={item.type === "route" && item.value === pathname ? "page" : undefined}
              className={`transition-colors hover:text-stone-900 ${item.type === "route" && item.value === pathname ? "font-medium text-stone-950" : ""} ${item.cursor ? "fashion-cursor" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile menu button */}
        <div className="flex items-center gap-2">
          <Link href="/download" className={`fashion-cursor whitespace-nowrap ${buttons.primarySm}`}>
            Get the App
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
            className="-mr-2.5 flex h-11 w-11 items-center justify-center rounded-full text-stone-800 transition-colors hover:bg-stone-100 md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
              {menuOpen ? (
                <path d="M4.5 4.5l11 11M15.5 4.5l-11 11" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Site"
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-stone-100 md:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col px-6 pb-3 pt-1 text-[15px] text-stone-700">
            {!isHome && (
              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="flex min-h-12 items-center border-b border-stone-100 transition-colors hover:text-stone-950"
              >
                Home
              </Link>
            )}
            {NAV_ITEMS.map((item, i) => {
              const isCurrent = item.type === "route" && item.value === pathname;
              return (
                <Link
                  key={item.id}
                  href={href(item)}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`flex min-h-12 items-center transition-colors hover:text-stone-950 ${i < NAV_ITEMS.length - 1 ? "border-b border-stone-100" : ""} ${isCurrent ? "font-medium text-stone-950" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
