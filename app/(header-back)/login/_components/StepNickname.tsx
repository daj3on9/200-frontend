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

    const nicknameRegex = /^[가-힣a-zA-Z0-9ㄱ-ㅎ]{2,10}$/;
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
    setMessage('');
    setCanProceed(true);

    try {
      const res = await postAPI<ResStatus, { nickname: string }>(
        '/members/verify/nickname',
        { nickname }
      );

      if (res?.isDuplicate) {
        setMessage('동일한 닉네임이 입니다');
        setStatus('duplicate');
        setCanProceed(false);
      } else {
        setMessage('사용 가능한 닉네임입니다');
        setStatus('valid');
        setCanProceed(true);
      }
    } catch (error) {
      console.log(error);
      setMessage('오류가 발생했습니다');
      setStatus('default');
      setCanProceed(false);
    }
  };

  const handleJoin = () => {
    onSubmit();
  };

  useEffect(() => {
    setStatus('default');
    setMessage(
      '한글, 영문, 숫자를 사용해서 띄어쓰기 없이 2~10자까지 입력해주세요.'
    );
    setCanProceed(false);
  }, [nickname]);

  return (
    <div className="">
      <div className="w-90">
        <h2 className="h3-b mb-[48px]">
          사용할 닉네임을 <br /> 입력해주세요!
        </h2>
        <div className="h-28 flex flex-col w-full max-w-md mx-auto mt-10 space-y-2 gap-2">
          <div className="self-stretch h-12 p-4 bg-Fill-99 rounded-2xl inline-flex justify-between items-center overflow-hidden">
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="닉네임을 입력해주세요"
              className="flex-grow pr-4 h-full text-sm outline-none text-Label-Normal placeholder:text-gray-500"
            />
            {status === 'default' && (
              <button
                type="button"
                className="flex items-center justify-center px-3 h-full body3-m cursor-pointer text-Label-Assistive"
                onClick={handleCheck}
              >
                확인
              </button>
            )}
          </div>
          <p
            className={`body3-m ${
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
        handleJoin={handleJoin}
      />
    </div>
  );
}
