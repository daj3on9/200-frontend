'use client';
import React, { useEffect, useRef, useState } from 'react';
import InfoIcon from '@/public/icons/info.svg';
import ArrowDownIcon from '@/public/icons/arrow-down.svg';
import ArrowUpIcon from '@/public/icons/arrow-up.svg';
import { ProductDetailState } from '@/domains/products/types/ProductsType';
import Image from 'next/image';
import { getImageUrl } from '@/domains/common/utils/image';

interface Props {
  detailData: ProductDetailState;
}
export default function ProductDetailInfo({ detailData }: Props) {
  const [isWide, setIsWide] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  return (
    <div className=" flex flex-col justify-start items-start">
      <div className="self-stretch px-3.5 py-3 bg-white flex justify-start items-center gap-1">
        <div className="w-6 h-6 flex items-center">
          <InfoIcon className="w-5 h-5 fill-Fill-10" />
        </div>
        <p className="justify-start text-Label-Normal title2-sb">상세정보</p>
      </div>

      <div
        style={{
          maxHeight: isWide ? '100%' : 240,
        }}
        className={`w-full transition-all duration-300 ease-in-out overflow-hidden`}
      >
        <div ref={contentRef}>
          {detailData.productImageDetailUrls.map((v) => (
            <Image
              key={v}
              className="self-stretch"
              src={getImageUrl(v)}
              alt={'상세 내용'}
              width={390}
              height={390}
              unoptimized
            />
          ))}
        </div>
      </div>

      <div className="w-full px-3.5 py-3 left-0 top-[216px] bg-Static-White ">
        <button
          type="button"
          className="flex gap-3 text-center title3-sb text-Label-Subnormal rounded-xl outline outline-Line-Subtle w-full p-2 items-center justify-center cursor-pointer"
          onClick={() => setIsWide(!isWide)}
        >
          상품정보 열기
          {isWide ? (
            <ArrowUpIcon className="w-4" />
          ) : (
            <ArrowDownIcon className="w-4" />
          )}
        </button>
      </div>
    </div>
  );
}
