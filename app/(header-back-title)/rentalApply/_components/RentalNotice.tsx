import React, { Dispatch, SetStateAction } from 'react';
import CheckIcon from '@/public/icons/check.svg';
import Link from 'next/link';

interface AgreeNotice {
  caution: boolean;
  consent: boolean;
}

interface Props {
  agreeNotice: AgreeNotice;
  setAgreeNotice: Dispatch<SetStateAction<AgreeNotice>>;
  validCaution: boolean;
  validConsent: boolean;
}

export default function RentalNotice({
  agreeNotice,
  setAgreeNotice,
  validCaution,
  validConsent,
}: Props) {
  return (
    <div className="self-stretch px-3.5 py-6 bg-Static-White inline-flex flex-col justify-start items-start gap-4">
      <div className="self-stretch flex flex-col justify-start items-start">
        <div className="flex flex-col justify-start items-start gap-2 mb-4">
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
          <button
            type="button"
            className={`flex gap-2 body1-sb cursor-pointer ${
              agreeNotice.caution
                ? 'text-Secondary-Normal'
                : 'text-Label-Assistive'
            } `}
            onClick={() =>
              setAgreeNotice((prev) => ({ ...prev, caution: true }))
            }
          >
            <CheckIcon
              className={`w-5 h-5  ${
                agreeNotice.caution ? 'fill-Secondary-Normal' : 'fill-Fill-70'
              }`}
            />
            <p>체험 안내 확인 및 모든 약관 동의</p>
          </button>
          <div className="justify-start text-Label-Assistive text-xs font-normal font-['Pretendard'] underline leading-none">
            <Link
              href="https://www.notion.so/25dced6af6528053bdbaf593ea09db1b?source=copy_link"
              aria-label="체험 및 이용 안내 바로가기"
              target="_blank"
              rel="noopener noreferrer"
            >
              자세히
            </Link>
          </div>
        </div>
        {validCaution && (
          <p className="body3-m text-Status-Negative pt-2">
            체험 안내 확인 및 약관 동의 체크해 주세요.
          </p>
        )}
      </div>
      <div className="self-stretch flex flex-col justify-start items-start">
        <div className="flex flex-col justify-start items-start gap-2 mb-4">
          <p className="justify-start text-Label-Subnormal title1-sb">
            체험동의서
          </p>
          <p className="justify-start text-Label-Assistive body2-m">
            체험동의서를 확인하시고 서비스를 이용해 주세요.
            <br />
            체험 목적물은 체험종료 후 반납 기한까지 반드시 반납해야하며 체험
            목적물과 기타 계약 상의 지위는 타인에게 양도∙증여하거나 이를 담보로
            제공할 수 없습니다.
          </p>
        </div>
        <div className="w-full p-3 rounded-md outline outline-offset-[-1px] outline-Line-Subtler flex justify-between items-center">
          <button
            type="button"
            className={`flex gap-2 body1-sb cursor-pointer ${
              agreeNotice.consent
                ? 'text-Secondary-Normal'
                : 'text-Label-Assistive'
            } `}
            onClick={() =>
              setAgreeNotice((prev) => ({ ...prev, consent: true }))
            }
          >
            <CheckIcon
              className={`w-5 h-5  ${
                agreeNotice.consent ? 'fill-Secondary-Normal' : 'fill-Fill-70'
              }`}
            />
            <p>체험동의서 확인 및 모든 약관 동의</p>
          </button>
          <div className="justify-start text-Label-Assistive text-xs font-normal font-['Pretendard'] underline leading-none">
            <Link
              href="https://www.notion.so/25dced6af652804bbdebccd365c34a32?source=copy_link"
              aria-label="체험동의서 약관"
              target="_blank"
              rel="noopener noreferrer"
            >
              자세히
            </Link>
          </div>
        </div>

        {validConsent && (
          <p className="body3-m text-Status-Negative pt-2">
            체험동의서 확인 및 약관 동의 체크해 주세요.
          </p>
        )}
      </div>
    </div>
  );
}
