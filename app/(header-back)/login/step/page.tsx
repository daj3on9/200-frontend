'use client';
import { useRouter } from 'next/navigation';
import { useState, Suspense } from 'react';
import StepTerms from '../_components/StepTerms';
import StepNickname from '../_components/StepNickname';
import StepEmail from '../_components/StepEmail';
import { useSearchParams } from 'next/navigation';
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
  email: string;
  nickname: string;
  agreedTerms: boolean;
}

function StepComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const tempToken = searchParams.get('ID');
  const [step, setStep] = useState(0);
  const [agreedTerms, setAgreedTerms] = useState(false);
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
      email,
      nickname,
      agreedTerms,
    };

    try {
      const res = await postAPI<ResStatus, Payload>('/signup', payload);
      if (res) {
        setTokens(res.accessToken as string, res.refreshToken as string);
      }
      setStep(step + 1);
    } catch (error) {
      console.error('회원 가입 오류 :', error);
    }
  };

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
        <LeftArrowIcon
          width={18}
          height={18}
          className="fill-Fill-10"
        />
      </div>

      <div className="h-[400px]">
        {step === 0 && (
          <StepTerms
            step={0}
            setStep={setStep}
            setAgreedTerms={setAgreedTerms}
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
