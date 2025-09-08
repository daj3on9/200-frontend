/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { useAuthStore } from '../store/authStore';

type TokenResponse = {
  newAccess: string;
  newRefresh: string;
};

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore.getState();
  if (accessToken) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { setTokens, logout } = useAuthStore.getState();
    const originalRequest = error.config || {};

    const status = error?.response?.status;
    const url = (originalRequest as any)?.url as string | undefined;
    const isReissue = url?.includes('/auth/reissue');

    if (status === 401 && !isReissue && !originalRequest._retry) {
      (originalRequest as any)._retry = true;

      try {
        const { data } = await axiosInstance.post<TokenResponse>(
          '/auth/reissue',
          {}
        );
        if (data) {
          setTokens(data.newAccess);
          originalRequest.headers = originalRequest.headers ?? {};
          originalRequest.headers.Authorization = `Bearer ${data.newAccess}`;
        }
        return axiosInstance(originalRequest);
      } catch (error) {
        logout();
        localStorage.removeItem('isLoggedIn');
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
