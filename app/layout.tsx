import type { Metadata } from "next";
import { Barlow, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://radheenterprise.co.in"),
  title: {
    template: "%s | RADHE ENTERPRISE",
    default: "RADHE ENTERPRISE | Material Handling & Lifting Equipment Manufacturer India",
  },
  description: "RADHE ENTERPRISE manufactures high-performance industrial material handling equipment, manual stackers, electric stackers, forklifts, pallet trucks, drum handlers, and lift tables in Gujarat, India.",
  keywords: [
    "manual stacker manufacturer in Gujarat",
    "forklift supplier in India",
    "drum handler manufacturer",
    "pallet truck supplier",
    "material handling equipment manufacturer",
    "stackers",
    "forklifts",
    "pallet trucks",
    "drum handling",
    "lift tables",
    "aerial platforms",
    "Morbi",
    "Gujarat",
    "India",
    "Radhe Enterprise"
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "RADHE ENTERPRISE | Material Handling & Lifting Equipment Manufacturer",
    description: "RADHE ENTERPRISE manufactures high-performance industrial material handling equipment. Discover our manual stackers, electric stackers, forklifts, and pallet trucks.",
    url: "https://radheenterprise.co.in",
    siteName: "Radhe Enterprise",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RADHE ENTERPRISE | Material Handling & Lifting Equipment",
    description: "Premium manufacturer of manual stackers, forklifts, pallet trucks, and drum handlers based in Gujarat, India.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Radhe Enterprise",
    "alternateName": "Radhe Enterprise Material Handling",
    "url": "https://radheenterprise.co.in",
    "logo": "https://radheenterprise.co.in/favicon.ico",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-96246-81003",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi", "gu"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ground Floor, Sr No 02 P1/P1 or 02 P2/P2, Plot No 1, Shyam Complex Shop No 8, Uchi Mandal",
      "addressLocality": "Morbi",
      "addressRegion": "Gujarat",
      "postalCode": "363641",
      "addressCountry": "IN"
    },
    "description": "Radhe Enterprise is a leading material handling equipment manufacturer in Gujarat, India, specializing in manual stackers, electric stackers, forklifts, pallet trucks, and drum handlers.",
    "sameAs": [
      "https://wa.me/919624681003"
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${barlow.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
