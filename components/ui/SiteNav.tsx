"use client";

import Link from "next/link";
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
  { id: "investors",    label: "Investors",    type: "route",  value: "/investors" },
  { id: "waitlist",     label: "Waitlist",     type: "anchor", value: "waitlist" },
];

export function SiteNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  function href(entry: NavEntry): string {
    if (entry.type === "route") return entry.value;
    return isHome ? `#${entry.value}` : `/#${entry.value}`;
  }

  // Omit the tab whose route matches the current page
  const visible = NAV_ITEMS.filter(
    (item) => !(item.type === "route" && item.value === pathname),
  );

  const ctaHref = isHome ? "#waitlist" : "/#waitlist";

  return (
    <header className="sticky top-0 z-50 border-b border-stone-100 bg-[#FAFAF8]/92 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Logo — always links back to / */}
        <Link href="/" className="flex items-center gap-1.5">
          <span className="font-display text-lg font-medium text-stone-900">K Scan</span>
          <span className="text-[9px] uppercase tracking-widest text-stone-300">AI</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-[13px] text-stone-400 md:flex">
          {visible.map((item) => (
            <Link
              key={item.id}
              href={href(item)}
              className="transition-colors hover:text-stone-900"
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
      <div className="border-t border-stone-100/80 md:hidden">
        <div className="mx-auto flex max-w-7xl items-center gap-6 overflow-x-auto px-6 text-[12px] uppercase tracking-[0.16em] text-stone-400 [&::-webkit-scrollbar]:hidden">
          {!isHome && (
            <Link
              href="/"
              className="whitespace-nowrap py-4 transition-colors hover:text-stone-900"
            >
              Home
            </Link>
          )}
          {visible.map((item) => (
            <Link
              key={item.id}
              href={href(item)}
              className="whitespace-nowrap py-4 transition-colors hover:text-stone-900"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
