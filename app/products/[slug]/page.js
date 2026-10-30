import { productCategories, getProductBySlug, getAllProducts } from '@/lib/productData';
import ProductPageClient from '@/components/ProductPageClient';

// Generate static params for all product slugs
export function generateStaticParams() {
  return getAllProducts().map((product) => ({
    slug: product.slug,
  }));
}

// Dynamic metadata per product
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found | RB Earthing',
      description: 'The requested product could not be found.',
    };
  }

  return {
    title: `${product.name} | RB Earthing Pvt. Ltd.`,
    description: product.description,
    openGraph: {
      title: `${product.name} — ${product.tagline}`,
      description: product.description,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;

  return <ProductPageClient initialSlug={slug} />;
}
