import React from "react";
import { Metadata } from "next";
import CategoryHub from "@/components/CategoryHub";

export const metadata: Metadata = {
  title: "Heavy-Duty Forklift Supplier in India | Radhe Enterprise",
  description: "Radhe Enterprise is a leading forklift supplier in India, offering diesel and electric counterbalanced forklifts. Find model specifications, prices, and custom configurations.",
  alternates: {
    canonical: "/forklift",
  },
  openGraph: {
    title: "Heavy-Duty Forklift Supplier in India | Radhe Enterprise",
    description: "Industrial forklifts designed for heavy-duty lifting up to 5000kg. Reliable diesel and electric power plants with advanced safety certifications.",
    url: "https://radheenterprise.co.in/forklift",
    type: "website",
  },
};

export default function ForkliftPage() {
  const title = "Forklifts";
  const subtitle = "Engineered for maximum lifting power and material transport stability, our heavy-duty diesel and electric forklifts handle load capacities up to 5000kg.";
  const categories = ["Forklifts"];
  
  const seoHeading = "Trusted Industrial Forklift Supplier in India";
  
  const seoContentHtml = `
    <p>
      For moving extremely heavy materials across manufacturing yards, cargo ports, and expansive warehouse bays, a forklift is the ultimate tool. As a premier <strong>material handling equipment manufacturer</strong> and a certified <strong>forklift supplier in India</strong>, Radhe Enterprise provides heavy-duty counterbalanced forklifts engineered for continuous performance. We offer both internal combustion (IC) diesel-powered models and high-efficiency electric battery units to meet the diverse operational demands of Indian industries.
    </p>
    
    <h3>Choosing the Right Power Source: Diesel vs. Electric Forklifts</h3>
    <p>
      Selecting the correct engine type depends on your working environment and operational constraints:
      <strong>Diesel Forklifts:</strong> Ideal for outdoor yards, ceramic brick docks, and rough terrains, our diesel models are powered by reliable engines (such as Isuzu, Mitsubishi, or Kirloskar). They provide immense torque, high acceleration, and rapid travel speeds. These units can work continuously with simple refueling, making them the preferred choice for heavy material handling in Morbi, Rajkot, and Ahmedabad.
      <strong>Electric Counterbalanced Forklifts:</strong> Specially designed for indoor food-grade, pharmaceutical, or clean manufacturing setups, these forklifts produce zero emissions and operate almost silently. Using advanced AC drive motors and high-voltage industrial batteries, they match the power of diesel units while significantly reducing long-term fuel costs.
    </p>

    <h3>Superior Design and Ergonomic Cab Comfort</h3>
    <p>
      Operating a heavy-duty forklift for a full shift requires maximum comfort and visibility. Our vehicles feature wide-view duplex and triplex masts that minimize blind spots. The driver's cabin is isolated with rubber dampers to absorb vibrations, and the layout features adjustable steering columns, ergonomic lever layouts, and clear LCD display consoles showing vehicle speed, battery levels, and fault diagnostics.
    </p>

    <h3>Technical Specs & Structural Strength</h3>
    <ul>
      <li><strong>Rated Capacities:</strong> Standard models available from 1500kg up to 5000kg (1.5 to 5 Tons) rated capacity.</li>
      <li><strong>Triple Stage Masts:</strong> Triplex masts with full free-lift capabilities allow forklifts to operate inside shipping containers and low-ceiling trucks without hitting the roof.</li>
      <li><strong>Hydraulic Side Shifters:</strong> Integrates high-performance side-shifting carriages, allowing operators to shift forks left or right without moving the entire vehicle, optimizing loading times.</li>
      <li><strong>Safety Guarding:</strong> Features a heavy overhead guard frame, overhead exhaust pipes (for diesel models), and automated speed governors to limit top travel speeds.</li>
    </ul>

    <h3>Why Radhe Enterprise is Your Ideal Material Handling Partner</h3>
    <p>
      At Radhe Enterprise, we don't just supply equipment; we deliver engineering trust. As an established <strong>manual stacker manufacturer in Gujarat</strong> and a national <strong>forklift supplier in India</strong>, we implement rigorous quality checks on every counterbalanced vehicle. From hydraulic pressure tests to dynamic load lifting tests, we ensure that every machine delivered to Ahmedabad, Morbi, or Rajkot is ready for harsh operations.
    </p>
  `;

  const faqs = [
    {
      question: "Which forklift is better: Diesel or Electric?",
      answer: "Diesel forklifts are best for outdoor use, uneven terrain, and heavy-duty loading docks because they provide high torque and quick refueling. Electric forklifts are ideal for indoor use, cold storage, and clean factories because they produce zero emissions and have much lower fuel and noise levels.",
    },
    {
      question: "What is the lifting capacity range of your forklifts?",
      answer: "We supply industrial forklifts ranging from 1500kg (1.5 Tons) up to 5000kg (5 Tons). Specialty models for heavier handling can be requested from our engineering team.",
    },
    {
      question: "What is a container mast (free-lift mast)?",
      answer: "A container mast allows the forks to lift to a height of 1.5 to 2 meters before the inner mast rails begin to telescope upward. This is crucial for stacking pallets inside shipping containers, train boxcars, or low-roof trucks where overall clearance is limited.",
    },
    {
      question: "Do you offer leasing, rentals, or direct sales across India?",
      answer: "We offer direct sales with comprehensive manufacturer warranty, shipping to all parts of India. Localized support is managed from our Morbi, Gujarat headquarters with trained field technicians available for immediate support.",
    },
    {
      question: "How often should an industrial forklift be serviced?",
      answer: "For diesel forklifts, engine oil and filters should be replaced every 250 operating hours. For electric forklifts, services focus on battery watering (for lead-acid models), cleaning electrical contactors, and checking hydraulic cylinder seals every 500 hours.",
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
      canonicalPath="/forklift"
    />
  );
}
