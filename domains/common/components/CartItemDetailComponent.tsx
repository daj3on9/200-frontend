import React, { Dispatch, SetStateAction } from 'react';
import CloseIcon from '@/public/icons/close.svg';
import { CartItemState } from '@/domains/cart/types/cartItemType';
import { useCartQuery } from '@/domains/cart/hooks/useCartQuery';
import Image from 'next/image';

interface Props {
  item: CartItemState;
  checked?: boolean;
  toggleSelected?: (id: number) => void;
  canCheck?: boolean;
  setSelectedIds?: Dispatch<SetStateAction<number[]>>;
}

export default function CartItemDetailComponent({
  item,
  checked = false,
  toggleSelected,
  canCheck = false,
  setSelectedIds,
}: Props) {
  const { deleteMutation } = useCartQuery();
  return (
    <div className="py-3 flex justify-start items-start gap-3">
      {canCheck && (
        <input
          type="checkbox"
          className="w-4 h-4"
          checked={checked}
          onChange={() => toggleSelected?.(item.cartId)}
        />
      )}
      <div className="flex-1 flex justify-between items-start">
        <div className="flex justify-start items-center gap-3">
          <div className="w-20 h-20 relative rounded">
            <Image
              src={item.productThumbnailUrl}
              alt={item.productName}
              width={100}
              height={100}
              className="self-stretch"
            />
          </div>
          <div className="self-stretch flex flex-col justify-between items-start gap-1">
            <div>
              <p className="body2-r text-Label-Subnormal">{item.productName}</p>
              <p className="body2-r text-Label-Assistive">
                옵션 : {item.color}
              </p>
            </div>
            <p className="title1-sb text-Label-Normal">
              {item.dailyRentalPrice} 원
            </p>
          </div>
        </div>
        {canCheck && (
          <CloseIcon
            className="w-4 h-4 fill-Fill-20 cursor-pointer"
            onClick={() => {
              setSelectedIds!([]);
              deleteMutation.mutate([item.cartId]);
            }}
          />
        )}
      </div>
    </div>
  );
}
