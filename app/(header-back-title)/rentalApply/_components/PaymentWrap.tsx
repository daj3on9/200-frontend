import Image from 'next/image';
import React from 'react';

export default function PaymentWrap() {
  const PaymentList = [
    { id: 'general', name: '일반/카드', image: '/payment/card.png' },
    { id: 'kakao', name: '카카오페이', image: '/payment/kakao.png' },
    { id: 'naver', name: '네이버페이', image: '/payment/naver.png' },
    { id: 'toss', name: '토스페이', image: '/payment/toss.png' },
  ];
  return (
    <div className="px-3.5 py-6 bg-Static-White flex flex-col justify-start items-start gap-4">
      <div className="justify-start text-Label-Subnormal title1-sb">
        결제 수단
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {PaymentList.map((v) => (
          <div
            key={v.id}
            className="w-[47%] px-2 py-3 rounded-md outline outline-offset-[-1px] outline-Line-Subtler flex justify-start items-center gap-2"
          >
            <Image
              src={v.image}
              alt={`${v.name} 이미지`}
              width={20}
              height={20}
              className="w-8 h-8 rounded-full"
            />
            <div className="justify-start text-Label-Subnormal body2-m">
              {v.name}
            </div>
          </div>
        ))}
        {/* <div className="flex flex-col justify-start items-start gap-3">
          <div className="self-stretch inline-flex justify-start items-center gap-3">
            <div
              data-active="false"
              className="w-44 px-2 py-3 rounded-xl outline outline-1 outline-offset-[-1px] outline-Line-Subtler flex justify-start items-center gap-2"
            >
              <img
                className="w-8 h-8 relative rounded-[999px]"
                src="https://placehold.co/32x32"
              />
              <div className="justify-start text-Label-Subnormal text-sm font-medium font-['Pretendard'] leading-tight">
                Label
              </div>
            </div>
            <div
              data-active="false"
              className="w-44 px-2 py-3 rounded-xl outline outline-1 outline-offset-[-1px] outline-Line-Subtler flex justify-start items-center gap-2"
            >
              <img
                className="w-8 h-8 relative rounded-[999px]"
                src="https://placehold.co/32x32"
              />
              <div className="justify-start text-Label-Subnormal text-sm font-medium font-['Pretendard'] leading-tight">
                Label
              </div>
            </div>
          </div>
          <div className="self-stretch inline-flex justify-start items-center gap-3">
            <div
              data-active="false"
              className="w-44 px-2 py-3 rounded-xl outline outline-1 outline-offset-[-1px] outline-Line-Subtler flex justify-start items-center gap-2"
            >
              <img
                className="w-8 h-8 relative rounded-[999px]"
                src="https://placehold.co/32x32"
              />
              <div className="justify-start text-Label-Subnormal text-sm font-medium font-['Pretendard'] leading-tight">
                Label
              </div>
            </div>
            <div
              data-active="false"
              className="w-44 px-2 py-3 rounded-xl outline outline-1 outline-offset-[-1px] outline-Line-Subtler flex justify-start items-center gap-2"
            >
              <img
                className="w-8 h-8 relative rounded-[999px]"
                src="https://placehold.co/32x32"
              />
              <div className="justify-start text-Label-Subnormal text-sm font-medium font-['Pretendard'] leading-tight">
                Label
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
