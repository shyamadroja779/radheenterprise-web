"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, User } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rajesh Patel",
      role: "Operations Manager",
      company: "Morbi Ceramics Pvt. Ltd.",
      text: "Radhe Enterprise is by far the most reliable manual stacker manufacturer in Morbi. The C-section masts are incredibly rigid, and the custom wide-leg adjustments fit our tile pallet dimensions perfectly. Excellent build quality!",
      rating: 5,
    },
    {
      name: "Karan Shah",
      role: "Procurement Lead",
      company: "Ahmedabad Chemicals Ltd.",
      text: "Finding a specialized drum handler manufacturer in India with strict anti-static certifications was difficult. Radhe Enterprise supplied custom hydraulic drum lifter-tilters that operate safely in our paint mixing facility.",
      rating: 5,
    },
    {
      name: "Vijay Thaker",
      role: "Logistics Director",
      company: "Gujarat Racking & Cold Storage",
      text: "We sourced a combined fleet of diesel forklifts and lithium pallet walkies. Their status as a leading forklift supplier in Gujarat and a premium electric pallet truck supplier is well earned. Their Morbi team provides fast spare parts support.",
      rating: 5,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="testimonials" className="py-24 bg-[#161B22] border-t border-b border-gray-800/40 relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-primary-yellow/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-primary-yellow font-bold">
            CLIENT ENDORSEMENTS
          </h2>
          <h3 className="text-3xl sm:text-4xl font-black text-text-white uppercase tracking-tight font-display">
            Customer Reviews
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-yellow to-orange-accent mx-auto rounded" />
          <p className="text-sm text-muted-gray">
            See how warehouse managers, safety engineers, and logistics procurement teams rate our material handling equipment and custom engineering.
          </p>
        </div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="bg-[#0B0E14] border border-gray-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-primary-yellow/40 hover:scale-[1.02] transition-all duration-300 relative group glow-yellow-hover"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-yellow/10 group-hover:text-primary-yellow/20 transition-colors" />

              <div className="space-y-6">
                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary-yellow text-primary-yellow" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-muted-gray leading-relaxed font-medium">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-6 border-t border-gray-805/40 mt-6">
                <div className="w-10 h-10 rounded-full bg-primary-yellow/10 border border-primary-yellow/20 flex items-center justify-center text-primary-yellow">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-extrabold text-text-white leading-tight">
                    {rev.name}
                  </h4>
                  <span className="text-[10px] text-primary-yellow font-mono block mt-0.5">
                    {rev.role}, {rev.company}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
