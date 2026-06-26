import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "K Scan AI Investors | Company Overview",
  },
  description:
    "Access K Scan AI investor materials, company updates, and product overview information through the protected investor portal.",
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
    title: "K Scan AI Investors | Company Overview",
    description:
      "Access K Scan AI investor materials, company updates, and product overview information through the protected investor portal.",
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
    title: "K Scan AI Investors | Company Overview",
    description:
      "Access K Scan AI investor materials, company updates, and product overview information through the protected investor portal.",
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
