"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttons } from "@/lib/theme";

export type SiteNavLink = {
  href: string;
  label: string;
};

type SiteNavProps = {
  /** Desktop nav links. Active state is auto-detected via usePathname. */
  links: SiteNavLink[];
  /**
   * Mobile tray links. Falls back to `links` if omitted.
   * Use this when the mobile tray needs an extra entry (e.g. a "Home" link
   * that isn't in the desktop nav).
   */
  mobileLinks?: SiteNavLink[];
  /**
   * Set true on pages that don't need the "Join Waitlist" CTA in the header.
   * The header naturally reflows to logo-left / nav-right via justify-between.
   */
  hideCta?: boolean;
  /**
   * Whether the header sticks to the top on scroll. Defaults to true.
   * The investors page uses false — it doesn't need a persistent nav since
   * users scroll through long-form materials.
   */
  sticky?: boolean;
  /**
   * "brandMark" (default) — K Scan logotype + "AI" badge, font-display.
   * "textOnly" — plain uppercase tracking label "K Scan AI", used on investors.
   */
  logoMode?: "brandMark" | "textOnly";
  /**
   * Override the header background + backdrop class.
   * Defaults to the demo/site standard: "bg-[#FAFAF8]/92 backdrop-blur-md".
   * Investors uses "bg-white/70 backdrop-blur-md".
   */
  headerBackground?: string;
  /**
   * Override the inner container layout class.
   * Defaults to "h-16" (64px fixed height, demo/site standard).
   * Investors uses "py-8" for the original taller spacing.
   */
  innerClassName?: string;
};

export function SiteNav({
  links,
  mobileLinks,
  hideCta = false,
  sticky = true,
  logoMode = "brandMark",
  headerBackground = "bg-[#FAFAF8]/92 backdrop-blur-md",
  innerClassName = "h-16",
}: SiteNavProps) {
  const pathname = usePathname();
  const mobile = mobileLinks ?? links;

  return (
    <header
      className={`${sticky ? "sticky top-0 z-50 " : ""}border-b border-stone-100 ${headerBackground}`}
    >
      <div className={`mx-auto flex max-w-6xl items-center justify-between px-6 md:px-10 ${innerClassName}`}>
        {/* Logo */}
        {logoMode === "textOnly" ? (
          <Link
            href="/"
            className="text-[12px] uppercase tracking-[0.18em] text-stone-400 transition-colors hover:text-stone-700"
          >
            K Scan AI
          </Link>
        ) : (
          <Link href="/" className="flex items-center gap-1.5">
            <span className="font-display text-lg font-medium text-stone-900">K Scan</span>
            <span className="text-[9px] uppercase tracking-widest text-stone-300">AI</span>
          </Link>
        )}

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-[13px] text-stone-400 md:flex">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                pathname === href
                  ? "text-stone-700"
                  : "transition-colors hover:text-stone-700"
              }
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA — hidden when hideCta is true; layout reflows naturally */}
        {!hideCta && (
          <Link href="/#waitlist" className={buttons.primarySm}>
            Join Waitlist
          </Link>
        )}
      </div>

      {/* Mobile tray */}
      <div className="border-t border-stone-100/80 md:hidden">
        <div className="mx-auto flex max-w-6xl items-center gap-6 overflow-x-auto px-6 text-[12px] uppercase tracking-[0.16em] text-stone-400 [&::-webkit-scrollbar]:hidden">
          {mobile.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`whitespace-nowrap py-4 ${
                pathname === href
                  ? "text-stone-700"
                  : "transition-colors hover:text-stone-900"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
