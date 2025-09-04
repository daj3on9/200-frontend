import { CartItemState } from '@/domains/cart/types/cartItemType';
import ItemDetail from '@/domains/common/components/ItemDetail';

interface Props {
  cartData: CartItemState[];
}

export default function RentalItem({ cartData }: Props) {
  return (
    <div className="px-3.5 flex flex-col justify-center bg-Static-White">
      {cartData.map((item) => (
        <ItemDetail
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}
