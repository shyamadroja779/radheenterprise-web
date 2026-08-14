import React from "react";
import Link from "next/link";
import { Home as HomeIcon, Hammer, ArrowRight, ShieldQuestion } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function NotFound() {
  return (
    <div className="bg-[#0B0E14] min-h-screen text-text-white flex flex-col justify-between font-sans">
      <Navbar />

      <main className="flex-1 flex items-center justify-center pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center space-y-8 bg-[#161B22] border border-gray-800 p-8 rounded-2xl shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,166,35,0.02),transparent_70%)] pointer-events-none" />
          
          <div className="flex justify-center">
            <div className="bg-primary-yellow/10 border border-primary-yellow/20 p-4 rounded-full text-primary-yellow animate-pulse">
              <ShieldQuestion className="w-12 h-12" />
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-5xl font-black font-mono tracking-tight text-primary-yellow">
              404
            </h1>
            <h2 className="text-xl font-bold uppercase tracking-wide text-text-white">
              Page Not Found
            </h2>
            <p className="text-xs sm:text-sm text-muted-gray leading-relaxed max-w-sm mx-auto">
              The material handling equipment specification sheet or article page you are looking for does not exist or has been relocated.
            </p>
          </div>

          <div className="pt-4 border-t border-gray-800/80 flex flex-col gap-3">
            <Link
              href="/"
              className="w-full flex items-center justify-center gap-2 bg-primary-yellow text-dark-bg hover:bg-orange-accent py-3 rounded-lg text-xs font-mono font-bold uppercase transition-all shadow-md"
            >
              <HomeIcon className="w-4 h-4" />
              Return Home
            </Link>

            <Link
              href="/#products"
              className="w-full flex items-center justify-center gap-2 bg-[#0B0E14] border border-gray-800 hover:border-primary-yellow/40 hover:text-primary-yellow py-3 rounded-lg text-xs font-mono font-bold uppercase transition-all"
            >
              <Hammer className="w-4 h-4" />
              View Equipment Catalog
            </Link>
          </div>

          <div className="pt-2">
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-gray hover:text-primary-yellow transition-colors"
            >
              Read Industrial Logistics Blog
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
