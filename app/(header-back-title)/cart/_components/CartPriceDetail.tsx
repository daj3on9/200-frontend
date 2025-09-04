import React from 'react';
import LogoIcon from '@/public/icons/Logo.svg';

export default function CartPriceDetail() {
  return (
    <div className="w-full px-3.5 py-4 bg-Static-White flex flex-col justify-start items-start gap-6">
      <div className="text-center justify-start text-Label-Subnormal title1-sb">
        구매 금액
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-2 text-Label-Normal body1-m">
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="text-center justify-start text-Label-Normal body1-m">
            체험 금액
          </div>
          <div className="text-Label-Normal body1-m">Price 원</div>
        </div>
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="text-center justify-start text-Label-Normal body1-m">
            배송 금액
          </div>
          <div className="self-stretch flex justify-start items-center gap-2">
            <div
              data-icon="true"
              className="p-1 bg-Fill-98 flex justify-center items-center gap-0.5"
            >
              <LogoIcon className="w-4 h-4" />
              <div className="justify-start text-Label-Alternative caption-m">
                서비스 체험 기간
              </div>
            </div>
            <div className="justify-start text-Primary-Normal body1-sb">
              무료
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-0 outline outline-offset-[-0.50px] outline-Line-Subtler" />
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="text-center justify-start text-Label-Subnormal title1-sb">
            총 결제 금액
          </div>
          <div className="text-Primary-Normal h3-b">Price*7 원</div>
        </div>
        <div className="text-center justify-start text-Label-Assistive body2-m">
          현재 7일 체험만 가능합니다.
        </div>
      </div>
    </div>
  );
}
