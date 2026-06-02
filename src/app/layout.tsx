import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

const siteUrl = "https://shahraba-kv.vercel.app";
const description =
  "UI/UX designer based in Dubai. 3 years of work across telecom, engineering, and consumer apps. I worked as an architect before this.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shahraba KV · UI/UX Designer",
  description,
  keywords: [
    "UI/UX Designer",
    "Product Designer",
    "Shahraba KV",
    "Dubai UX Designer",
    "Architect to UX",
    "Telecom UX",
    "B2B SaaS Design",
  ],
  openGraph: {
    title: "Shahraba KV · UI/UX Designer",
    description,
    type: "website",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 800,
        alt: "Shahraba KV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahraba KV · UI/UX Designer",
    description,
    images: ["/images/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
