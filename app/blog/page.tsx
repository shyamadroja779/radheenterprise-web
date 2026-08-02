import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowLeft, Clock, ArrowRight, BookOpen, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Warehouse Logistics & Material Handling Blog | Radhe Enterprise",
  description: "Read the latest engineering articles, warehouse safety tips, and equipment comparison guides from Radhe Enterprise, India's leading logistics machinery specialist.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Warehouse Logistics & Material Handling Blog | Radhe Enterprise",
    description: "Industry insights and expert advice on manual stackers, forklifts, pallet jacks, warehouse safety, and material handling optimization.",
    url: "https://radheenterprise.co.in/blog",
    type: "website",
  },
};

const blogPosts = [
  {
    slug: "manual-stacker-vs-forklift",
    title: "Manual Stacker vs Forklift: Choosing the Right Warehousing Tool",
    description: "Compare manual hydraulic stackers with industrial counterbalanced forklifts. Understand the difference in load capacities, turning radius, and maintenance overheads.",
    date: "July 28, 2026",
    readTime: "6 Min Read",
    category: "Equipment Comparison",
  },
  {
    slug: "how-to-choose-the-right-pallet-truck",
    title: "How to Choose the Right Pallet Truck for Your Facility",
    description: "A complete walkthrough on selecting manual hand pallet jacks versus walkie electric pallet trucks. Learn about capacity ranges, wheel materials, and length options.",
    date: "July 15, 2026",
    readTime: "5 Min Read",
    category: "Selection Guide",
  },
  {
    slug: "best-material-handling-equipment-for-warehouses",
    title: "Best Material Handling Equipment for Modern Warehouses",
    description: "Maximize space utilization and floor productivity with a strategic layout matching stackers, lift tables, aerial work platforms, and tail lifts.",
    date: "June 30, 2026",
    readTime: "7 Min Read",
    category: "Warehouse Logistics",
  },
  {
    slug: "benefits-of-electric-stackers",
    title: "5 Key Benefits of Switching to Electric Stackers",
    description: "Explore how electric and semi-electric stackers boost cycle times, eliminate manual strain, and save energy with lithium-ion charging technologies.",
    date: "June 12, 2026",
    readTime: "5 Min Read",
    category: "Industrial Efficiency",
  },
  {
    slug: "warehouse-safety-tips",
    title: "Essential Warehouse Safety Tips for Operating Heavy Machinery",
    description: "Keep your operators safe and avoid accidents. A comprehensive safety checklist for manual stackers, pallet trucks, and forklift systems in India.",
    date: "May 25, 2026",
    readTime: "8 Min Read",
    category: "Safety Regulations",
  },
];

export default function BlogIndex() {
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Radhe Enterprise Material Handling Blog",
    "description": "Expert engineering articles, warehouse safety checklists, and industrial machinery selection guides.",
    "publisher": {
      "@type": "Organization",
      "name": "Radhe Enterprise",
      "logo": "https://radheenterprise.co.in/favicon.ico"
    },
    "blogPost": blogPosts.map((post) => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.description,
      "datePublished": new Date(post.date).toISOString().split('T')[0],
      "url": `https://radheenterprise.co.in/blog/${post.slug}`
    }))
  };

  return (
    <div className="bg-[#0B0E14] min-h-screen text-text-white flex flex-col justify-between font-sans">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }}
      />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 space-y-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2.5 font-mono text-xs text-muted-gray border-b border-gray-800 pb-6">
          <Link href="/" className="hover:text-primary-yellow">HOME</Link>
          <span>/</span>
          <span className="text-primary-yellow font-bold uppercase">BLOG</span>
        </div>

        {/* Heading Section */}
        <div className="text-center sm:text-left space-y-4 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-black text-text-white uppercase tracking-tight">
            Industrial Logistics Blog
          </h1>
          <p className="text-sm sm:text-base text-muted-gray leading-relaxed font-medium">
            Discover articles written by senior logistics engineers. Learn how to optimize load configurations, safety procedures, and fleet management for warehouse sites in Gujarat and India.
          </p>
        </div>

        {/* Blog Post List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-[#161B22] border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col justify-between gap-6 hover:border-primary-yellow/40 hover:bg-[#1C242F] transition-all duration-300 group shadow-xl relative glow-yellow-hover"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono text-muted-gray">
                  <span className="bg-[#0B0E14] px-2.5 py-1 rounded border border-gray-800 text-primary-yellow font-bold uppercase">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-primary-yellow" />
                    {post.readTime}
                  </span>
                </div>
                
                <h2 className="text-lg sm:text-xl font-extrabold text-text-white uppercase leading-snug group-hover:text-primary-yellow transition-colors duration-300">
                  {post.title}
                </h2>
                
                <p className="text-xs sm:text-sm text-muted-gray leading-relaxed font-medium line-clamp-3">
                  {post.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-800/60 mt-2">
                <span className="text-[10px] font-mono text-muted-gray">
                  Published: {post.date}
                </span>
                
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary-yellow group-hover:text-text-white transition-colors"
                >
                  Read Article
                  <ArrowRight className="w-3.5 h-3.5 text-primary-yellow group-hover:text-text-white group-hover:translate-x-0.5 transition-all" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Contact card */}
        <section className="bg-gradient-to-r from-[#161B22] to-[#1E2530] border border-gray-800 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg font-bold text-text-white uppercase flex items-center justify-center md:justify-start gap-2">
              <BookOpen className="w-5 h-5 text-primary-yellow" />
              Need custom technical specifications?
            </h3>
            <p className="text-xs sm:text-sm text-muted-gray max-w-2xl leading-relaxed">
              Our engineering team is ready to design material handling stackers, custom width pallet trucks, and lifts that perfectly match your warehouse layouts.
            </p>
          </div>
          <Link
            href="/#contact"
            className="flex items-center gap-2 bg-primary-yellow text-dark-bg hover:bg-orange-accent px-6 py-3.5 rounded-lg text-xs font-mono font-bold uppercase transition-all shadow-md shrink-0"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            Request Technical Quote
          </Link>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
