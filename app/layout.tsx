import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kstechnology.com"),
  title: {
    default: "KS Technology — Innovate · Connect · Elevate",
    template: "%s · KS Technology",
  },
  description:
    "KS Technology builds revenue engines. We design software, scale SEO, and run growth marketing for ambitious brands worldwide.",
  keywords: [
    "software consulting",
    "SEO agency",
    "digital marketing",
    "web development",
    "performance marketing",
    "KS Technology",
  ],
  icons: {
    icon: "/ks-logo.jpeg",
    apple: "/ks-logo.jpeg",
  },
  openGraph: {
    title: "KS Technology — Innovate · Connect · Elevate",
    description:
      "We design software, scale SEO, and run growth marketing for ambitious brands.",
    type: "website",
    images: ["/ks-logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="font-body bg-white text-ink-900 antialiased">
        {children}
      </body>
    </html>
  );
}
