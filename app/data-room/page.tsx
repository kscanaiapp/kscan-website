import Link from "next/link";
import { SiteNav } from "@/components/ui/SiteNav";
import { SectionShell } from "@/components/ui/SectionShell";

// ─── Palette (page-scoped; not part of the global site theme) ───────────────
// Light surfaces (majority of the page):
//   ivory: #F7F2E7 · limestone: #F1EAD9 · parchment: #FBF8F0
//   charcoal text: #241F19 · muted charcoal-brown body: #5C5346
//   deep brass (text on light): #8A6A3B
// Dark contrast moments (Built for Disciplined Diligence + Access panel):
//   obsidian/charcoal: #14120D · panel: #15130F · ivory text: #F4EFE4
//   linen (muted body): #C7C0AF · bright brass (text on dark): #C9A662
// Shared accent: muted brass #A9814C / #C9A662 for rules, borders, buttons.

const supportCategories = [
  {
    n: "01",
    title: "Company & Strategy",
    body: "Company overview, investor materials, and business direction.",
  },
  {
    n: "02",
    title: "Product & Technology",
    body: "Current product architecture, platform capabilities, and technology diligence.",
  },
  {
    n: "03",
    title: "Market & Business Model",
    body: "Market context, commercial strategy, and business-model materials where available.",
  },
  {
    n: "04",
    title: "Financial & Corporate",
    body: "Authorized financial, corporate, legal, and diligence materials where available.",
  },
  {
    n: "05",
    title: "Roadmap & Diligence",
    body: "Current planning and supporting diligence documentation where approved for investor access.",
  },
];

const diligencePillars = [
  {
    title: "Controlled Access",
    body: "Secure individual investor access is being prepared for authorized users.",
  },
  {
    title: "Source-Based Research",
    body: "AI-assisted research is designed to remain grounded in approved data-room source materials, with document references for review.",
  },
  {
    title: "Purpose-Built Environment",
    body: "The secure room is separate from the public marketing site and designed specifically for investor diligence.",
  },
];

function Eyebrow({ text, tone = "light" }: { text: string; tone?: "light" | "dark" }) {
  return (
    <p
      className={`mb-5 font-mono text-[10px] uppercase tracking-[0.28em] ${
        tone === "dark" ? "text-[#C9A662]" : "text-[#8A6A3B]"
      }`}
    >
      {text}
    </p>
  );
}

// Primary CTA for light surfaces (hero): charcoal fill, ivory text, brass hairline.
const primaryButtonLight =
  "fashion-cursor inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#A9814C]/30 bg-[#241F19] px-7 py-3.5 text-[13px] font-medium text-[#F7F2E7] shadow-[0_14px_30px_rgba(36,31,25,0.16)] transition-colors hover:bg-[#1A160F] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9814C]";

// Secondary CTA for light surfaces (hero).
const ghostButtonLight =
  "fashion-cursor inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#241F19]/25 px-7 py-3.5 text-[13px] font-medium text-[#241F19] transition-colors hover:border-[#241F19]/45 hover:bg-[#241F19]/[0.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9814C]";

// Primary CTA for the dark access panel: brass gradient — the strongest, most dominant action on the page.
const primaryButtonDark =
  "fashion-cursor inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-b from-[#D8BA80] to-[#AD8A54] px-7 py-3.5 text-[13px] font-medium text-[#0B0A08] shadow-[0_18px_36px_rgba(169,129,68,0.22)] transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A662]";

// Secondary CTA for the dark access panel.
const ghostButtonDark =
  "fashion-cursor inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#F4EFE4]/25 px-7 py-3.5 text-[13px] font-medium text-[#F4EFE4] transition-colors hover:border-[#F4EFE4]/50 hover:bg-[#F4EFE4]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C9A662]";

export default function DataRoomPage() {
  return (
    <main id="main-content" className="min-h-screen bg-[#F7F2E7]">
      <SiteNav />

      {/* ─── Hero (warm ivory) ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-[#241F19]/8 bg-[#F7F2E7]">
        {/* Decorative: fine hairline grid + warm radial light + oversized cropped serif mark */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.6]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(36,31,25,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(36,31,25,0.045) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(circle, rgba(201,166,98,0.22) 0%, rgba(201,166,98,0) 70%)",
          }}
        />
        <p
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 right-[-4%] select-none font-display text-[340px] font-medium leading-none text-[#241F19]/[0.035] md:text-[420px]"
        >
          IR
        </p>

        <div className="relative mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
          <Eyebrow text="K Scan AI / Investor Relations" />
          <h1 className="max-w-3xl font-display text-[42px] leading-[1.08] text-[#241F19] sm:text-[52px] md:text-[64px]">
            Private access for current investors.
          </h1>
          <p className="mt-7 max-w-xl text-[15px] leading-[1.95] text-[#5C5346] md:text-[16px]">
            K Scan AI provides current and authorized investors with a secure environment for
            company materials, product and technology diligence, business information, and
            ongoing investor resources.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://data-room-portal.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Secure Investor Login — opens the K Scan AI Data Room in a new tab"
              className={primaryButtonLight}
            >
              Secure Investor Login
              <span aria-hidden="true">↗</span>
            </a>
            <Link href="/investors" className={ghostButtonLight}>
              Request Investor Materials
            </Link>
          </div>

          <div
            aria-hidden="true"
            className="mt-16 h-px w-full max-w-md bg-gradient-to-r from-[#A9814C]/60 via-[#A9814C]/15 to-transparent"
          />
        </div>
      </section>

      {/* ─── Investor Relations (limestone) ──────────────────────────────── */}
      <SectionShell className="border-b border-[#241F19]/8 bg-[#F1EAD9]">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
          <Eyebrow text="Investor Relations" />
          <div className="max-w-2xl">
            <h2 className="font-display text-[30px] leading-[1.12] text-[#241F19] md:text-[40px]">
              A clearer view of the company behind the product.
            </h2>
            <p className="mt-7 text-[15px] leading-[1.95] text-[#5C5346]">
              K Scan AI is building the layer between real-world fashion inspiration and
              shoppable outcomes: fashion-specific visual discovery, an AI stylist named Elise
              reachable through StyleChat, and Signature Style guidance that carries across a
              user&apos;s Recent Scans, Closet, Saved Looks, and collaborative Dressing Rooms.
            </p>
            <p className="mt-4 text-[15px] leading-[1.95] text-[#5C5346]">
              The product is built on retailer-neutral commerce pathways, with a stated direction
              that extends from mobile fashion discovery today toward new computing surfaces over
              time.
            </p>
          </div>
        </div>
      </SectionShell>

      {/* ─── What the Data Room Is Designed to Support (parchment) ───────── */}
      <SectionShell className="border-b border-[#241F19]/8 bg-[#FBF8F0]">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
          <Eyebrow text="Scope" />
          <h2 className="max-w-2xl font-display text-[30px] leading-[1.12] text-[#241F19] md:text-[40px]">
            What the data room is designed to support.
          </h2>
          <p className="mt-6 max-w-xl text-[14px] leading-[1.9] text-[#6B6152]">
            Authorized materials may include the categories below, where available. Access and
            document coverage are extended at K Scan AI&apos;s discretion.
          </p>

          <div className="mt-12 divide-y divide-[#241F19]/10 border-t border-[#241F19]/10">
            {supportCategories.map(({ n, title, body }) => (
              <div key={n} className="grid gap-2 py-7 md:grid-cols-[80px_1fr_1.4fr] md:items-baseline md:gap-8">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#8A6A3B]">{n}</p>
                <h3 className="font-display text-[19px] leading-[1.2] text-[#241F19]">{title}</h3>
                <p className="text-[13px] leading-[1.85] text-[#5C5346] md:text-[14px]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* ─── Built for Disciplined Diligence (dark contrast section) ─────── */}
      <SectionShell className="border-b border-[#F4EFE4]/10 bg-[#14120D]">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
          <Eyebrow text="Built for Disciplined Diligence" tone="dark" />
          <h2 className="max-w-2xl font-display text-[30px] leading-[1.12] text-[#F4EFE4] md:text-[40px]">
            A private environment, built specifically for investor review.
          </h2>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {diligencePillars.map(({ title, body }) => (
              <div
                key={title}
                className="rounded-[22px] border border-[#F4EFE4]/12 bg-[#1B1811] p-7"
              >
                <h3 className="font-display text-[19px] leading-[1.2] text-[#F4EFE4]">{title}</h3>
                <p className="mt-3 text-[13px] leading-[1.85] text-[#C7C0AF]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* ─── Current Investor Access (light surround, dark vault panel) ──── */}
      <SectionShell className="bg-[#F7F2E7]">
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-28">
          <div className="relative overflow-hidden rounded-[34px] border border-[#C9A662]/25 bg-[#14120D] px-6 py-14 text-center shadow-[0_28px_60px_rgba(36,31,25,0.14)] md:px-16 md:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(circle at 50% 0%, rgba(201,166,98,0.14) 0%, rgba(201,166,98,0) 60%)",
              }}
            />
            <div className="relative">
              <h2 className="font-display text-[28px] leading-[1.15] text-[#F4EFE4] md:text-[36px]">
                Already an authorized investor?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-[14px] leading-[1.9] text-[#C7C0AF]">
                Use your secure investor access to enter the K Scan AI Data Room.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="https://data-room-portal.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Secure Investor Login — opens the K Scan AI Data Room in a new tab"
                  className={primaryButtonDark}
                >
                  Secure Investor Login
                  <span aria-hidden="true">↗</span>
                </a>
                <Link href="/investors" className={ghostButtonDark}>
                  Request Investor Materials
                </Link>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>
    </main>
  );
}
