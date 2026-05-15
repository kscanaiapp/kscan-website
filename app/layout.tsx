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
  metadataBase: new URL("https://kscan.app"),
  title: {
    default: "K Scan AI | AI Fashion Search From Photos & Screenshots",
    template: "%s | K Scan AI",
  },
  description:
    "K Scan is an AI fashion search app that helps you identify clothes from photos, screenshots, videos, and social inspiration, then find exact or similar products to buy.",
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
    title: "K Scan AI | AI Fashion Search From Photos & Screenshots",
    description:
      "Identify clothing from photos, screenshots, videos, TikToks, and real-world inspiration with K Scan's visual fashion search.",
    url: "https://kscan.app",
    siteName: "K Scan AI",
    images: [
      {
        url: "/demo/kscan-demo-image-1.jpeg",
        width: 1600,
        height: 1067,
        alt: "K Scan AI visual fashion search preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "K Scan AI | AI Fashion Search From Photos & Screenshots",
    description:
      "Find clothes from photos, screenshots, and social inspiration with AI-powered visual fashion search.",
    images: ["/demo/kscan-demo-image-1.jpeg"],
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
      "AI-powered visual fashion search for identifying clothes from photos, screenshots, videos, and social inspiration.",
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
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
