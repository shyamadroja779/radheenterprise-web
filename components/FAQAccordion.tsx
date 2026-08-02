"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className="border border-gray-800 bg-[#161B22] rounded-xl overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left font-sans text-sm sm:text-base font-bold text-text-white hover:text-primary-yellow transition-colors"
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-primary-yellow shrink-0" />
                <span>{faq.question}</span>
              </div>
              {isOpen ? (
                <ChevronUp className="w-5 h-5 text-primary-yellow shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 text-muted-gray shrink-0" />
              )}
            </button>
            
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[500px] border-t border-gray-800/60" : "max-h-0"
              }`}
            >
              <p className="px-6 py-5 text-xs sm:text-sm text-muted-gray leading-relaxed font-medium bg-[#0B0E14]/40">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
