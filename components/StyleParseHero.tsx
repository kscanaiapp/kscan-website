"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Stage = "capturing" | "parsing" | "matched";

const STAGES: Stage[] = ["capturing", "parsing", "matched"];

const DURATIONS: Record<Stage, number> = {
  capturing: 1800,
  parsing:   2200,
  matched:   3200,
};

const BOOT_FOCUS_DURATION = 1.2;
const ACTIVATION_DELAY = 1.2;
const ACTIVATION_DURATION = 0.6;
const SCAN_DURATION = 2.0;
const SCAN_DELAY = 0.12;
const CHIP_STAGGER = 0.15;

const IMAGE_FRAME = {
  top: "8%",
  left: "14%",
  right: "14%",
  bottom: "18%",
};

interface StyleParseHeroProps {
  heroImage?: string;
}

// ─── Confidence counter (rAF-driven) ─────────────────────────────────────────

function ConfidenceCounter({ active }: { active: boolean }) {
  const [value, setValue] = useState(0);
  const reduced = useReducedMotion();
  const rafRef  = useRef<number>(0);

  useEffect(() => {
    cancelAnimationFrame(rafRef.current);
    if (!active) {
      rafRef.current = requestAnimationFrame(() => setValue(0));
      return () => cancelAnimationFrame(rafRef.current);
    }
    if (reduced) {
      rafRef.current = requestAnimationFrame(() => setValue(98));
      return () => cancelAnimationFrame(rafRef.current);
    }

    const start    = performance.now();
    const duration = 1950;

    function tick(now: number) {
      const t      = Math.min((now - start) / duration, 1);
      const eased  = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * 98));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active, reduced]);

  return <>{value}%</>;
}

// ─── Viewfinder bracket set ───────────────────────────────────────────────────

function Brackets({
  cyan   = true,
  size   = "h-[18px] w-[18px]",
  weight = "[1.5px]",
  opacity = 1,
}: {
  cyan?:    boolean;
  size?:    string;
  weight?:  string;
  opacity?: number;
}) {
  const color  = cyan ? "rgba(0,255,255,0.80)" : "rgba(255,255,255,0.32)";
  const glow   = cyan ? "drop-shadow(0 0 5px rgba(0,255,255,0.65))" : undefined;
  const shared = `absolute ${size} border-[${weight}]`;
  const s = { borderColor: color, filter: glow, opacity };
  return (
    <>
      <div className={`${shared} top-0 left-0 border-t border-l`}         style={s} />
      <div className={`${shared} top-0 right-0 border-t border-r`}        style={s} />
      <div className={`${shared} bottom-0 left-0 border-b border-l`}      style={s} />
      <div className={`${shared} bottom-0 right-0 border-b border-r`}     style={s} />
    </>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const stageFade = {
  initial:    { opacity: 0 },
  animate:    { opacity: 1 },
  exit:       { opacity: 0 },
  transition: { duration: 0.42, ease },
};

const CHIPS = [
  { label: "Product",  value: "Leather Bomber", side: "left"  as const, top: "36%" },
  { label: "Brand",    value: "Saint Laurent",  side: "right" as const, top: "50%" },
  { label: "Material", value: "100% Calfskin",  side: "left"  as const, top: "64%" },
];

export default function StyleParseHero({
  heroImage = "/k2-cafe2.png",
}: StyleParseHeroProps) {
  const [stage,    setStage]    = useState<Stage>("capturing");
  const [imgError, setImgError] = useState(false);
  const reduced = useReducedMotion();

  // Stage progression loop
  useEffect(() => {
    const t = setTimeout(() => {
      setStage(prev => STAGES[(STAGES.indexOf(prev) + 1) % STAGES.length]);
    }, DURATIONS[stage]);
    return () => clearTimeout(t);
  }, [stage]);

  const isCapturing = stage === "capturing";
  const isParsing   = stage === "parsing";
  const isMatched   = stage === "matched";

  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-28">

      {/* Eyebrow */}
      <div className="mb-8 md:mb-10">
        <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-stone-600">
          Style-Parse Engine
        </p>
      </div>

      {/* Container — dark glassmorphism */}
      <div
        className="relative overflow-hidden rounded-[28px] md:rounded-[36px]"
        style={{
          background:  "#09090C",
          border:      "1px solid rgba(255,255,255,0.065)",
          boxShadow:   "0 40px 110px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
        aria-label="K Scan Style-Parse live demo"
        role="region"
      >
        {/* Chrome top highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-[linear-gradient(90deg,transparent_10%,rgba(255,255,255,0.10)_50%,transparent_90%)]" />
        {/* Diagonal chrome sheen */}
        <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,transparent_40%)] md:rounded-[36px]" />

        <div className="flex flex-col lg:flex-row lg:items-stretch">

          {/* ═══════════════════════════════════════════════════
              IMAGE PANEL
          ═══════════════════════════════════════════════════ */}
          <div className="relative w-full overflow-hidden border-b border-white/[0.05] lg:flex-[1.08] lg:border-b-0 lg:border-r">
            <div
              className="relative aspect-[4/5] sm:aspect-[4/5] lg:min-h-[42rem] lg:aspect-[4/5] xl:min-h-[46rem]"
              style={{ minHeight: 420 }}
            >

              {/* Base image */}
              {!imgError ? (
                <motion.div
                  className="absolute inset-0"
                  initial={false}
                  animate={!reduced && isCapturing
                    ? { scale: [1.04, 1.015, 1], filter: ["blur(1.6px)", "blur(0.4px)", "blur(0px)"] }
                    : { scale: 1, filter: "blur(0px)" }}
                  transition={{ duration: BOOT_FOCUS_DURATION, ease }}
                >
                  <Image
                    src={heroImage}
                    alt="Fashion editorial image with K Scan style analysis overlays"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 56vw"
                    className="object-cover object-[center_12%] sm:object-[center_11%] lg:object-[center_10%]"
                    onError={() => setImgError(true)}
                  />
                </motion.div>
              ) : (
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(160deg,#131319 0%,#0d0d14 100%)" }}
                >
                  <div
                    className="absolute inset-0 opacity-[0.045]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,1) 39px,rgba(255,255,255,1) 40px)," +
                        "repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,1) 39px,rgba(255,255,255,1) 40px)",
                    }}
                  />
                </div>
              )}

              {/* Scrim — contrast */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,4,8,0.22)_0%,rgba(4,4,8,0.08)_42%,rgba(4,4,8,0.62)_100%)]" />

              {/* ── CAPTURING ──────────────────────────────── */}
              <AnimatePresence>
                {isCapturing && (
                  <motion.div key="cap" className="absolute inset-0 z-20" {...stageFade}>
                    {/* Viewfinder */}
                    <motion.div
                      className="absolute"
                      style={IMAGE_FRAME}
                      initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 1.01 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: reduced ? 0 : 0.32,
                        delay: reduced ? 0 : ACTIVATION_DELAY,
                        ease,
                      }}
                    >
                      <Brackets />

                      {/* Inner faint border */}
                      <div
                        className="absolute inset-0"
                        style={{ border: "1px solid rgba(0,255,255,0.06)" }}
                      />

                      {/* Mid-axis ticks */}
                      {(["top","bottom","left","right"] as const).map(side => (
                        <div
                          key={side}
                          className="absolute"
                          style={{
                            ...(side === "top"    && { top: 0,    left: "50%", width: 1,  height: 8,  transform: "translateX(-50%)" }),
                            ...(side === "bottom" && { bottom: 0, left: "50%", width: 1,  height: 8,  transform: "translateX(-50%)" }),
                            ...(side === "left"   && { left: 0,   top: "50%",  width: 8,  height: 1,  transform: "translateY(-50%)" }),
                            ...(side === "right"  && { right: 0,  top: "50%",  width: 8,  height: 1,  transform: "translateY(-50%)" }),
                            background: "rgba(0,255,255,0.28)",
                          }}
                        />
                      ))}

                      {/* Centre reticle dot */}
                      <motion.div
                        className="absolute left-1/2 top-1/2 h-[5px] w-[5px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{ background: "#00FFFF", boxShadow: "0 0 7px rgba(0,255,255,0.9)" }}
                        initial={reduced ? { opacity: 0.4 } : { opacity: 0 }}
                        animate={reduced ? { opacity: 0.4 } : { opacity: [0, 0.7, 0.38] }}
                        transition={{
                          duration: reduced ? 0 : 0.42,
                          delay: reduced ? 0 : ACTIVATION_DELAY + 0.1,
                          ease,
                        }}
                      />
                    </motion.div>

                    {/* Coordinate readout */}
                    <motion.p
                      className="absolute font-mono text-[9px] tracking-[0.14em]"
                      style={{ bottom: "22%", left: "16%", color: "rgba(0,255,255,0.28)" }}
                      initial={reduced ? { opacity: 0.22 } : { opacity: 0 }}
                      animate={reduced ? { opacity: 0.22 } : { opacity: [0, 0.34, 0.14, 0.24] }}
                      transition={{
                        duration: reduced ? 0 : ACTIVATION_DURATION,
                        delay: reduced ? 0 : ACTIVATION_DELAY + 0.06,
                        ease,
                      }}
                    >
                      X:0481 &nbsp;Y:1194
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── PARSING ────────────────────────────────── */}
              <AnimatePresence>
                {isParsing && (
                  <motion.div key="parse" className="absolute inset-0 z-20" {...stageFade}>

                    {/* Analysis tint layer */}
                    <motion.div
                      className="absolute"
                      style={{
                        ...IMAGE_FRAME,
                        background: "linear-gradient(160deg,rgba(0,255,255,0.03) 0%,rgba(0,200,220,0.06) 100%)",
                        border: "1px solid rgba(0,255,255,0.10)",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.38 }}
                    >
                      {/* Horizontal grid traces */}
                      {[20, 40, 60, 80].map(pct => (
                        <div
                          key={pct}
                          className="absolute inset-x-0"
                          style={{
                            top: `${pct}%`,
                            height: 1,
                            background: `rgba(0,255,255,${pct === 40 || pct === 60 ? "0.09" : "0.04"})`,
                          }}
                        />
                      ))}
                      {/* Vertical grid traces */}
                      {[33, 66].map(pct => (
                        <div
                          key={pct}
                          className="absolute inset-y-0"
                          style={{ left: `${pct}%`, width: 1, background: "rgba(0,255,255,0.04)" }}
                        />
                      ))}
                      {/* Left-edge ruler ticks */}
                      {[10, 20, 30, 40, 50, 60, 70, 80, 90].map(pct => (
                        <div
                          key={pct}
                          className="absolute left-0"
                          style={{
                            top: `${pct}%`,
                            width: pct % 20 === 0 ? 7 : 3,
                            height: 1,
                            background: `rgba(0,255,255,${pct % 20 === 0 ? "0.28" : "0.12"})`,
                          }}
                        />
                      ))}
                    </motion.div>

                    {/* Corner brackets fade-persisted */}
                    <div
                      className="pointer-events-none absolute"
                      style={IMAGE_FRAME}
                    >
                      <Brackets opacity={0.38} weight="[1px]" />
                    </div>

                    {/* Scan bar */}
                    {!reduced && (
                      <motion.div
                        className="pointer-events-none absolute"
                        style={{ left: "14%", right: "14%", height: 2 }}
                        initial={{ top: IMAGE_FRAME.top }}
                        animate={{ top: "82%" }}
                        transition={{
                          duration: SCAN_DURATION,
                          ease: [0.38, 0, 0.22, 1],
                          delay: SCAN_DELAY,
                        }}
                      >
                        <div
                          className="h-full w-full"
                          style={{
                            background: "linear-gradient(90deg,transparent,rgba(0,255,255,0.55) 18%,#00FFFF 50%,rgba(0,255,255,0.55) 82%,transparent)",
                            filter: "drop-shadow(0 0 6px rgba(0,255,255,0.9)) drop-shadow(0 0 16px rgba(0,255,255,0.4))",
                          }}
                        />
                        {/* Glow trail below */}
                        <div
                          className="absolute inset-x-0 top-0"
                          style={{
                            height: 30,
                            background: "linear-gradient(180deg,rgba(0,255,255,0.09),transparent)",
                            transform: "translateY(-2px)",
                          }}
                        />
                      </motion.div>
                    )}

                    {/* HUD micro coordinates */}
                    <motion.p
                      className="absolute font-mono text-[7px] tracking-[0.18em]"
                      style={{ top: "13%", left: "16%", color: "rgba(0,255,255,0.30)" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.26, 0.14] }}
                      transition={{ delay: 0.16, duration: 0.36, ease }}
                    >
                      X 0.34
                    </motion.p>
                    <motion.p
                      className="absolute font-mono text-[7px] tracking-[0.18em]"
                      style={{ top: "49%", right: "16%", color: "rgba(0,255,255,0.28)" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0.22, 0.12] }}
                      transition={{ delay: 0.44, duration: 0.34, ease }}
                    >
                      Y 0.71
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── MATCHED ────────────────────────────────── */}
              <AnimatePresence>
                {isMatched && (
                  <motion.div key="match" className="absolute inset-0 z-20" {...stageFade}>

                    {/* Settled border */}
                    <div
                      className="absolute"
                      style={{
                        ...IMAGE_FRAME,
                        border: "1px solid rgba(0,255,255,0.17)",
                        background: "rgba(0,255,255,0.025)",
                      }}
                    >
                      <Brackets size="h-[14px] w-[14px]" weight="[1px]" />
                    </div>

                    {/* Data chips */}
                    {CHIPS.map((chip, i) => (
                      <motion.div
                        key={chip.label}
                        className="absolute"
                        style={{
                          top: chip.top,
                          transform: "translateY(-50%)",
                          ...(chip.side === "left" ? { left: "3%" } : { right: "3%" }),
                        }}
                        initial={{ opacity: 0, scale: 0.93, y: 5 }}
                        animate={{ opacity: 1, scale: 1,    y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.16 + i * CHIP_STAGGER, duration: 0.4, ease }}
                      >
                        {/* Guide line */}
                        <div
                          className="pointer-events-none absolute top-1/2 -translate-y-1/2"
                          style={{
                            height: 1,
                            width: 28,
                            ...(chip.side === "left"
                              ? { right: "100%", background: "linear-gradient(to left, rgba(0,255,255,0.38), transparent)" }
                              : { left:  "100%", background: "linear-gradient(to right, rgba(0,255,255,0.38), transparent)" }),
                          }}
                        />
                        {/* Anchor dot */}
                        <div
                          className="pointer-events-none absolute top-1/2 h-[5px] w-[5px] -translate-y-1/2 rounded-full"
                          style={{
                            background: "rgba(0,255,255,0.55)",
                            boxShadow: "0 0 4px rgba(0,255,255,0.65)",
                            ...(chip.side === "left"
                              ? { right: "calc(100% + 1px)" }
                              : { left:  "calc(100% + 1px)" }),
                          }}
                        />
                        {/* Chip body */}
                        <div
                          className="rounded-[10px] px-3 py-2"
                          style={{
                            background:   "rgba(6,6,10,0.80)",
                            border:       "1px solid rgba(0,255,255,0.20)",
                            backdropFilter: "blur(14px)",
                            WebkitBackdropFilter: "blur(14px)",
                            boxShadow:    "0 4px 22px rgba(0,0,0,0.55), 0 0 12px rgba(0,255,255,0.05) inset",
                          }}
                        >
                          <p
                            className="text-[7px] font-semibold uppercase tracking-[0.24em]"
                            style={{ color: "rgba(0,255,255,0.52)" }}
                          >
                            {chip.label}
                          </p>
                          <p className="mt-[3px] whitespace-nowrap text-[11px] font-medium text-white/88 sm:text-[12px]">
                            {chip.value}
                          </p>
                        </div>
                      </motion.div>
                    ))}

                    {/* View Match CTA */}
                    <motion.div
                      className="absolute bottom-5 left-1/2 -translate-x-1/2"
                      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.88, duration: 0.5, ease }}
                    >
                      <button
                        className="rounded-full px-7 py-[11px] text-[11px] font-medium uppercase tracking-[0.2em] text-white/88 transition-colors hover:bg-white/[0.10]"
                        style={{
                          background:   "rgba(6,6,10,0.72)",
                          border:       "1px solid rgba(0,255,255,0.28)",
                          backdropFilter: "blur(14px)",
                          WebkitBackdropFilter: "blur(14px)",
                          boxShadow:    "0 0 22px rgba(0,255,255,0.08), 0 6px 20px rgba(0,0,0,0.45)",
                        }}
                      >
                        View Match
                      </button>
                    </motion.div>

                    {/* Matched-in timing */}
                    <motion.p
                      className="absolute font-mono text-[9px] tracking-[0.16em]"
                      style={{ bottom: "12%", right: "4%", color: "rgba(0,255,255,0.42)" }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.55, duration: 0.38 }}
                    >
                      Match Found
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ── HUD: top-left status (always visible) ─── */}
              <div className="pointer-events-none absolute left-4 top-4 z-30 sm:left-5 sm:top-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={stage}
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.26, ease: "easeOut" }}
                    className="rounded-xl px-3 py-2"
                    style={{
                      background: "rgba(6,6,10,0.70)",
                      border:     "1px solid rgba(255,255,255,0.07)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                    }}
                  >
                    <div className="flex items-center gap-[7px]">
                      {/* Pulsing status dot */}
                      <motion.div
                        className="h-[6px] w-[6px] rounded-full"
                        style={{ background: "#00FFFF", boxShadow: "0 0 7px rgba(0,255,255,0.85)" }}
                        animate={reduced || isMatched ? {} : { opacity: [1, 0.2, 1] }}
                        transition={{ duration: 1.4, repeat: Infinity }}
                      />
                      <span
                        className="font-mono text-[9px] font-semibold uppercase tracking-[0.26em] sm:text-[10px]"
                        style={{ color: "rgba(0,255,255,0.92)" }}
                      >
                        {isCapturing ? "Capturing" : isParsing ? "Processing…" : "Matched"}
                      </span>
                    </div>
                    <p
                      className="mt-[3px] font-mono text-[8px] tracking-[0.12em]"
                      style={{ color: "rgba(255,255,255,0.28)" }}
                    >
                      {isCapturing
                        ? "Visual input detected"
                        : isParsing
                        ? "Analyzing garment signature"
                        : "3 verified attributes identified"}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Stage dots — bottom right of image */}
              <div className="pointer-events-none absolute bottom-4 right-4 z-30 flex items-center gap-[7px]">
                {STAGES.map(s => (
                  <motion.div
                    key={s}
                    className="rounded-full"
                    animate={{
                      width:   s === stage ? 16 : 4,
                      opacity: s === stage ? 0.55 : 0.18,
                      background: "#FFFFFF",
                    }}
                    style={{ height: 3 }}
                    transition={{ duration: 0.32, ease: "easeOut" }}
                  />
                ))}
              </div>

            </div>
          </div>

          {/* ═══════════════════════════════════════════════════
              INFO PANEL
          ═══════════════════════════════════════════════════ */}
          <div className="flex w-full flex-col justify-between p-6 sm:p-8 lg:min-w-[22rem] lg:flex-[0.84] lg:p-10 xl:p-11">

            {/* Top label */}
            <p
              className="mb-7 text-[10px] font-medium uppercase tracking-[0.26em]"
              style={{ color: "rgba(255,255,255,0.16)" }}
            >
              K Scan &nbsp;/&nbsp; Style-Parse
            </p>

            {/* Stage description */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={stage}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.38, ease }}
                >

                  {/* ── CAPTURING ── */}
                  {isCapturing && (
                    <>
                      <h3 className="mb-3 font-display text-[30px] font-medium leading-[1.05] text-white/90 sm:text-[36px]">
                        Capture
                      </h3>
                      <p className="mb-7 text-[13px] leading-[1.82] text-white/32">
                        Point at any garment: on the street, a screen, or a social feed. K Scan starts the match flow from what you see.
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { label: "Lock Time",   value: "Fast" },
                          { label: "Input Types", value: "Camera / Upload" },
                        ].map(m => (
                          <div
                            key={m.label}
                            className="rounded-xl p-4"
                            style={{
                              background: "rgba(255,255,255,0.026)",
                              border:     "1px solid rgba(255,255,255,0.05)",
                            }}
                          >
                            <p className="text-[9px] uppercase tracking-[0.2em] text-white/26">
                              {m.label}
                            </p>
                            <p className="mt-1.5 text-[14px] font-medium text-white/70">
                              {m.value}
                            </p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* ── PARSING ── */}
                  {isParsing && (
                    <>
                      <h3 className="mb-3 font-display text-[30px] font-medium leading-[1.05] text-white/90 sm:text-[36px]">
                        Parse
                      </h3>
                      <p className="mb-6 text-[13px] leading-[1.82] text-white/32">
                        The engine reads silhouette, material, and brand signal simultaneously. No step-by-step pipeline.
                      </p>
                      {/* Confidence card */}
                      <div
                        className="rounded-xl p-5"
                        style={{
                          background: "rgba(255,255,255,0.026)",
                          border:     "1px solid rgba(255,255,255,0.05)",
                        }}
                      >
                        <p className="mb-1 text-[9px] uppercase tracking-[0.22em] text-white/24">
                          Confidence Score
                        </p>
                        <p
                          className="font-mono text-[34px] font-medium tabular-nums"
                          style={{ color: "#00FFFF", textShadow: "0 0 24px rgba(0,255,255,0.38)" }}
                        >
                          <ConfidenceCounter active={isParsing} />
                        </p>
                        {/* Progress bar */}
                        <div
                          className="mt-4 h-[2px] w-full overflow-hidden rounded-full"
                          style={{ background: "rgba(255,255,255,0.06)" }}
                        >
                          <motion.div
                            className="h-full rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: "98%" }}
                            transition={{
                              duration: SCAN_DURATION,
                              ease: [0.4, 0, 0.2, 1],
                              delay: SCAN_DELAY,
                            }}
                            style={{
                              background: "linear-gradient(90deg,rgba(0,255,255,0.65) 0%,#00FFFF 100%)",
                              boxShadow:  "0 0 10px rgba(0,255,255,0.55)",
                            }}
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {/* ── MATCHED ── */}
                  {isMatched && (
                    <>
                      <h3 className="mb-3 font-display text-[30px] font-medium leading-[1.05] text-white/90 sm:text-[36px]">
                        Match
                      </h3>
                      <p className="mb-6 text-[13px] leading-[1.82] text-white/32">
                        Shop with your preferred retailer
                      </p>
                      {/* Data rows */}
                      <div className="space-y-[6px]">
                        {CHIPS.map((chip, i) => (
                          <motion.div
                            key={chip.label}
                            className="flex items-center justify-between rounded-xl px-4 py-3.5"
                            style={{
                              background: "rgba(255,255,255,0.026)",
                              border:     "1px solid rgba(0,255,255,0.09)",
                            }}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.11 + 0.08, duration: 0.38, ease }}
                          >
                            <span
                              className="text-[10px] uppercase tracking-[0.18em]"
                              style={{ color: "rgba(255,255,255,0.26)" }}
                            >
                              {chip.label}
                            </span>
                            <span className="text-[12px] font-medium text-white/80">
                              {chip.value}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Stage progress pill strip */}
            <div className="mt-8 flex items-center gap-2.5">
              {STAGES.map(s => (
                <motion.div
                  key={s}
                  className="rounded-full"
                  animate={{
                    width:      s === stage ? 22 : 6,
                    background: s === stage ? "#00FFFF" : "rgba(255,255,255,0.12)",
                    boxShadow:  s === stage ? "0 0 8px rgba(0,255,255,0.60)" : "none",
                  }}
                  style={{ height: 6 }}
                  transition={{ duration: 0.36, ease }}
                />
              ))}
              <span
                className="ml-1.5 font-mono text-[9px] uppercase tracking-[0.22em]"
                style={{ color: "rgba(255,255,255,0.18)" }}
              >
                {stage}
              </span>
            </div>

          </div>
        </div>

        {/* Bottom chrome bar */}
        <div
          className="flex items-center justify-between px-6 py-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.045)" }}
        >
          <span className="font-mono text-[9px] font-medium uppercase tracking-[0.28em] text-white/18">
            K Scan
          </span>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/14">
            Style-Parse Engine
          </span>
        </div>
      </div>
    </section>
  );
}
