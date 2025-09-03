import ProductCard from './ProductCard';
import type { Product } from '@/domains/products/types/ProductsType';

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="w-full grid grid-cols-2">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
