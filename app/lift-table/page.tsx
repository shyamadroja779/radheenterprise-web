import React from "react";
import { Metadata } from "next";
import CategoryHub from "@/components/CategoryHub";

export const metadata: Metadata = {
  title: "Industrial Hydraulic Lift Table Manufacturer | Radhe Enterprise",
  description: "Radhe Enterprise is a leading hydraulic scissor lift table manufacturer in Gujarat, India. Find single and multi-stage lift tables, load specs, and custom sizes.",
  alternates: {
    canonical: "/lift-table",
  },
  openGraph: {
    title: "Industrial Hydraulic Lift Table Manufacturer | Radhe Enterprise",
    description: "Heavy-duty electric and manual scissor lift tables. Rated capacities up to 5000kg. Customizable platform dimensions and lift heights.",
    url: "https://radheenterprise.co.in/lift-table",
    type: "website",
  },
};

export default function LiftTablePage() {
  const title = "Lift Tables";
  const subtitle = "Optimize assembly ergonomics and station loading heights with our rugged single, double, and multi-stage hydraulic scissor lift tables, rated up to 5000kg.";
  const categories = ["Lift Tables"];
  
  const seoHeading = "Leading Scissor Lift Table Manufacturer in India & Gujarat";
  
  const seoContentHtml = `
    <p>
      In manufacturing assembly lines, sorting areas, and logistics packing bays, workers often lift materials repeatedly. Bending down to lift heavy parts or stretch to load high pallets causes physical strain and slows operations. As a leading <strong>material handling equipment manufacturer in Gujarat</strong>, Radhe Enterprise designs high-end hydraulic scissor lift tables built to resolve these assembly challenges and optimize work heights.
    </p>
    
    <h3>Engineering Ergonomic Station Solutions</h3>
    <p>
      Our lift tables are designed to handle rigorous duty cycles:
      <strong>Stationary Hydraulic Lift Tables:</strong> Placed in pit recesses or directly on factory floors, these systems lift materials up to the level of moving conveyors or feeder racks. Powered by robust 3-phase electric motors and high-pressure hydraulic cylinders, they lift weights from 500kg up to 5000kg.
      <strong>Mobile Scissor Lifts:</strong> Fitted with durable polyurethane steering wheels and foot pedal pumps, these mobile carts allow operators to transport and lift heavy tooling blocks, packaging bundles, and parts directly to machine interfaces in Morbi and Rajkot.
    </p>

    <h3>Superior Structural Specifications</h3>
    <ul>
      <li><strong>High-Tensile Scissor Arms:</strong> Constructed from heavy-walled structural steel tubing that prevents twisting under heavy, off-center loads.</li>
      <li><strong>Mechanical Safety Check Valves:</strong> Features integrated safety lock valves on hydraulic pistons, ensuring the platform stays locked in position in the event of pressure line cuts.</li>
      <li><strong>Ergonomic Hand Control Pendants:</strong> Complete with emergency stop switches, allowing operators to adjust heights smoothly for precise assembly alignment.</li>
      <li><strong>Heavy Duty Platforms:</strong> Options for smooth sheet steel plates, checker anti-slip plates, or integrated ball transfer rollers for easy box movement.</li>
    </ul>

    <h3>Serving Local Industries in Morbi, Rajkot, and Ahmedabad</h3>
    <p>
      Industrial plants in Gujarat require material handling systems that can handle tough conditions. As a premier <strong>manual stacker manufacturer in Morbi</strong> and a trusted scissor lift supplier, we build tables using dust-sealed hydraulic cylinders to prevent ceramic powder or dust from damaging the pistons, ensuring a long operating lifespan.
    </p>

    <h3>Integrating Your Warehousing Solutions</h3>
    <p>
      Implementing hydraulic lift tables is a key step toward improving warehouse safety. Combine our lift tables with stackers, forklifts from a certified <strong>forklift supplier in Gujarat</strong>, and pallet jacks from a premium <strong>pallet truck supplier</strong> to create a unified logistics workflow.
    </p>
  `;

  const faqs = [
    {
      question: "What is the maximum weight capacity of your lift tables?",
      answer: "Our standard lift tables support capacities from 500kg to 5000kg (5 Tons). Specialty high-capacity models can be custom engineered to meet your facility's requirements.",
    },
    {
      question: "Can these lift tables be installed in a pit?",
      answer: "Yes. Our stationary lift tables are designed for pit mounting. This allows the platform to lower level with the warehouse floor, letting pallet trucks roll directly onto the lift.",
    },
    {
      question: "What safety features are integrated into the lift tables?",
      answer: "Key safety systems include high-pressure safety check valves on the cylinders, mechanical safety locks for maintenance work, and overload bypass valves in the hydraulic unit.",
    },
    {
      question: "Do you manufacture custom platform sizes?",
      answer: "Yes, we can build custom platform dimensions, table extensions, rotary platforms, and ball-transfer tables to match your assembly line layout.",
    },
    {
      question: "Where do you ship lift tables in India?",
      answer: "We manufacture all equipment in Morbi, Gujarat, and ship directly to industrial zones in Ahmedabad, Rajkot, Surat, Ankleshwar, and all other states of India.",
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
      canonicalPath="/lift-table"
    />
  );
}
