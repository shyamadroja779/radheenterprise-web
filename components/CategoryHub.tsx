import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HardHat, ChevronRight, Battery, ArrowLeft, ArrowUpRight, Compass, ShieldCheck } from "lucide-react";
import productData from "@/data.json";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";
import FAQAccordion from "./FAQAccordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface CategoryHubProps {
  title: string;
  subtitle: string;
  categories: string[];
  seoHeading: string;
  seoContentHtml: string;
  faqs: FAQItem[];
  canonicalPath: string;
}

// Helpers for specs (consistent with ProductCatalog)
const getCapacityText = (product: any) => {
  const specs = Object.values(product.specifications);
  if (!specs.length) return "Custom";

  const capacities: number[] = [];
  specs.forEach((s: any) => {
    const cap = s.max_load_capacity_kg || s.lifting_weight_kg || s.capacity_kg || s.load_capacity_kg;
    if (cap) {
      if (typeof cap === "number") {
        capacities.push(cap);
      } else if (typeof cap === "string") {
        const parsed = parseInt(cap.replace(/[^0-9]/g, ""), 10);
        if (!isNaN(parsed)) capacities.push(parsed);
      }
    }
  });

  if (!capacities.length) {
    const match = product.description.match(/(\d+)\s*kg/i);
    if (match) return `${match[1]}kg`;
    return "100kg - 5000kg";
  }

  const min = Math.min(...capacities);
  const max = Math.max(...capacities);
  return min === max ? `${min}kg` : `${min}kg - ${max}kg`;
};

const getHeightText = (product: any) => {
  const specs = Object.values(product.specifications);
  if (!specs.length) return "Custom";

  const heights: string[] = [];
  specs.forEach((s: any) => {
    const ht = s.max_lifting_height_mm || s.max_lifting_height_m || s.lift_height_m || s.lifting_height_mm;
    if (ht) heights.push(String(ht));
  });

  if (!heights.length) return "1.6m - 4.5m";
  const uniqueHeights = Array.from(new Set(heights));
  const isMm = uniqueHeights.some(h => parseFloat(h) > 100);
  
  if (isMm) {
    const numeric = uniqueHeights.flatMap(h => {
      return h.split("/").map(part => parseInt(part, 10)).filter(p => !isNaN(p));
    });
    if (numeric.length) {
      const min = Math.min(...numeric);
      const max = Math.max(...numeric);
      return min === max ? `${(min/1000).toFixed(1)}m` : `${(min/1000).toFixed(1)}m - ${(max/1000).toFixed(1)}m`;
    }
    return `${uniqueHeights[0]}mm`;
  } else {
    const numeric = uniqueHeights.map(h => parseFloat(h)).filter(p => !isNaN(p));
    if (numeric.length) {
      const min = Math.min(...numeric);
      const max = Math.max(...numeric);
      return min === max ? `${min}m` : `${min}m - ${max}m`;
    }
    return `${uniqueHeights[0]}m`;
  }
};

const getBatteryText = (product: any) => {
  const nameLower = product.name.toLowerCase();
  const descLower = product.description.toLowerCase();

  if (nameLower.includes("electric") || descLower.includes("lithium") || descLower.includes("battery")) {
    if (descLower.includes("lithium")) return "Lithium Battery";
    return "24V Battery Powered";
  }
  return "Manual Hydraulic Pump";
};

export default function CategoryHub({
  title,
  subtitle,
  categories,
  seoHeading,
  seoContentHtml,
  faqs,
  canonicalPath,
}: CategoryHubProps) {
  // Filter products by category
  const filteredProducts = productData.products.filter((p) =>
    categories.includes(p.category)
  );

  const baseUrl = "https://radheenterprise.co.in";

  // ItemList Schema
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": `${title} - Radhe Enterprise`,
    "numberOfItems": filteredProducts.length,
    "itemListElement": filteredProducts.map((p, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "url": `${baseUrl}/products/${p.slug}`,
      "name": p.name,
    })),
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <div className="bg-[#0B0E14] min-h-screen text-text-white flex flex-col justify-between font-sans">
      <Navbar />

      {/* Inject JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="flex-1">
        {/* Category Hero / Title Section */}
        <section className="relative pt-32 pb-20 overflow-hidden border-b border-gray-800/40 bg-[radial-gradient(ellipse_at_top,rgba(245,166,35,0.02),transparent_70%)]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(22,27,34,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(22,27,34,0.15)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <div className="flex items-center gap-2.5 font-mono text-xs text-muted-gray">
              <Link href="/" className="hover:text-primary-yellow">HOME</Link>
              <span>/</span>
              <span className="text-primary-yellow font-bold uppercase">{title}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-text-white uppercase">
                  {title}
                </h1>
                <p className="text-base sm:text-lg text-muted-gray max-w-3xl leading-relaxed">
                  {subtitle}
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-end">
                <Link
                  href="/#products"
                  className="inline-flex items-center gap-2 text-xs font-mono text-muted-gray hover:text-primary-yellow bg-[#161B22] border border-gray-800 hover:border-primary-yellow/20 px-5 py-3 rounded-lg transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  VIEW ALL EQUIPMENT
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Product Listing Grid */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800/80 pb-4">
            <h2 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-text-white flex items-center gap-2">
              <HardHat className="w-5 h-5 text-primary-yellow" />
              Available Models ({filteredProducts.length})
            </h2>
            <p className="text-xs text-muted-gray font-mono">
              Displaying certified material handling equipment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((p) => {
              const capacity = getCapacityText(p);
              const height = getHeightText(p);
              const battery = getBatteryText(p);

              return (
                <div
                  key={p.slug}
                  className="bg-[#161B22] border border-gray-800/80 rounded-2xl overflow-hidden hover:scale-[1.02] hover:border-primary-yellow/40 hover:bg-[#1B232E] transition-all duration-300 flex flex-col justify-between group shadow-xl relative glow-yellow-hover"
                >
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-[#0B0E14]/80 border border-gray-800 px-2 py-0.5 rounded text-[9px] font-mono text-muted-gray z-10">
                    {p.category}
                  </div>

                  {/* Product Image Area */}
                  <div className="bg-[#0B0E14] aspect-square flex items-center justify-center p-8 relative overflow-hidden shadow-inner">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.02),transparent_70%)] group-hover:bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.06),transparent_60%)] transition-all duration-500 pointer-events-none" />
                    <Image
                      src={`/images/products/${p.slug}.png`}
                      alt={`${p.name} - Material Handling Equipment | Radhe Enterprise`}
                      width={240}
                      height={240}
                      className="object-contain max-h-[190px] drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card Info */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-text-white font-extrabold text-base uppercase tracking-tight group-hover:text-primary-yellow transition-colors leading-snug">
                        {p.name}
                      </h3>
                      <p className="text-xs text-muted-gray line-clamp-2 leading-relaxed">
                        {p.description}
                      </p>
                    </div>

                    {/* Technical details summary */}
                    <div className="grid grid-cols-2 gap-2 bg-[#0B0E14]/60 p-3 rounded-lg border border-gray-800/80 text-[10px] font-mono">
                      <div>
                        <span className="text-muted-gray block uppercase">Capacity</span>
                        <span className="text-text-white font-bold">{capacity}</span>
                      </div>
                      <div>
                        <span className="text-muted-gray block uppercase">Lift Height</span>
                        <span className="text-text-white font-bold">{height}</span>
                      </div>
                      <div className="col-span-2 pt-2 border-t border-gray-800 mt-1.5 flex items-center gap-1.5">
                        <Battery className="w-3.5 h-3.5 text-primary-yellow shrink-0" />
                        <span className="text-text-white font-bold truncate">{battery}</span>
                      </div>
                    </div>

                    {/* Direct SEO Link */}
                    <Link
                      href={`/products/${p.slug}`}
                      className="w-full bg-[#0B0E14] group-hover:bg-primary-yellow text-text-white group-hover:text-dark-bg border border-gray-800 group-hover:border-primary-yellow py-2.5 rounded-lg text-xs font-mono font-bold uppercase transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Review Full Specs</span>
                      <ChevronRight className="w-3.5 h-3.5 text-primary-yellow group-hover:text-dark-bg" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* SEO-Rich Text Section */}
        <section className="py-20 bg-[#161B22]/30 border-t border-b border-gray-850/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <article className="prose prose-invert max-w-none space-y-6 text-sm sm:text-base text-muted-gray leading-relaxed font-medium">
              <h2 className="text-2xl sm:text-3xl font-black text-text-white uppercase tracking-tight text-center mb-8">
                {seoHeading}
              </h2>
              <div
                dangerouslySetInnerHTML={{ __html: seoContentHtml }}
                className="space-y-6 seo-rich-text"
              />
            </article>
          </div>
        </section>

        {/* Category FAQ Section */}
        <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-xs uppercase font-mono tracking-widest text-primary-yellow font-bold">
              COMMON INQUIRIES
            </h2>
            <h3 className="text-3xl font-black text-text-white uppercase tracking-tight">
              Frequently Asked Questions
            </h3>
            <div className="h-1 w-20 bg-gradient-to-r from-primary-yellow to-orange-accent mx-auto rounded" />
          </div>

          <FAQAccordion faqs={faqs} />
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
