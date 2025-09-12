import ItemDetail from '@/domains/common/components/ItemDetail';
import { OrderItem } from '@/domains/orders/types/orderType';

interface ProductInfoProps {
  items: OrderItem[];
  startDate: string;
  endDate: string;
}

export default function ProductInfo({
  items,
  startDate,
  endDate,
}: ProductInfoProps) {
  return (
    <div className="self-stretch flex flex-col items-start px-layout py-xxl gap-xxl bg-Static-White">
      <p className="title2-sb text-Label-Subnormal"> 제품 정보 </p>
      {items.map((item, index) => (
        <div
          key={`${item.productName}-${index}`}
          className="w-full"
        >
          <ItemDetail
            item={item}
            startDate={startDate}
            endDate={endDate}
          />
        </div>
      ))}
    </div>
  );
}
