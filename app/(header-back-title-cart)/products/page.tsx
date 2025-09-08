import Header from '@/domains/common/components/header';
import ProductsClient from './_components/ProductsClient';

export default function page() {
  return (
    <div className="flex flex-col h-screen">
      <Header
        showBack
        title="체험하기"
        showCart
      />
      <ProductsClient />
    </div>
  );
}
