import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Atelier | Modern Clothing",
    template: "%s | Atelier",
  },
  description:
    "Atelier is a modern clothing house crafting refined wardrobe essentials in natural fibers and thoughtful silhouettes.",
  keywords: [
    "clothing",
    "fashion",
    "ecommerce",
    "atelier",
    "minimalist wardrobe",
  ],
  openGraph: {
    title: "Atelier | Modern Clothing",
    description:
      "Discover the Atelier capsule of crafted wardrobe essentials for women and men.",
    url: "https://agentic-2df65b15.vercel.app",
    siteName: "Atelier",
    locale: "en_US",
    type: "website",
  },
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
