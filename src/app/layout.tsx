import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const manrope = Manrope({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
const siteName = "Olkasis Capital";
const baseUrl = "https://olkasiscapital.com";

export const metadata: Metadata = {
  title:
    "Olkasis Capital | Olkasis App - Invest in and Trade Kenyan Capital Market",
  description:
    "Olkasis Capital is a Kenya-based investment firm offering the Olkasis retail investment app, ETFs, asset management, and wealth advisory services for Kenya, Africa, and clients in diaspora.",
  keywords: [
    "Diaspora investing in Kenya",
    "Nairobi Securities Exchange investing",
    "Kenya investing mobile apps",
    "Best app for trading in Kenya",
    "Kenya investing",
    "Kenyan ETFs",
    "Invest in Kenya",
    "Asset management in Kenya",
    "Zanari app",
    "Zanari investment app",
    "Wealth management Kenya",
    "Diaspora investing",
    "Invest in Kenyan Stocks",
    "Investment Mobile App ",
    "Buy and sell Kenyan stocks and equity",
    "Stock Trading Platform",
    "Invest in NSE",
    "Buy and sell shares in Kenya",
    "Best stock trading app in Kenya",
    "NSE mobile app",
  ],
  openGraph: {
    title: `${siteName}`,
    description:
      "Olkasis Capital | Olkasis App - Buy and Sell Kenyan Stocks, Equities, ETFs, Derivatives, and Invest in the Kenyan Capital Markets.",
    url: baseUrl,
    siteName: siteName,
    images: [
      {
        url: `${baseUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Olkasis Capital | Olkasis App - Buy and Sell Kenyan Stocks, Equities, ETFs, Derivatives, and Invest in the Kenyan Capital Markets.",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description:
      "Olkasis Capital | Olkasis App - Buy and Sell Kenyan Stocks, Equities, ETFs, Derivatives, and Invest in the Kenyan Capital Markets.",
    images: [`${baseUrl}/og-image.jpg`],
  },
  metadataBase: new URL(baseUrl),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={manrope.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-Q6NV6K07V0" />
    </html>
  );
}
