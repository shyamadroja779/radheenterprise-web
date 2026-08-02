import React from "react";
import { Metadata } from "next";
import CategoryHub from "@/components/CategoryHub";

export const metadata: Metadata = {
  title: "Hydraulic Truck Tail Lift Manufacturer | Radhe Enterprise",
  description: "Radhe Enterprise is a premier hydraulic tail lift manufacturer in Gujarat, India. Find high-capacity truck tailgates, steel and aluminum platforms, and custom specifications.",
  alternates: {
    canonical: "/tail-lift",
  },
  openGraph: {
    title: "Hydraulic Truck Tail Lift Manufacturer | Radhe Enterprise",
    description: "Reliable vehicle-mounted tail lifts. Capacities from 1000kg to 2000kg. Steel and aluminum folding platforms for commercial trucks and delivery fleets.",
    url: "https://radheenterprise.co.in/tail-lift",
    type: "website",
  },
};

export default function TailLiftPage() {
  const title = "Tail Lifts";
  const subtitle = "Maximize commercial dispatch efficiency with our rugged vehicle-mounted hydraulic tail lifts, enabling direct truck loading and unloading without loading docks.";
  const categories = ["Tail Lifts"];
  
  const seoHeading = "Premium Hydraulic Tail Lift Manufacturer in India & Gujarat";
  
  const seoContentHtml = `
    <p>
      In delivery logistics and cargo transit, unloading heavy pallets at delivery sites without loading docks or forklifts is a common bottleneck. This issue slows down truck dispatch cycles and puts drivers at risk of strain injuries. As a leading <strong>material handling equipment manufacturer in Gujarat</strong>, Radhe Enterprise builds heavy-duty vehicle-mounted hydraulic tail lifts that resolve these issues and speed up delivery times.
    </p>
    
    <h3>Engineering Solutions for Transport Logistics</h3>
    <p>
      Our tail lifts mount directly to the chassis of commercial transport trucks and delivery vans:
      <strong>Hydraulic Tailgates:</strong> These systems act as standard rear gates during transit. When lowered, they act as vertical platforms that carry pallets down to ground level. Operated by high-pressure hydraulic cylinders and a 12V or 24V DC power unit connected to the truck's battery, they lift weights up to 2000kg.
      <strong>Cantilever Tail Lifts:</strong> These models fold compactly under the truck chassis when not in use. They offer a larger folding platform, making them ideal for high-volume delivery operations in Ahmedabad, Morbi, and Rajkot.
    </p>

    <h3>Superior Mechanical Design</h3>
    <ul>
      <li><strong>High-Tensile Steel & Aluminum:</strong> Platforms are built using reinforced structural steel frames and lightweight aluminum plates to keep vehicle weight low while providing high capacity.</li>
      <li><strong>Automatic Levelling Systems:</strong> Features auto-tilting mechanisms that keep the platform level on uneven ground, preventing pallets from sliding during loading.</li>
      <li><strong>Ergonomic Handheld Controllers:</strong> Includes remote controls on flexible cables or wireless panels, allowing operators to adjust heights safely.</li>
      <li><strong>Anti-Slip Surface Designs:</strong> Platform surfaces feature non-slip checker patterns and automatic wheel stops to lock pallet jacks in place.</li>
    </ul>

    <h3>Serving Fleet Logistics across Gujarat and India</h3>
    <p>
      As a leading <strong>manual stacker manufacturer in Morbi</strong> and a certified truck tail lift supplier, we build lifting systems designed to handle the rough conditions of Indian highways and logistics yards. Our power packs are enclosed in weather-sealed cabinets to protect wiring from dust and moisture, ensuring long-term reliability.
    </p>

    <h3>A Complete Logistics Setup</h3>
    <p>
      Combining truck tail lifts with hand pallet jacks from a certified <strong>pallet truck supplier</strong> allows drivers to load, transport, and unload cargo independently. Combine this with stackers and forklifts from a trusted <strong>forklift supplier in Gujarat</strong> to create a highly efficient, safety-compliant cargo network.
    </p>
  `;

  const faqs = [
    {
      question: "What is the weight capacity of your truck tail lifts?",
      answer: "Our tail lifts support rated capacities of 1000kg (1 Ton), 1500kg (1.5 Tons), and 2000kg (2 Tons).",
    },
    {
      question: "Can these tail lifts be installed on any truck?",
      answer: "Yes, our mounting brackets are adjustable. They can be installed on most commercial cargo trucks, container bodies, and transport vans.",
    },
    {
      question: "How is the tail lift powered?",
      answer: "It is powered by a high-efficiency DC hydraulic pump pack. The pack connects directly to the vehicle's 12V or 24V starter battery, requiring no external fuel source.",
    },
    {
      question: "What platform materials do you offer?",
      answer: "We offer high-tensile structural steel platforms for heavy-duty applications and lightweight aluminum platforms to help optimize truck payload capacity.",
    },
    {
      question: "Do you supply warranty and installation support in India?",
      answer: "Yes, we provide direct warranty support, complete installation manuals, and technical assistance from our Morbi, Gujarat factory, serving logistics fleets throughout India.",
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
      canonicalPath="/tail-lift"
    />
  );
}
