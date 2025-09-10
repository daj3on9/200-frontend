import Header from '@/domains/common/components/header';
import { Metadata } from 'next';
import OrderPageClient from './_components/OrderPageClient';

export const metadata: Metadata = {
  title: '주문 상세',
  description:
    'Cherry 주문 상세 — 주문한 상품의 체험 정보, 결제 내역을 확인하세요.',
  icons: {
    icon: '/icons/Logo.svg',
  },
};

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: idStr } = await params;
  const rentalId = Number(idStr);

  return (
    <div className="flex flex-col h-screen">
      <Header
        showBack
        title="주문상세"
        showHome
      />
      <OrderPageClient rentalId={rentalId} />
    </div>
  );
}
