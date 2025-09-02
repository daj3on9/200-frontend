import React from 'react';
import CloseIcon from '@/public/icons/close.svg';
import { CartItemState } from '../types/cartItemType';

interface Props {
  item: CartItemState;
  canCheck?: boolean;
}

export default function ItemDetail({ item, canCheck = false }: Props) {
  return (
    <div className="py-3 flex justify-start items-start gap-3">
      {canCheck && (
        <input
          type="checkbox"
          className="w-4 h-4"
        />
      )}
      <div className="flex-1 flex justify-between items-start">
        <div className="flex justify-start items-center gap-3">
          <div className="w-20 h-20 relative rounded border-1">img</div>
          <div className="self-stretch flex flex-col justify-between items-start gap-1">
            <div>
              <p className="body2-r text-Label-Subnormal">{item.title}</p>
              <p className="body2-r text-Label-Assistive">
                옵션 : {item.option}
              </p>
            </div>
            <p className="title1-sb text-Label-Normal">{item.price} 원</p>
          </div>
        </div>
        {canCheck && <CloseIcon className="w-4 h-4 fill-Fill-20" />}
      </div>
    </div>
  );
}
