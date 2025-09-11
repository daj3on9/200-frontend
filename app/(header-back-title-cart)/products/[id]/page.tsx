import Header from '@/domains/common/components/header';
import ProductWrap from './_components/ProductWrap';
// import { getAPI } from '@/domains/common/api';
// import { Metadata } from 'next';
// import { ProductDetailState } from '@/domains/products/types/ProductsType';
// import { getImageUrl } from '@/domains/common/utils/image';

// // export async function generateMetadata({
// //   params,
// // }: {
// //   params: { id: string };
// // }): Promise<Metadata> {
// //   const { id } = await params;
// //   const product = await getAPI<ProductDetailState>(`/product/${id}`);
// //   return {
// //     title: `${product?.productName} | CHERRY`,
// //     description: `${product?.productName} 상세 페이지`,
// //     openGraph: {
// //       images: [getImageUrl(product?.productThumbnailUrls[0])],
// //     },
// //   };
// // }

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: idStr } = await params;
  const id = Number(idStr);

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
