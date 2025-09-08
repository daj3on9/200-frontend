'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import QuestionIcon from '@/public/icons/question.svg';
import { COLORS } from '@/lib/colors';

export default function ProductDetail() {
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

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
      <div className="w-[var(--container-width)] h-96 p-5">
        <Swiper
          className="w-full h-full"
          pagination={{
            type: 'fraction',
          }}
          modules={[Pagination]}
        >
          {[1, 2, 3, 4, 5].map((num) => (
            <SwiperSlide key={num}>Slide {num}</SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="self-stretch h-14 px-3.5 py-3 bg-Static-White border-t border-b border-Line-Subtler inline-flex justify-between items-center">
        <div className="flex justify-start items-center gap-2">
          <div className="w-5 h-5 relative rounded-full border border-Line-Subtler body2-m"></div>

          <p className="justify-start text-Label-Normal body2-m">Brand</p>
        </div>
      </div>
      <div className="self-stretch px-3.5 py-6 bg-Static-White flex flex-col justify-start items-start gap-3">
        <div className="flex flex-col justify-start items-start gap-2">
          <div className="justify-start text-Label-Normal h3-b">Title</div>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <p className="text-center justify-start text-Label-Assistive body2-m ">
            Option
          </p>
          <div className="bg-Static-White inline-flex justify-start items-start gap-2.5">
            {['MidnightBlue', 'DeepPlum', 'SandStone'].map((item) => (
              <div
                key={item}
                style={{ backgroundColor: COLORS[item] }}
                className={`w-3 h-3 rounded-full`}
              ></div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <div className="flex items-center justify-center gap-1">
            <p className="justify-start text-Label-Assistive body2-r">
              대여 요금
            </p>
            <div
              className="w-3.5 h-3.5 cursor-pointer relative"
              onClick={() => setShowPopover((prev) => !prev)}
              ref={popoverRef}
            >
              <QuestionIcon className="fill-Fill-50" />

              {showPopover && (
                <div className="absolute -top-5 left-5 z-10 bg-gray-100 px-2 py-1 rounded-sm shadow-md whitespace-nowrap text-Label-Normal body2-m">
                  대여요금은 하루당 계산합니다
                </div>
              )}
            </div>
          </div>
          <p className="text-Label-Normal h4-b">일 Price 원</p>
        </div>
      </div>
    </div>
  );
}
