'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import StepTerms from '../_components/StepTerms';
import StepNickname from '../_components/StepNickname';

export default function Page() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    agreed: false,
  });

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white">
      <div
        className="absolute top-4 left-4 p-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-100"
        onClick={() => router.back()}
      >
        뒤로가기
      </div>

      <div className="flex flex-col items-center text-center">
        {step === 0 && (
          <StepTerms
            step={0}
            setStep={setStep}
          />
        )}
        {step === 1 && (
          <StepNickname
            step={0}
            setStep={setStep}
          />
        )}
      </div>
    </div>
  );
}
