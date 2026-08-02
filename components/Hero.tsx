"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ArrowDown, Shield, Award, HelpCircle } from "lucide-react";
import StackerCanvas from "./3d/StackerCanvas";

export default function Hero() {
  const [liftHeight, setLiftHeight] = useState(0.25);

  const capacities = ["100kg", "500kg", "1000kg", "3000kg", "5000kg"];

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center bg-[#0B0E14] overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[radial-gradient(circle,rgba(245,166,35,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[35%] h-[35%] bg-[radial-gradient(circle,rgba(230,126,34,0.05)_0%,transparent_70%)] pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(22,27,34,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(22,27,34,0.15)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#161B22] border border-gray-800 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider text-primary-yellow"
            >
              <Shield className="w-3.5 h-3.5" />
              HEAVY-DUTY INDUSTRIAL STANDARD
            </motion.div>

            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight text-text-white uppercase"
              >
                Industrial Material <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-yellow to-orange-accent">
                  Handling Redefined
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg text-muted-gray leading-relaxed max-w-xl"
              >
                Premium stackers, forklifts, pallet trucks, and lifting solutions engineered for extreme stability. Built to sustain loading requirements from 100kg to 5000kg.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#products"
                className="flex items-center gap-2 bg-primary-yellow text-dark-bg hover:bg-orange-accent px-6 py-3.5 rounded-lg text-sm font-extrabold tracking-wide uppercase transition-all shadow-[0_4px_14px_rgba(245,166,35,0.3)]"
              >
                Explore Products
                <ChevronRight className="w-4 h-4 stroke-[3]" />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 border border-gray-800 hover:border-primary-yellow/40 hover:bg-[#161B22] px-6 py-3.5 rounded-lg text-sm font-bold text-text-white transition-all"
              >
                Contact Us
              </a>
            </motion.div>

            {/* Capacity Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3"
            >
              <h5 className="text-xs uppercase font-mono tracking-widest text-muted-gray">
                Tested Capacities Range
              </h5>
              <div className="flex flex-wrap gap-2.5">
                {capacities.map((cap, i) => (
                  <motion.div
                    key={cap}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 10,
                      delay: 0.4 + i * 0.08,
                    }}
                    className="px-3.5 py-1.5 rounded bg-[#161B22] border border-gray-800 text-xs font-mono font-bold text-text-white hover:border-primary-yellow hover:text-primary-yellow transition-all cursor-default"
                  >
                    {cap}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right 3D Column */}
          <div className="lg:col-span-6 flex flex-col gap-4 relative">
            {/* Holographic Industrial Label */}
            <div className="absolute top-2 right-2 bg-primary-yellow/10 border border-primary-yellow/20 px-2 py-0.5 rounded text-[9px] text-primary-yellow font-mono z-15">
              3D_INTERACTIVE_V1
            </div>

            {/* 3D Stacker Canvas */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <StackerCanvas liftHeight={liftHeight} />
            </motion.div>

            {/* Lift Slider Controls */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-[#161B22] border border-gray-800 rounded-xl p-4 flex flex-col gap-3 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-text-white font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary-yellow animate-pulse" />
                  HYDRAULIC LIFT SIMULATOR
                </span>
                <span className="text-primary-yellow font-bold">
                  {(liftHeight * 3.5).toFixed(2)}m Height
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-muted-gray">MIN</span>
                <input
                  type="range"
                  min="0"
                  max="1.0"
                  step="0.01"
                  value={liftHeight}
                  onChange={(e) => setLiftHeight(parseFloat(e.target.value))}
                  className="flex-1 accent-primary-yellow bg-[#0B0E14] h-1.5 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-[10px] font-mono text-muted-gray">MAX</span>
              </div>
              <p className="text-[10px] text-muted-gray leading-normal text-center italic">
                Drag slider to simulate manual pump/electric lifting. Hold left click on model to orbit, right click to pan.
              </p>
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex justify-center mt-12">
          <motion.a
            href="#categories"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center text-xs text-muted-gray hover:text-primary-yellow transition-colors font-mono"
          >
            SCROLL DOWN
            <ArrowDown className="w-4 h-4 mt-1.5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
