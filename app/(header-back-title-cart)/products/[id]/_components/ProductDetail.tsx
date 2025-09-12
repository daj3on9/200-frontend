'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import QuestionIcon from '@/public/icons/question.svg';
import { COLORS } from '@/lib/colors';
import { ProductDetailState } from '@/domains/products/types/ProductsType';
import Image from 'next/image';
import { BRANDS } from '@/lib/brands';

interface Props {
  detailData: ProductDetailState;
}

export default function ProductDetail({ detailData }: Props) {
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);
  const brandInfo = BRANDS.find((b) => b.id === detailData.brand);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setShowPopover(false);
      }
    };

    if (showPopover) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopover]);

  return (
    <div className="flex flex-col items-center">
      <div className="w-[var(--container-width)] h-96">
        <Swiper
          className="w-full h-full"
          pagination={{
            type: 'fraction',
          }}
          modules={[Pagination]}
        >
          {detailData.productThumbnailUrls.map((v) => (
            <SwiperSlide key={v}>
              <Image
                key={v}
                src={v}
                alt={'상세 제품 이미지'}
                width={390}
                height={390}
                unoptimized
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="self-stretch h-14 px-3.5 py-3 bg-Static-White border-t border-b border-Line-Subtler inline-flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <div className="w-5 h-5">
            <Image
              src={brandInfo?.image ?? '/icons/Logo.png'}
              alt={`${brandInfo?.name}_이미지`}
              width={100}
              height={100}
              className="rounded-full"
            />
          </div>

          <p className="justify-start text-Label-Normal body2-m">
            {brandInfo?.name}
          </p>
        </div>
      </div>
      <div className="self-stretch px-3.5 py-6 bg-Static-White flex flex-col justify-start items-start gap-3">
        <div className="flex flex-col justify-start items-start gap-2">
          <div className="justify-start text-Label-Normal h3-b">
            {detailData.productName}
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <p className="text-center justify-start text-Label-Assistive body2-m ">
            Option
          </p>
          <div className="bg-Static-White inline-flex justify-start items-start gap-2.5">
            {detailData.colors.map((color) => (
              <div
                key={color}
                style={{ backgroundColor: COLORS[color] }}
                className={`w-3 h-3 rounded-full border-1 border-Line-Subtler`}
              ></div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <div className="flex items-center justify-center gap-1">
            <p className="justify-start text-Label-Assistive body2-r">
              하루 체험 요금
            </p>
            <div
              className="w-3.5 h-3.5 cursor-pointer relative"
              onClick={() => setShowPopover((prev) => !prev)}
              ref={popoverRef}
            >
              <QuestionIcon className="fill-Fill-50" />

              {showPopover && (
                <div className="absolute -top-2 left-5 z-10 bg-Fill-99 p-s ds-rounded-m whitespace-nowrap text-Label-Alternative body3-m">
                  24시간 기준 체험 요금이에요
                </div>
              )}
            </div>
          </div>
          <p className="text-Label-Normal h4-b">
            일 {detailData.dailyRentalPrice} 원
          </p>
        </div>
      </div>
    </div>
  );
}
