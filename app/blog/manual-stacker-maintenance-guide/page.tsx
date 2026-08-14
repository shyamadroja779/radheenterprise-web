import React from "react";
import { Metadata } from "next";
import BlogPost from "@/components/BlogPost";

export const metadata: Metadata = {
  title: "Manual Stacker Maintenance Guide: Checklist | Radhe Enterprise",
  description: "A comprehensive manual stacker maintenance checklist. Learn about hydraulic oil replacement, chain lubrication, and seal inspections.",
  alternates: {
    canonical: "/blog/manual-stacker-maintenance-guide",
  },
  openGraph: {
    title: "Manual Stacker Maintenance Guide: Checklist | Radhe Enterprise",
    description: "Keep your manual hydraulic stackers running smoothly with regular pump, chain, and wheel maintenance checklists.",
    url: "https://www.radheenterprise.co.in/blog/manual-stacker-maintenance-guide",
    type: "article",
  },
};

export default function ManualStackerMaintenanceGuide() {
  const title = "Manual Stacker Maintenance Guide & Checklist";
  const description = "Learn how to prolong the lifespan of your manual hydraulic stacker with a preventive maintenance checklist covering cylinder seals, lift chains, and wheel replacements.";
  const category = "Maintenance Guide";
  const date = "July 12, 2026";
  const readTime = "5 Min Read";
  const slug = "manual-stacker-maintenance-guide";

  const contentHtml = `
    <h2>Maximizing Equipment Service Life</h2>
    <p>
      One of the main advantages of manual hydraulic stackers over electric stackers is their simple mechanical design. With no batteries, motors, or electronic speed controllers, maintenance requirements are minimal. However, to ensure smooth lifting and prevent hydraulic failures, a regular preventive maintenance schedule is required. This guide provides a simple maintenance checklist for your manual stackers.
    </p>

    <h3>1. Hydraulic System Maintenance and Seal Inspections</h3>
    <p>
      The hydraulic pump cylinder is the heart of your manual stacker. Over time, dust and dirt can wear down the internal seals, leading to pressure loss or oil leaks:
      <ul>
        <li><strong>Check for Oil Leaks:</strong> Periodically inspect the base of the hydraulic cylinder and the piston rod for oil leaks.</li>
        <li><strong>Check and Top Up Oil Levels:</strong> Verify the hydraulic oil level every six months. If the forks fail to reach their maximum height when pumped, the oil level may be low. Refill with high-grade anti-wear hydraulic oil.</li>
        <li><strong>Inspect the Release Valve:</strong> Ensure the lowering release valve (pressure relief trigger or lever) operates smoothly and holds pressure under load without drifting downward.</li>
      </ul>
    </p>

    <h3>2. Lubricating Chains and Mast Channels</h3>
    <p>
      The lifting carriage slides along the steel mast channels supported by dual steel chains:
      <ul>
        <li><strong>Chain Lubrication:</strong> Clean and lubricate the lifting chains monthly with a high-quality grease or chain oil to prevent friction and rust. Inspect the chains for any stiff links or signs of elongation.</li>
        <li><strong>Mast Channels:</strong> Apply grease to the inner channels of the C-section or channel steel mast where the guide rollers slide, ensuring smooth, silent vertical travel.</li>
      </ul>
    </p>

    <h3>3. Wheel and Roller Inspections</h3>
    <p>
      The wheels carry the full load weight and roll over floor surfaces:
      <ul>
        <li><strong>Inspect for Wear:</strong> Check the steering wheels and fork rollers regularly. If you use Polyurethane (PU) wheels, check for flat spots or cracks. If you use Nylon or Polypropylene (PP) wheels in dusty conditions, ensure the bearings are clean.</li>
        <li><strong>Debris Removal:</strong> Remove any wire, plastic wrap, or debris wrapped around the axles that could lock the wheels and drag across the floor.</li>
      </ul>
    </p>

    <h3>4. Mechanical Structure Checks</h3>
    <p>
      Inspect the structural parts of the stacker:
      <ul>
        <li>Verify all bolts, pins, and retaining rings are secure.</li>
        <li>Inspect the forks for any signs of misalignment or physical damage.</li>
        <li>Ensure the protective wire mesh guard is securely mounted to protect the operator.</li>
      </ul>
    </p>

    <h3>Summary Maintenance Checklist</h3>
    <p>
      Inspect the hydraulic cylinder base for oil leaks, check oil levels every six months, lubricate the lifting chains monthly, and clean the wheels of any wrapped debris. These simple steps will keep your manual stacker operating reliably for years.
    </p>
  `;

  return (
    <BlogPost
      title={title}
      description={description}
      category={category}
      date={date}
      readTime={readTime}
      contentHtml={contentHtml}
      slug={slug}
    />
  );
}
