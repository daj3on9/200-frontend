import Image from 'next/image';
import React from 'react';
import ArrowRightIcon from '@/public/icons/arrow-right.svg';
import WelcomeBenner from './_components/WelcomeBenner';
import BannerSwiper from './_components/BannerSwiper';
import Link from 'next/link';
import BottomButtons from './_components/BottomButtons';

export default function page() {
  return (
    <div className="flex flex-col justify-start items-start ">
      <div className="self-stretch flex-1 py-6 flex flex-col justify-between items-center gap-5">
        <div className="self-stretch flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch inline-flex justify-start items-start">
            <div className="p-2 bg-Static-White ds-rounded-m flex flex-1 justify-between items-center">
              <div className="text-center justify-start text-Label-Subnormal title3-sb">
                체험 및 이용 안내
              </div>
              <a
                href="https://www.notion.so/25dced6af6528053bdbaf593ea09db1b?source=copy_link"
                aria-label="체험 및 이용 안내 바로가기"
                className="w-4 h-4 relative overflow-hidden"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ArrowRightIcon className="w-[18px] h-[18px] fill-Fill-30" />
              </a>
            </div>
          </div>
        </div>

        {/* 환영 배너 */}
        <div className="self-stretch flex flex-col justify-start items-start">
          <div className="self-stretch p-3 ds-rounded-m bg-Static-White inline-flex justify-start items-start">
            <WelcomeBenner />
          </div>
        </div>

        {/* 체험하기 이미지 */}
        <div className="ds-rounded-m flex flex-col justify-start items-start overflow-hidden">
          <Image
            className="self-stretch relative"
            src="https://placehold.co/360x300"
            alt="placeholder"
            width={360}
            height={300}
            unoptimized
          />
          <Link
            href="/products"
            className="self-stretch py-3 bg-Primary-Normal flex justify-center items-center"
          >
            <div className="justify-start text-Static-White h3-b">체험하기</div>
          </Link>
        </div>

        {/* 배너 swiper */}
        <div className="self-stretch ds-rounded-m flex flex-col justify-center items-start">
          <BannerSwiper />
        </div>

        {/* 하단 버튼 */}
        <BottomButtons />
      </div>
    </div>
  );
}
