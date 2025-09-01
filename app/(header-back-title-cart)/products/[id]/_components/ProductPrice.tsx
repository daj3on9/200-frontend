import Image from 'next/image';
import React from 'react';

export default function ProductPrice() {
  return (
    <div className="w-90 mt-3.5 self-stretch inline-flex flex-col justify-start items-start gap-6">
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="text-center justify-start text-Label-Normal body1-sb">
            일 체험 금액
          </div>
          <div className="flex justify-start items-center gap-0.5 text-center text-Label-Normal body1-sb">
            Price 원
          </div>
        </div>
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="text-center justify-start text-Label-Normal body1-sb">
            부가 금액
          </div>
          <div className="self-stretch flex justify-start items-center gap-2">
            <div
              data-icon="true"
              className="p-1 bg-Fill-98 flex justify-center items-center gap-0.5"
            >
              {/* <div className="w-4 h-4 relative overflow-hidden"> */}
              <Image
                src={'/icons/Logo.svg'}
                alt="체리 로고"
                width={12}
                height={12}
              />
              {/* </div> */}
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
      {/* <div className="self-stretch flex flex-col justify-center items-center gap-3.5"> */}
      <div className="w-full h-0 outline outline-Line-Subtler" />
      {/* </div> */}
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <div className="text-center justify-start text-Label-Assistive body2-m">
          현재 7일 체험만 가능합니다.
        </div>
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="text-center justify-start text-Label-Subnormal body1-sb">
            총 결제 금액
          </div>
          <div className="flex justify-start items-center gap-0.5 text-center text-Primary-Normal h3-b">
            Price*7 원
          </div>
        </div>
      </div>
    </div>
  );
}
