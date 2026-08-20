import type { Metadata, Viewport } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import { SiteFooter } from "@/components/ui/SiteFooter";
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
  themeColor: "#FAFAF8",
  width: "device-width",
  initialScale: 1,
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
  metadataBase: new URL("https://kscan.app"),
  title: {
    default: "K Scan AI | See it. Scan it. Style it.",
    template: "%s | K Scan AI",
  },
  description:
    "K Scan AI is a fashion scan app, AI stylist, and visual commerce platform that helps users discover fashion, explore products and alternatives, preserve discoveries in Recent Scans, organize owned items in Closet, and style what they wear.",
  keywords: [
    "AI fashion search",
    "find clothes from photos",
    "identify outfits from screenshots",
    "visual fashion discovery",
    "screenshot shopping",
    "fashion visual search",
  ],
  applicationName: "K Scan AI",
  alternates: {
    canonical: "/",
  },
  appleWebApp: {
    capable: true,
    title: "K Scan AI",
    statusBarStyle: "black-translucent",
  },
  openGraph: {
    title: "K Scan AI | See it. Scan it. Style it.",
    description:
      "K Scan AI helps turn real-world fashion inspiration into AI-assisted style discovery, saved looks, and retailer-neutral shopping paths.",
    url: "https://kscan.app",
    siteName: "K Scan AI",
    locale: "en_US",
    images: [
      {
        url: "https://wyyuqfdxucjksghsmhry.supabase.co/storage/v1/object/public/public-assets/open-graph.png",
        alt: "K Scan AI - See It. Scan It. Style It.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "K Scan AI | See it. Scan it. Style it.",
    description:
      "K Scan AI helps turn real-world fashion inspiration into AI-assisted style discovery, saved looks, and retailer-neutral shopping paths.",
    images: [
      {
        url: "/group-street.jpeg",
        alt: "K Scan AI: fashion scanning and styling app",
        width: 2048,
        height: 1365,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    other: {
      "msvalidate.01": "F44790765DC4B0935AA2E37619331AAD",
    },
  },
};

// ─── Root Layout ──────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "K Scan AI",
    url: "https://kscan.app",
    logo: "https://kscan.app/icon-512.png",
    sameAs: [
      "https://www.instagram.com/KScan_app",
      "https://www.tiktok.com/@KScan_app",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "K Scan AI",
    url: "https://kscan.app",
    description:
      "AI-powered visual fashion search for identifying clothes from photos, screenshots, and social inspiration.",
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-full focus:bg-stone-950 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
