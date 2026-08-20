import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "K Scan AI Investor Relations | Data Room",
  },
  description:
    "K Scan AI Investor Relations provides current and authorized investors with a dedicated path to secure company and diligence materials.",
  alternates: {
    canonical: "/data-room",
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  openGraph: {
    title: "K Scan AI Investor Relations | Data Room",
    description:
      "K Scan AI Investor Relations provides current and authorized investors with a dedicated path to secure company and diligence materials.",
    url: "https://kscan.app/data-room",
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
    title: "K Scan AI Investor Relations | Data Room",
    description:
      "K Scan AI Investor Relations provides current and authorized investors with a dedicated path to secure company and diligence materials.",
    images: ["/group-street.jpeg"],
  },
};

export default function DataRoomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
