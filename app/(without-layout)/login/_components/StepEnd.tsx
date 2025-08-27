import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
  nickname: string;
}

export default function StepEnd({ nickname }: Props) {
  const router = useRouter();
  return (
    <div className="">
      <div className="w-90">
        <h2 className="text-center text-Label-Subnormal text-2xl font-bold font-['Pretendard']">
          {nickname}님<br></br>체리에 오신 걸 환영합니다!
        </h2>
        <div className="w-full max-w-md mx-auto mt-10 space-y-2"></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <button
          className={
            'w-full py-4 text-Static-White text-base font-bold bg-Primary-Normal cursor-pointer'
          }
          onClick={() => router.push('/')}
        >
          시작하기
        </button>
      </div>
    </div>
  );
}
