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
        <h2 className="text-center h3-b">
          {nickname}님<br></br>체리에 오신 걸 환영합니다!
        </h2>
        <div className="w-full max-w-md mx-auto mt-10 space-y-2"></div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <button
          type="button"
          className={
            'w-full py-4 text-Static-White title2-b bg-Primary-Normal cursor-pointer'
          }
          onClick={() => router.push('/')}
        >
          시작하기
        </button>
      </div>
    </div>
  );
}
