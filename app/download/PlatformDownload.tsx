"use client";

import { useEffect, useState } from "react";

type Platform = "android" | "ios" | "unknown";

function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent || "";
  if (/android/i.test(ua)) return "android";
  if (/iphone|ipad|ipod/i.test(ua)) return "ios";
  return "unknown";
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} focusable="false">
      <path fill="#EA4335" d="M3 20.5V3.5c0-.59.34-1.11.84-1.35L13.69 12 3.84 21.85C3.34 21.6 3 21.09 3 20.5z" />
      <path fill="#FBBC04" d="M16.81 15.12 13.69 12l3.12-3.12 3.35 1.91c1.01.57 1.01 1.85 0 2.42l-3.35 1.91z" />
      <path fill="#4285F4" d="M3.84 21.85 13.69 12l3.12 3.12-10.46 6.87c-1.08.59-2.26.4-2.51-.14z" />
      <path fill="#34A853" d="M3.84 2.15C4.09 1.61 5.27 1.42 6.35 2.01L16.81 8.88 13.69 12 3.84 2.15z" />
    </svg>
  );
}

function AppleMarkIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} focusable="false">
      <path
        fill="currentColor"
        d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"
      />
    </svg>
  );
}

const cardBase =
  "flex flex-col rounded-[24px] border border-stone-200/80 bg-white p-6 shadow-[0_16px_36px_rgba(35,28,22,0.05)] md:p-8";

const actionButton =
  "mt-6 inline-flex items-center justify-center gap-2.5 rounded-full bg-violet-600 px-7 py-4 text-[14px] font-medium text-white shadow-[0_14px_30px_rgba(124,58,237,0.16)] transition-colors hover:bg-violet-700";

export function PlatformDownload() {
  const [platform, setPlatform] = useState<Platform>("unknown");

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setPlatform(detectPlatform());
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  const platforms = [
    {
      id: "android" as const,
      icon: <GooglePlayIcon className="h-8 w-8" />,
      name: "Android",
      description: "Open testing through Google Play.",
      action: "Get it on Google Play",
      href: "https://play.google.com/store/apps/details?id=com.kscanai.app",
    },
    {
      id: "ios" as const,
      icon: <AppleMarkIcon className="h-8 w-8 text-stone-900" />,
      name: "iOS",
      description: "Beta access through TestFlight.",
      action: "Open in TestFlight",
      href: "https://testflight.apple.com/",
    },
  ];

  const ordered =
    platform === "ios"
      ? [platforms[1], platforms[0]]
      : platforms;

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {ordered.map((p) => (
        <div key={p.id} className={cardBase}>
          {p.id === platform ? (
            <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-violet-700">
              Recommended for your device
            </span>
          ) : null}
          {p.icon}
          <h2 className="mt-4 font-display text-[22px] leading-tight text-stone-900">{p.name}</h2>
          <p className="mt-2 text-[14px] leading-relaxed text-stone-500">{p.description}</p>
          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className={actionButton}
          >
            {p.action}
          </a>
        </div>
      ))}
    </div>
  );
}
