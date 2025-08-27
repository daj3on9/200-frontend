'use client';
import React, { Dispatch, SetStateAction, useState } from 'react';
import StepIndicator from './StepIndicator';
import { postAPI } from '@/domains/common/api';
import LoginNextBtn from './LoginNextBtn';

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
  const [canProceed, setCanProceed] = useState(false);

  const handleCheck = async () => {
    if (!email) {
      setMessage('이메일을 입력해주세요');
      setStatus('invalid');
      setCanProceed(false);
      return;
    }

    const emailRegex =
      /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,63}$/;

    if (!emailRegex.test(email)) {
      setMessage('올바른 이메일 형식을 입력해주세요');
      setStatus('invalid');
      setCanProceed(false);
      return;
    }

    setStatus('valid');
    setCanProceed(true);

    // TODO : api 연결 후 주석 풀기
    // try {
    //   const res = await postAPI<ResStatus, { email: string }>(
    //     '/api/check-email',
    //     { email }
    //   );

    //   if (res?.isDuplicate) {
    //     setMessage('동일한 이메일이 존재합니다');
    //     setStatus('invalid');
    // setCanProceed(false);
    //   } else {
    //     setMessage('사용 가능한 이메일입니다');
    //     setCanProceed(true);
    //   }
    // } catch (error) {
    //   setMessage('오류가 발생했습니다');
    //   setStatus('default');
    // setCanProceed(false);
    // }
  };

  return (
    <div className="">
      <div className="w-90">
        <h2 className="text-Label-Subnormal text-2xl font-bold">
          이메일을 <br /> 입력해주세요!
        </h2>
        <div className="h-20 flex flex-col w-full max-w-md mx-auto mt-10 space-y-2">
          <div className="self-stretch h-12 p-4 bg-Fill-99 rounded-2xl inline-flex justify-between items-center overflow-hidden">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일을 입력해주세요"
              className="w-56 justify-start text-Label-Normal text-base font-medium font-['Noto_Sans_KR'] leading-normal"
            />
            <button
              className="justify-start text-Label-Assisitive text-xs font-medium font-['Pretendard'] leading-none"
              onClick={handleCheck}
            >
              확인
            </button>
          </div>
          <p
            className={`text-sm ${
              status === 'invalid' || status === 'duplicate'
                ? 'text-Primary-Normal'
                : 'text-Label-Alternative'
            }`}
          >
            {message}
          </p>
        </div>
      </div>

      <StepIndicator step={step} />

      <LoginNextBtn
        setStep={setStep}
        canProceed={canProceed}
      />
    </div>
  );
}
