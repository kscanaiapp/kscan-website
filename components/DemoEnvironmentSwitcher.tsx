"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type EnvironmentView = "mobile" | "smartglasses";

type EnvironmentConfig = {
  label: string;
  title: string;
  focus: string;
  description: string;
  videoSrc: string;
};

const DEFAULT_VIEW: EnvironmentView = "mobile";
const EASE = [0.22, 1, 0.36, 1] as const;
const TOGGLE_DURATION = 0.3;
const VIDEO_DURATION = 0.38;
const COPY_DURATION = 0.22;

const ENVIRONMENTS: Record<EnvironmentView, EnvironmentConfig> = {
  mobile: {
    label: "Mobile App",
    title: "Mobile-first visual discovery",
    focus: "Focus: Mobile-first visual discovery and conversion flow.",
    description:
      "K Scan turns product inspiration into a polished mobile journey built for search, selection, and conversion.",
    videoSrc: "/demo/kscan-demo-v16.mp4",
  },
  smartglasses: {
    label: "Smart Glasses",
    title: "Hands-free visual intelligence",
    focus: "Focus: Hands-free visual intelligence for smart-glasses interfaces.",
    description:
      "The same system extends into smart-glasses experiences, keeping visual context available without interrupting movement.",
    videoSrc: "/demo/kscan-demo-smartglasses-groupstreet.mp4",
  },
};

function normalizeView(value: string | null): EnvironmentView {
  const normalized = value?.toLowerCase();
  return normalized === "smartglasses" ? "smartglasses" : DEFAULT_VIEW;
}

function buildHref(
  pathname: string,
  searchParams: URLSearchParams,
  view: EnvironmentView,
) {
  const nextParams = new URLSearchParams(searchParams.toString());
  nextParams.set("view", view);
  const query = nextParams.toString();
  return query ? `${pathname}?${query}` : pathname;
}

export function DemoEnvironmentSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prefersReducedMotion = useReducedMotion();

  const activeView = normalizeView(searchParams.get("view"));
  const activeEnvironment = ENVIRONMENTS[activeView];

  const [copied, setCopied] = useState(false);
  const [videoErrors, setVideoErrors] = useState<Record<EnvironmentView, boolean>>({
    mobile: false,
    smartglasses: false,
  });
  const copyTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const rawView = searchParams.get("view");
    const normalized = normalizeView(rawView);

    if (rawView === normalized) {
      return;
    }

    const nextParams = new URLSearchParams(searchParams.toString());
    nextParams.set("view", normalized);
    const query = nextParams.toString();
    router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
  }, [pathname, router, searchParams]);

  const handleSwitch = useCallback(
    (view: EnvironmentView) => {
      const href = buildHref(pathname, new URLSearchParams(searchParams.toString()), view);
      router.replace(href, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const copiedHref = useMemo(
    () => buildHref(pathname, new URLSearchParams(searchParams.toString()), activeView),
    [activeView, pathname, searchParams],
  );

  const handleCopyLink = useCallback(async () => {
    const origin = window.location.origin;
    const absoluteUrl = new URL(copiedHref, origin).toString();

    await navigator.clipboard.writeText(absoluteUrl);
    if (copyTimeoutRef.current) {
      window.clearTimeout(copyTimeoutRef.current);
    }
    setCopied(true);
    copyTimeoutRef.current = window.setTimeout(() => setCopied(false), 1800);
  }, [copiedHref]);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="mx-auto flex w-full max-w-[72rem] flex-col">
      <div className="mx-auto flex max-w-[44rem] flex-col items-center gap-3 text-center">
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-stone-400/90">
          Environment Switcher
        </p>
        <div className="inline-flex items-center rounded-full border border-stone-500/30 bg-[#101010] p-1 shadow-[0_10px_24px_rgba(0,0,0,0.24)] ring-1 ring-white/5">
          {(Object.keys(ENVIRONMENTS) as EnvironmentView[]).map((view) => {
            const config = ENVIRONMENTS[view];
            const isActive = view === activeView;

            return (
              <button
                key={view}
                type="button"
                aria-pressed={isActive}
                onClick={() => handleSwitch(view)}
                className="relative rounded-full px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.16em] text-stone-300/88 outline-none transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-300/55 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] sm:px-7"
              >
                {isActive ? (
                  <motion.span
                    layoutId="environment-switcher-pill"
                    className="absolute inset-0 rounded-full border border-cyan-300/18 bg-[linear-gradient(135deg,rgba(226,232,240,0.11),rgba(34,211,238,0.12))] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_14px_rgba(34,211,238,0.08)]"
                    transition={{
                      duration: prefersReducedMotion ? 0 : TOGGLE_DURATION,
                      ease: EASE,
                    }}
                  />
                ) : null}
                <span className="relative z-10">{config.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-7 overflow-hidden rounded-2xl border border-stone-800/80 bg-[#050505] shadow-[0_0_50px_rgba(0,0,0,0.8)] ring-1 ring-white/5">
        <div className="relative aspect-video">
          {(Object.keys(ENVIRONMENTS) as EnvironmentView[]).map((view) => {
            const config = ENVIRONMENTS[view];
            const isActive = view === activeView;
            const hasError = videoErrors[view];

            return (
              <motion.div
                key={view}
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                }}
                transition={{
                  duration: prefersReducedMotion ? 0 : VIDEO_DURATION,
                  ease: EASE,
                }}
                className={`absolute inset-0 ${isActive ? "z-10 pointer-events-auto" : "z-0 pointer-events-none"}`}
              >
                {hasError ? (
                  <div className="flex h-full w-full items-center justify-center bg-stone-950">
                    <p className="text-sm text-stone-400">Preview unavailable</p>
                  </div>
                ) : (
                  <video
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                    onError={() =>
                      setVideoErrors((current) => ({
                        ...current,
                        [view]: true,
                      }))
                    }
                    className="h-full w-full object-contain"
                  >
                    <source src={config.videoSrc} type="video/mp4" />
                  </video>
                )}
              </motion.div>
            );
          })}

          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/24 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/42 to-transparent" />
        </div>
      </div>

      <div className="mt-5 rounded-[24px] border border-stone-200/80 bg-[#F4F0EA] px-6 py-6 shadow-[0_16px_36px_rgba(35,28,22,0.06)] md:px-8 md:py-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.24, ease: EASE }}
            className="grid gap-5 md:grid-cols-[minmax(0,0.92fr)_minmax(0,1.2fr)] md:items-start md:gap-8"
          >
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.26em] text-stone-400">
                Active Environment
              </p>
              <h2 className="mt-2.5 font-display text-[28px] leading-[1.04] text-stone-900 md:text-[34px]">
                {activeEnvironment.title}
              </h2>
            </div>
            <div className="space-y-2.5">
              <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-stone-700">
                {activeEnvironment.focus}
              </p>
              <p className="max-w-2xl text-[15px] leading-[1.8] text-stone-500">
                {activeEnvironment.description}
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => void handleCopyLink()}
                  className="inline-flex h-10 min-w-[9.5rem] items-center justify-center rounded-full border border-stone-300/70 bg-stone-50 px-5 text-[11px] font-medium uppercase tracking-[0.16em] text-stone-600 transition-colors hover:border-stone-400 hover:bg-white hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/55 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-100"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copied ? "copied" : "default"}
                      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -4 }}
                      transition={{ duration: prefersReducedMotion ? 0 : COPY_DURATION, ease: EASE }}
                      className="inline-flex items-center justify-center"
                    >
                      {copied ? "Link copied" : "Copy Link"}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
