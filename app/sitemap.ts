import type { MetadataRoute } from "next";
import productData from "@/data.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://radheenterprise.co.in";
  
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
