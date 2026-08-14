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

  const cleanDescription = `${product.description.substring(0, 150)}... Certified ${product.name} by Radhe Enterprise. Check load capacity specifications, models, and dimensions. Manufacturer in Gujarat, India.`;

  return {
    title: `${product.name} Manufacturer in Gujarat | RADHE ENTERPRISE`,
    description: cleanDescription,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} Manufacturer in Gujarat, India | RADHE ENTERPRISE`,
      description: product.description,
      url: `https://www.radheenterprise.co.in/products/${product.slug}`,
      siteName: "Radhe Enterprise",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `/images/products/${product.slug}.png`,
          width: 800,
          height: 800,
          alt: `${product.name} - Material Handling Equipment`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | RADHE ENTERPRISE`,
      description: cleanDescription,
      images: [`/images/products/${product.slug}.png`],
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

  const baseUrl = "https://www.radheenterprise.co.in";

  // Product Schema
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": `${baseUrl}/images/products/${product.slug}.png`,
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "Radhe Enterprise"
    },
    "offers": {
      "@type": "Offer",
      "url": `${baseUrl}/products/${product.slug}`,
      "priceCurrency": "INR",
      "price": "Contact for Quote",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition"
    },
    "category": product.category,
    "model": product.models.join(", ")
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is the warranty coverage for the ${product.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `The ${product.name} is backed by Radhe Enterprise's comprehensive manufacturer warranty, which covers the structural steel chassis, hydraulic cylinder welds, and sealing kits. Contact our Morbi office for details.`
        }
      },
      {
        "@type": "Question",
        "name": `How can I request a customized quote for the ${product.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `You can submit the inquiry form directly on this page, or click the WhatsApp Support link to connect with our logistics team in Gujarat. We provide custom quotations with shipping rates within 2 hours.`
        }
      },
      {
        "@type": "Question",
        "name": `Does Radhe Enterprise manufacture custom heights or widths for the ${product.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes. As a leading material handling equipment manufacturer in Gujarat, India, we offer tailored chassis extensions, customized fork lengths, adjustable fork spreads, and specialty wheel options.`
        }
      }
    ]
  };

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.radheenterprise.co.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://www.radheenterprise.co.in/#products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.name,
        "item": `${baseUrl}/products/${product.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ProductDetailClient product={product as any} />
    </>
  );
}
