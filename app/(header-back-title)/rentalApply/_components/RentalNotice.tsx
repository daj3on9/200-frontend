import React from 'react';
import CheckIcon from '@/public/icons/check.svg';

export default function RentalNotice() {
  return (
    <div className="self-stretch px-3.5 py-6 bg-Static-White inline-flex flex-col justify-start items-start gap-4">
      <div className="self-stretch flex flex-col justify-start items-start gap-4">
        <div className="flex flex-col justify-start items-start gap-2">
          <p className="justify-start text-Label-Subnormal title1-sb">
            체험 안내 및 주의사항
          </p>
          <p className="justify-start text-Label-Assistive body2-m">
            체험 안내 및 주의사항을 확인하시고 서비스를 이용해주세요.
            <br />
            제품 체험 시간이 초과되면 패널티와 추가 요금이 청구됩니다.
            <br />
            사용기간 연장이 필요하다면 고객센터로 미리 문의해주세요.
          </p>
        </div>
        <div className="w-full p-3 rounded-md outline outline-offset-[-1px] outline-Line-Subtler flex justify-between items-center">
          <div className="flex gap-2 text-Label-Assistive body1-sb">
            <CheckIcon className="w-5 h-5 fill-Fill-70" />
            <p>체험 안내 확인 및 모든 약관 동의</p>
          </div>
          <div className="justify-start text-Label-Assistive text-xs font-normal font-['Pretendard'] underline leading-none">
            자세히
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-start items-start gap-4">
        <div className="flex flex-col justify-start items-start gap-2">
          <p className="justify-start text-Label-Subnormal title1-sb">
            체험동의서
          </p>
          <p className="w-96 justify-start text-Label-Assistive body2-m">
            체험동의서를 확인하시고 서비스를 이용해 주세요.
            <br />
            체험 목적물은 체험종료 후 반납 기한까지 반드시 반납해야하며 체험
            목적물과 기타 계약 상의 지위는 타인에게 양도∙증여하거나 이를 담보로
            제공할 수 없습니다.
          </p>
        </div>
        <div className="w-full p-3 rounded-md outline outline-offset-[-1px] outline-Line-Subtler flex justify-between items-center">
          <div className="flex gap-2 text-Label-Assistive body1-sb">
            <CheckIcon className="w-5 h-5 fill-Fill-70" />
            <p>체험동의서 확인 및 모든 약관 동의</p>
          </div>
          <div className="justify-start text-Label-Assistive text-xs font-normal font-['Pretendard'] underline leading-none">
            자세히
          </div>
        </div>
      </div>
    </div>
  );
}
