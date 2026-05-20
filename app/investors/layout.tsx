import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "K Scan Investors | Fashion Intelligence Platform",
  },
  description:
    "Investor access to K Scan’s product vision, platform roadmap, and fashion intelligence opportunity.",
  alternates: {
    canonical: "/investors",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  openGraph: {
    title: "K Scan Investors | Fashion Intelligence Platform",
    description:
      "Investor access to K Scan’s product vision, platform roadmap, and fashion intelligence opportunity.",
    url: "https://kscan.app/investors",
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
    title: "K Scan Investors | Fashion Intelligence Platform",
    description:
      "Investor access to K Scan’s product vision, platform roadmap, and fashion intelligence opportunity.",
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
