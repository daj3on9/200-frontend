import { CartItemState } from '@/domains/cart/types/cartItemType';
import CartItemDetailComponent from '@/domains/common/components/CartItemDetailComponent';

interface Props {
  cartData: CartItemState[];
}

export default function RentalItem({ cartData }: Props) {
  return (
    <div className="px-3.5 flex flex-col justify-center bg-Static-White">
      {cartData.map((item, i) => (
        <CartItemDetailComponent
          key={`${item.cartId}_${i}`}
          item={item}
        />
      ))}
    </div>
  );
}
