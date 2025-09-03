import React from 'react';
import LogoIcon from '@/public/icons/Logo_black.svg';

export default function PriceDetail() {
  return (
    <div className="self-stretch px-3.5 py-6 bg-Static-White inline-flex flex-col justify-start items-start gap-4">
      <p className="justify-start text-Label-Subnormal title1-sb">결제 금액</p>
      <div className="self-stretch inline-flex justify-between items-center">
        <p className="justify-start text-Label-Alternative body1-m">
          금액 합계
        </p>
        <p className="flex justify-start items-start text-Label-Alternative body1-sb">
          Price 원
        </p>
      </div>
      <div className="self-stretch p-3 bg-Fill-99 rounded-md flex flex-col justify-start items-start gap-3">
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="justify-start text-Label-Alternative body1-m">
            하루 체험 금액
          </div>
          <div className="flex justify-start items-start text-Label-Alternative">
            Price 원
          </div>
        </div>
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="justify-start text-Label-Alternative body1-m">
            배송 금액
          </div>
          <div className="self-stretch flex justify-start items-center gap-2">
            <div className="p-1 bg-Primary-Normal flex justify-center items-center gap-1">
              <LogoIcon className="w-4 h-4 fill-Fill-99" />
              <p className="justify-start text-Static-White body3-m">
                서비스 체험 기간
              </p>
            </div>
            <div className="justify-start text-Primary-Normal body1-sb">
              무료
            </div>
          </div>
        </div>
      </div>
      <div className="w-96 h-px relative bg-Fill-98" />
      <div className="self-stretch inline-flex justify-between items-center">
        <div className="justify-start text-Label-Subnormal title1-sb">
          총 결제 금액
        </div>
        <div className="flex justify-start items-start text-Primary-Normal h4-sb ">
          Price 원
        </div>
      </div>
    </div>
  );
}
