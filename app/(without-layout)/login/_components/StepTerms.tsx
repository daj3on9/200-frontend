'use client';
import React, { Dispatch, SetStateAction, useState } from 'react';
import StepIndicator from './StepIndicator';
import Image from 'next/image';
import LoginNextBtn from './LoginNextBtn';

type TermsKey = 'terms' | 'privacy' | 'age' | 'marketing';
type TermsState = Record<TermsKey, boolean>;

interface Props {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  setAgreedTerms: Dispatch<SetStateAction<boolean>>;
}

export default function StepTerms({ step, setStep, setAgreedTerms }: Props) {
  const [selected, setSelected] = useState<TermsState>({
    terms: false,
    privacy: false,
    age: false,
    marketing: false,
  });

  const termsList: { key: TermsKey; label: string }[] = [
    { key: 'terms', label: '이용약관 동의 (필수)' },
    { key: 'privacy', label: '개인정보 수집 및 이용 동의 (필수)' },
    { key: 'age', label: '14세 이상입니다 (필수)' },
    { key: 'marketing', label: '마케팅 정보 수신 동의 (선택)' },
  ];

  const canProceed = selected.terms && selected.age && selected.privacy;

  const isAllChecked = Object.values(selected).every(Boolean);

  const toggleItem = (key: TermsKey) => {
    setSelected((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // 전체 선택 / 해제
  const toggleAll = () => {
    const newValue = !isAllChecked;
    setSelected({
      terms: newValue,
      age: newValue,
      privacy: newValue,
      marketing: newValue,
    });
    setAgreedTerms((prev) => !prev);
  };

  return (
    <div className="flex flex-col justify-start items-start gap-12">
      <div className="w-90">
        <h2 className="h3-b mb-[48px] text-center">
          체리에 오신 것을 <br />
          환영합니다!
        </h2>
        <div className="flex-col gap-2">
          {termsList.map((item) => (
            <div
              className="flex items-center mb-[12px]"
              key={item.key}
            >
              <div className="flex justify-start items-center gap-2">
                <div className="w-6 h-6 relative overflow-hidden text-Label-Alternative">
                  <svg
                    width="24"
                    height="24"
                    fill="currentColor"
                    className={`cursor-pointer ${
                      selected[item.key]
                        ? // ? 'text-[var(--color-Primary-Normal)]'
                          'text-Primary-Normal'
                        : 'text-Label-Alternative'
                    }`}
                    onClick={() => toggleItem(item.key)}
                  >
                    <path
                      xmlns="http://www.w3.org/2000/svg"
                      d="M4.52997 12.97C4.38779 12.8375 4.19975 12.7654 4.00545 12.7688C3.81114 12.7723 3.62576 12.851 3.48835 12.9884C3.35093 13.1258 3.27222 13.3112 3.26879 13.5055C3.26537 13.6998 3.33749 13.8878 3.46997 14.03L7.96997 18.53C8.11059 18.6705 8.30122 18.7493 8.49997 18.7493C8.69872 18.7493 8.88934 18.6705 9.02997 18.53L20.03 7.53C20.1625 7.38782 20.2346 7.19978 20.2311 7.00548C20.2277 6.81118 20.149 6.62579 20.0116 6.48838C19.8742 6.35096 19.6888 6.27225 19.4945 6.26882C19.3002 6.2654 19.1121 6.33752 18.97 6.47L8.49997 16.94L4.52997 12.97Z"
                    />
                  </svg>
                </div>
                <div className="flex justify-start items-center gap-0.5">
                  <div className="justify-start body2-m">{item.label}</div>
                </div>
              </div>
              <div className="w-4 h-4 ml-auto">
                <Image
                  src={'/icons/arrow-right.svg'}
                  alt="약관 상세 내용 확인 버튼"
                  width={16}
                  height={16}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {!isAllChecked && (
        <div className="p-4 bg-Fill-99 rounded-[999px] inline-flex justify-center items-center gap-3 my-[84px] cursor-pointer ml-[50%] translate-x-[-50%]">
          <button
            className="flex gap-2 title3-m cursor-pointer"
            onClick={toggleAll}
          >
            <Image
              src={'/icons/check.svg'}
              alt="전체 동의하기 체크 버튼"
              width={17}
              height={17}
            />
            전체 동의하기
          </button>
        </div>
      )}
      <StepIndicator step={step} />

      <LoginNextBtn
        setStep={setStep}
        canProceed={canProceed}
      />
    </div>
  );
}
