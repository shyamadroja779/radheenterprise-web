"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, HardHat, Compass } from "lucide-react";
import productData from "@/data.json";

export default function CategoriesSection() {
  // Process categories and assign first product image as preview automatically
  const categoriesWithData = useMemo(() => {
    return productData.categories.map((cat) => {
      const matchedProducts = productData.products.filter((p) => p.category === cat);
      const count = matchedProducts.length;
      
      // Select the first product image as category preview
      const previewSlug = matchedProducts.length > 0 ? matchedProducts[0].slug : "placeholder";
      
      return {
        name: cat,
        count,
        slug: previewSlug,
      };
    });
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="categories" className="py-24 bg-[#0B0E14] relative overflow-hidden border-b border-gray-800/40">
      {/* Decorative details */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(22,27,34,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(22,27,34,0.1)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-primary-yellow font-bold flex items-center justify-center gap-2">
            <HardHat className="w-4 h-4 text-primary-yellow" />
            INDUSTRIAL SECTORS
          </h2>
          <h3 className="text-3xl sm:text-4xl font-black text-text-white uppercase tracking-tight">
            Equipment Classes
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-yellow to-orange-accent mx-auto rounded" />
          <p className="text-sm text-muted-gray">
            Explore our industrial lifting machinery grouped by operations. We support light warehouse packing up to heavy steel transport operations.
          </p>
        </div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {categoriesWithData.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-[#161B22] border border-gray-800 rounded-xl overflow-hidden hover:border-primary-yellow/40 hover:bg-[#1E2530] transition-all duration-300 flex flex-col justify-between group glow-yellow-hover"
            >
              {/* Image Preview Box */}
              <div className="bg-[#0B0E14] aspect-square flex items-center justify-center p-6 relative overflow-hidden border-b border-gray-800">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.01),transparent_70%)] pointer-events-none" />
                <Image
                  src={`/images/products/${cat.slug}.png`}
                  alt={cat.name}
                  width={150}
                  height={150}
                  className="object-contain max-h-[120px] drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title & Stats */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <h4 className="text-text-white font-extrabold text-xs uppercase tracking-wider group-hover:text-primary-yellow transition-colors leading-tight">
                    {cat.name}
                  </h4>
                  <span className="text-[10px] font-mono text-muted-gray">
                    {cat.count} Product Model{cat.count !== 1 ? "s" : ""}
                  </span>
                </div>

                <a
                  href={`#products-${encodeURIComponent(cat.name)}`}
                  className="w-full bg-[#0B0E14] border border-gray-800 group-hover:border-primary-yellow text-muted-gray group-hover:text-dark-bg group-hover:bg-primary-yellow py-2 rounded text-[10px] font-mono font-bold uppercase transition-all flex items-center justify-center gap-1"
                >
                  Explore Class
                  <ArrowRight className="w-3 h-3 text-primary-yellow group-hover:text-dark-bg" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
