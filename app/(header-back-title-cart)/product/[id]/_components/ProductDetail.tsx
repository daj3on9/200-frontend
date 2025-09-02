'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import QuestionIcon from '@/public/icons/question.svg';

export default function ProductDetail() {
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

          <div className="justify-start text-Label-Normal body2-m">Brand</div>
        </div>
      </div>
      <div className="self-stretch px-3.5 py-6 bg-Static-White flex flex-col justify-start items-start gap-3">
        <div className="flex flex-col justify-start items-start gap-2">
          <div className="justify-start text-Label-Normal h3-b">Title</div>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <div className="text-center justify-start text-Label-Assistive body2-m ">
            Option
          </div>
          <div className="bg-Static-White inline-flex justify-start items-start gap-2.5">
            {['#bbb', '#f44236', '#36f4b8'].map((item) => (
              <div
                key={item}
                style={{ backgroundColor: item }}
                className={`w-3 h-3 rounded-full`}
              ></div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <div className="flex items-center justify-center gap-1">
            <div className="justify-start text-Label-Assistive body2-r">
              대여 요금
            </div>
            <div className="w-3.5 h-3.5 cursor-pointer">
              <QuestionIcon className=" fill-Fill-50" />
            </div>
          </div>
          <div className="text-Label-Normal h4-b">일 Price 원</div>
        </div>
      </div>
    </div>
  );
}
