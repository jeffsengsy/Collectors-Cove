import type { Metadata } from "next";
import "./globals.css";
import { Russo_One, Chakra_Petch } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const russoOne = Russo_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-russo",
  display: "swap",
});

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-chakra",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Collector's Cove — Salisbury, NC",
  description:
    "20,000 sq ft of Pokémon TCG, One Piece TCG, Magic: The Gathering, Sports Cards, Video Games, and Collectibles in Salisbury, NC. Visit us at 322 S Main St.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${russoOne.variable} ${chakraPetch.variable}`}>
      <body className={`min-h-full flex flex-col bg-[#0a0e1a] text-white antialiased ${chakraPetch.className}`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
