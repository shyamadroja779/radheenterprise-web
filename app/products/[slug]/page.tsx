import { Metadata } from "next";
import { notFound } from "next/navigation";
import productData from "@/data.json";
import ProductDetailClient from "@/components/ProductDetailClient";

// Generate static params for static site generation of all 37 products
export async function generateStaticParams() {
  return productData.products.map((p) => ({
    slug: p.slug,
  }));
}

// Generate SEO Optimized Meta Tags
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productData.products.find((p) => p.slug === slug);
  
  if (!product) {
    return {
      title: "Product Not Found | RADHE ENTERPRISE",
      description: "The requested material handling equipment model could not be found.",
    };
  }

  return {
    title: `${product.name} | RADHE ENTERPRISE`,
    description: `${product.description.substring(0, 155)}... Get industrial specifications, load capacity metrics, and pricing.`,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | RADHE ENTERPRISE`,
      description: product.description,
      images: [
        {
          url: `/images/products/${product.slug}.png`,
          width: 800,
          height: 800,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productData.products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product as any} />;
}
