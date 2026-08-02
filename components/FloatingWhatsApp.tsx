"use client";

import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    { name: "Sales Desk 1", phone: "917990454242", label: "+91 79904 54242" },
    { name: "Technical Desk", phone: "919624681003", label: "+91 96246 81003" },
    { name: "Sales Desk 2", phone: "917859904242", label: "+91 78599 04242" },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans">
      {/* Expanded Menu */}
      {isOpen && (
        <div className="mb-4 bg-[#161B22]/95 border border-primary-yellow/20 rounded-xl p-4 w-72 shadow-2xl backdrop-blur-md animate-in slide-in-from-bottom-5 duration-350">
          <div className="flex items-center justify-between pb-3 border-b border-gray-800 mb-3">
            <div>
              <h5 className="text-text-white font-bold text-sm">WhatsApp Consultation</h5>
              <p className="text-[10px] text-muted-gray">Direct line to our dispatch & engineering desks</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-muted-gray hover:text-primary-yellow p-1 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2">
            {contacts.map((contact, index) => (
              <a
                key={index}
                href={`https://wa.me/${contact.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-[#0B0E14] border border-gray-800 hover:border-primary-yellow/40 hover:bg-[#1C232E] transition-all group"
              >
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-text-white group-hover:text-primary-yellow transition-colors">
                    {contact.name}
                  </span>
                  <span className="text-[10px] text-muted-gray">{contact.label}</span>
                </div>
                <div className="w-7 h-7 rounded-full bg-emerald-600/10 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-dark-bg transition-all">
                  <svg
                    className="w-4.5 h-4.5 fill-current"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.022-.08-.124-.22-.363-.34-.24-.12-1.418-.7-1.638-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-.992-.367-1.89-1.167-.701-.624-1.173-1.396-1.31-1.637-.14-.24-.015-.37.105-.49.108-.108.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.195-.476-.39-.413-.54-.42-.14-.007-.3-.007-.46-.007-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.69 2.58 4.09 3.62.572.248 1.02.397 1.37.5.574.182 1.097.156 1.512.094.462-.068 1.418-.58 1.62-1.14.2-.56.2-.1.14-.2-.06-.08-.22-.12-.46-.24zM12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.117 1.523 5.86L.047 24l6.302-1.654A11.947 11.947 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.862 0-3.69-.472-5.312-1.37l-.38-.214-3.953 1.036 1.054-3.85-.236-.375A9.92 9.92 0 0 1 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-dark-bg flex items-center justify-center shadow-2xl transition-transform hover:scale-105 duration-300 relative group"
        aria-label="Contact on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-yellow opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-primary-yellow text-[9px] text-dark-bg font-bold items-center justify-center">
            3
          </span>
        </span>
        {isOpen ? (
          <X className="w-6 h-6 animate-in spin-in-90 duration-300" />
        ) : (
          <MessageSquare className="w-6 h-6 animate-in zoom-in-50 duration-300 fill-current" />
        )}
      </button>
    </div>
  );
}
