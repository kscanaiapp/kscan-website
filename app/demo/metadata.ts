import type { Metadata } from "next";

export const demoMetadata: Metadata = {
  title: "AI Fashion Search Demo",
  description:
    "See how K Scan turns visual fashion inspiration into mobile-first product discovery, outfit recognition, and commerce-ready results.",
  keywords: [
    "AI fashion search demo",
    "visual shopping demo",
    "fashion recognition app",
    "shop outfits from screenshots",
  ],
  alternates: {
    canonical: "/demo",
  },
  openGraph: {
    title: "K Scan AI Fashion Search Demo",
    description:
      "Explore the K Scan product vision for identifying clothing from photos, screenshots, and real-world inspiration.",
    url: "https://kscan.app/demo",
    siteName: "K Scan AI",
    images: [
      {
        url: "/demo/kscan-demo-image-1.jpeg",
        width: 1600,
        height: 1067,
        alt: "K Scan demo showing visual fashion search from inspiration to shopping output",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "K Scan AI Fashion Search Demo",
    description:
      "See K Scan's mobile-first visual shopping flow for outfit recognition and fashion discovery.",
    images: ["/demo/kscan-demo-image-1.jpeg"],
  },
};
