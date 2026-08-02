"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileDown, ShieldCheck, HelpCircle, ArrowRight, MessageSquare, Clipboard } from "lucide-react";

export interface ProductDetailModalProps {
  product: {
    name: string;
    slug: string;
    category: string;
    description: string;
    models: string[];
    features: string[];
    specifications: Record<string, any>;
  };
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  // Set default active model to the first model in the list
  const [activeModel, setActiveModel] = useState(product.models[0]);
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    phone: "",
  });

  const activeSpecs = product.specifications[activeModel] || {};

  // Humanize spec key names
  const formatSpecKey = (key: string) => {
    return key
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleWhatsAppEnquiry = () => {
    const text = `Hello RADHE ENTERPRISE, I would like to enquire about the ${product.name} (Model: ${activeModel}). My Name: ${enquiryForm.name || "Inquirer"}, Phone: ${enquiryForm.phone || "N/A"}.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919624681003?text=${encoded}`, "_blank");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnquirySuccess(true);
    setTimeout(() => {
      handleWhatsAppEnquiry();
      setEnquirySuccess(false);
      setEnquiryForm({ name: "", phone: "" });
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#080A0F]/80 backdrop-blur-md overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-[#161B22] border border-gray-800 rounded-2xl w-full max-w-5xl shadow-2xl relative overflow-hidden my-8"
      >
        {/* Top Accent Strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-primary-yellow to-orange-accent" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-gray hover:text-primary-yellow p-2 transition-colors z-20 bg-[#0B0E14] border border-gray-800 rounded-lg"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Image & Feature Bullets */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0B0E14] border border-gray-800 rounded-xl p-6 flex items-center justify-center relative group min-h-[220px] sm:min-h-[300px] shadow-inner">
              {/* Product Badge */}
              <div className="absolute top-3 left-3 bg-primary-yellow/10 border border-primary-yellow/20 px-2 py-0.5 rounded text-[10px] font-mono text-primary-yellow font-bold uppercase tracking-wider">
                {product.category}
              </div>

              <Image
                src={`/images/products/${product.slug}.png`}
                alt={product.name}
                width={360}
                height={360}
                priority
                className="object-contain max-h-[280px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Core Features list */}
            <div className="space-y-4">
              <h4 className="text-sm uppercase font-sans tracking-wider text-primary-yellow font-bold flex items-center gap-1.5 border-b border-gray-800 pb-2">
                <ShieldCheck className="w-4.5 h-4.5" />
                Key Product Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-text-white font-medium leading-relaxed">
                    <span className="w-2 h-2 rounded-full bg-primary-yellow mt-1.5 shrink-0 animate-pulse" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Title, Model select, Specs Table */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-muted-gray uppercase tracking-widest">
                Heavy machinery detail
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-text-white uppercase leading-tight tracking-tight">
                {product.name}
              </h2>
              <p className="text-xs text-muted-gray leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Model Variant Selector */}
            <div className="space-y-3 bg-[#0B0E14] border border-gray-800 p-4 rounded-xl">
              <h4 className="text-xs uppercase font-mono tracking-widest text-primary-yellow font-bold">
                Select Model Variant
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.models.map((model) => (
                  <button
                    key={model}
                    onClick={() => setActiveModel(model)}
                    className={`px-4 py-2 text-xs font-mono font-bold rounded-lg border transition-all ${
                      activeModel === model
                        ? "bg-primary-yellow text-dark-bg border-primary-yellow shadow-md"
                        : "bg-[#161B22] border-gray-800 text-muted-gray hover:border-gray-700 hover:text-text-white"
                    }`}
                  >
                    {model}
                  </button>
                ))}
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="space-y-3.5">
              <h4 className="text-sm uppercase font-sans tracking-wider text-muted-gray font-bold flex items-center gap-1.5">
                <Clipboard className="w-4.5 h-4.5 text-primary-yellow" />
                Technical Specification ({activeModel})
              </h4>
              
              <div className="border border-gray-800 rounded-xl overflow-hidden bg-[#0B0E14] shadow-lg">
                <div className="divide-y divide-gray-800 font-sans text-xs md:text-sm">
                  {Object.keys(activeSpecs).length > 0 ? (
                    Object.entries(activeSpecs).map(([key, val]) => (
                      <div key={key} className="grid grid-cols-12 p-3.5 hover:bg-[#161B22]/60 transition-colors items-center">
                        <div className="col-span-6 text-gray-400 font-semibold tracking-wide uppercase text-[10px] sm:text-xs">{formatSpecKey(key)}</div>
                        <div className="col-span-6 text-text-white font-extrabold text-right">{val as any}</div>
                      </div>
                    ))
                  ) : (
                    <div className="p-5 text-center text-muted-gray text-sm">
                      No details available for this model.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Quick Inquiry Form / WhatsApp triggers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* Left Action Box: Quick PDF */}
              <div className="bg-[#0B0E14] border border-gray-800 p-4 rounded-xl flex flex-col justify-between space-y-3">
                <div>
                  <h5 className="text-xs font-bold text-text-white uppercase mb-1">Equipment Catalog</h5>
                  <p className="text-[10px] text-muted-gray">Download full details, blueprint schematics, and load metrics.</p>
                </div>
                <a
                  href="/catalog.pdf"
                  download="RADHE_Enterprise_Material_Handling_Catalog.pdf"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#1E2530] to-[#161B22] border border-gray-800 hover:border-primary-yellow/40 hover:from-[#232C3A] hover:to-[#1C232E] py-2.5 rounded-lg text-xs font-mono font-bold uppercase text-text-white"
                >
                  <FileDown className="w-3.5 h-3.5 text-primary-yellow" />
                  Download PDF
                </a>
              </div>

              {/* Right Action Box: Quick Enquiry */}
              <div className="bg-[#0B0E14] border border-gray-800 p-4 rounded-xl space-y-3">
                <div>
                  <h5 className="text-xs font-bold text-text-white uppercase mb-1">Instant Quote Enquiry</h5>
                  <p className="text-[10px] text-muted-gray">Direct request to sales team for model {activeModel}</p>
                </div>
                
                {enquirySuccess ? (
                  <div className="text-xs font-bold text-emerald-400 text-center py-2 animate-pulse">
                    Connecting to WhatsApp...
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-2">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={enquiryForm.name}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                      className="w-full bg-[#161B22] border border-gray-800 rounded px-2.5 py-1.5 text-[11px] text-text-white focus:border-primary-yellow focus:outline-none"
                    />
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-1.5 bg-primary-yellow text-dark-bg hover:bg-orange-accent py-2 rounded text-xs font-extrabold uppercase transition-all shadow-[0_2px_6px_rgba(245,166,35,0.15)]"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      Inquire on WhatsApp
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

        </div>
      </motion.div>
    </div>
  );
}
