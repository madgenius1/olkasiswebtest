import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const manrope = Manrope({
  weight: ["400"],
  style: "normal",
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Olkasis Capital — Africa's Wealth, Invested Wisely",
  description:
    "Olkasis Capital is a Kenya-based investment firm offering the Zanari retail investment app, ETFs, asset management, and wealth advisory services for Africa and the diaspora.",
  keywords: [
    "Kenya investing",
    "Africa ETFs",
    "Invest in Kenya",
    "Asset management in Kenya",
    "Zanari app",
    "Zanari investment app",
    "Wealth management Kenya",
    "Diaspora investing",
  ],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
