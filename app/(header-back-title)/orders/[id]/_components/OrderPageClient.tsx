'use client';

import { useOrderDetailQuery } from '@/domains/orders/hooks/useOrderDetail';
import OrderHeader from './OrderHeader';
import OrderTabs from './OrderTabs';

export default function OrderPageClient({ rentalId }: { rentalId: number }) {
  const {
    data: rentalData,
    isLoading,
    isError,
  } = useOrderDetailQuery(rentalId);

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center text-center text-Label-Assistive">
        <p> 불러오는 중… </p>
      </div>
    );
  }

  if (isError || !rentalData) {
    return (
      <div className="flex h-full items-center justify-center text-center text-Label-Assistive">
        <p> 주문 정보를 찾을 수 없어요.</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar bg-Fill-99">
      <OrderHeader
        orderNumber={rentalData.rentalNumber}
        rentalStatus={rentalData.rentalStatus}
      />
      <OrderTabs order={rentalData} />
    </div>
  );
}
