import React from "react";
import Link from "next/link";
import { ArrowLeft, Clock, MessageSquare, ShieldAlert, Award } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWhatsApp from "./FloatingWhatsApp";

interface BlogPostProps {
  title: string;
  description: string;
  category: string;
  date: string;
  readTime: string;
  contentHtml: string;
  slug: string;
}

export default function BlogPost({
  title,
  description,
  category,
  date,
  readTime,
  contentHtml,
  slug,
}: BlogPostProps) {
  const baseUrl = "https://www.radheenterprise.co.in";
  
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "datePublished": new Date(date).toISOString().split('T')[0],
    "author": {
      "@type": "Organization",
      "name": "Radhe Enterprise",
      "url": "https://www.radheenterprise.co.in"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Radhe Enterprise",
      "logo": "https://www.radheenterprise.co.in/favicon.ico"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${slug}`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.radheenterprise.co.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.radheenterprise.co.in/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": `${baseUrl}/blog/${slug}`
      }
    ]
  };

  return (
    <div className="bg-[#0B0E14] min-h-screen text-text-white flex flex-col justify-between font-sans">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Navigation Breadcrumbs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-800 pb-6 mb-12">
          <div className="flex items-center gap-2.5 font-mono text-xs text-muted-gray">
            <Link href="/" className="hover:text-primary-yellow">HOME</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary-yellow">BLOG</Link>
            <span>/</span>
            <span className="text-primary-yellow font-bold uppercase truncate max-w-[200px] sm:max-w-none">
              {title}
            </span>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-mono text-muted-gray hover:text-primary-yellow bg-[#161B22] border border-gray-800 hover:border-primary-yellow/20 px-4 py-2 rounded-lg transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO BLOG
          </Link>
        </div>

        {/* Blog Post Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Article Content */}
          <article className="lg:col-span-8 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-[10px] font-mono text-muted-gray">
                <span className="bg-primary-yellow/10 border border-primary-yellow/20 px-2.5 py-1 rounded text-primary-yellow font-bold uppercase">
                  {category}
                </span>
                <span>•</span>
                <span>{date}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-primary-yellow" />
                  {readTime}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-text-white uppercase tracking-tight leading-tight">
                {title}
              </h1>
              <p className="text-base sm:text-lg text-muted-gray leading-relaxed font-semibold italic border-l-4 border-primary-yellow pl-4">
                {description}
              </p>
            </div>

            {/* Rendered HTML */}
            <div
              className="prose prose-invert max-w-none text-muted-gray leading-relaxed text-sm sm:text-base space-y-6 blog-post-body"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />

            {/* Footer Author Bio */}
            <div className="border-t border-gray-800/80 pt-8 mt-12 flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-yellow/10 border border-primary-yellow/20 flex items-center justify-center text-primary-yellow shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-text-white">Radhe Enterprise Editorial Team</h4>
                <p className="text-xs text-muted-gray leading-normal">
                  Providing expert advice on material handling engineering, industrial safety compliance, and warehouse logistics layout design in Morbi, Gujarat, India.
                </p>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Quick Inquiry widget */}
            <div className="bg-[#161B22] border border-gray-800 rounded-2xl p-6 space-y-6 shadow-xl relative">
              <h3 className="text-xs font-mono uppercase tracking-widest text-primary-yellow font-bold border-b border-gray-800 pb-2">
                Logistics Support Desk
              </h3>
              <p className="text-xs text-muted-gray leading-relaxed font-medium">
                Need help selecting lifting machinery? Connect with our logistics team for technical guidance or custom specifications.
              </p>
              <div className="space-y-3 font-mono text-[10px] text-muted-gray">
                <div className="flex justify-between border-b border-gray-850 pb-1">
                  <span>Factory Depot:</span>
                  <span className="text-text-white font-bold">Morbi, Gujarat</span>
                </div>
                <div className="flex justify-between border-b border-gray-850 pb-1">
                  <span>Sales Lead Time:</span>
                  <span className="text-text-white font-bold">Within 2 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Dispatch Capacity:</span>
                  <span className="text-text-white font-bold">All India Shipping</span>
                </div>
              </div>
              <Link
                href="/#contact"
                className="w-full flex items-center justify-center gap-2 bg-primary-yellow text-dark-bg hover:bg-orange-accent py-3 rounded-lg text-xs font-mono font-bold uppercase transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                Request Technical Quote
              </Link>
            </div>

            {/* Related pages links (SEO internal linking) */}
            <div className="bg-[#161B22]/50 border border-gray-800/80 rounded-2xl p-6 space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-text-white font-bold flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-primary-yellow" />
                Product Equipment Hubs
              </h3>
              <ul className="space-y-2.5 text-xs font-mono">
                <li>
                  <Link href="/manual-stacker" className="text-muted-gray hover:text-primary-yellow flex items-center gap-1">
                    <span>•</span> Manual Stackers
                  </Link>
                </li>
                <li>
                  <Link href="/electric-stacker" className="text-muted-gray hover:text-primary-yellow flex items-center gap-1">
                    <span>•</span> Electric & Semi-Electric Stackers
                  </Link>
                </li>
                <li>
                  <Link href="/forklift" className="text-muted-gray hover:text-primary-yellow flex items-center gap-1">
                    <span>•</span> Diesel & Electric Forklifts
                  </Link>
                </li>
                <li>
                  <Link href="/drum-handler" className="text-muted-gray hover:text-primary-yellow flex items-center gap-1">
                    <span>•</span> Drum Handling Equipment
                  </Link>
                </li>
                <li>
                  <Link href="/pallet-truck" className="text-muted-gray hover:text-primary-yellow flex items-center gap-1">
                    <span>•</span> Hand & Electric Pallet Trucks
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
