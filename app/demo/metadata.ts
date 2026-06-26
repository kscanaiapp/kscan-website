import type { Metadata } from "next";

export const demoMetadata: Metadata = {
  title: {
    absolute: "K Scan AI Demo | AI Fashion Discovery in Action",
  },
  description:
    "Explore a visual demo of K Scan AI's scan-to-style experience for real-world fashion discovery and outfit inspiration.",
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
    title: "K Scan AI Demo | AI Fashion Discovery in Action",
    description:
      "Explore a visual demo of K Scan AI's scan-to-style experience for real-world fashion discovery and outfit inspiration.",
    url: "https://kscan.app/demo",
    siteName: "K Scan AI",
    locale: "en_US",
    images: [
      {
        url: "/group-street.jpeg",
        width: 2048,
        height: 1365,
        alt: "K Scan AI visual fashion search preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "K Scan AI Demo | AI Fashion Discovery in Action",
    description:
      "Explore a visual demo of K Scan AI's scan-to-style experience for real-world fashion discovery and outfit inspiration.",
    images: ["/group-street.jpeg"],
  },
};
