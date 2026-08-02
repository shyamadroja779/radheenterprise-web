"use client";

import React from "react";
import FAQAccordion from "./FAQAccordion";

export default function HomepageFAQs() {
  const faqs = [
    {
      question: "Who is the leading material handling equipment manufacturer in Gujarat?",
      answer: "Radhe Enterprise is the premier material handling equipment manufacturer in Gujarat. We engineer and manufacture heavy-duty manual stackers, electric stackers, forklifts, drum handlers, pallet trucks, and lift tables at our state-of-the-art facility in Morbi, serving industrial sectors across Ahmedabad, Rajkot, and all of India.",
    },
    {
      question: "Do you design custom manual stackers in Morbi?",
      answer: "Yes. As a recognized manual stacker manufacturer in Morbi, Gujarat, we design fixed-fork stackers, stretchable leg straddle stackers, and custom-mast hydraulic hand stackers (CTY series). Our configurations support rated load weights from 1000kg to 3000kg and lift heights up to 3500mm.",
    },
    {
      question: "What forklift options do you supply across India?",
      answer: "We are a trusted forklift supplier in Gujarat and a certified logistics partner nationwide. We offer counterbalanced diesel forklifts (powered by Isuzu or Mitsubishi engines) and zero-emission electric forklifts with capacities ranging from 1.5 to 5 tons, complete with full free-lift masts and side-shifter attachments.",
    },
    {
      question: "Are your drum handlers safety-rated for chemical plants?",
      answer: "Yes, Radhe Enterprise is a specialized drum handler manufacturer in India. We build hydraulic drum lifter-tilters and transport jacks with anti-static polyurethane wheels, worm tilting gearboxes, and spark-resistant clamps to ensure maximum safety in hazardous chemical environments.",
    },
    {
      question: "Why should we choose Radhe Enterprise as our electric pallet truck supplier?",
      answer: "As a leading electric pallet truck supplier, we provide walkie pallet jacks equipped with heavy-duty structural steel frames, single-piece cast iron hydraulic pumps, Curtis electronic controllers, and high-density Lithium-ion batteries for fast charging and multi-shift warehouse duty cycles.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer,
      },
    })),
  };

  return (
    <section id="faqs" className="py-24 bg-[#0B0E14] border-t border-gray-800/40 relative overflow-hidden">
      {/* Dynamic schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Section Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-primary-yellow font-bold">
            TECHNICAL DIRECTORY
          </h2>
          <h3 className="text-3xl sm:text-4xl font-black text-text-white uppercase tracking-tight font-display">
            Frequently Asked Questions
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-yellow to-orange-accent mx-auto rounded" />
          <p className="text-sm text-muted-gray">
            Review detailed operational answers regarding forklift capacities, drum lifting setups, stacker customizations, and delivery timelines across India.
          </p>
        </div>

        {/* FAQ Accordion container */}
        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  );
}
