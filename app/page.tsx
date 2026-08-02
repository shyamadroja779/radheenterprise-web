import React from "react";
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

export default function Home() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Radhe Enterprise",
    "image": "https://radheenterprise.co.in/favicon.ico",
    "@id": "https://radheenterprise.co.in/#localbusiness",
    "url": "https://radheenterprise.co.in",
    "telephone": "+91-96246-81003",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Ground Floor, Sr No 02 P1/P1 or 02 P2/P2, Plot No 1, Shyam Complex Shop No 8, Uchi Mandal",
      "addressLocality": "Morbi",
      "addressRegion": "Gujarat",
      "postalCode": "363641",
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

