"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Hammer, Menu, X, PhoneCall, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isBlogActive = pathname ? pathname.startsWith("/blog") : false;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 ${
        scrolled
          ? "bg-[#0B0E14]/90 backdrop-blur-md border-b border-gray-800/80 py-4 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="bg-primary-yellow p-2 rounded-lg text-dark-bg transition-transform group-hover:scale-105 duration-300">
              <Hammer className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-wider text-text-white leading-none group-hover:text-primary-yellow transition-colors">
                RADHE
              </span>
              <span className="font-display font-medium text-[10px] tracking-widest text-primary-yellow uppercase">
                ENTERPRISE
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/#products"
              className="text-muted-gray hover:text-primary-yellow text-sm font-medium tracking-wide transition-colors"
            >
              Products
            </Link>
            <Link
              href="/blog"
              className={`text-sm font-medium tracking-wide transition-colors ${
                isBlogActive
                  ? "text-primary-yellow font-extrabold"
                  : "text-muted-gray hover:text-primary-yellow"
              }`}
            >
              Blog
            </Link>
            <Link
              href="/#about"
              className="text-muted-gray hover:text-primary-yellow text-sm font-medium tracking-wide transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/#why-choose-us"
              className="text-muted-gray hover:text-primary-yellow text-sm font-medium tracking-wide transition-colors"
            >
              Why Choose Us
            </Link>
            <Link
              href="/#contact"
              className="text-muted-gray hover:text-primary-yellow text-sm font-medium tracking-wide transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Desktop CTA Action */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://wa.me/919624681003"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-primary-yellow border border-primary-yellow/20 hover:border-primary-yellow/60 px-3.5 py-2 rounded-lg bg-primary-yellow/5 hover:bg-primary-yellow/10 transition-all font-mono"
            >
              WhatsApp Support
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 bg-primary-yellow text-dark-bg hover:bg-orange-accent px-5 py-2.5 rounded-lg text-sm font-bold tracking-wide transition-all shadow-[0_4px_12px_rgba(245,166,35,0.25)] hover:shadow-[0_6px_20px_rgba(245,166,35,0.4)]"
            >
              <PhoneCall className="w-4 h-4" />
              Request Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-gray hover:text-primary-yellow p-2 transition-colors focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-[#0C1017] border-b border-gray-800 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-3 shadow-lg">
            <Link
              href="/#products"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-muted-gray hover:text-primary-yellow hover:bg-[#161B22]"
            >
              Products
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                isBlogActive
                  ? "text-primary-yellow font-bold bg-[#161B22]"
                  : "text-muted-gray hover:text-primary-yellow hover:bg-[#161B22]"
              }`}
            >
              Blog Catalog
            </Link>
            <Link
              href="/#about"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-muted-gray hover:text-primary-yellow hover:bg-[#161B22]"
            >
              About Us
            </Link>
            <Link
              href="/#why-choose-us"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-muted-gray hover:text-primary-yellow hover:bg-[#161B22]"
            >
              Why Choose Us
            </Link>
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-muted-gray hover:text-primary-yellow hover:bg-[#161B22]"
            >
              Contact
            </Link>
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="https://wa.me/919624681003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 text-sm text-primary-yellow border border-primary-yellow/20 px-4 py-2.5 rounded-lg bg-primary-yellow/5"
              >
                WhatsApp Support
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-primary-yellow text-dark-bg px-4 py-3 rounded-lg text-base font-bold"
              >
                <PhoneCall className="w-4 h-4" />
                Request Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
