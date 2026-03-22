import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Sweet Delights Bakery - Freshly Baked Goods & Custom Cakes',
  description: 'Discover delicious, handcrafted pastries, breads, and custom cakes from Sweet Delights Bakery. Baked fresh daily with love and the finest ingredients.',
  keywords: ["bakery, cakes, pastries, bread, custom cakes, desserts, sweet treats, freshly baked"],
  openGraph: {
    "title": "Sweet Delights Bakery - Freshly Baked Goods & Custom Cakes",
    "description": "Discover delicious, handcrafted pastries, breads, and custom cakes from Sweet Delights Bakery. Baked fresh daily with love and the finest ingredients.",
    "url": "/",
    "siteName": "Sweet Delights Bakery",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/top-view-delicious-bagels-with-crackers-cinnamon-macarons-cookies-white-desk-cake-biscuit-sweet-sugar-pie-cookie-crisp_140725-55874.jpg",
        "alt": "Assortment of freshly baked goods in a bakery display"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Sweet Delights Bakery - Freshly Baked Goods & Custom Cakes",
    "description": "Discover delicious, handcrafted pastries, breads, and custom cakes from Sweet Delights Bakery. Baked fresh daily with love and the finest ingredients.",
    "images": [
      "http://img.b2bpic.net/free-photo/top-view-delicious-bagels-with-crackers-cinnamon-macarons-cookies-white-desk-cake-biscuit-sweet-sugar-pie-cookie-crisp_140725-55874.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
