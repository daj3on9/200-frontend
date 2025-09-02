import ItemDetail from '@/domains/common/components/ItemDetail';
import { CartItemState } from '@/domains/common/types/cartItemType';

interface Props {
  cartData: CartItemState[];
}
export default function CartItemDetail({ cartData }: Props) {
  return (
    <div className="bg-Static-White">
      <div className="flex justify-between items-center px-3.5 py-3 border-b border-Line-Subtler">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="allCheck"
            className="mr-2 w-4 h-4"
          />
          <label
            htmlFor="allCheck"
            className="title3-sb"
          >
            전체 선택
          </label>
        </div>
        <button className="text-center text-Label-Subnormal body2-m px-2 py-1 rounded outline outline-offset-[-1px] outline-Line-Subtler ">
          선택 삭제
        </button>
      </div>
      <div className="h-[366px] px-3.5">
        {cartData.map((item) => (
          <ItemDetail
            key={item.title}
            item={item}
            canCheck={true}
          />
        ))}
      </div>
    </div>
  );
}
