'use client';
import { useRouter } from 'next/navigation';
import { useState, Suspense, useEffect } from 'react';
import StepTerms from '../_components/StepTerms';
import StepNickname from '../_components/StepNickname';
import StepEmail from '../_components/StepEmail';
import { postAPI } from '@/domains/common/api';
import StepEnd from '../_components/StepEnd';
import LeftArrowIcon from '@/public/icons/leftarrow.svg';
import { useAuthStore } from '@/domains/common/store/authStore';

interface ResStatus {
  accessToken?: string;
  refreshToken?: string;
  tempToken?: string;
}

interface Payload {
  tempToken: string;
  emailAddress: string;
  nickname: string;
}

function StepComponent() {
  const router = useRouter();
  const [tempToken, setTempToken] = useState<string | null>(null);
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const { setTokens } = useAuthStore.getState();

  const handleSubmit = async () => {
    if (!tempToken) {
      console.error('tempToken이 없습니다.');
      return;
    }
    const payload = {
      tempToken,
      emailAddress: email,
      nickname,
    };

    try {
      const res = await postAPI<ResStatus, Payload>('/auth/signup', payload);
      if (res) {
        setTokens(res.accessToken as string, res.refreshToken as string);
      }
      setStep(step + 1);
      sessionStorage.removeItem('tempToken');
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('회원가입 오류');
      }
    }
  };

  useEffect(() => {
    setTempToken(sessionStorage.getItem('tempToken'));
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white">
      <div
        className="absolute top-4 left-4 cursor-pointer"
        onClick={() => {
          if (step === 0) {
            router.push('/');
          } else {
            setStep(step - 1);
          }
        }}
      >
        <LeftArrowIcon className="w-[18px] h-[18px] fill-Fill-10" />
      </div>

      <div className="h-[400px]">
        {step === 0 && (
          <StepTerms
            step={0}
            setStep={setStep}
          />
        )}
        {step === 1 && (
          <StepEmail
            step={1}
            setStep={setStep}
            email={email}
            setEmail={setEmail}
          />
        )}
        {step === 2 && (
          <StepNickname
            step={2}
            setStep={setStep}
            nickname={nickname}
            setNickname={setNickname}
            onSubmit={handleSubmit}
          />
        )}
        {step === 3 && <StepEnd nickname={nickname} />}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense>
      <StepComponent />
    </Suspense>
  );
}
