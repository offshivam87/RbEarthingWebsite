import { redirect } from 'next/navigation';
import { productCategories } from '@/lib/productData';

export const metadata = {
  title: 'Products | RB Earthing Pvt. Ltd.',
  description:
    'Explore our complete range of earthing, grounding, and lightning protection products including electrodes, pit covers, arresters, back fill compounds, strips, copper bonded rods, and industrial clamps.',
};

export default function ProductsIndexPage() {
  // Redirect to the first product
  const firstSlug = productCategories[0].products[0].slug;
  redirect(`/products/${firstSlug}`);
}
