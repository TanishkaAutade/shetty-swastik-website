import type { Metadata } from "next";
import { Playfair_Display, Inter, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
  fallback: ["Georgia", "serif"],
  adjustFontFallback: false,
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
  adjustFontFallback: false,
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["400", "600"],
  variable: "--font-noto-devanagari",
  display: "swap",
  fallback: ["sans-serif"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  title: "Hotel Shetty's Swastik - Veg Treat | Vegetarian Restaurant in Kopargaon",
  description:
    "Hotel Shetty's Swastik - Veg Treat in Kopargaon. Discover vegetarian Maharashtrian and Punjabi flavours, signature dishes, quick service and a comfortable dining experience.",
  keywords: ["vegetarian restaurant Kopargaon", "Maharashtrian food", "Punjabi food", "pure veg hotel", "Hotel Shetty's Swastik"],
  openGraph: {
    title: "Hotel Shetty's Swastik - Veg Treat",
    description: "Pure vegetarian restaurant in Kopargaon, Maharashtra. 4.5★ from 9,808 Google reviews.",
    type: "website",
    locale: "en_IN",
    siteName: "Hotel Shetty's Swastik - Veg Treat",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Shetty's Swastik - Veg Treat",
    description: "Pure vegetarian restaurant in Kopargaon, Maharashtra.",
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "Hotel Shetty's Swastik" }],
  category: "restaurant",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Hotel Shetty's Swastik - Veg Treat",
    "alternateName": "होटल शेट्टी'स स्वास्तिक- वेज ट्रीट",
    "servesCuisine": ["Indian", "Maharashtrian", "Punjabi", "Chinese", "South Indian"],
    "priceRange": "\u20B9\u20B9",
    "telephone": "+91-7350333222",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hotel Swastik Food Mall, Nagar Manmad Hwy",
      "addressLocality": "Kopargaon",
      "addressRegion": "Maharashtra",
      "postalCode": "423601",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": "9808"
    },
    "hasMenu": "See website menu",
    "acceptsReservations": "False",
    "url": "https://www.google.com/maps/place/Hotel+Shetty's+Swastik-+Veg+Treat/",
    "sameAs": [
      "https://www.instagram.com/swastik__restaurant__kopargaon/"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${inter.variable} ${notoDevanagari.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
