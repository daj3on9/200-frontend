'use client';
import React, { Dispatch, SetStateAction, useState } from 'react';
import StepIndicator from './StepIndicator';

type TermsKey = 'terms' | 'privacy' | 'age' | 'marketing';
type TermsState = Record<TermsKey, boolean>;

interface Props {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
}

export default function StepTerms({ step, setStep }: Props) {
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

  const isRequiredChecked = selected.terms && selected.age && selected.privacy;

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
  };

  return (
    <div className="">
      <div className="w-72">
        <h2 className="text-xl font-bold mb-4">체리에 오신 것을 환영합니다!</h2>
        <div>
          {termsList.map((item) => (
            <div
              key={item.key}
              onClick={() => toggleItem(item.key)}
              className={`flex items-center cursor-pointer  ${
                selected[item.key] ? 'font-bold text-black' : 'text-gray-500'
              }`}
            >
              <span className="text-xl mr-2">✓</span>
              <span className={`transition font-medium`}>{item.label}</span>
              <span className="ml-auto"> &#62;</span>
            </div>
          ))}
        </div>
      </div>

      <StepIndicator step={step} />

      <div className="absolute bottom-0 left-0 w-full">
        <button
          className={`w-full py-4 text-white text-lg font-semibold ${
            isRequiredChecked ? 'bg-black' : 'bg-gray-400'
          }`}
          onClick={() => (isRequiredChecked ? setStep(step + 1) : toggleAll())}
        >
          {isRequiredChecked ? '다음' : '전체 선택'}
        </button>
      </div>
    </div>
  );
}
