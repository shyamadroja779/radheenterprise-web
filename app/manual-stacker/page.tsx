import React from "react";
import { Metadata } from "next";
import CategoryHub from "@/components/CategoryHub";

export const metadata: Metadata = {
  title: "Manual Stacker Manufacturer in Gujarat | Radhe Enterprise",
  description: "Radhe Enterprise is a premier manual stacker manufacturer in Gujarat, India. Find high-performance CTY manual stackers, technical specifications, and custom lifting solutions.",
  alternates: {
    canonical: "/manual-stacker",
  },
  openGraph: {
    title: "Manual Stacker Manufacturer in Gujarat | Radhe Enterprise",
    description: "Premium manual hydraulic stackers built with high-tensile C-section steel. Rated load capacity from 1000kg to 3000kg. Shipping across India.",
    url: "https://radheenterprise.co.in/manual-stacker",
    type: "website",
  },
};

export default function ManualStackerPage() {
  const title = "Manual Stackers";
  const subtitle = "Premium hydraulic manual lift stackers engineered with high-tensile mast channels for safe, heavy-duty warehouse applications.";
  const categories = ["Manual Stackers"];
  
  const seoHeading = "Leading Manual Stacker Manufacturer in Gujarat & India";
  
  const seoContentHtml = `
    <p>
      In modern warehousing and logistics operations, efficiency, safety, and durability are the cornerstones of success. As a premier <strong>material handling equipment manufacturer</strong> based in Morbi, Radhe Enterprise has established itself as the leading <strong>manual stacker manufacturer in Gujarat</strong>. We design and fabricate high-quality hand-operated hydraulic lifting machinery that caters specifically to industrial plants, ceramic warehouses, paper mills, and manufacturing factories across Rajkot, Ahmedabad, Morbi, and the rest of India.
    </p>
    
    <h3>Why Choose Our Manual Hydraulic Stackers?</h3>
    <p>
      Our CTY manual stackers are engineered utilizing heavy-duty C-section steel masts, which offer unmatched rigidity and resist bending under maximum load capacities. Available in models ranging from 1000kg (1 Ton) to 3000kg (3 Tons) rated load capacity, and lift heights from 1600mm to 3500mm, these machines provide a versatile, electricity-free alternative to heavy forklifts. As a trusted <strong>pallet truck supplier</strong> and lifting specialist, we guarantee that each stacker is equipped with high-pressure, leak-proof hydraulic cylinders. These systems can be operated via both hand levers and foot pedals, minimizing user fatigue and accelerating pallet storage times.
    </p>

    <h3>Key Engineering and Technical Advantages</h3>
    <ul>
      <li><strong>Robust C-Mast Structure:</strong> Crafted from premium hot-rolled carbon steel, ensuring structural integrity under high load stresses.</li>
      <li><strong>Advanced Hydraulic Security:</strong> An integrated oil cylinder limit valve acts as a physical height lock, avoiding over-extension without the need for manual limit screws.</li>
      <li><strong>Optimized Mobility:</strong> Fitted with durable polyurethane (PU) steering wheels and tandem fork rollers, allowing smooth, silent maneuverability over concrete warehouse floors while preventing floor scratching.</li>
      <li><strong>Industrial Safety Design:</strong> Outfitted with mechanical wheel brakes and protective wire mesh guards to shield operators from moving chains or lifting carriages.</li>
    </ul>

    <h3>Serving Gujarat's Industrial Hubs and Beyond</h3>
    <p>
      Morbi is renowned as India's ceramic capital, which demands robust equipment to transport raw clay, tiles, and heavy equipment parts. By acting as a specialized <strong>manual stacker manufacturer in Gujarat</strong>, we have optimized our supply chains to deliver rugged manual lifters directly to industrial estates in Rajkot, Surat, Vadodara, and Ahmedabad. Our quick-dispatch network also ensures that operations across India have seamless access to parts, maintenance guides, and customization options (such as adjustable fork widths ranging from 330mm to 680mm and extendable straddle legs for closed-bottom pallets).
    </p>

    <h3>Operational Maintenance and Lifespan</h3>
    <p>
      Unlike complex electronic vehicles, manual hydraulic stackers have very low maintenance requirements. Checking the hydraulic oil levels, lubricating the lifting chain, and inspecting wheel wear are the only standard procedures needed to ensure a decade of hassle-free operation. If your operations require horizontal transport over longer distances alongside lifting, our team can pair your stacker order with high-end hand pallet jacks as we are a premier <strong>pallet truck supplier</strong>, creating a unified material handling package.
    </p>
  `;

  const faqs = [
    {
      question: "What is the maximum load capacity for your manual stackers?",
      answer: "Our standard CTY manual stackers are available in capacities of 1000kg (CTY-E10), 1500kg (CTY-E15), 2000kg (CTY-E20), and 3000kg (CTY-E30). Custom configurations are also available upon request.",
    },
    {
      question: "What lifting heights do your manual stackers support?",
      answer: "Our standard heights range from 1600mm to 3000mm. The mast can be custom manufactured to reach up to 3500mm or more depending on your warehouse racking height requirements.",
    },
    {
      question: "Can these stackers handle double-faced (closed-bottom) pallets?",
      answer: "Standard manual stackers have fixed legs directly underneath the forks, meaning they are designed for open-bottom pallets. For closed-bottom pallets, we manufacture the CTY Stretchable Leg Manual Stacker with adjustable straddle legs that wrap around the outside of the pallet.",
    },
    {
      question: "Why is Radhe Enterprise the preferred manufacturer in Gujarat?",
      answer: "As an engineering-first manual stacker manufacturer in Gujarat, we build our machines using premium structural steels and certified hydraulic components. Our proximity to major shipping hubs in Morbi, Rajkot, and Ahmedabad guarantees fast shipping and ready availability of spare parts.",
    },
    {
      question: "What maintenance is required for a hydraulic manual stacker?",
      answer: "Standard maintenance involves checking the hydraulic oil every 6 months, lubricating the dual lifting chains, and inspecting the polyurethane wheels for flat spots or debris. No electrical systems or battery chargers are needed, making maintenance extremely inexpensive.",
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
      canonicalPath="/manual-stacker"
    />
  );
}
