'use client';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import StepIndicator from './StepIndicator';
import { postAPI } from '@/domains/common/api';
import LoginNextBtn from './LoginNextBtn';

interface Props {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  nickname: string;
  setNickname: Dispatch<SetStateAction<string>>;
  onSubmit: () => void;
}
interface ResStatus {
  isDuplicate: boolean;
}
export default function StepNickname({
  step,
  setStep,
  nickname,
  setNickname,
  onSubmit,
}: Props) {
  const [message, setMessage] = useState(
    '한글, 영문, 숫자를 사용해서 띄어쓰기 없이 2~10자까지 입력해주세요.'
  );
  const [status, setStatus] = useState<
    'default' | 'valid' | 'duplicate' | 'invalid'
  >('default');
  const [canProceed, setCanProceed] = useState(false);

  const handleCheck = async () => {
    if (!nickname) {
      setMessage('닉네임을 입력해주세요');
      setStatus('invalid');
      setCanProceed(false);
      return;
    }

    const nicknameRegex = /^[가-힣a-zA-Z0-9]{2,10}$/;
    const trimmed = nickname.replace(/\s/g, '');

    if (!nicknameRegex.test(trimmed)) {
      setMessage(
        '한글, 영문, 숫자를 사용해서 띄어쓰기 없이 2~10자까지 입력해주세요.'
      );
      setStatus('invalid');
      setCanProceed(false);
      return;
    }

    setStatus('valid');
    setCanProceed(true);

    // TODO : api 연결 후 주석 풀기
    // try {
    //   const res = await postAPI<ResStatus, { nickname: string }>(
    //     '/api/check-nickname',
    //     { nickname }
    //   );

    //   if (res?.isDuplicate) {
    //     setMessage('동일한 닉네임이 입니다');
    //     setStatus('duplicate');
    // setCanProceed(false);
    //   } else {
    //     setMessage('사용 가능한 닉네임입니다');
    //     setStatus('valid');
    //     setCanProceed(true)
    //   }
    // } catch (error) {
    //   setMessage('오류가 발생했습니다');
    //   setStatus('default');
    // setCanProceed(false);
    // }
  };

  const handleJoin = () => {
    onSubmit();
  };

  useEffect(() => {
    setStatus('default');
    setMessage('중복 확인이 필요합니다.');
    setCanProceed(false);
  }, [nickname]);

  return (
    <div className="">
      <div className="w-90">
        <h2 className="text-xl font-bold mb-4">
          사용할 닉네임을 <br /> 입력해주세요!
        </h2>
        <div className="w-full max-w-md mx-auto mt-10 space-y-2">
          <div className="flex items-center border border-gray-100 bg-gray-100 rounded-md overflow-hidden h-12">
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="닉네임을 입력해주세요"
              className="flex-grow px-4 h-full text-sm outline-none text-gray-500"
            />
            <button
              className="flex items-center justify-center text-black px-3 h-full text-sm font-medium "
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

      <LoginNextBtn
        setStep={setStep}
        canProceed={canProceed}
      />
    </div>
  );
}
