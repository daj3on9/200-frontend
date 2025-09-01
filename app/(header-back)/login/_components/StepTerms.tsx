'use client';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import StepIndicator from './StepIndicator';
import LoginNextBtn from './LoginNextBtn';
import CheckIcon from '@/public/icons/check.svg';
import ArrowRightIcon from '@/public/icons/arrow-right.svg';

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
    setAgreedTerms(newValue);
  };

  useEffect(() => {
    setAgreedTerms(canProceed);
  }, [canProceed, setAgreedTerms]);

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
                  <CheckIcon
                    className={`cursor-pointer w-[24px] h-[24px] ${
                      selected[item.key]
                        ? 'fill-Primary-Normal'
                        : 'fill-Fill-80'
                    }`}
                    onClick={() => toggleItem(item.key)}
                  />
                </div>
                <div className="flex justify-start items-center gap-0.5">
                  <div className="justify-start body2-m">{item.label}</div>
                </div>
              </div>
              <div className="w-4 h-4 ml-auto">
                <ArrowRightIcon className="w-[16px] h-[16px] fill-Fill-50" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {!isAllChecked && (
        <div className="p-4 bg-Fill-99 rounded-[999px] inline-flex justify-center items-center gap-3 my-[84px] cursor-pointer ml-[50%] translate-x-[-50%]">
          <button
            type="button"
            className="flex items-center gap-2 title3-m cursor-pointer"
            onClick={toggleAll}
          >
            <CheckIcon className="w-[24px] h-[24px] fill-Fill-50" />
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
