import Header from '@/domains/common/components/header';
import ProductWrap from './_components/ProductWrap';
// import { getAPI } from '@/domains/common/api';
// import { Metadata } from 'next';

// export async function generateMetadata({
//   params,
// }: {
//   params: { id: string };
// }): Promise<Metadata> {
//   const product = await getAPI(`/productDetail?${params.id}`);
//   return {
//     title: `${product.name} | CHERRY`,
//     description: product.description,
//     openGraph: {
//       images: [product.image],
//     },
//   };
// }

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div className="h-screen overflow-hidden relative bg-Fill-99">
      <Header
        showBack
        title="상세 정보"
        showCart
      />
      <main>
        <ProductWrap id={id} />
      </main>
    </div>
  );
}
