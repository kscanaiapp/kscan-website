"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { buttons } from "@/lib/theme";

type NavEntry = {
  id: string;
  label: string;
  type: "anchor" | "route";
  value: string;
};

const NAV_ITEMS: NavEntry[] = [
  { id: "how-it-works", label: "How It Works", type: "anchor", value: "how-it-works" },
  { id: "features",     label: "Features",     type: "anchor", value: "features" },
  { id: "demo",         label: "Demo",         type: "route",  value: "/demo" },
  { id: "beta",         label: "Beta Program", type: "route",  value: "/beta" },
  { id: "investors",    label: "Investors",    type: "route",  value: "/investors" },
  { id: "security",     label: "Security",     type: "route",  value: "/security" },
];

export function SiteNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function href(entry: NavEntry): string {
    if (entry.type === "route") return entry.value;
    return isHome ? `#${entry.value}` : `/#${entry.value}`;
  }

  const ctaHref = isHome ? "#waitlist" : "/#waitlist";

  return (
    <header className={`sticky top-0 z-50 border-b transition-all duration-300 ease-in-out ${isScrolled ? "border-stone-100 bg-[#FAFAF8]/92 backdrop-blur-md" : "border-transparent bg-transparent"}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Logo — always links back to / */}
        <Link href="/" className="flex items-center gap-1.5">
          <span className="font-display text-lg font-medium text-stone-900">K Scan</span>
          <span className="text-[9px] uppercase tracking-widest text-stone-300">AI</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-[13px] text-stone-600 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={href(item)}
              aria-current={item.type === "route" && item.value === pathname ? "page" : undefined}
              className={`transition-colors hover:text-stone-900 ${item.type === "route" && item.value === pathname ? "font-medium text-stone-950" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link href={ctaHref} className={buttons.primarySm}>
          Join Waitlist
        </Link>
      </div>

      {/* Mobile tray */}
      <div className={`border-t md:hidden ${isScrolled ? "border-stone-100/80" : "border-transparent"}`}>
        <div className="mx-auto flex max-w-7xl items-center gap-6 overflow-x-auto px-6 text-[12px] uppercase tracking-[0.16em] text-stone-600 [&::-webkit-scrollbar]:hidden">
          {!isHome && (
            <Link
              href="/"
              className="whitespace-nowrap py-4 transition-colors hover:text-stone-900"
            >
              Home
            </Link>
          )}
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={href(item)}
              aria-current={item.type === "route" && item.value === pathname ? "page" : undefined}
              className={`whitespace-nowrap py-4 transition-colors hover:text-stone-900 ${item.type === "route" && item.value === pathname ? "font-semibold text-stone-950" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
