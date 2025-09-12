'use client';
import { useCartQuery } from '@/domains/cart/hooks/useCartQuery';
import { CartItemState } from '@/domains/cart/types/cartItemType';
import CartItemDetailComponent from '@/domains/common/components/CartItemDetailComponent';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  cartData: CartItemState[];
  selectedIds: number[];
  setSelectedIds: Dispatch<SetStateAction<number[]>>;
}
export default function CartItemDetail({
  cartData,
  selectedIds,
  setSelectedIds,
}: Props) {
  const { deleteMutation } = useCartQuery();

  const handleSelectAll = () => {
    if (selectedIds.length === cartData.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(cartData.map((item) => item.cartId));
    }
  };

  const toggleSelected = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-Static-White">
      <div className="flex justify-between items-center px-3.5 py-3 border-b border-Line-Subtler">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="allCheck"
            className="mr-2 w-4 h-4"
            onChange={handleSelectAll}
            checked={selectedIds.length === cartData.length}
          />
          <label
            htmlFor="allCheck"
            className="title3-sb"
          >
            전체 선택
          </label>
        </div>
        <button
          className={`text-center text-Label-Subnormal body2-m px-2 py-1 rounded outline outline-offset-[-1px] outline-Line-Subtler ${
            +selectedIds.length ? 'cursor-pointer' : ''
          } `}
          onClick={() => {
            deleteMutation.mutate(selectedIds);
            setSelectedIds([]);
          }}
          disabled={!selectedIds.length}
        >
          선택 삭제
        </button>
      </div>
      <div className="h-[366px] px-3.5 flex flex-col ">
        {cartData.map((item, i) => (
          <CartItemDetailComponent
            key={`${item.cartId}_${i}`}
            item={item}
            checked={selectedIds.includes(item.cartId)}
            toggleSelected={toggleSelected}
            canCheck={true}
            setSelectedIds={setSelectedIds}
          />
        ))}
      </div>
    </div>
  );
}
