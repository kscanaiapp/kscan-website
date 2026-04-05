import type { Metadata, Viewport } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// ─── Viewport (separate export required in Next.js 14+) ───────────────────
export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  // Prevent iOS auto-zoom on input focus
  maximumScale: 1,
};

// ─── Metadata ─────────────────────────────────────────────────────────────
// Icons are intentionally NOT listed here.
// Next.js App Router auto-discovers and injects:
//   app/favicon.ico      → <link rel="shortcut icon">
//   app/icon.svg         → <link rel="icon" type="image/svg+xml">
//   app/icon.tsx         → <link rel="icon" type="image/png" sizes="48x48">
//   app/apple-icon.tsx   → <link rel="apple-touch-icon" sizes="180x180">
//   app/manifest.ts      → <link rel="manifest">
// Adding them manually here would produce duplicate <link> tags.
export const metadata: Metadata = {
  title: "K Scan AI — Fashion, Made Shoppable",
  description:
    "Point your phone at any outfit, editorial, or screen. K Scan's visual AI surfaces exactly where to buy what you're seeing — in seconds.",
  applicationName: "K Scan AI",
  appleWebApp: {
    capable: true,
    title: "K Scan AI",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    title: "K Scan AI — Fashion, Made Shoppable",
    description:
      "Point your phone at any outfit, editorial, or screen. K Scan surfaces exactly where to buy what you're seeing — in seconds.",
    type: "website",
  },
};

// ─── Root Layout ──────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
