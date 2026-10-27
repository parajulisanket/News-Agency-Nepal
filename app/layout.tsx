import type { Metadata } from "next";
import { Mukta, Khand } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FlashNewsMarquee from "@/components/FlashNewsMarquee";
import Footer from "@/components/Footer";

// Load Mukta for body text
const mukta = Mukta({
  subsets: ["devanagari", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-mukta",
  display: "swap",
});

// Load Khand for navigation, headers, and titles
const khand = Khand({
  subsets: ["devanagari", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-khand",
  display: "swap",
});

export const metadata: Metadata = {
  title: "News Agency Nepal - NAN",
  description: "Nepal First Independent News Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ne" className={`${mukta.variable} ${khand.variable}`}>
      <body
        className={`${mukta.variable} ${khand.variable} font-mukta min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased`}
      >
        <Header />
        <FlashNewsMarquee />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
