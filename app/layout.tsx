import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Playfair_Display } from "next/font/google";
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

export const metadata: Metadata = {
  title: "K Scan AI — Fashion, Made Shoppable",
  description:
    "Point your phone at any outfit, editorial, or screen. K Scan's visual AI surfaces exactly where to buy what you're seeing — in seconds.",
  openGraph: {
    title: "K Scan AI — Fashion, Made Shoppable",
    description:
      "Point your phone at any outfit, editorial, or screen. K Scan surfaces exactly where to buy what you're seeing — in seconds.",
    type: "website",
  },
};

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
