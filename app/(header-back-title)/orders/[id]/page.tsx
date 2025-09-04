import Header from '@/domains/common/components/header';
import { mockOrders } from '@/domains/orders/api/mock';
import OrderHeader from './_components/OrderHeader';
import OrderTabs from './_components/OrderTabs';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const order = mockOrders.find((order) => order.orderNumber === id);

  if (!order) {
    return (
      <div className="flex flex-col h-screen items-center justify-center">
        <Header
          showBack
          title="주문상세"
          showHome
        />
        <p>주문 정보를 찾을 수 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <Header
        showBack
        title="주문상세"
        showHome
      />
      <div className="flex-1 overflow-y-auto no-scrollbar bg-Fill-99">
        <OrderHeader order={order} />
        <OrderTabs order={order} />
      </div>
    </div>
  );
}
