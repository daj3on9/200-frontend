import { RentalItem } from '@/domains/rentalApply/types/RentalItemType';
import Image from 'next/image';
import React from 'react';
interface Props {
  item: RentalItem;
}

export default function ReportDoneDetail({ item }: Props) {
  const totalPrice = item.items.reduce((acc, v) => acc + v.price / 7, 0);
  const restLeng = item.items.length - 1;
  const firstItem = item.items?.[0];
  if (!firstItem) return null;

  return (
    <div className="px-3.5 py-4 bg-Static-White flex flex-col justify-start items-start gap-6">
      <div className="self-stretch flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <p className="body3-m text-Label-Assistive">{item.rentalId}</p>
          <p className="title1-b text-Label-Subnormal">
            {firstItem.productName} {restLeng > 0 ? `외 ${restLeng} 건` : ``}
          </p>
          <p className="body3-m text-Label-Assistive">{firstItem.color}</p>
        </div>

        <div className="w-24 h-24">
          <Image
            src={firstItem.productThumbnailUrl}
            alt={firstItem.productName}
            width={100}
            height={100}
            className="self-stretch"
          />
        </div>
      </div>
      <p className="w-full h-10 p-2 text-center bg-Fill-99 rounded-lg text-Label-Subnormal title3-m">
        리포트 작성으로{' '}
        <span className="text-Secondary-Normal title3-sb">{totalPrice}</span>{' '}
        환급받았어요!
      </p>
    </div>
  );
}
