import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoriesSection from "@/components/CategoriesSection";
import ProductCatalog from "@/components/ProductCatalog";
import WhyChooseUs from "@/components/WhyChooseUs";
import AboutUs from "@/components/AboutUs";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="bg-[#0B0E14] min-h-screen text-text-white flex flex-col justify-between font-sans selection:bg-primary-yellow selection:text-dark-bg">
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

        {/* Core Metallurgy / Engineering details */}
        <AboutUs />

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

