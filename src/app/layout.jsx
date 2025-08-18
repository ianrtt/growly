import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/page/Navbar';
import Footer from '@/components/page/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const info = {
  title: "Growly - Learn & Teach for Free | Skill Swap Platform",
  description: `
  Growly is a platform where people exchange knowledge directly.
  Teach something you know, learn something you want. - no payments,
  just skill sharing.`,
  url: "https://growly.vercel.app"
};

export const metadataBase = new URL(info.url);

export const metadata = {
  /* TODO: add this when launch to vercel.

  metadataBase, */
  title: info.title,
  icons: {
    icon: "assets/favicon.ico"
  },
  description: info.description,
  keywords: [
    "Growly",
    "knowledge exchange",
    "skill swap",
    "exchange",
    "course platform",
    "skill sharing",
    "courses",
    "teach and learn",
    "peer to peer education",
    "exchange platform",
    "collaborative learning",
    "community-driven education"
  ],
  authors: [{ name: "Growly", url: info.url }],
  openGraph: {
    title: info.title,
    description: info.description,
    url: info.url,
    siteName: "Growly",
    images: [
      {
        url: "/assets/g_growly.webp",
        width: 1200,
        height: 630,
        alt: "Growly - Knowledge exchange platform."
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: info.title,
    description: info.description,
    images: ["/assets/g_growly.webp"],
  },
  alternates: {
    canonical: info.url
  },
  other: {
    "script": [
      {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Growly",
            "url": info.url,
            "description": info.description,
            "sameAs": [
              "https://twitter.com/growly",
              "https://www.instagram.com/growly"
            ]
          })
        }
      }
    ]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
