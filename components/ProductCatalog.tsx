"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { Search, SlidersHorizontal, ArrowUpDown, ChevronLeft, ChevronRight, Info, Battery, ShieldAlert } from "lucide-react";
import productData from "@/data.json";
import ProductDetailModal from "./ProductDetailModal";
import { AnimatePresence } from "framer-motion";

const PRODUCTS_PER_PAGE = 6;

export default function ProductCatalog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name-asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProductSlug, setSelectedProductSlug] = useState<string | null>(null);

  // Listen to hash changes for deep linking to categories
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleHashChange = () => {
        const hash = window.location.hash;
        if (hash.startsWith("#products-")) {
          const cat = decodeURIComponent(hash.replace("#products-", ""));
          if (productData.categories.includes(cat) || cat === "All") {
            setSelectedCategory(cat);
            const element = document.getElementById("products");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }
        }
      };
      window.addEventListener("hashchange", handleHashChange);
      handleHashChange(); // check initial hash
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, []);

  // Categories from json
  const categories = useMemo(() => {
    return ["All", ...productData.categories];
  }, []);

  // Helper to extract load capacity range from product specs
  const getCapacityText = (product: typeof productData.products[0]) => {
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
      // Fallback: parse description for kg
      const match = product.description.match(/(\d+)\s*kg/i);
      if (match) return `${match[1]}kg`;
      return "100kg - 5000kg";
    }

    const min = Math.min(...capacities);
    const max = Math.max(...capacities);
    return min === max ? `${min}kg` : `${min}kg - ${max}kg`;
  };

  // Helper to extract lift height range from product specs
  const getHeightText = (product: typeof productData.products[0]) => {
    const specs = Object.values(product.specifications);
    if (!specs.length) return "Custom";

    const heights: string[] = [];
    specs.forEach((s: any) => {
      const ht = s.max_lifting_height_mm || s.max_lifting_height_m || s.lift_height_m || s.lifting_height_mm;
      if (ht) heights.push(String(ht));
    });

    if (!heights.length) return "1.6m - 4.5m";

    // Deduplicate heights
    const uniqueHeights = Array.from(new Set(heights));
    
    // Check if they are in meters or mm
    const isMm = uniqueHeights.some(h => parseFloat(h) > 100);
    
    if (isMm) {
      // Return range in mm or clean format
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
      // It is in meters
      const numeric = uniqueHeights.map(h => parseFloat(h)).filter(p => !isNaN(p));
      if (numeric.length) {
        const min = Math.min(...numeric);
        const max = Math.max(...numeric);
        return min === max ? `${min}m` : `${min}m - ${max}m`;
      }
      return `${uniqueHeights[0]}m`;
    }
  };

  // Helper to check battery/motor/fuel type
  const getBatteryText = (product: typeof productData.products[0]) => {
    const nameLower = product.name.toLowerCase();
    const descLower = product.description.toLowerCase();

    if (nameLower.includes("electric") || descLower.includes("lithium") || descLower.includes("battery")) {
      if (descLower.includes("lithium")) return "Lithium Battery";
      return "24V Battery Powered";
    }
    return "Manual Hydraulic Pump";
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = productData.products;

    // Search Query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.models.some((m) => m.toLowerCase().includes(q))
      );
    }

    // Category Filter
    if (selectedCategory !== "All") {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Sorting
    result = [...result].sort((a, b) => {
      if (sortBy === "name-asc") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "name-desc") {
        return b.name.localeCompare(a.name);
      } else if (sortBy === "capacity-asc") {
        // Parse minimum capacity
        const capA = parseInt(getCapacityText(a).replace(/[^0-9]/g, ""), 10) || 0;
        const capB = parseInt(getCapacityText(b).replace(/[^0-9]/g, ""), 10) || 0;
        return capA - capB;
      } else if (sortBy === "capacity-desc") {
        const capA = parseInt(getCapacityText(a).replace(/[^0-9]/g, ""), 10) || 0;
        const capB = parseInt(getCapacityText(b).replace(/[^0-9]/g, ""), 10) || 0;
        return capB - capA;
      }
      return 0;
    });

    return result;
  }, [searchQuery, selectedCategory, sortBy]);

  // Reset pagination on search/filter changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortBy]);

  // Pagination bounds
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE) || 1;
  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + PRODUCTS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const activeProductForModal = useMemo(() => {
    if (!selectedProductSlug) return null;
    return productData.products.find((p) => p.slug === selectedProductSlug) || null;
  }, [selectedProductSlug]);

  return (
    <section id="products" className="py-24 bg-[#0A0D14] relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-primary-yellow/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-primary-yellow font-bold">
            INDUSTRIAL PORTFOLIO
          </h2>
          <h3 className="text-3xl sm:text-4xl font-black text-text-white uppercase tracking-tight">
            Equipment Catalog
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-yellow to-orange-accent mx-auto rounded" />
          <p className="text-sm text-muted-gray">
            Browse through 37 premium material handling machinery options. Filter by product group and instantly review mechanical specifications.
          </p>
        </div>

        {/* Search, Filter Category tabs, and Sorting Control Bar */}
        <div className="bg-[#161B22] border border-gray-800 rounded-xl p-4 md:p-6 mb-8 space-y-4 md:space-y-6 shadow-lg">
          
          {/* Row 1: Search Query & Sorting */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-3 w-4.5 h-4.5 text-muted-gray" />
              <input
                type="text"
                placeholder="Search equipment, models (e.g. CTY-E10), or specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0B0E14] border border-gray-800 rounded-lg pl-10 pr-4 py-2.5 text-xs text-text-white focus:border-primary-yellow focus:outline-none transition-colors font-mono"
              />
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto shrink-0 justify-end">
              <span className="text-xs font-mono text-muted-gray flex items-center gap-1">
                <ArrowUpDown className="w-3.5 h-3.5" />
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#0B0E14] border border-gray-800 rounded-lg px-3 py-2 text-xs text-text-white focus:outline-none focus:border-primary-yellow font-mono"
              >
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
                <option value="capacity-asc">Capacity: Low to High</option>
                <option value="capacity-desc">Capacity: High to Low</option>
              </select>
            </div>
          </div>

          {/* Row 2: Category Filter Tabs */}
          <div className="border-t border-gray-800/80 pt-4">
            <span className="text-[10px] font-mono uppercase tracking-wider text-muted-gray block mb-2.5">
              Filter by Machinery Class
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border tracking-wide transition-all ${
                    selectedCategory === cat
                      ? "bg-primary-yellow text-dark-bg border-primary-yellow font-bold shadow-md"
                      : "bg-[#0B0E14] border-gray-800 text-muted-gray hover:border-gray-700 hover:text-text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedProducts.length > 0 ? (
            paginatedProducts.map((p) => {
              const capacity = getCapacityText(p);
              const height = getHeightText(p);
              const battery = getBatteryText(p);
              
              return (
                <div
                  key={p.slug}
                  className="bg-[#161B22] border border-gray-800/80 rounded-2xl overflow-hidden hover:scale-[1.02] hover:border-primary-yellow/40 hover:bg-[#1B232E] transition-all duration-300 flex flex-col justify-between group shadow-xl relative glow-yellow-hover"
                >
                  {/* Category Accent */}
                  <div className="absolute top-3 left-3 bg-[#0B0E14]/80 border border-gray-800 px-2 py-0.5 rounded text-[9px] font-mono text-muted-gray z-10">
                    {p.category}
                  </div>

                  {/* Product Image Area */}
                  <div className="bg-[#0B0E14] aspect-square flex items-center justify-center p-8 relative shadow-inner overflow-hidden">
                    {/* Metallic glow backing */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.02),transparent_70%)] group-hover:bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.06),transparent_60%)] transition-all duration-500 pointer-events-none" />
                    
                    <Image
                      src={`/images/products/${p.slug}.png`}
                      alt={p.name}
                      width={240}
                      height={240}
                      className="object-contain max-h-[190px] drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)] group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Card Description Area */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-text-white font-extrabold text-base uppercase tracking-tight group-hover:text-primary-yellow transition-colors leading-snug">
                        {p.name}
                      </h4>
                      <p className="text-xs text-muted-gray line-clamp-2 leading-relaxed">
                        {p.description}
                      </p>
                    </div>

                    {/* Industrial Specs Summary */}
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

                    {/* CTA Details Button */}
                    <button
                      onClick={() => setSelectedProductSlug(p.slug)}
                      className="w-full bg-[#0B0E14] group-hover:bg-primary-yellow text-text-white group-hover:text-dark-bg border border-gray-800 group-hover:border-primary-yellow py-2.5 rounded-lg text-xs font-mono font-bold uppercase transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>View Specifications</span>
                      <ChevronRight className="w-3.5 h-3.5 text-primary-yellow group-hover:text-dark-bg" />
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-3 text-center py-16 bg-[#161B22]/40 border border-gray-800 rounded-2xl">
              <ShieldAlert className="w-12 h-12 text-primary-yellow/40 mx-auto mb-3" />
              <p className="text-sm font-mono text-muted-gray">
                No equipment configurations match your search criteria.
              </p>
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-12 font-mono">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className={`p-2.5 rounded-lg border text-xs transition-all ${
                currentPage === 1
                  ? "border-gray-800 text-gray-700 bg-transparent cursor-not-allowed"
                  : "border-gray-800 bg-[#161B22] text-text-white hover:border-primary-yellow/40 hover:text-primary-yellow cursor-pointer"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <span className="text-xs text-muted-gray">
              Page <span className="text-text-white font-bold">{currentPage}</span> of{" "}
              <span className="text-text-white font-bold">{totalPages}</span>
            </span>

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`p-2.5 rounded-lg border text-xs transition-all ${
                currentPage === totalPages
                  ? "border-gray-800 text-gray-700 bg-transparent cursor-not-allowed"
                  : "border-gray-800 bg-[#161B22] text-text-white hover:border-primary-yellow/40 hover:text-primary-yellow cursor-pointer"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>

      {/* Dynamic Detail Overlay Modal (AnimatePresence) */}
      <AnimatePresence>
        {activeProductForModal && (
          <ProductDetailModal
            product={activeProductForModal}
            onClose={() => setSelectedProductSlug(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
