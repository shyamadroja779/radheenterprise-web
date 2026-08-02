"use client";

import React from "react";
import { motion } from "framer-motion";
import { Flame, FlaskConical, Package, Settings, ShieldCheck } from "lucide-react";

export default function IndustriesWeServe() {
  const industries = [
    {
      title: "Ceramics & Tiles",
      description:
        "Morbi is the ceramic capital of India. We build reinforced manual and electric stackers designed to transport raw clay, glaze chemical mixtures, and heavy finished tile pallet arrays.",
      icon: Flame,
    },
    {
      title: "Chemicals & Process Plants",
      description:
        "Transporting chemical liquids requires high safety standards. Our anti-static, spark-resistant drum handlers and lifter tilters ensure safe fluid decanting in process zones across Gujarat.",
      icon: FlaskConical,
    },
    {
      title: "Warehousing & Logistics",
      description:
        "Fast cycle times are crucial in distribution hubs. Our high-speed electric pallet trucks and compact narrow-aisle stackers optimize floor spaces and transport throughput.",
      icon: Package,
    },
    {
      title: "Heavy Manufacturing",
      description:
        "Moving steel frames, fabrication materials, and engine blocks. Our 1.5 to 5-ton diesel and electric forklifts are built to sustain continuous material movement.",
      icon: Settings,
    },
    {
      title: "Pharmaceuticals & Food Processing",
      description:
        "Clean environments require clean operations. We supply zero-emission electric pallet jacks and stainless hydraulic components to guarantee hygiene standards.",
      icon: ShieldCheck,
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
    <section id="industries" className="py-24 bg-[#161B22]/30 border-t border-b border-gray-800/40 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary-yellow/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-primary-yellow font-bold">
            OPERATIONAL SECTORS
          </h2>
          <h3 className="text-3xl sm:text-4xl font-black text-text-white uppercase tracking-tight font-display">
            Industries We Serve
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-yellow to-orange-accent mx-auto rounded" />
          <p className="text-sm text-muted-gray">
            Our material handling equipment is engineered to withstand extreme conditions in India's leading industrial sectors. From dusty ceramic yards to cleanrooms.
          </p>
        </div>

        {/* Industries Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="bg-[#161B22] border border-gray-800 rounded-xl p-6 hover:border-primary-yellow/40 hover:bg-[#1E2530] transition-all duration-300 flex flex-col justify-between group glow-yellow-hover"
              >
                <div className="space-y-4">
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-lg bg-[#0B0E14] border border-gray-800 flex items-center justify-center text-primary-yellow group-hover:border-primary-yellow/20 group-hover:bg-primary-yellow/5 transition-all">
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>
                  
                  <h4 className="text-text-white font-extrabold text-sm uppercase tracking-wide group-hover:text-primary-yellow transition-colors leading-tight">
                    {ind.title}
                  </h4>
                  
                  <p className="text-xs text-muted-gray leading-relaxed font-medium">
                    {ind.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
