import { OrderItem } from '@/domains/orders/types/orderType';

interface RentalFeeDetailsProps {
  totalAmount: number;
  items: OrderItem[];
  startDate: string;
  endDate: string;
}

export default function RentalFeeDetails({
  totalAmount,
  items,
  startDate,
  endDate,
}: RentalFeeDetailsProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center px-layout py-xxl gap-xs bg-Static-White">
      <div className="flex justify-between items-start self-stretch text-Label-Subnormal title2-sb">
        <p> 체험 요금 </p>
        <p> {totalAmount}</p>
      </div>
      <hr className="my-4 self-stretch border-t-[1px] border-Fill-95 " />
      <div className="self-stretch flex flex-col justify-start items-start gap-4">
        {items.map((item) => (
          <div
            key={item.productName}
            className="flex justify-between items-start self-stretch"
          >
            <div className="self-stretch flex flex-col items-start gap-xs">
              <p className="body2-r text-Label-Alternative">
                {' '}
                {item.productName}{' '}
              </p>
              <p className="body3-r text-Label-Assistive">
                {startDate} ~ {endDate}
              </p>
            </div>
            <div>
              <p className="text-Label-Alternative body1-m">
                {(item.price * 7).toLocaleString()} 원
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
