import { ProductDetailState } from '@/domains/products/types/ProductsType';
import Image from 'next/image';
import React from 'react';

interface Props {
  detailData: ProductDetailState;
}

export default function ProductPrice({ detailData }: Props) {
  return (
    <div className="w-90 mt-3.5 self-stretch inline-flex flex-col justify-start items-start gap-6">
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <div className="self-stretch inline-flex justify-between items-center">
          <p className="text-center justify-start text-Label-Normal body1-sb">
            하루 체험 금액
          </p>
          <p className="flex justify-start items-center gap-0.5 text-center text-Label-Normal body1-sb">
            {detailData.dailyRentalPrice} 원
          </p>
        </div>
        <div className="self-stretch inline-flex justify-between items-center">
          <p className="text-center justify-start text-Label-Normal body1-sb">
            배송 금액
          </p>
          <div className="self-stretch flex justify-start items-center gap-2">
            <div
              data-icon="true"
              className="p-1 bg-Fill-98 flex justify-center items-center gap-0.5"
            >
              <Image
                src={'/icons/Logo.svg'}
                alt="체리 로고"
                width={12}
                height={12}
              />
              <p className="justify-start text-Label-Alternative caption-m">
                서비스 체험 기간
              </p>
            </div>
            <p className="justify-start text-Primary-Normal body1-sb">무료</p>
          </div>
        </div>
      </div>
      <div className="w-full h-0 outline outline-Line-Subtler" />
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <p className="text-center justify-start text-Label-Assistive body2-m">
          현재 7일 체험만 가능합니다.
        </p>
        <div className="self-stretch inline-flex justify-between items-center">
          <p className="text-center justify-start text-Label-Subnormal body1-sb">
            총 결제 금액
          </p>
          <p className="flex justify-start items-center gap-0.5 text-center text-Primary-Normal h3-b">
            {detailData.dailyRentalPrice * 7} 원
          </p>
        </div>
      </div>
    </div>
  );
}
