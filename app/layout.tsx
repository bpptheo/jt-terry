import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppWidget from "./components/WhatsAppWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://terryagbenyo.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Terry Agbenyo | Real Estate & Property Management in Accra, Ghana",
    template: "%s | Terry Agbenyo",
  },
  description:
    "Terry Agbenyo offers professional real estate services, property management, Airbnb hosting, and housekeeping in Accra, Ghana. 10+ years experience, 20+ properties managed.",
  keywords: [
    "real estate Accra",
    "property management Ghana",
    "Airbnb management Accra",
    "housekeeping services Ghana",
    "property sales Accra",
    "rental properties Ghana",
    "Terry Agbenyo",
    "Ghana realtor",
  ],
  authors: [{ name: "Terry Agbenyo" }],
  creator: "Terry Agbenyo",
  openGraph: {
    type: "website",
    locale: "en_GH",
    url: siteUrl,
    siteName: "Terry Agbenyo",
    title: "Terry Agbenyo | Real Estate & Property Management in Accra",
    description:
      "Professional real estate services, property management, Airbnb hosting, and housekeeping in Accra, Ghana.",
    images: [
      {
        url: "/pictures/terry_professional.jpg",
        width: 1200,
        height: 630,
        alt: "Terry Agbenyo - Real Estate Professional in Accra, Ghana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terry Agbenyo | Real Estate & Property Management",
    description:
      "Professional real estate services, property management, and Airbnb hosting in Accra, Ghana.",
    images: ["/pictures/terry_professional.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Terry Agbenyo",
    description:
      "Professional real estate services, property management, Airbnb hosting, and housekeeping in Accra, Ghana.",
    url: siteUrl,
    image: `${siteUrl}/pictures/terry_professional.jpg`,
    telephone: "+233540685779",
    email: "hello@terryagbenyo.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Accra",
      addressCountry: "GH",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 5.6037,
      longitude: -0.187,
    },
    areaServed: {
      "@type": "City",
      name: "Accra",
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    sameAs: ["https://www.instagram.com/johnterryproperties/"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
