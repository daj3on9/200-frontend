import OrderTotalAmount from './payment/OrderTotalAmount';
import RentalFeeDetails from './payment/RentalFeeDetails';
import AdditionalCharges from './payment/AdditionalCharges';
import { usePaymentQuery } from '@/domains/orders/hooks/usePaymentQuery';

interface OrderPayListProps {
  paymentId: number;
}

export default function OrderPayList({ paymentId }: OrderPayListProps) {
  // TODO : api 콜
  const { data: order, isLoading, isError } = usePaymentQuery(paymentId);

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center text-center text-Label-Assistive">
        <p> 불러오는 중… </p>
      </div>
    );
  }

  if (isError || !order) {
    return (
      <div className="flex h-full items-center justify-center text-center text-Label-Assistive">
        <p> 결제 정보를 찾을 수 없어요.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col items-start gap-m">
      <OrderTotalAmount totalPrice={order?.totalAmount} />
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
