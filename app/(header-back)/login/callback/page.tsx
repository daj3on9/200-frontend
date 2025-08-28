'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, Suspense } from 'react';
import { getAPI } from '@/domains/common/api';
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
  // const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    if (!code) {
      console.error('인증 코드가 없습니다.');
      return;
    }

    const postApi = async () => {
      try {
        const res = await getAPI<ResStatus>(`/auth/callback?code=${code}`);
        if (res) {
          const TempToken = res.tempToken;

          if (!TempToken) {
            setTokens(res.accessToken as string, res.refreshToken as string);
            router.push('/');
          } else {
            router.push(`/login/step?ID=${TempToken}`);
          }
        }
      } catch (error) {
        console.error('카카오 인증 오류:', error);
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
