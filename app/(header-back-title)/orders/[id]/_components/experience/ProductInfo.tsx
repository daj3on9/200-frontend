import ItemDetail from '@/domains/common/components/ItemDetail';
import { OrderItemState } from '@/domains/orders/types/orderType';

interface ProductInfoProps {
  items: OrderItemState[];
}

export default function ProductInfo({ items }: ProductInfoProps) {
  return (
    <div className="self-stretch flex flex-col items-start px-layout py-xxl gap-xxl bg-Static-White">
      <p className="title2-sb text-Label-Subnormal"> 제품 정보 </p>
      {items.map((item) => (
        <div
          key={item.id}
          className="w-full"
        >
          <ItemDetail
            item={item}
            checked={false}
            toggleSelected={() => {}}
            canCheck={false}
            startDate={item.startDate}
            endDate={item.endDate}
          />
        </div>
      ))}
    </div>
  );
}
