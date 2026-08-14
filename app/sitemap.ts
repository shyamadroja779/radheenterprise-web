import type { MetadataRoute } from "next";
import productData from "@/data.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.radheenterprise.co.in";
  
  // Static pages
  const staticRoutes = [
    "",
    "/manual-stacker",
    "/electric-stacker",
    "/forklift",
    "/drum-handler",
    "/pallet-truck",
    "/lift-table",
    "/tail-lift",
    "/aerial-work-platform",
    "/blog",
    "/blog/manual-stacker-vs-forklift",
    "/blog/how-to-choose-the-right-pallet-truck",
    "/blog/best-material-handling-equipment-for-warehouses",
    "/blog/benefits-of-electric-stackers",
    "/blog/warehouse-safety-tips",
    "/blog/manual-stacker-buying-guide",
    "/blog/manual-stacker-vs-electric-stacker",
    "/blog/how-to-choose-the-right-manual-stacker",
    "/blog/manual-stacker-safety-guide",
    "/blog/manual-stacker-maintenance-guide",
    "/blog/hand-pallet-truck-buying-guide",
    "/blog/manual-vs-electric-pallet-truck",
    "/blog/electric-stacker-buying-guide",
  ];

  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Dynamic product pages
  const productUrls = productData.products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticUrls, ...productUrls];
}
