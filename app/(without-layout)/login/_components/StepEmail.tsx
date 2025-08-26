'use client';
import React, { Dispatch, SetStateAction, useState } from 'react';
import StepIndicator from './StepIndicator';
import { postAPI } from '@/domains/common/api';

interface Props {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}

interface ResStatus {
  isDuplicate: boolean;
}

export default function StepEmail({ step, setStep, email, setEmail }: Props) {
  const [message, setMessage] = useState('중복 확인이 필요합니다.');
  const [status, setStatus] = useState<
    'default' | 'valid' | 'duplicate' | 'invalid'
  >('default');

  const handleCheck = async () => {
    if (!email) {
      setMessage('이메일을 입력해주세요');
      setStatus('invalid');
      return;
    }

    const emailRegex =
      /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,63}$/;

    if (!emailRegex.test(email)) {
      setMessage('올바른 이메일 형식을 입력해주세요');
      setStatus('invalid');
      return;
    }

    setStatus('valid');

    // TODO : api 연결 후 주석 풀기
    // try {
    //   const res = await postAPI<ResStatus, { email: string }>(
    //     '/api/check-email',
    //     { email }
    //   );

    //   if (res?.isDuplicate) {
    //     setMessage('동일한 이메일이 존재합니다');
    //     setStatus('duplicate');
    //   } else {
    //     setMessage('사용 가능한 이메일입니다');
    //     setStatus('valid');
    //   }
    // } catch (error) {
    //   setMessage('오류가 발생했습니다');
    //   setStatus('default');
    // }
  };

  return (
    <div className="">
      <div className="w-72">
        <h2 className="text-xl font-bold mb-4">이메일을 입력해주세요!</h2>
        <div className="w-full max-w-md mx-auto mt-10 space-y-2">
          <div className="flex items-center border border-gray-100 bg-gray-100 rounded-md overflow-hidden h-12">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력해주세요"
              className="flex-grow px-4 h-full text-sm outline-none text-gray-500"
            />
            <button
              className=" text-black px-6 h-full text-sm font-medium"
              onClick={handleCheck}
            >
              확인
            </button>
          </div>
          <p
            className={`text-sm ${
              status === 'duplicate' || status === 'invalid'
                ? 'text-red-600'
                : 'text-gray-500'
            }`}
          >
            {message}
          </p>
        </div>
      </div>

      <StepIndicator step={step} />

      <div className="absolute bottom-0 left-0 w-full">
        <button
          className={`w-full py-4 text-white text-lg font-semibold ${
            status === 'valid' ? 'bg-black' : 'bg-gray-400'
          }`}
          disabled={status !== 'valid'}
          onClick={() => setStep(step + 1)}
        >
          다음
        </button>
      </div>
    </div>
  );
}
