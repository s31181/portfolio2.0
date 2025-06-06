import type { Metadata } from "next";
import { Marcellus, Playfair_Display } from "next/font/google";
import "./globals.css";
import "../styles/main.scss";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Header, Footer } from "@components";
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Rob Caluza - Frontend Developer",
  description: "I'm a frontend developer with a passion for creating beautiful and functional websites.",
  viewport: "width=device-width, initial-scale=1.0",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${marcellus.variable}`}>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
