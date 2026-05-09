import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Investor Materials",
  description:
    "Private investor materials for K Scan, an AI-powered visual fashion discovery and commerce platform.",
  keywords: [
    "K Scan investors",
    "AI fashion commerce startup",
    "visual commerce platform",
  ],
  alternates: {
    canonical: "/investors",
  },
  openGraph: {
    title: "K Scan Investor Materials",
    description:
      "Private investor materials for K Scan's AI-powered fashion discovery and visual commerce platform.",
    url: "https://kscan.app/investors",
    siteName: "K Scan AI",
    images: [
      {
        url: "/group-street.jpeg",
        width: 1200,
        height: 800,
        alt: "K Scan fashion discovery investor preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "K Scan Investor Materials",
    description:
      "Private materials for K Scan's AI-powered visual fashion discovery platform.",
    images: ["/group-street.jpeg"],
  },
};

export default function InvestorsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
