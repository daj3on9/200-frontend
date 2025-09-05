import { Order } from '@/domains/orders/types/orderType';
import OrderStatusLabel from '../../_components/OrderStatusLabel';

interface OrderHeaderProps {
  order: Order;
}

export default function OrderHeader({ order }: OrderHeaderProps) {
  return (
    <div className="flex w-full px-layout py-xxl items-center gap-m bg-Static-White">
      <div className="h3-b text-Label-Subnormal"> {order.orderNumber}</div>
      <OrderStatusLabel status={order.status} />
    </div>
  );
}
