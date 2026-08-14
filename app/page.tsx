import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoriesSection from "@/components/CategoriesSection";
import ProductCatalog from "@/components/ProductCatalog";
import WhyChooseUs from "@/components/WhyChooseUs";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import HomepageFAQs from "@/components/HomepageFAQs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Radhe Enterprise | Material Handling Equipment Manufacturer Gujarat",
  description: "Radhe Enterprise is a material handling equipment manufacturer and supplier based in Morbi, Gujarat, India. Explore manual stackers, electric stackers, forklifts, pallet trucks and other industrial equipment.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Radhe Enterprise | Material Handling Equipment Manufacturer Gujarat",
    description: "Premium industrial material handling equipment. Discover our manual stackers, electric stackers, forklifts, and pallet trucks manufactured in Morbi, Gujarat, India.",
    url: "https://www.radheenterprise.co.in",
    siteName: "Radhe Enterprise",
    locale: "en_IN",
    type: "website",
  },
};

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Radhe Enterprise",
    "image": "https://www.radheenterprise.co.in/favicon.ico",
    "@id": "https://www.radheenterprise.co.in/#localbusiness",
    "url": "https://www.radheenterprise.co.in",
    "telephone": "+91-96246-81003",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near CNG Petrol Pump, Opposite Shiv Hotel, Uchi Mandal",
      "addressLocality": "Morbi",
      "addressRegion": "Gujarat",
      "postalCode": "363642",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.8228,
      "longitude": 70.8256
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://wa.me/919624681003"
    ]
  };

  return (
    <div className="bg-[#0B0E14] min-h-screen text-text-white flex flex-col justify-between font-sans selection:bg-primary-yellow selection:text-dark-bg">
      {/* Dynamic Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Global Header */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section with Interactive 3D Stacker */}
        <Hero />

        {/* Dynamic Category Cards */}
        <CategoriesSection />

        {/* Dynamic Product Catalog Grid */}
        <ProductCatalog />

        {/* Statistics & Strength features */}
        <WhyChooseUs />

        {/* Industries We Serve */}
        <IndustriesWeServe />

        {/* Core Metallurgy / Engineering details */}
        <AboutUs />

        {/* Client Reviews */}
        <Testimonials />

        {/* Homepage FAQs with structured data */}
        <HomepageFAQs />

        {/* Map & Sales Inquiries */}
        <ContactSection />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Multi-Desk WhatsApp Support Trigger */}
      <FloatingWhatsApp />
    </div>
  );
}

