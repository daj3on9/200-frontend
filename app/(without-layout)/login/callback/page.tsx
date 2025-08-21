'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import StepTerms from '../_components/StepTerms';
import { postAPI } from '@/domains/common/api';

interface ResStatus {
  id: string | null;
}

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    if (!code) {
      console.error('인증 코드가 없습니다.');
      return;
    }
    console.log(code);
    router.push('/login/step');
    const postApi = async () => {
      try {
        const res = await postAPI<ResStatus, { code: string }>(
          '/api/auth/kakao',
          { code }
        );

        if (res?.id) {
          router.push('/');
        } else {
          router.push('/login/step');
        }
      } catch (error) {
        console.error('카카오 인증 오류:', error);
      }
    };

    // TODO : API 연결 후 주석 풀기
    // postApi();
  }, [code, router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg text-gray-600">로그인 처리 중입니다...</p>
    </div>
  );
}
