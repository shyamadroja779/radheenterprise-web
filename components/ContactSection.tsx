"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  Send,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    equipment: "Manual Stackers",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const categoriesList = [
    "Manual Stackers",
    "Semi Electric Stackers",
    "Electric Stackers",
    "Manual Pallet Trucks",
    "Electric Pallet Trucks",
    "Drum Handling Equipment",
    "Forklifts",
    "Lift Tables",
    "Tail Lifts",
    "Aerial Work Platforms",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sending inquiry
    setTimeout(() => {
      setSubmitted(true);
      // Reset form
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        equipment: "Manual Stackers",
        message: "",
      });
    }, 800);
  };

  const handleWhatsAppRedirect = () => {
    // Generate text message for quick chat
    const text = `Hello RADHE ENTERPRISE, I would like to inquire about ${formState.equipment}. Name: ${formState.name}, Phone: ${formState.phone}, Company: ${formState.company || "N/A"}.`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919624681003?text=${encodedText}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 bg-[#0B0E14] relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-orange-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase font-mono tracking-widest text-primary-yellow font-bold">
            COMMERCIAL INQUIRIES
          </h2>
          <h3 className="text-3xl sm:text-4xl font-black text-text-white uppercase tracking-tight">
            Contact Our Sales Team
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-primary-yellow to-orange-accent mx-auto rounded" />
          <p className="text-sm text-muted-gray">
            Request price quotes, custom machinery specifications, or schedule dispatch deliveries. Our technical sales agents respond within 2 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contacts & Maps */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Details Cards */}
            <div className="space-y-4">
              
              {/* Address */}
              <div className="bg-[#161B22] border border-gray-800 p-4 rounded-xl flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-yellow/5 border border-primary-yellow/10 flex items-center justify-center text-primary-yellow shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-muted-gray">Corporate Address</h4>
                  <a
                    href="https://www.google.com/maps/place/RADHE+ENTERPRISE+MORBI/@22.8601386,70.9543395,18z/data=!4m6!3m5!1s0x39598f73ea06dfc1:0xe61481f337601735!8m2!3d22.8601386!4d70.9543395!16s%2Fg%2F11ytvmwbyt?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm text-text-white hover:text-primary-yellow transition-colors leading-relaxed font-medium block"
                  >
                    Near CNG Petrol Pump, Opposite Shiv Hotel, Uchi Mandal, Morbi - 363642, Gujarat, India.
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-[#161B22] border border-gray-800 p-4 rounded-xl flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-yellow/5 border border-primary-yellow/10 flex items-center justify-center text-primary-yellow shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-muted-gray">Email Address</h4>
                  <a
                    href="mailto:radheenterprise1003@gmail.com"
                    className="text-xs sm:text-sm text-text-white hover:text-primary-yellow transition-colors font-medium font-mono block"
                  >
                    radheenterprise1003@gmail.com
                  </a>
                </div>
              </div>

              {/* Primary Call */}
              <div className="bg-[#161B22] border border-gray-800 p-4 rounded-xl flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary-yellow/5 border border-primary-yellow/10 flex items-center justify-center text-primary-yellow shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-muted-gray">Direct Call Line</h4>
                  <a
                    href="tel:+919624681003"
                    className="text-xs sm:text-sm text-text-white hover:text-primary-yellow transition-colors font-bold font-mono block"
                  >
                    +91 96246 81003
                  </a>
                </div>
              </div>

              {/* WhatsApp Representatives */}
              <div className="bg-[#161B22] border border-gray-800 p-4 rounded-xl space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-muted-gray flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500/10" />
                  WhatsApp Direct Sales
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <a
                    href="https://wa.me/917990454242"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0B0E14] border border-gray-800 hover:border-emerald-500/40 p-2.5 rounded text-center block transition-all"
                  >
                    <span className="text-[10px] text-muted-gray block font-mono">Desk 1</span>
                    <span className="text-xs font-bold text-text-white font-mono hover:text-emerald-400">+91 79904</span>
                  </a>
                  <a
                    href="https://wa.me/919624681003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0B0E14] border border-gray-800 hover:border-emerald-500/40 p-2.5 rounded text-center block transition-all"
                  >
                    <span className="text-[10px] text-muted-gray block font-mono">Technical</span>
                    <span className="text-xs font-bold text-text-white font-mono hover:text-emerald-400">+91 96246</span>
                  </a>
                  <a
                    href="https://wa.me/917859904242"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0B0E14] border border-gray-800 hover:border-emerald-500/40 p-2.5 rounded text-center block transition-all"
                  >
                    <span className="text-[10px] text-muted-gray block font-mono">Desk 2</span>
                    <span className="text-xs font-bold text-text-white font-mono hover:text-emerald-400">+91 78599</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Embedded Google Maps Morbi India */}
            <div className="bg-[#161B22] border border-gray-800 rounded-xl overflow-hidden shadow-lg h-[240px] relative">
              <iframe
                title="RADHE ENTERPRISE Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.0754800366633!2d70.9521508!3d22.8601386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39598f73ea06dfc1%3A0xe61481f337601735!2sRADHE%20ENTERPRISE%20MORBI!5e0!3m2!1sen!2sin!4v1723654435000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
              <div className="absolute bottom-2 left-2 bg-[#0B0E14]/90 border border-gray-800 text-[10px] font-mono px-2.5 py-1 rounded text-primary-yellow">
                Morbi Manufacturing Plant, Gujarat
              </div>
            </div>

          </div>

          {/* Right Column: Premium Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#161B22]/60 border border-gray-800 p-6 sm:p-8 rounded-2xl backdrop-blur-sm relative">
              
              <div className="absolute top-4 right-4 flex items-center gap-1.5 text-[10px] font-mono text-muted-gray">
                <Clock className="w-3.5 h-3.5 text-primary-yellow" />
                Response: ~2 Hours
              </div>

              <h4 className="text-text-white font-bold text-lg mb-6 border-b border-gray-800 pb-3">
                Send Equipment Specification Request
              </h4>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95 duration-350">
                  <div className="w-16 h-16 bg-primary-yellow/10 border border-primary-yellow/20 rounded-full flex items-center justify-center text-primary-yellow mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h5 className="text-text-white font-bold text-lg">Inquiry Submitted Successfully</h5>
                  <p className="text-xs text-muted-gray max-w-sm mx-auto">
                    Thank you. Your request is queued. Our technical team has been notified. You can also directly forward this inquiry to our WhatsApp line.
                  </p>
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-dark-bg px-5 py-3 rounded-lg text-xs font-mono font-bold uppercase transition-all shadow-md mt-2"
                  >
                    Open in WhatsApp Chat
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-[11px] font-mono uppercase tracking-wider text-muted-gray block">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-[#0B0E14] border border-gray-800 rounded-lg px-3.5 py-2.5 text-xs text-text-white focus:border-primary-yellow focus:outline-none transition-colors"
                        placeholder="e.g. Shyam Patel"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-[11px] font-mono uppercase tracking-wider text-muted-gray block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full bg-[#0B0E14] border border-gray-800 rounded-lg px-3.5 py-2.5 text-xs text-text-white focus:border-primary-yellow focus:outline-none transition-colors"
                        placeholder="patel@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-[11px] font-mono uppercase tracking-wider text-muted-gray block">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full bg-[#0B0E14] border border-gray-800 rounded-lg px-3.5 py-2.5 text-xs text-text-white focus:border-primary-yellow focus:outline-none transition-colors"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    {/* Company */}
                    <div className="space-y-1.5">
                      <label htmlFor="company" className="text-[11px] font-mono uppercase tracking-wider text-muted-gray block">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                        className="w-full bg-[#0B0E14] border border-gray-800 rounded-lg px-3.5 py-2.5 text-xs text-text-white focus:border-primary-yellow focus:outline-none transition-colors"
                        placeholder="Radhe Manufacturing Ltd"
                      />
                    </div>
                  </div>

                  {/* Equipment Category Selector */}
                  <div className="space-y-1.5">
                    <label htmlFor="equipment" className="text-[11px] font-mono uppercase tracking-wider text-muted-gray block">
                      Target Equipment Category
                    </label>
                    <select
                      id="equipment"
                      value={formState.equipment}
                      onChange={(e) => setFormState({ ...formState, equipment: e.target.value })}
                      className="w-full bg-[#0B0E14] border border-gray-800 rounded-lg px-3.5 py-2.5 text-xs text-text-white focus:border-primary-yellow focus:outline-none transition-colors"
                    >
                      {categoriesList.map((cat) => (
                        <option key={cat} value={cat} className="bg-[#161B22] text-text-white text-xs">
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-[11px] font-mono uppercase tracking-wider text-muted-gray block">
                      Technical Requirements / Load Details
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-[#0B0E14] border border-gray-800 rounded-lg px-3.5 py-2.5 text-xs text-text-white focus:border-primary-yellow focus:outline-none transition-colors"
                      placeholder="Specify lifting capacity load, lifting heights range, battery requirements, or dispatch locations..."
                    />
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="flex-1 flex items-center justify-center gap-2 bg-primary-yellow text-dark-bg hover:bg-orange-accent px-5 py-3 rounded-lg text-xs font-extrabold uppercase tracking-wider transition-all shadow-[0_4px_12px_rgba(245,166,35,0.2)]"
                    >
                      <Send className="w-3.5 h-3.5" />
                      Submit Spec Inquiry
                    </button>
                    
                    <button
                      type="button"
                      onClick={handleWhatsAppRedirect}
                      className="flex items-center justify-center gap-2 border border-emerald-500/30 hover:bg-emerald-500/10 text-emerald-400 px-5 py-3 rounded-lg text-xs font-mono font-bold uppercase transition-all"
                    >
                      Direct WhatsApp Inquiry
                    </button>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
