/**
 * Brand token constants for K Scan.
 *
 * These are the canonical values for the most-repeated styling patterns across
 * the public marketing site. Centralizing them here prevents hex-value drift
 * between pages (e.g. #F4F0EA vs #F5F3EF linen split) and keeps the site
 * palette auditable in one place.
 *
 * Usage:
 *   import { surfaces, buttons } from "@/lib/theme";
 *   <div className={surfaces.imageFrame}>…</div>
 *   <Link className={buttons.primaryLg}>…</Link>
 *
 * Do NOT move Page Base ownership here (background, base text color).
 * Those remain in globals.css.
 */

export const surfaces = {
  /**
   * Outer linen frame used around images and video players.
   * Canonical border-radius is 24px for sub-page content frames.
   * The homepage hero frame uses rounded-[28px] md:p-4 — use that variant inline.
   */
  imageFrame:
    "overflow-hidden rounded-[24px] border border-stone-200/80 bg-[#F4F0EA] p-3 shadow-[0_16px_36px_rgba(35,28,22,0.06)]",

  /**
   * Standard white content card.
   * Add padding (p-6, p-8, etc.) at the use-site.
   */
  card: "rounded-[22px] border border-stone-200/80 bg-white",

  /**
   * Linen-tinted content card.
   * Canonical linen is #F4F0EA. Note: investors page used #F5F3EF historically —
   * normalize new work to #F4F0EA.
   */
  linenCard: "rounded-[22px] border border-stone-200/80 bg-[#F4F0EA]",

  /**
   * Raw linen hex — use for bg-[...] in Tailwind where a full class isn't needed.
   */
  linen: "#F4F0EA",
} as const;

export const buttons = {
  /**
   * Small primary CTA — used in nav headers.
   */
  primarySm:
    "rounded-full bg-violet-600 px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-violet-700",

  /**
   * Large primary CTA — used in hero and section CTAs.
   */
  primaryLg:
    "rounded-full bg-violet-600 px-8 py-4 text-[14px] font-medium text-white shadow-[0_14px_30px_rgba(124,58,237,0.18)] transition-colors hover:bg-violet-700",
} as const;
