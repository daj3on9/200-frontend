import { useAuthStore } from '@/domains/common/store/authStore';
import Image from 'next/image';
import React from 'react';
import ArrowRightIcon from '@/public/icons/arrow-right.svg';
import WelcomeBenner from './_components/WelcomeBenner';
import BannerSwiper from './_components/BannerSwiper';
import FAQIcon from '@/public/icons/FAQ.svg';
import CallIcon from '@/public/icons/call.svg';
import Link from 'next/link';

export default function page() {
  // 로그인 상태 확인
  const { isLoggedIn } = useAuthStore.getState();

  return (
    <div className="flex flex-col justify-start items-start ">
      <div className="self-stretch flex-1 py-6 flex flex-col justify-between items-center gap-5">
        <div className="self-stretch px-3.5 flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch inline-flex justify-start items-start">
            <div className="w-96 p-2 bg-Static-White rounded-xl flex justify-between items-center">
              <div className="text-center justify-start text-Label-Subnormal title3-sb font-semibold leading-tight">
                체험 및 이용 안내
              </div>
              <Link
                href="https://www.notion.so/25dced6af6528053bdbaf593ea09db1b?source=copy_link"
                aria-label="체험 및 이용 안내 바로가기"
                className="w-4 h-4 relative overflow-hidden"
              >
                <ArrowRightIcon
                  width={18}
                  height={18}
                  className="fill-Fill-30"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* 환영 배너 */}
        <div className="self-stretch px-3.5 flex flex-col justify-start items-start">
          <div className="self-stretch p-3 bg-Static-White rounded-xl inline-flex justify-start items-start">
            <WelcomeBenner
              isLoggedIn={isLoggedIn}
              nickname="Nickname"
            />
          </div>
        </div>

        {/* 체험하기 이미지 */}
        <div className="rounded-xl flex flex-col justify-start items-start overflow-hidden">
          <Image
            className="self-stretch relative"
            src="https://placehold.co/360x300"
            alt="placeholder"
            width={360}
            height={300}
            unoptimized
          />
          {/* TODO : 체험하기 링크 추가 */}
          <Link
            href="/"
            className="self-stretch py-3 bg-Primary-Normal flex justify-center items-center"
          >
            <div className="justify-start text-Static-White h3-b">체험하기</div>
          </Link>
        </div>

        {/* 배너 swiper */}
        <div className="self-stretch px-3.5 flex flex-col justify-center items-start">
          <BannerSwiper />
        </div>

        {/* 하단 버튼 */}
        <div className="self-stretch px-3.5 inline-flex justify-start items-center gap-m">
          <Link
            href="https://www.notion.so/FAQ-25dced6af65280b2a1c0d52939fc6c6d?source=copy_link"
            aria-label="FAQ 바로 가기"
            className="flex-1 self-stretch p-6 bg-Static-White ds-rounded-m flex justify-center items-center gap-m overflow-hidden"
          >
            <FAQIcon
              width={24}
              height={24}
              className="fill-Fill-20"
            />
            <div className="justify-start body1-sb text-Label-Subnormal">
              FAQ
            </div>
          </Link>
          <div className="flex-1 self-stretch p-6 bg-Static-White ds-rounded-m flex justify-center items-center gap-m overflow-hidden">
            <CallIcon
              width={24}
              height={24}
              className="fill-Fill-20"
            />
            <div className="justify-start body1-sb text-Label-Subnormal">
              고객센터
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
