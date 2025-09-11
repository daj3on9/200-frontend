import OrderTotalAmount from './payment/OrderTotalAmount';
import RentalFeeDetails from './payment/RentalFeeDetails';
import AdditionalCharges from './payment/AdditionalCharges';
import { usePaymentQuery } from '@/domains/orders/hooks/usePaymentQuery';

interface OrderPayListProps {
  rentalId: number;
}

export default function OrderPayList({ rentalId }: OrderPayListProps) {
  const { data: order, isLoading, isError } = usePaymentQuery(rentalId);

  if (isLoading) {
    return (
      <div className="flex flex-1 flex-col items-start gap-m bg-Fill-99">
        <div className="flex h-full items-center justify-center text-center text-Label-Assistive">
          <p> 불러오는 중… </p>
        </div>
      </div>
    );
  }

  if (isError || !order) {
    return (
      <div className="flex flex-1 flex-col items-start gap-m bg-Fill-99">
        <div className="flex h-full items-center justify-center text-center text-Label-Assistive">
          <p> 결제 정보를 찾을 수 없어요.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col items-start gap-m bg-Fill-99">
      <OrderTotalAmount totalPrice={order.totalAmount} />
      <RentalFeeDetails
        totalAmount={order.totalAmount}
        items={order.items}
        startDate={order.rentalStartedAt}
        endDate={order.rentalEndedAt}
      />
      <AdditionalCharges />
    </div>
  );
}
