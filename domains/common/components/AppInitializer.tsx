/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useState } from 'react';
import { useAuthStore } from '@/domains/common/store/authStore';
import axiosInstance from '@/domains/common/api/axiosInstance';

export default function AppInitializer({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setTokens, logout, accessToken } = useAuthStore();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reissue = async () => {
      try {
        const { data } = await axiosInstance.post('/auth/reissue', {});
        setTokens(data.accessToken);
      } catch {
        logout();
      }
    };
    if (!accessToken) {
      reissue();
    } else {
      setReady(true);
    }
  }, [accessToken]);

  if (!ready) return null;
  return <>{children}</>;
}
