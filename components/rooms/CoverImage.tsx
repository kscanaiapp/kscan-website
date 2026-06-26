"use client";

import { useState } from "react";

type CoverImageProps = {
  primaryUrl: string | null;
  fallbackUrls: string[];
  alt: string;
};

export function CoverImage({ primaryUrl, fallbackUrls, alt }: CoverImageProps) {
  const allUrls = [
    ...new Set([primaryUrl, ...fallbackUrls].filter((u): u is string => u !== null)),
  ];
  const [idx, setIdx] = useState(0);
  const [exhausted, setExhausted] = useState(false);

  if (allUrls.length === 0 || exhausted) {
    return (
      <div
        aria-hidden="true"
        className="flex h-full items-center justify-center px-8 text-center text-[12px] font-semibold uppercase tracking-[0.24em] text-stone-600"
      >
        View-only room preview
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={allUrls[idx]}
      alt={alt}
      className="h-full w-full object-cover"
      onError={() => {
        if (idx + 1 < allUrls.length) {
          setIdx(idx + 1);
        } else {
          setExhausted(true);
        }
      }}
    />
  );
}
