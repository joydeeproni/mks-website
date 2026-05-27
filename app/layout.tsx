import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
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
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MKS Exports — Bags Made Responsibly for Global Brands",
    description:
      "Premium, ethically-made leather bags and accessories handcrafted in Kolkata.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon",
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
      className={`${manrope.variable} h-full antialiased`}
    >
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/qjl3row.css" />
      </head>
      <body className="min-h-full flex flex-col bg-ivory text-clay-700 font-sans">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
