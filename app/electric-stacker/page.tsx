import React from "react";
import { Metadata } from "next";
import CategoryHub from "@/components/CategoryHub";

export const metadata: Metadata = {
  title: "Electric & Semi-Electric Stacker Manufacturer | Radhe Enterprise",
  description: "Explore electric and semi-electric stackers from Radhe Enterprise. Buy high-efficiency battery-powered stackers, lithium-ion models, and customized warehouse lift systems in India.",
  alternates: {
    canonical: "/electric-stacker",
  },
  openGraph: {
    title: "Electric & Semi-Electric Stacker Manufacturer | Radhe Enterprise",
    description: "Discover our high-efficiency semi-electric and full-electric stackers. Lift capacities up to 2000kg, lift heights up to 5500mm. Quality warehousing solutions.",
    url: "https://www.radheenterprise.co.in/electric-stacker",
    type: "website",
  },
};

export default function ElectricStackerPage() {
  const title = "Electric Stackers";
  const subtitle = "Maximize warehouse efficiency with our advanced semi-electric and full-electric stackers, combining battery-powered lift motors with high-tensile mast components.";
  const categories = ["Semi Electric Stackers", "Electric Stackers"];
  
  const seoHeading = "Premium Electric & Semi-Electric Stacker Manufacturer in India & Gujarat";
  
  const seoContentHtml = `
    <p>
      In high-intensity distribution centers and industrial manufacturing units, reliance on purely manual labor can bottleneck operations. As a reputable <strong>material handling equipment manufacturer</strong>, Radhe Enterprise designs and distributes state-of-the-art semi-electric and full-electric stackers. Engineered for rapid lifting, horizontal transit, and seamless pallet stacking, our electric machinery serves as the perfect intermediate solution between manual hand lifters and full-size forklifts.
    </p>
    
    <h3>The Operational Difference: Semi-Electric vs. Full-Electric Stackers</h3>
    <p>
      Understanding the layout of your facility and the frequency of your movements is key to choosing the right machine.
      <strong>Semi-Electric Stackers:</strong> These models utilize a powerful 12V or 24V battery pack to drive a hydraulic motor for lifting, while horizontal pushing and positioning are done manually. This is a cost-effective choice for warehouses where pallets are lifted frequently but moved over short distances.
      <strong>Full-Electric Stackers:</strong> Designed for continuous duty cycles, these units feature electric drive motors and electric lift pumps. The operator stands on a foldable platform or walks behind the machine, directing movement via an ergonomic control handle. This setup eliminates physical pushing entirely, making it ideal for large manufacturing sites in Ahmedabad and Rajkot.
    </p>

    <h3>Advanced Features of Radhe Enterprise Electric Lifters</h3>
    <ul>
      <li><strong>Lithium-Ion & Lead-Acid Options:</strong> We build machines using long-lasting industrial batteries. Our lithium-powered models support fast charging, allowing continuous use across multiple shifts.</li>
      <li><strong>Ergonomic Control Handles:</strong> Features proportional control buttons for precise lift, lower, and travel speeds, alongside emergency reverse safety belly buttons to protect the operator.</li>
      <li><strong>High-Strength Mast Engineering:</strong> Built with imported H-section and C-section mast profiles for maximum stability at heights up to 5.5 meters (5500mm).</li>
      <li><strong>Smart Protection Controllers:</strong> Equipped with advanced Curtis or Zapi electronic speed controllers, providing smooth acceleration, regenerative braking, and thermal cutoff protection.</li>
    </ul>

    <h3>Serving Local Industries in Morbi, Rajkot, and Ahmedabad</h3>
    <p>
      Gujarat's industrial growth is fueled by heavy manufacturing, steel processing, and packaging companies in Rajkot and Morbi. As an established <strong>manual stacker manufacturer in Gujarat</strong> and a leading electric machinery supplier, we design stackers that stand up to the region's dust-heavy factory environments. Our enclosed motor compartments shield electrical wiring and hydraulic pumps from contaminants. We also supply customized attachments, such as paper roll clamps and crane hooks, to industrial sectors across India.
    </p>

    <h3>Safety & Regulatory Compliance</h3>
    <p>
      Safety is critical when handling 1.5 to 2-ton loads at elevated heights. Our electric stackers are equipped with automatic speed reductions when forks are raised beyond a set safety height. The steering systems are geared for tight turning circles, allowing operators to navigate narrow aisles where a standard counterbalanced forklift would fail. If you are comparing heavy logistics options, our sales team can assist you in finding the best fit, ensuring your warehouse meets international safety guidelines.
    </p>
  `;

  const faqs = [
    {
      question: "What is the difference between a semi-electric and a full-electric stacker?",
      answer: "A semi-electric stacker lifts pallets using electric battery power but must be pushed and steered manually. A full-electric stacker uses battery power for both lifting and horizontal driving, allowing the operator to steer and drive effortlessly via control handle buttons.",
    },
    {
      question: "What battery options do you provide for electric stackers?",
      answer: "We provide high-capacity deep-cycle lead-acid batteries for standard operations and premium maintenance-free Lithium-Ion batteries for multi-shift facilities requiring rapid 'opportunity' charging during breaks.",
    },
    {
      question: "What safety features are integrated into the full-electric stackers?",
      answer: "Key safety systems include automatic speed-limit controls when forks are raised, an emergency reverse belly switch on the handle head, dual electromagnetic brakes, an integrated horn, and overload protection valves in the hydraulic lines.",
    },
    {
      question: "Are these stackers suitable for narrow warehouse aisles?",
      answer: "Yes. Due to their compact chassis design and tight turning radius (typically under 1600mm), our electric stackers operate exceptionally well in narrow aisles where conventional forklifts cannot maneuver.",
    },
    {
      question: "Do you supply spare parts and warranty service in Gujarat?",
      answer: "Yes, as a leading material handling manufacturer in Morbi, Gujarat, we maintain a complete inventory of spare parts (wheels, controllers, hydraulic pumps, contactors) and provide prompt on-site technical support across Ahmedabad, Rajkot, and industrial zones throughout India.",
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
      canonicalPath="/electric-stacker"
    />
  );
}
