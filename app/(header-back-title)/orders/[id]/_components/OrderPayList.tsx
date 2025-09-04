import { Order } from '@/domains/orders/types/orderType';
import OrderTotalAmount from './payment/OrderTotalAmount';
import RentalFeeDetails from './payment/RentalFeeDetails';
import AdditionalCharges from './payment/AdditionalCharges';

interface OrderPayListProps {
  order: Order;
}

export default function OrderPayList({ order }: OrderPayListProps) {
  const totalPrice = order.items.reduce((acc, item) => acc + item.price * 7, 0);

  return (
    <div className="flex flex-1 flex-col items-start gap-m">
      <OrderTotalAmount totalPrice={totalPrice} />
      <RentalFeeDetails items={order.items} />
      <AdditionalCharges />
    </div>
  );
}
