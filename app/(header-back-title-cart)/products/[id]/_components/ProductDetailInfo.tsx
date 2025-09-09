'use client';
import React, { useEffect, useRef, useState } from 'react';
import InfoIcon from '@/public/icons/info.svg';
import ArrowDownIcon from '@/public/icons/arrow-down.svg';
import ArrowUpIcon from '@/public/icons/arrow-up.svg';
import { Product } from '@/domains/products/types/ProductsType';

interface Props {
  detailData: Product;
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
          maxHeight: isWide ? contentHeight : 240,
        }}
        className={`w-full transition-all duration-300 ease-in-out overflow-hidden`}
      >
        <p
          ref={contentRef}
          className="h-[500px] border"
        >
          상세 내용
        </p>
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
