import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Amarante, Sacramento, Grenze, Boogaloo } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const amarante = Amarante({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-amarante",
});

const boogaloo = Boogaloo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-boogaloo",
});
const sacramento = Sacramento({
  weight: "400", // Sacramento only has a 400 weight
  subsets: ["latin"],
  variable: "--font-sacramento", // Define a CSS variable for it
});
const grenze = Grenze({
  weight: "400", // Sacramento only has a 400 weight
  subsets: ["latin"],
  variable: "--font-grenze", // Define a CSS variable for it
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DitchCo", // <- change this
  description: "Your site’s description for SEO", // <- make this keyword-rich
  keywords: ["fashion", "luxury", "designer wear", "modern clothing"], // optional
  icons: {
    icon: "/logo.jpg", // if PNG: use /favicon.png
  },
  openGraph: {
    title: "DitchCo",
    description: "Your premium clothing collection, crafted with elegance.",
    images: ["/opengraph-image.png"], // optional OG image
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${amarante.className} ${sacramento.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
