"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";

const INVESTOR_PASSWORD = "KSCAN2026";
const DECK_URL = "/docs/k-scan-pitch-deck-2026.pdf";

export default function InvestorsPage() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState("");
  const [shakeField, setShakeField] = useState(false);
  const [visibleCharIndex, setVisibleCharIndex] = useState<number | null>(null);
  const [deckState, setDeckState] = useState<"idle" | "checking" | "ready" | "missing">("idle");

  const maskedDisplay = password
    .split("")
    .map((char, index) => (index === visibleCharIndex ? char : "•"))
    .join("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (password === INVESTOR_PASSWORD) {
      setUnlocked(true);
      setError("");
      setShakeField(false);
      return;
    }

    setUnlocked(false);
    setDeckState("idle");
    setShakeField(true);
    setError("Access could not be verified. Please check the password and try again.");
  }

  useEffect(() => {
    if (!shakeField) return;

    const timeout = window.setTimeout(() => {
      setShakeField(false);
    }, 460);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [shakeField]);

  useEffect(() => {
    if (visibleCharIndex === null) return;

    const timeout = window.setTimeout(() => {
      setVisibleCharIndex(null);
    }, 700);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [visibleCharIndex, password]);

  useEffect(() => {
    if (!unlocked) return;

    let active = true;

    async function checkDeck() {
      setDeckState("checking");

      try {
        const response = await fetch(DECK_URL, { method: "HEAD" });
        if (!active) return;
        setDeckState(response.ok ? "ready" : "missing");
      } catch {
        if (!active) return;
        setDeckState("missing");
      }
    }

    checkDeck();

    return () => {
      active = false;
    };
  }, [unlocked]);

  return (
    <main className="min-h-screen bg-[#FAFAF8] text-[#111111]">
      <section className="border-b border-stone-100 bg-white/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 md:px-10">
          <Link href="/" className="text-[12px] uppercase tracking-[0.18em] text-stone-400 transition-colors hover:text-stone-700">
            K Scan AI
          </Link>
          <nav className="hidden items-center gap-6 text-[12px] uppercase tracking-[0.16em] text-stone-400 md:flex">
            <Link href="/demo" className="transition-colors hover:text-stone-700">
              Demo
            </Link>
            <Link href="/investors" className="transition-colors hover:text-stone-700">
              Investors
            </Link>
          </nav>
        </div>
        <div className="border-t border-stone-100/80 md:hidden">
          <div className="mx-auto flex max-w-6xl items-center gap-6 overflow-x-auto px-6 text-[12px] uppercase tracking-[0.16em] text-stone-400 [&::-webkit-scrollbar]:hidden">
            <Link href="/" className="whitespace-nowrap py-4 transition-colors hover:text-stone-700">
              Home
            </Link>
            <Link href="/demo" className="whitespace-nowrap py-4 transition-colors hover:text-stone-700">
              Demo
            </Link>
            <Link href="/investors" className="whitespace-nowrap py-4 transition-colors hover:text-stone-700">
              Investors
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14 md:px-10 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="max-w-2xl">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-stone-400">
              Private materials for qualified investors
            </p>
            <h1 className="font-display text-[42px] leading-[1.02] text-stone-900 md:text-[58px]">
              Investor Relations
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-[1.9] text-stone-500 md:text-[16px]">
              Access to K Scan materials is provided on a limited basis for early-stage investor review. The information below is intended for private circulation and should be treated accordingly.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[30px] border border-stone-200/80 bg-[#F4F0EA] p-4 shadow-[0_20px_50px_rgba(35,28,22,0.06)] md:p-5">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[24px]">
              <Image
                src="/kathleen-leisure.jpg"
                alt="Editorial fashion still for K Scan investor materials"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 34vw"
                className="object-cover object-[center_20%]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,248,244,0.04),rgba(28,21,18,0.14))]" />
              <div className="absolute left-4 top-4 rounded-full border border-white/40 bg-white/72 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-stone-500 backdrop-blur-sm">
                Early-stage materials
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10 md:px-10 md:pb-14">
        <div className="rounded-[34px] border border-stone-200/80 bg-white p-6 shadow-[0_18px_40px_rgba(35,28,22,0.05)] md:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.44fr_0.56fr] lg:gap-10">
            <div className="max-w-md">
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-stone-400">
                Access Gate
              </p>
              <h2 className="font-display text-[30px] leading-[1.08] text-stone-900 md:text-[36px]">
                Controlled access to deck materials.
              </h2>
              <p className="mt-4 text-[14px] leading-[1.85] text-stone-500">
                Enter the current investor password to view the presentation. Access is intentionally quiet and limited while materials remain in private circulation.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-3">
                <label className="block">
                  <span className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-stone-400">
                    Password
                  </span>
                  <div className="relative">
                    <input
                      type="text"
                      autoComplete="current-password"
                      autoCapitalize="none"
                      autoCorrect="off"
                      spellCheck={false}
                      aria-label="Investor password"
                      value={password}
                      onChange={(e) => {
                        const nextValue = e.target.value;

                        if (nextValue.length > password.length) {
                          setVisibleCharIndex(nextValue.length - 1);
                        } else {
                          setVisibleCharIndex(null);
                        }

                        setPassword(nextValue);
                      }}
                      className={`w-full rounded-full border bg-[#FAFAF8] px-5 py-4 text-[14px] text-transparent caret-stone-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-violet-200 ${shakeField ? "animate-subtle-shake border-stone-300" : "border-stone-200"}`}
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 flex items-center rounded-full px-5 text-[14px]"
                    >
                      {password ? (
                        <span className="tracking-[0.02em] text-stone-900">{maskedDisplay}</span>
                      ) : (
                        <span className="text-stone-300">Enter investor password</span>
                      )}
                    </div>
                  </div>
                </label>
                <button
                  type="submit"
                  className="rounded-full bg-stone-900 px-6 py-3 text-[13px] font-medium text-white transition-colors hover:bg-stone-800"
                >
                  View Materials
                </button>
              </form>

              <div className="mt-4 min-h-6">
                {error ? (
                  <p className="text-[12px] leading-relaxed text-stone-500">{error}</p>
                ) : unlocked ? (
                  <p className="text-[12px] leading-relaxed text-stone-400">
                    Access confirmed. Deck materials are now visible below.
                  </p>
                ) : (
                  <p className="text-[12px] leading-relaxed text-stone-400">
                    Frontend-only gate for now. Replace with real access control before external circulation.
                  </p>
                )}
              </div>
            </div>

            <div className="rounded-[28px] bg-[#F7F4EF] p-3 ring-1 ring-stone-200/70 md:p-4">
              {!unlocked ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center rounded-[24px] border border-dashed border-stone-200 bg-white/70 px-8 text-center">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-stone-200 bg-[#FAFAF8]">
                    <div className="relative h-5 w-4 rounded-sm border border-stone-500/70">
                      <div className="absolute -top-3 left-1/2 h-3 w-3 -translate-x-1/2 rounded-t-full border border-b-0 border-stone-500/70" />
                    </div>
                  </div>
                  <p className="font-display text-[28px] text-stone-900">Materials remain locked.</p>
                  <p className="mt-3 max-w-sm text-[14px] leading-[1.8] text-stone-500">
                    Investor materials will appear here once access is verified. The presentation area is intentionally understated while private review is in progress.
                  </p>
                </div>
              ) : deckState === "ready" ? (
                <div className="overflow-hidden rounded-[24px] border border-stone-200/80 bg-white shadow-[0_22px_50px_rgba(35,28,22,0.08)]">
                  <div className="flex items-center justify-between border-b border-stone-100 px-5 py-4">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-stone-400">Pitch Deck</p>
                      <p className="mt-1 text-[13px] text-stone-500">Embedded private review copy</p>
                    </div>
                    <a
                      href={DECK_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[12px] uppercase tracking-[0.16em] text-stone-500 transition-colors hover:text-stone-900"
                    >
                      Open PDF
                    </a>
                  </div>
                  <div className="relative aspect-[4/5] w-full bg-[#F3EFE8] md:aspect-[5/4]">
                    <iframe
                      src={`${DECK_URL}#view=FitH`}
                      title="K Scan investor deck"
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                </div>
              ) : deckState === "checking" ? (
                <div className="flex min-h-[420px] items-center justify-center rounded-[24px] border border-stone-200 bg-white/75 px-8 text-center">
                  <p className="text-[14px] tracking-[0.08em] text-stone-500">Preparing deck materials...</p>
                </div>
              ) : (
                <div className="flex min-h-[420px] flex-col justify-between rounded-[24px] border border-stone-200 bg-white p-8">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-stone-400">Deck Placeholder</p>
                    <h3 className="mt-4 font-display text-[30px] leading-[1.08] text-stone-900">
                      The embed is ready once the deck file is added.
                    </h3>
                    <p className="mt-4 max-w-lg text-[14px] leading-[1.85] text-stone-500">
                      This page is configured to display a high-fidelity PDF embed from <span className="font-medium text-stone-700">/docs/k-scan-pitch-deck-2026.pdf</span>. That file is not present in the current workspace, so the live deck cannot be shown yet.
                    </p>
                  </div>

                  <div className="mt-8 rounded-[22px] bg-[#F7F4EF] p-5">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-stone-400">Next step</p>
                    <p className="mt-2 text-[14px] leading-[1.8] text-stone-500">
                      Ensure the final PDF is available at <span className="font-medium text-stone-700">/docs/k-scan-pitch-deck-2026.pdf</span> and this stage will automatically switch from placeholder to embedded presentation after access is granted.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20 md:px-10 md:pb-28">
        <div className="rounded-[30px] border border-stone-200/80 bg-[#F5F3EF] px-6 py-8 md:px-8 md:py-10">
          <p className="text-[11px] uppercase tracking-[0.18em] text-stone-400">Investor Contact</p>
          <p className="mt-4 font-display text-[28px] text-stone-900">K Scan AI</p>
          <p className="mt-3 max-w-xl text-[14px] leading-[1.85] text-stone-500">
            For access updates, follow-up questions, or a direct deck request, please contact <a className="text-stone-700 underline decoration-stone-300 underline-offset-4 hover:decoration-stone-500" href="mailto:investors@kscan.ai">investors@kscan.ai</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
