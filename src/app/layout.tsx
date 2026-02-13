import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { VideoBackground, Navigation, Footer } from "@/components";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Singular — Intelligence, distilled.",
  description: "A foundational system for perception, reasoning, and action — engineered for clarity at scale.",
  keywords: ["AI", "artificial intelligence", "machine learning", "singularity", "system intelligence"],
  authors: [{ name: "Singular" }],
  openGraph: {
    title: "Singular — Intelligence, distilled.",
    description: "A foundational system for perception, reasoning, and action.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <VideoBackground />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
