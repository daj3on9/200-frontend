import { RentalStatus } from '@/domains/orders/types/orderType';
import OrderStatusLabel from '../../_components/OrderStatusLabel';

interface OrderHeaderProps {
  orderNumber: string;
  rentalStatus: RentalStatus;
}

export default function OrderHeader({
  orderNumber,
  rentalStatus,
}: OrderHeaderProps) {
  return (
    <div className="flex w-full px-layout py-xxl items-center gap-m bg-Static-White">
      <div className="h4-b text-Label-Subnormal"> {orderNumber}</div>
      <OrderStatusLabel status={rentalStatus} />
    </div>
  );
}
