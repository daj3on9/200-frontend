import { CartItemState } from '@/domains/cart/types/cartItemType';
import React from 'react';
interface Props {
  item: CartItemState;
}

export default function ReportDoneDetail({ item }: Props) {
  return (
    <div className="px-3.5 py-4 bg-Static-White flex flex-col justify-start items-start gap-6">
      <div className="self-stretch flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <p className="body3-m text-Label-Assistive">{item.id}</p>
          <p className="title1-b text-Label-Subnormal">{item.title}</p>
          <p className="body3-m text-Label-Assistive">{item.option}</p>
        </div>

        <div className="w-24 h-24 border-1"> img</div>
      </div>
      <p className="w-full h-10 p-2 text-center bg-Fill-99 rounded-lg text-Label-Subnormal title3-m">
        리포트 작성으로{' '}
        <span className="text-Secondary-Normal title3-sb">Price</span>{' '}
        환급받았어요!
      </p>
    </div>
  );
}
