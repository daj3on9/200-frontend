import Header from '@/domains/common/components/header';
import ProductGrid from './_components/ProductGrid';
import { mockProducts } from '@/domains/products/api/mock';
import FiltersBar from './_components/FiltersBar';
import BrandTabs from './_components/BrandTabs';

export default function page() {
  return (
    <div className="flex flex-col h-screen">
      <Header
        showBack
        title="체험하기"
        showCart
      />
      <div className="flex-shrink-0 bg-Static-White">
        <BrandTabs />
        <FiltersBar />
      </div>
      <div className="flex-1 overflow-y-auto no-scrollbar bg-Static-White">
        <ProductGrid products={mockProducts} />
      </div>
    </div>
  );
}
