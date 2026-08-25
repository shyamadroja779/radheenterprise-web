"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, FileDown, ShieldCheck, Clipboard, MessageSquare, Clock, HardHat, ChevronRight } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import FAQAccordion from "./FAQAccordion";
import productData from "@/data.json";

interface ProductDetailClientProps {
  product: {
    name: string;
    slug: string;
    category: string;
    description: string;
    models: string[];
    features: string[];
    specifications: Record<string, any>;
  };
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [activeModel, setActiveModel] = useState(product.models[0]);
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    phone: "",
    message: `Hello, I'm interested in the ${product.name} (Model: ${product.models[0]}). Please send pricing and availability.`,
  });

  const relatedProducts = React.useMemo(() => {
    return productData.products
      .filter((p) => p.category === product.category && p.slug !== product.slug)
      .slice(0, 3);
  }, [product.category, product.slug]);

  const productFaqs = React.useMemo(() => {
    return [
      {
        question: `What is the warranty coverage for the ${product.name}?`,
        answer: `The ${product.name} is backed by Radhe Enterprise's comprehensive manufacturer warranty, which covers the structural steel chassis, hydraulic cylinder welds, and sealing kits. Contact our Morbi office for details.`
      },
      {
        question: `How can I request a customized quote for the ${product.name}?`,
        answer: `You can submit the inquiry form directly on this page, or click the WhatsApp Support link to connect with our logistics team in Gujarat. We provide custom quotations with shipping rates within 2 hours.`
      },
      {
        question: `Does Radhe Enterprise manufacture custom heights or widths for the ${product.name}?`,
        answer: `Yes. As a leading material handling equipment manufacturer in Gujarat, India, we offer tailored chassis extensions, customized fork lengths, adjustable fork spreads, and specialty wheel options.`
      },
      {
        question: `What safety mechanisms are built into the ${product.name}?`,
        answer: `Depending on the model specifications, the ${product.name} integrates high-pressure safety bypass valves, dead-man control brakes, overhead operator cages, hydraulic speed governors, and chain-slack sensors.`
      },
      {
        question: `Are replacement parts for the ${product.name} readily available?`,
        answer: `Yes, we maintain a fully stocked inventory of spare parts (such as polyurethane rollers, hydraulic seal kits, lift chains, and control boards) at our Morbi factory to ensure minimum downtime for our customers.`
      }
    ];
  }, [product.name]);

  const activeSpecs = product.specifications[activeModel] || {};

  const formatSpecKey = (key: string) => {
    return key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleWhatsAppEnquiry = () => {
    const text = `Hello RADHE ENTERPRISE, I would like to inquire about the ${product.name} (Model: ${activeModel}). My Name: ${enquiryForm.name || "Inquirer"}, Phone: ${enquiryForm.phone || "N/A"}. Requirements: ${enquiryForm.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919624681003?text=${encoded}`, "_blank");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySuccess(true);
    setTimeout(() => {
      handleWhatsAppEnquiry();
      setEnquirySuccess(false);
    }, 800);
  };

  return (
    <div className="bg-[#0B0E14] min-h-screen text-text-white flex flex-col justify-between font-sans">
      <Navbar />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-12">
        {/* Navigation Breadcrumbs & Back */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800 pb-6">
          <div className="flex items-center gap-2.5 font-mono text-xs text-muted-gray">
            <Link href="/" className="hover:text-primary-yellow">HOME</Link>
            <span>/</span>
            <Link href="/#products" className="hover:text-primary-yellow">PRODUCTS</Link>
            <span>/</span>
            <span className="text-primary-yellow font-bold uppercase">{product.name}</span>
          </div>

          <Link
            href="/#products"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted-gray hover:text-primary-yellow bg-[#161B22] border border-gray-800 hover:border-primary-yellow/20 px-4 py-2 rounded-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO PORTFOLIO
          </Link>
        </div>

        {/* Product Details Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Image, Features List, PDF download */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#161B22] border border-gray-800 rounded-2xl p-8 flex items-center justify-center relative min-h-[350px] shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.03),transparent_70%)] pointer-events-none" />
              <div className="absolute top-4 left-4 bg-primary-yellow/10 border border-primary-yellow/20 px-2.5 py-1 rounded text-[10px] font-mono text-primary-yellow font-bold uppercase tracking-wider">
                {product.category}
              </div>
              <Image
                src={`/images/products/${product.slug}.png`}
                alt={product.name}
                width={400}
                height={400}
                priority
                className="object-contain max-h-[300px] drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] group-hover:scale-[1.03] transition-transform duration-500"
              />
            </div>

            {/* Core Features */}
            <div className="bg-[#161B22]/50 border border-gray-800/80 p-6 rounded-2xl space-y-4">
              <h4 className="text-sm uppercase font-sans tracking-wider text-primary-yellow font-bold flex items-center gap-2 border-b border-gray-800 pb-2">
                <ShieldCheck className="w-4.5 h-4.5" />
                Equipment Key Advantages
              </h4>
              <ul className="space-y-3.5">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3.5 text-sm leading-relaxed text-text-white font-medium">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-yellow mt-1.5 shrink-0 animate-pulse" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* PDF Downloader Widget */}
            <div className="bg-gradient-to-r from-[#161B22] to-[#1E2530] border border-gray-800 p-6 rounded-2xl flex items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-text-white uppercase flex items-center gap-1.5">
                  <FileDown className="w-4 h-4 text-primary-yellow" />
                  Technical Catalog
                </h4>
                <p className="text-[10px] text-muted-gray leading-normal max-w-[220px]">
                  Includes schematics, load charts, custom adjustments, and hydraulic layouts.
                </p>
              </div>
              <a
                href="/catalog.pdf"
                download="RADHE_Enterprise_Material_Handling_Catalog.pdf"
                className="bg-primary-yellow text-dark-bg hover:bg-orange-accent px-5 py-3 rounded-lg text-xs font-mono font-bold uppercase transition-all shadow-md shrink-0"
              >
                Download PDF
              </a>
            </div>
          </div>

          {/* Right Column: Title, Variant select, Specs, Form */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <h3 className="text-xs font-mono text-primary-yellow uppercase tracking-widest flex items-center gap-1.5 font-bold">
                <HardHat className="w-3.5 h-3.5" />
                COMMERCIAL LOGISTICS SPECIFICATION
              </h3>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-white uppercase tracking-tight leading-tight">
                {product.name}
              </h1>
              <p className="text-sm text-muted-gray leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Variant Selector */}
            <div className="bg-[#161B22] border border-gray-800 p-5 rounded-2xl space-y-4 shadow-xl">
              <h4 className="text-xs uppercase font-mono tracking-widest text-primary-yellow font-bold border-b border-gray-800 pb-2">
                Configure Variant Model
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {product.models.map((model) => (
                  <button
                    key={model}
                    onClick={() => {
                      setActiveModel(model);
                      setEnquiryForm(prev => ({
                        ...prev,
                        message: `Hello, I'm interested in the ${product.name} (Model: ${model}). Please send pricing and availability.`,
                      }));
                    }}
                    className={`btn-tab ${
                      activeModel === model
                        ? "btn-tab-active"
                        : "btn-tab-inactive"
                    }`}
                  >
                    {model}
                  </button>
                ))}
              </div>
            </div>

            {/* Technical Specification Table */}
            <div className="space-y-4">
              <h4 className="text-sm uppercase font-sans tracking-wider text-muted-gray font-bold flex items-center gap-2">
                <Clipboard className="w-4.5 h-4.5 text-primary-yellow" />
                Technical Specification Table ({activeModel})
              </h4>
              <div className="border border-gray-800 rounded-2xl overflow-hidden bg-[#161B22]/50 shadow-lg bg-[#0B0E14]">
                <div className="divide-y divide-gray-800 font-sans text-xs md:text-sm">
                  {Object.keys(activeSpecs).length > 0 ? (
                    Object.entries(activeSpecs).map(([key, val]) => (
                      <div key={key} className="grid grid-cols-12 p-4 hover:bg-[#1C242F] transition-colors items-center">
                        <div className="col-span-6 text-gray-400 font-semibold tracking-wide uppercase text-[10px] sm:text-xs">{formatSpecKey(key)}</div>
                        <div className="col-span-6 text-text-white font-extrabold text-right">{val as any}</div>
                      </div>
                    ))
                  ) : (
                    <div className="p-6 text-center text-muted-gray text-sm">
                      No technical specifications loaded.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Detailed Commercial Inquiry Form */}
            <div className="bg-[#161B22] border border-gray-800 p-6 rounded-2xl space-y-6 shadow-xl relative">
              <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] font-mono text-muted-gray">
                <Clock className="w-3.5 h-3.5 text-primary-yellow" />
                Response: ~2 Hours
              </div>

              <div className="space-y-1">
                <h4 className="text-text-white font-bold text-base">Inquire About {activeModel}</h4>
                <p className="text-xs text-muted-gray">Submit name and contact to receive dispatch logistics and pricing estimates.</p>
              </div>

              {enquirySuccess ? (
                <div className="text-center py-8 text-emerald-400 font-mono font-bold text-sm animate-pulse">
                  Forwarding inquiry details to WhatsApp Support Desk...
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[10px] font-mono uppercase tracking-wider text-muted-gray">Your Name *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={enquiryForm.name}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                        className="w-full bg-[#0B0E14] border border-gray-800 rounded-lg px-3 py-2 text-xs focus:border-primary-yellow focus:outline-none"
                        placeholder="Shyam Patel"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-[10px] font-mono uppercase tracking-wider text-muted-gray">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={enquiryForm.phone}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                        className="w-full bg-[#0B0E14] border border-gray-800 rounded-lg px-3 py-2 text-xs focus:border-primary-yellow focus:outline-none"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="msg" className="text-[10px] font-mono uppercase tracking-wider text-muted-gray">Custom Requirements</label>
                    <textarea
                      id="msg"
                      rows={3}
                      value={enquiryForm.message}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                      className="w-full bg-[#0B0E14] border border-gray-800 rounded-lg px-3 py-2 text-xs focus:border-primary-yellow focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full py-3 text-xs uppercase"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    Submit Enquiry & Chat on WhatsApp
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

        {/* Dynamic FAQ Section */}
        <section className="border-t border-gray-800/80 pt-16 space-y-8">
          <div className="text-center sm:text-left space-y-2">
            <h2 className="text-xs uppercase font-mono tracking-widest text-primary-yellow font-bold">
              SPECIFICATION FAQ
            </h2>
            <h3 className="text-2xl sm:text-3xl font-black text-text-white uppercase tracking-tight">
              Frequently Asked Questions
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-primary-yellow to-orange-accent sm:mx-0 mx-auto rounded" />
          </div>
          <div className="max-w-4xl">
            <FAQAccordion faqs={productFaqs} />
          </div>
        </section>

        {/* Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="border-t border-gray-800/80 pt-16 space-y-8">
            <div className="text-center sm:text-left space-y-2">
              <h2 className="text-xs uppercase font-mono tracking-widest text-primary-yellow font-bold">
                RECOMMENDED MACHINERY
              </h2>
              <h3 className="text-2xl sm:text-3xl font-black text-text-white uppercase tracking-tight">
                Related Equipment
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-primary-yellow to-orange-accent sm:mx-0 mx-auto rounded" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((rp) => (
                <div
                  key={rp.slug}
                  className="bg-[#161B22] border border-gray-800 rounded-xl overflow-hidden hover:border-primary-yellow/40 transition-all duration-300 flex flex-col justify-between group glow-yellow-hover"
                >
                  <div className="bg-[#0B0E14] aspect-square flex items-center justify-center p-6 relative overflow-hidden border-b border-gray-800">
                    <Image
                      src={`/images/products/${rp.slug}.png`}
                      alt={`${rp.name} - Radhe Enterprise`}
                      width={160}
                      height={160}
                      className="object-contain max-h-[130px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <span className="text-[10px] font-mono text-muted-gray uppercase block mb-1">
                        {rp.category}
                      </span>
                      <h4 className="text-text-white font-extrabold text-sm uppercase group-hover:text-primary-yellow transition-colors leading-tight line-clamp-1">
                        {rp.name}
                      </h4>
                    </div>
                    <Link
                      href={`/products/${rp.slug}`}
                      className="w-full bg-[#0B0E14] border border-gray-800 group-hover:border-primary-yellow text-muted-gray group-hover:text-dark-bg group-hover:bg-primary-yellow py-2 rounded text-[10px] font-mono font-bold uppercase transition-all flex items-center justify-center gap-1"
                    >
                      View Specs
                      <ChevronRight className="w-3 h-3 text-primary-yellow group-hover:text-dark-bg" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
