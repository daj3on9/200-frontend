'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import StepTerms from '../_components/StepTerms';
import StepNickname from '../_components/StepNickname';
import StepEmail from '../_components/StepEmail';
import { useSearchParams } from 'next/navigation';
import { postAPI } from '@/domains/common/api';
import StepEnd from '../_components/StepEnd';
import Image from 'next/image';

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ProviderID = searchParams.get('ID');
  const [step, setStep] = useState(0);
  const [agreedTerms, setAgreedTerms] = useState(false);
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');

  const handleSubmit = async () => {
    const payload = {
      ProviderID,
      email,
      nickname,
      agreedTerms,
    };
    setStep(step + 1);
    // TODO : API 연결 후 주석 풀기
    // try {
    //   const res = await postAPI('/api/auth/kakao/register', payload);
    //   setStep(step + 1);
    // } catch (error) {
    //   console.error('회원 가입 오류 :', error);
    // }
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
        <Image
          src={'/icons/leftarrow.svg'}
          alt="뒤로가기 버튼"
          width={18}
          height={18}
        />
      </div>

      <div className="">
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
