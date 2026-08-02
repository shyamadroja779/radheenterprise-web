"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Factory, FileDown, Cog, ShieldCheck, Flame } from "lucide-react";

export default function AboutUs() {
  const coreMaterials = [
    {
      name: "High-Strength C-Section Steel",
      spec: "Forged with hot-rolled structural steel to absorb shear stress and maintain maximum vertical alignment under heavy warehouse loads.",
      details: "Used in Masts & Support Rails",
    },
    {
      name: "Premium Hydraulic Assemblies",
      spec: "Fitted with chrome-plated piston shafts, reinforced rubber oil sleeves, and automatic pressure release bypass valves.",
      details: "Used in Pump Cylinder Systems",
    },
    {
      name: "Maintenance-Free Lithium Cells",
      spec: "Engineered with integrated Battery Management Systems (BMS) for over-voltage safety, cell balancing, and rapid charging.",
      details: "Used in Semi-Electric & Electric Classes",
    },
    {
      name: "Heavy-Duty Wear Components",
      spec: "Dual polyurethane (PU) load rollers and dual rear steering wheel systems equipped with heavy-duty mechanical brake locking rings.",
      details: "Used in Steering & Wheel Protection",
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0A0D14] border-t border-b border-gray-800/40 relative overflow-hidden">
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(230,126,34,0.04),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & Company Context */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h4 className="text-xs uppercase font-mono tracking-widest text-primary-yellow font-bold flex items-center gap-2">
                <Factory className="w-4 h-4" />
                ESTABLISHED MACHINERY PARTNER
              </h4>
              <h2 className="text-3xl sm:text-4xl font-black text-text-white uppercase tracking-tight">
                About Radhe Enterprise
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-primary-yellow to-orange-accent rounded" />
            </div>

            <p className="text-sm sm:text-base text-muted-gray leading-relaxed">
              RADHE ENTERPRISE specializes in state-of-the-art industrial material handling equipment. Based in the manufacturing hub of Morbi, Gujarat, we design, manufacture, and distribute heavy-duty lifting machinery tailored to sustain massive logistic warehouses, construction facilities, and cargo yards.
            </p>

            <p className="text-xs text-muted-gray leading-relaxed">
              From compact manual platform stackers to high-capacity electric forklifts, our entire catalog is engineered with single-point stress protection. We optimize material logistics by supplying machinery that combines high mechanical efficiency with reliable electrical control systems.
            </p>

            {/* Certifications and Key Standards */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-text-white font-mono bg-[#161B22] p-3 rounded-lg border border-gray-800">
                <ShieldCheck className="w-5 h-5 text-primary-yellow" />
                <span>ISO 9001:2015 Compliant</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-text-white font-mono bg-[#161B22] p-3 rounded-lg border border-gray-800">
                <Flame className="w-5 h-5 text-orange-accent" />
                <span>Tested to 150% Load Capacity</span>
              </div>
            </div>

            {/* PDF Catalog Action */}
            <div className="pt-4">
              <a
                href="/catalog.pdf"
                download="RADHE_Enterprise_Material_Handling_Catalog.pdf"
                className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#1E2530] to-[#161B22] border border-gray-800 hover:border-primary-yellow/40 hover:from-[#232C3A] hover:to-[#1C232E] px-6 py-4 rounded-xl text-xs font-mono font-bold tracking-wider text-text-white uppercase transition-all shadow-lg"
              >
                <FileDown className="w-4 h-4 text-primary-yellow" />
                Download PDF Catalog (24MB)
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Metallurgy & Materials Grid */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted-gray mb-2">
              EQUIPMENT METALLURGY & SPECIFICATION
            </h3>

            <div className="flex flex-col gap-4">
              {coreMaterials.map((material, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-[#161B22] border border-gray-800 p-5 rounded-xl hover:border-l-primary-yellow hover:border-l-4 transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-bold text-text-white">
                      {material.name}
                    </h4>
                    <span className="text-[9px] font-mono uppercase bg-primary-yellow/10 border border-primary-yellow/20 px-2 py-0.5 rounded text-primary-yellow">
                      {material.details}
                    </span>
                  </div>
                  <p className="text-xs text-muted-gray leading-relaxed">
                    {material.spec}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
