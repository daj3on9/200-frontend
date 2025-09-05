/* eslint-disable @typescript-eslint/no-empty-object-type */
'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import { postAPI } from '@/domains/common/api';
import { useAuthStore } from '@/domains/common/store/authStore';

interface ResStatus {
  accessToken?: string;
  refreshToken?: string;
  tempToken?: string;
}

function Callback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const { setTokens } = useAuthStore.getState();

  useEffect(() => {
    if (!code) {
      console.error('인증 코드가 없습니다.');
      return;
    }

    const postApi = async () => {
      try {
        const res = await postAPI<ResStatus, {}>(
          `/oauth/callback?code=${code}`,
          {}
        );
        if (res) {
          const TempToken = res.tempToken;

          if (!TempToken) {
            setTokens(res.accessToken as string, res.refreshToken as string);
            router.push('/');
          } else {
            sessionStorage.setItem('tempToken', TempToken);
            router.push(`/login/step`);
          }
        }
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message);
        } else {
          throw new Error('카카오 로그인 오류');
        }
      }
    };

    postApi();
  }, [code, router]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg text-gray-600">로그인 처리 중입니다...</p>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense>
      <Callback />
    </Suspense>
  );
}
