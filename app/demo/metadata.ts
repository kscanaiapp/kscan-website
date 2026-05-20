import type { Metadata } from "next";

export const demoMetadata: Metadata = {
  title: {
    absolute: "K Scan Demo | Visual Fashion Search in Action",
  },
  description:
    "Experience K Scan’s visual fashion intelligence across mobile and smart-glasses environments.",
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
    title: "K Scan Demo | Visual Fashion Search in Action",
    description:
      "Experience K Scan’s visual fashion intelligence across mobile and smart-glasses environments.",
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
    title: "K Scan Demo | Visual Fashion Search in Action",
    description:
      "Experience K Scan’s visual fashion intelligence across mobile and smart-glasses environments.",
    images: ["/group-street.jpeg"],
  },
};
