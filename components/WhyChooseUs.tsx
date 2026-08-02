"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  Zap,
  Truck,
  Settings,
  ShieldCheck,
  Wrench,
  Layers,
  Users,
  Briefcase,
  Compass,
  Headphones,
} from "lucide-react";

export default function WhyChooseUs() {
  const cards = [
    {
      title: "High-Quality C-Section Steel",
      description:
        "All stacker and forklift masts are made of high-quality C-section structural steel, preventing deformation and guaranteeing structural load stability.",
      icon: Layers,
    },
    {
      title: "Advanced Hydraulic Systems",
      description:
        "Precision oil cylinders with height limit buffers and custom seals to prevent oil leaks and ensure smooth pressure release control.",
      icon: Wrench,
    },
    {
      title: "Lithium Battery Technology",
      description:
        "Advanced lithium iron phosphate battery integration, offering fast charge cycles, extended battery lifespan, and maintenance-free operations.",
      icon: Zap,
    },
    {
      title: "Safety Certified Designs",
      description:
        "Equipped with mechanical brakes, wheel protection guards, emergency stop switches, and structural bypass valves for ultimate operator safety.",
      icon: ShieldCheck,
    },
    {
      title: "Heavy-Duty Construction",
      description:
        "Reinforced chassis frame, high-tensile legs, and standard thick fork configurations designed to sustain rigorous warehouse shifts.",
      icon: ShieldAlert,
    },
    {
      title: "Fast Logistics Delivery",
      description:
        "Streamlined logistics network directly connecting Gujarat factories to national industrial sectors, ensuring safe and prompt machinery arrivals.",
      icon: Truck,
    },
    {
      title: "Custom Tailored Solutions",
      description:
        "Fully customizable mast heights, stretchable load legs, adjustable forks width, and specialized drum handling attachments designed per order.",
      icon: Settings,
    },
  ];

  const stats = [
    { value: "500+", label: "Active Industrial Clients", icon: Users },
    { value: "100+", label: "Product Machinery Configurations", icon: Briefcase },
    { value: "10+", label: "Operational Product Categories", icon: Compass },
    { value: "24/7", label: "Technical Support Coverage", icon: Headphones },
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
    <section id="why-choose-us" className="py-24 bg-[#0B0E14] relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary-yellow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-primary-yellow font-bold">
            ENGINEERING EXCELLENCE
          </h2>
          <h3 className="text-3xl sm:text-4xl font-black text-text-white uppercase tracking-tight">
            Why Choose Radhe Enterprise
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-yellow to-orange-accent mx-auto rounded" />
          <p className="text-sm text-muted-gray">
            We build heavy machinery designed to elevate your warehouse productivity. Review the key features that set our material handling solutions apart.
          </p>
        </div>

        {/* 7 Core Strengths Cards - Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-[#161B22] border border-gray-800/80 p-6 rounded-xl hover:border-primary-yellow/40 hover:bg-[#1C242F] transition-all duration-300 relative group glow-yellow-hover"
              >
                {/* Accent corner line */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-primary-yellow/30 rounded-tr-xl transition-all" />
                
                <div className="w-12 h-12 rounded-lg bg-primary-yellow/5 flex items-center justify-center text-primary-yellow mb-5 border border-primary-yellow/10 group-hover:bg-primary-yellow/10 group-hover:scale-105 transition-all">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                
                <h4 className="text-text-white font-bold text-base mb-3 group-hover:text-primary-yellow transition-colors">
                  {card.title}
                </h4>
                
                <p className="text-xs text-muted-gray leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Statistics Banner */}
        <div className="bg-[#161B22]/60 border border-gray-800/80 rounded-2xl p-8 backdrop-blur-sm relative overflow-hidden">
          {/* Cybernetic grid details */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(245,166,35,0.02)_1px,transparent_1px)] bg-[size:100%_8px] pointer-events-none" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center space-y-3 flex flex-col items-center p-6 border border-gray-800/60 rounded-xl bg-[#0B0E14]/50 hover:border-primary-yellow/20 hover:bg-[#0B0E14]/80 transition-all duration-300"
                >
                  <div className="text-primary-yellow bg-primary-yellow/5 w-10 h-10 rounded-full flex items-center justify-center mb-1 border border-primary-yellow/10">
                    <StatIcon className="w-5 h-5" />
                  </div>
                  <h4 className="text-3xl sm:text-4xl font-extrabold text-text-white font-mono leading-none tracking-tight">
                    {stat.value}
                  </h4>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-muted-gray max-w-[150px] leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
