import React from 'react';
import BagIcon from '@/public/icons/bag.svg';
import HeadsetIcon from '@/public/icons/headset.svg';
import CaseBoxIcon from '@/public/icons/case-box.svg';
import ChargerIcon from '@/public/icons/charger.svg';
import MusicCableIcon from '@/public/icons/music-cable.svg';

export default function ProductDetailGuide() {
  return (
    <div className="self-stretch px-3.5 py-3 bg-Static-White flex flex-col justify-start items-start gap-3">
      <div className="flex flex-col justify-start items-start gap-1">
        <div className="justify-start text-Label-Normal title2-sb">
          체험 가이드
        </div>
        <div className="justify-start text-Label-Assistive body3-m">
          &#183; 고장 및 파손에 주의해 주세요.
          <br />
          &#183; 분실∙도난 방지를 위한 보안 스티커를 제거하지말아주세요.
          <br />
          &#183; 보관 가방에 넣어서 반납해 주세요.
          <br /> &#183; 충전이 안되어 있는 경우 충전 후 사용해 주세요
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-2">
        <div className="inline-flex justify-start items-start gap-2.5">
          <div className="justify-start text-Label-Alternative body2-m">
            체험 구성품
          </div>
        </div>
        <div className="self-stretch inline-flex justify-between items-center">
          <div className="w-14 h-14 flex flex-col justify-center items-center gap-1">
            <BagIcon className="w-6 h-6 left-[4px] top-[2px] fill-Fill-50" />
            <div className="text-center justify-center text-Label-Subnormal caption-m">
              보관 가방
            </div>
          </div>
          <div className="w-14 h-14 flex flex-col justify-center items-center gap-1">
            <HeadsetIcon className="w-6 h-6 left-[4px] top-[2px] fill-Fill-50" />
            <div className="text-center justify-center text-Label-Subnormal caption-m">
              본 제품
            </div>
          </div>
          <div className="w-14 h-14 flex flex-col justify-center items-center gap-1">
            <CaseBoxIcon className="w-6 h-6 left-[4px] top-[2px] fill-Fill-50" />
            <div className="text-center justify-center text-Label-Subnormal caption-m">
              전용케이스
            </div>
          </div>
          <div className="w-14 h-14 flex flex-col justify-center items-center gap-1">
            <ChargerIcon className="w-6 h-6 left-[4px] top-[2px] fill-Fill-50" />
            <div className="text-center justify-center text-Label-Subnormal caption-m">
              충전케이블
            </div>
          </div>
          <div className="w-14 h-14 flex flex-col justify-center items-center gap-1">
            <MusicCableIcon className="w-6 h-6 left-[4px] top-[2px] fill-Fill-50" />
            <div className="text-center justify-center text-Label-Subnormal caption-m">
              오디오케이블
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
