import React from "react";
import { Metadata } from "next";
import CategoryHub from "@/components/CategoryHub";

export const metadata: Metadata = {
  title: "Industrial Aerial Work Platform Manufacturer | Radhe Enterprise",
  description: "Radhe Enterprise is a leading aerial work platform manufacturer in Gujarat, India. Find hydraulic scissor lifts, dual mast aluminum platforms, and custom lifting heights.",
  alternates: {
    canonical: "/aerial-work-platform",
  },
  openGraph: {
    title: "Industrial Aerial Work Platform Manufacturer | Radhe Enterprise",
    description: "High-safety aerial work platforms and hydraulic scissor lifts. Lift heights up to 16m, dual-mast aluminum lifters, and certified safety rails.",
    url: "https://www.radheenterprise.co.in/aerial-work-platform",
    type: "website",
  },
};

export default function AerialWorkPlatformPage() {
  const title = "Aerial Work Platforms";
  const subtitle = "Perform high-elevation maintenance, electrical wiring, and stock selection safely with our rugged hydraulic scissor platforms and aluminum dual-mast lifters, reaching up to 16m.";
  const categories = ["Aerial Work Platforms"];
  
  const seoHeading = "Leading Aerial Work Platform Manufacturer in India & Gujarat";
  
  const seoContentHtml = `
    <p>
      For high-elevation warehouse maintenance, electrical wiring, light installation, and stock picking, operator safety is the primary concern. Using ladders or improvised scaffolds is highly dangerous. As a leading <strong>material handling equipment manufacturer in Gujarat</strong>, Radhe Enterprise designs high-safety aerial work platforms (AWP) and mobile scissor lifts built to provide a stable elevated platform for workers.
    </p>
    
    <h3>Engineering Safe Elevation Solutions</h3>
    <p>
      Our aerial work platforms are designed to handle demanding industrial tasks:
      <strong>Mobile Scissor Lifts:</strong> These units feature a heavy-duty scissor arm structure powered by an AC or DC hydraulic pump. They lift heights from 6 meters up to 16 meters, with platform capacities ranging from 300kg to 1000kg. This provides a spacious, stable working area for multiple operators and their tools.
      <strong>Single & Dual Mast Aluminum Lifts:</strong> Constructed using high-strength aluminum mast profiles, these platforms are exceptionally lightweight and compact. They can pass through standard doors and operate on delicate mezzanine floors in Morbi, Ahmedabad, and Rajkot.
    </p>

    <h3>Superior Safety and Mechanical Standards</h3>
    <ul>
      <li><strong>Outrigger Interlock Security:</strong> Equipped with screw-adjustable stabilizer outriggers. The electrical system prevents lifting unless all four stabilizers are positioned and locked on the ground.</li>
      <li><strong>Emergency Lowering Valves:</strong> Features release valves that let operators lower the platform safely in the event of power cuts or control issues.</li>
      <li><strong>High-Safety Guardrails:</strong> Fitted with 1-meter high guard rails, mid-rails, and toe-boards, keeping operators secure and preventing tools from falling.</li>
      <li><strong>Dual Control Panels:</strong> Includes control buttons on both the ground base and the work platform, allowing easy height adjustments from either location.</li>
    </ul>

    <h3>Serving Infrastructure and Industrial Zones in India</h3>
    <p>
      As a leading <strong>manual stacker manufacturer in Morbi</strong> and a certified AWP supplier, we design lifting systems designed to handle the dust-heavy environments of local factories. Our hydraulic cylinders are fitted with chrome-plated piston rods and polyurethane seals to prevent abrasive ceramic dust from causing leaks, ensuring a long operating lifespan.
    </p>

    <h3>Building a Complete Logistics Fleet</h3>
    <p>
      AWPs are essential for high-elevation maintenance. Combine these lifts with stackers, forklifts from a certified <strong>forklift supplier in Gujarat</strong>, and pallet jacks from a premium <strong>pallet truck supplier</strong> to keep your facility safe, productive, and fully compliant with industrial safety regulations.
    </p>
  `;

  const faqs = [
    {
      question: "What is the maximum working height of your aerial platforms?",
      answer: "Our mobile scissor lifts reach platform heights up to 14 meters (working height of 16 meters), and our aluminum mast lifts reach heights up to 12 meters.",
    },
    {
      question: "How is the aerial work platform powered?",
      answer: "We offer models powered by standard AC shop electricity (220V or 415V), battery-powered DC units (for wireless operation), and dual-power options.",
    },
    {
      question: "What safety features are standard on your lifts?",
      answer: "Standard safety systems include screw-down stabilizer outriggers with electrical interlock sensors, emergency platform lowering valves, overload sensor valves, and high safety guard rails.",
    },
    {
      question: "Can these lifts fit through standard warehouse doors?",
      answer: "Yes, our single and dual-mast aluminum lifts are designed with compact chassis that can fit through standard doorways and inside passenger elevators.",
    },
    {
      question: "Do you supply safety certificates for your equipment?",
      answer: "Yes, all our aerial work platforms undergo strict load-bearing and stability testing at our Morbi factory, and are supplied with factory safety certification.",
    },
  ];

  return (
    <CategoryHub
      title={title}
      subtitle={subtitle}
      categories={categories}
      seoHeading={seoHeading}
      seoContentHtml={seoContentHtml}
      faqs={faqs}
      canonicalPath="/aerial-work-platform"
    />
  );
}
