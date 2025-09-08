import Header from '@/domains/common/components/header';
import OrderList from './_components/OrderList';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '이용 내역',
  description:
    'Cherry 이용 내역 — 내 주문 이력과 배송 조회, 체험 기간, 옵션·요금 정보를 간편하게 확인하세요.',
  icons: {
    icon: '/icons/Logo.svg',
  },
};

export default function page() {
  return (
    <div className="flex flex-col h-screen">
      <Header
        showBack
        title="이용 내역"
      />
      <div className="flex-1 overflow-y-auto no-scrollbar bg-Fill-99">
        <OrderList />
      </div>
    </div>
  );
}
