import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MKS Exports — Bags Made Responsibly for Global Brands",
  description:
    "MKS is a second-generation, women-led leather goods manufacturer based in Kolkata, India. Premium leather bags and accessories produced under the Fair Trade banner.",
  metadataBase: new URL("https://mks.example.com"),
  openGraph: {
    title: "MKS Exports — Bags Made Responsibly for Global Brands",
    description:
      "Premium, ethically-made leather bags and accessories handcrafted in Kolkata.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-clay-700">
        {children}
      </body>
    </html>
  );
}
