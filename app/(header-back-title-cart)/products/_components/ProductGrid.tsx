import ProductCard from './ProductCard';
import type { Product } from '@/domains/products/types/ProductsType';

export default function ProductGrid({ products }: { products: Product[] }) {
  if (products.length < 1) {
    return (
      <div className="flex h-full items-center justify-center bg-Fill-99">
        <p className="body1-m text-Label-Alternative">
          조건에 맞는 제품이 없어요
        </p>
      </div>
    );
  }
  return (
    <div className="w-full min-h-full grid grid-cols-2">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
