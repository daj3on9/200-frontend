import { getAPI } from '@/domains/common/api';
import { useAuthStore } from '@/domains/common/store/authStore';
import Image from 'next/image';
import React from 'react';
import ArrowRightIcon from '@/public/icons/arrow-right.svg';

export default function page() {
  // 로그인 상태 확인
  const { logout, isLoggedIn } = useAuthStore.getState();

  // 로그아웃 로직
  const handleLogout = async () => {
    try {
      await getAPI('/auth/logout');
      logout();
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  return (
    <div className="flex flex-col justify-start items-start ">
      <div className="self-stretch flex-1 py-6 flex flex-col justify-between items-center  gap-5">
        <div className="self-stretch px-3.5 flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch inline-flex justify-start items-start">
            <div className="w-96 p-2 bg-Static-White rounded-xl flex justify-between items-center">
              <div className="text-center justify-start text-Label-Subnormal title3-sb font-semibold leading-tight">
                체험 및 이용 안내
              </div>
              <div className="w-4 h-4 relative overflow-hidden">
                <ArrowRightIcon
                  width={18}
                  height={18}
                  className="fill-Fill-30"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-3.5 flex flex-col justify-start items-start">
          <div className="self-stretch p-3 bg-Static-White rounded-xl inline-flex justify-start items-start">
            <div className="inline-flex flex-col justify-start items-start gap-1">
              <div className="flex flex-col justify-start items-start">
                <div className="inline-flex justify-start items-start">
                  <div className="justify-start text-Label-Subnormal text-xl font-bold font-['Pretendard'] leading-normal">
                    Nickname
                  </div>
                  <div className="justify-start text-Label-Subnormal text-xl font-bold font-['Pretendard'] leading-normal">
                    님
                  </div>
                </div>
                <div className="justify-start text-Label-Subnormal text-xl font-bold font-['Pretendard'] leading-normal">
                  체리에 온 것을 환영해요
                </div>
              </div>
              <div className="inline-flex justify-start items-start gap-0.5">
                <div className="justify-start text-Label-Assisitive text-sm font-medium font-['Pretendard'] leading-tight">
                  리포트 작성하고{' '}
                </div>
                <div className="justify-start text-Secondary-Normal text-sm font-medium font-['Pretendard'] leading-tight">
                  체험비 환급
                </div>
                <div className="justify-start text-Label-Assisitive text-sm font-medium font-['Pretendard'] leading-tight">
                  받아요
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl flex flex-col justify-start items-start overflow-hidden">
          <Image
            className="self-stretch relative"
            src="https://placehold.co/360x300"
            alt="placeholder"
            width={360}
            height={300}
            unoptimized
          />
          <div className="self-stretch py-3 bg-Primary-Normal flex justify-center items-center">
            <div className="justify-start text-Static-White text-2xl font-bold font-['Pretendard'] leading-7">
              체험하기
            </div>
          </div>
        </div>
        <div className="self-stretch px-3.5 flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch flex flex-col justify-start items-center gap-3">
            <Image
              className="self-stretch h-20 relative rounded-xl"
              src="https://placehold.co/360x80"
              alt="placeholder"
              width={360}
              height={80}
              unoptimized
            />
            <div className="inline-flex justify-start items-center gap-2">
              <div className="w-6 h-2 relative bg-Fill-50 rounded-[999px]" />
              <div className="w-2 h-2 relative bg-Fill-95 rounded-[999px]" />
              <div className="w-2 h-2 relative bg-Fill-95 rounded-[999px]" />
              <div className="w-2 h-2 relative bg-Fill-95 rounded-[999px]" />
            </div>
          </div>
        </div>
        <div className="self-stretch px-3.5 inline-flex justify-start items-center gap-3">
          <div className="flex-1 self-stretch p-6 bg-Static-White rounded-xl flex justify-center items-center gap-3 overflow-hidden">
            <div className="w-6 h-6 relative overflow-hidden">
              <div className="w-5 h-4 left-[1.94px] top-[3px] absolute bg-Fill-20" />
            </div>
            <div className="justify-start text-Label-Subnormal text-base font-semibold font-['Pretendard'] leading-normal">
              FAQ
            </div>
          </div>
          <div className="flex-1 self-stretch p-6 bg-Static-White rounded-xl flex justify-center items-center gap-3 overflow-hidden">
            <div className="w-6 h-6 relative overflow-hidden">
              <div className="w-4 h-5 left-[4px] top-[2.01px] absolute bg-Fill-20" />
            </div>
            <div className="justify-start text-Label-Subnormal text-base font-semibold font-['Pretendard'] leading-normal">
              고객센터
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
