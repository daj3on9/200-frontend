/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect } from 'react';
import { useAuthStore } from '@/domains/common/store/authStore';
import axiosInstance from '@/domains/common/api/axiosInstance';

export default function AppInitializer() {
  const { setTokens, logout } = useAuthStore();

  useEffect(() => {
    const reissue = async () => {
      try {
        const { data } = await axiosInstance.post('/auth/reissue', {});
        setTokens(data.accessToken);
      } catch {
        logout();
        localStorage.removeItem('isLoggedIn');
      }
    };

    reissue();
  }, []);

  return null;
}
