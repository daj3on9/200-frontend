import React from 'react';
import { OrderlItem } from '@/domains/orders/types/orderType';
import { formatDate } from '../utils/date';
import Image from 'next/image';
import { getImageUrl } from '../utils/image';

interface Props {
  item: OrderlItem;
  startDate?: string;
  endDate?: string;
}

export default function ItemDetail({ item, startDate, endDate }: Props) {
  return (
    <div className="py-3 flex justify-start items-start gap-3">
      <div className="flex-1 flex justify-between items-start">
        <div className="flex justify-start items-center gap-3">
          {/* 이미지 추가 필요 */}
          <div className="w-20 h-20 relative ds-rounded-xs">
            <Image
              src={getImageUrl(item.productThumbnailUrl)}
              alt={item.productName}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="self-stretch flex flex-col justify-between items-start gap-1">
            <div>
              <p className="body2-r text-Label-Subnormal">{item.productName}</p>
              <p className="body2-r text-Label-Assistive">
                옵션 : {item.color}
              </p>
              {startDate && endDate && (
                <p className="body2-r text-Label-Assistive">
                  {formatDate(startDate)} ~ {formatDate(endDate)}
                </p>
              )}
            </div>
            <p className="title1-sb text-Label-Normal">
              {item.price.toLocaleString()} 원
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
