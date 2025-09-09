import ProductCard from './ProductCard';

export default function ProductGrid({
  loading,
  products,
}: {
  loading?: boolean;
  products: {
    id: string;
    brand: string;
    name: string;
    dailyRentalPrice: number;
    thumbnailImageUrl: string;
  }[];
}) {
  if (loading) {
    return (
      <div className="flex h-full items-center justify-center bg-Fill-99">
        <p className="body1-m text-Label-Alternative">불러오는 중…</p>
      </div>
    );
  }

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
