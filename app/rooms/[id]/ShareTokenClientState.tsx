"use client";

import { useEffect, useState } from "react";

const KNOWN_SHARE_TOKENS_KEY = "kscan.publicShareTokens";

function readKnownShareTokens() {
  try {
    const stored = window.localStorage.getItem(KNOWN_SHARE_TOKENS_KEY);
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed.filter((value) => typeof value === "string") : [];
  } catch {
    return [];
  }
}

export function RememberShareToken({ token }: { token: string }) {
  useEffect(() => {
    const knownTokens = readKnownShareTokens();
    if (knownTokens.includes(token)) return;

    window.localStorage.setItem(
      KNOWN_SHARE_TOKENS_KEY,
      JSON.stringify([...knownTokens.slice(-24), token]),
    );
  }, [token]);

  return null;
}

export function ShareTokenAwareCopy({
  token,
  fallback,
  knownTokenCopy,
}: {
  token: string;
  fallback: string;
  knownTokenCopy: string;
}) {
  const [isKnownShareToken, setIsKnownShareToken] = useState(false);

  useEffect(() => {
    setIsKnownShareToken(readKnownShareTokens().includes(token));
  }, [token]);

  return isKnownShareToken ? knownTokenCopy : fallback;
}
