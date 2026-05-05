"use client";

import { useEffect, useState } from "react";

const MOBILE_DECK = "/docs/kscan-deck-m.html";
const DESKTOP_DECK = "/docs/kscan-deck-no9.pdf";

type InvestorDeckLauncherProps = {
  className?: string;
};

export function InvestorDeckLauncher({ className }: InvestorDeckLauncherProps) {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Run viewport detection only after client mount to avoid hydration mismatch.
    const mq = window.matchMedia("(max-width: 768px)");

    const update = () => {
      setMounted(true);
      setIsMobile(mq.matches);
    };

    const timer = window.setTimeout(update, 0);
    mq.addEventListener("change", update);
    return () => {
      window.clearTimeout(timer);
      mq.removeEventListener("change", update);
    };
  }, []);

  // Mobile investors get the tap deck; desktop and tablet investors keep the full PDF.
  const href = mounted && isMobile ? MOBILE_DECK : DESKTOP_DECK;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {!mounted
        ? "Open Investor Deck"
        : isMobile
          ? "Open Mobile Deck"
          : "Download Investor Deck"}
    </a>
  );
}
