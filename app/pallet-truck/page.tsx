import React from "react";
import { Metadata } from "next";
import CategoryHub from "@/components/CategoryHub";

export const metadata: Metadata = {
  title: "Industrial Pallet Truck Supplier in India | Radhe Enterprise",
  description: "Radhe Enterprise is a leading pallet truck supplier in India, manufacturing manual hydraulic pallet jacks and heavy-duty electric pallet trucks.",
  alternates: {
    canonical: "/pallet-truck",
  },
  openGraph: {
    title: "Industrial Pallet Truck Supplier in India | Radhe Enterprise",
    description: "Explore our manual and electric pallet trucks. Heavy-duty construction, load capacity from 2000kg to 5000kg, durable polyurethane wheels.",
    url: "https://www.radheenterprise.co.in/pallet-truck",
    type: "website",
  },
};

export default function PalletTruckPage() {
  const title = "Pallet Trucks";
  const subtitle = "Streamline horizontal material transit with our ultra-rugged manual hand pallet jacks and high-speed electric walkie pallet trucks, rated up to 5000kg capacity.";
  const categories = ["Manual Pallet Trucks", "Electric Pallet Trucks"];
  
  const seoHeading = "Leading Industrial Pallet Truck Supplier in India & Gujarat";
  
  const seoContentHtml = `
    <p>
      Horizontal material movement is the backbone of any warehouse, loading dock, or retail distribution center. To move heavy pallets smoothly, you need reliable, durable transport equipment. As a leading <strong>material handling equipment manufacturer</strong> and a prominent <strong>pallet truck supplier</strong>, Radhe Enterprise manufactures manual hand pallet trucks and battery-powered electric pallet jacks designed to withstand the most demanding material transit cycles.
    </p>
    
    <h3>The Radhe Enterprise Pallet Truck Lineup</h3>
    <p>
      We engineer our pallet trucks to provide long-lasting service in heavy industrial environments:
      <strong>Manual Hand Pallet Jacks:</strong> These are the workhorses of the logistics industry. Equipped with a robust hydraulic pump, ergonomic hand control levers, and high-strength reinforced steel forks, our manual jacks can lift and transport loads from 2000kg (2 Tons) to 5000kg (5 Tons). They represent an extremely durable, budget-friendly option for daily warehouse operations.
      <strong>Electric Pallet Trucks (EPT):</strong> For operations involving long-distance horizontal travel or heavy high-volume loading docks, our walkie electric pallet trucks are the ideal choice. Equipped with electric drive motors, battery packs, and ergonomic throttle controllers, these units speed up loading times while reducing operator fatigue in Ahmedabad, Morbi, and Rajkot.
    </p>

    <h3>Innovative Engineering for Extended Service Life</h3>
    <ul>
      <li><strong>Heavy-Duty Steel Chassis:</strong> Built from reinforced high-tensile steel plates that resist twisting and deformation, even under full capacity 5-ton loads.</li>
      <li><strong>Leak-Proof Cast Iron Pumps:</strong> Features integrated, single-piece hydraulic pump castings with chrome-plated piston rods, ensuring leak-free performance and long seal life.</li>
      <li><strong>Optimized Wheel Systems:</strong> Available with durable polyurethane (PU) wheels for smooth, quiet rolling on epoxy-coated warehouse floors, or tough nylon wheels for rough concrete manufacturing yards.</li>
      <li><strong>Ergonomic Comfort Steering:</strong> The large, rubber-wrapped handle offers a 3-position lever (Lift, Neutral, Lower) for precise control and easy maneuvering in tight spaces.</li>
    </ul>

    <h3>Serving Gujarat's Key Industrial and Ceramic Corridors</h3>
    <p>
      Morbi, Ahmedabad, and Rajkot represent the industrial heart of Gujarat, home to heavy manufacturing plants, export warehouses, and ceramic showrooms. As a leading <strong>manual stacker manufacturer in Gujarat</strong> and a national <strong>pallet truck supplier</strong>, we understand the challenges of these dust-heavy and high-demand settings. Our pallet trucks are fitted with sealed dust-proof bearings to prevent contaminants from seizing the wheels, ensuring long-term reliability.
    </p>

    <h3>Why Trust Radhe Enterprise?</h3>
    <p>
      When you partner with Radhe Enterprise, you get direct access to engineering expertise, reliable warranties, and readily available spare parts. Whether you require a standard width pallet jack or an extra-long, custom-fork model for non-standard machinery crates, we customize our manufacturing to match your requirements. Combine our pallet trucks with our forklifts and electric stackers to create a highly efficient, safety-compliant warehousing operation.
    </p>
  `;

  const faqs = [
    {
      question: "What load capacities do your manual pallet trucks support?",
      answer: "We manufacture manual hand pallet jacks with capacities of 2000kg (2 Tons), 2500kg (2.5 Tons), 3000kg (3 Tons), and heavy-duty 5000kg (5 Tons) models.",
    },
    {
      question: "What is the difference between polyurethane (PU) and nylon wheels?",
      answer: "Polyurethane wheels are quiet, shock-absorbing, and protect delicate or painted warehouse floors from scratches, making them ideal for indoor warehousing. Nylon wheels are harder, roll easier on rough concrete floors, and are highly resistant to chemicals, making them suitable for factories and outdoor yards.",
    },
    {
      question: "Can you customize the fork width and length?",
      answer: "Yes, as a specialized manufacturer, we can build custom fork dimensions, including narrow forks for special chemical pallets, or extra-long and extra-wide forks for moving large machinery crates.",
    },
    {
      question: "What battery type is used in your electric pallet trucks?",
      answer: "We offer deep-cycle lead-acid battery packs for standard operations and high-density, maintenance-free Lithium-Ion batteries for facilities requiring rapid charging and multi-shift run times.",
    },
    {
      question: "How do you handle shipping and maintenance in India?",
      answer: "We ship pallet trucks directly from our Morbi manufacturing plant to any location in India. We supply complete seal kits, replacement wheels, and hydraulic pump parts, and provide remote or on-site support to keep your operations running.",
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
      canonicalPath="/pallet-truck"
    />
  );
}
