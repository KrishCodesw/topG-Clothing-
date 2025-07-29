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
  title: "DitchCo",
  description:
    "TopG Clothing blends premium craftsmanship with bold streetwear aesthetics. Shop high-end fashion for men and women – hoodies, jackets, tees, and more. Elevate your wardrobe with limited edition drops.",
  keywords: [
    "luxury streetwear",
    "designer streetwear",
    "TopG Clothing",
    "high-end fashion brand",
    "premium clothing for men",
    "luxury fashion India",
    "minimalist street style",
    "urban fashion 2025",
  ],
  metadataBase: new URL("https://topg-clothing.vercel.app"), // Change to your domain
  authors: [{ name: "Krish Jain", url: "https://github.com/KrishCodesw" }],
  creator: "TopG Clothing Team",
  publisher: "TopG Studios",
  openGraph: {
    title: "TopG Clothing | Limited Edition Luxury Streetwear",
    description:
      "Stand out with statement streetwear pieces crafted from premium materials. Explore TopG’s exclusive collections before they sell out.",
    url: "https://topg-clothing.vercel.app",
    siteName: "TopG Clothing",
    images: [
      {
        url: "/og-image.png", // Replace with real image
        width: 1200,
        height: 630,
        alt: "TopG Clothing OG Banner",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TopG Clothing | Limited Edition Streetwear for Icons",
    description:
      "Redefining Indian luxury fashion. Discover premium urban outfits with bold style and minimal aesthetic.",
    creator: "@topgwear", // Change to your real handle
    images: ["/og-image.png"],
  },
  category: "fashion",
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
