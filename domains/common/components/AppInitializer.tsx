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
  const { setTokens, logout } = useAuthStore();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const raw = localStorage.getItem('auth-storage');
    const isLoggedIn = raw ? JSON.parse(raw).state.isLoggedIn : false;
    const reissue = async () => {
      if (!isLoggedIn) {
        setReady(true);
        return;
      }
      try {
        const { data } = await axiosInstance.post('/auth/reissue', {});
        setTokens(data.accessToken);
      } catch {
        logout();
      } finally {
        setReady(true);
      }
    };
    reissue();
    // if (!accessToken) {
    //   reissue();
    // } else {
    //   setReady(true);
    // }
  }, []);

  if (!ready) return null;
  return <>{children}</>;
}
