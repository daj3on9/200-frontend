import axios from 'axios';
import { useAuthStore } from '../store/authStore';
import { postAPI } from '.';

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
    const { refreshToken, setTokens, logout } = useAuthStore.getState();
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      refreshToken
    ) {
      originalRequest._retry = true;

      try {
        const res = await postAPI<TokenResponse, { refreshToken: string }>(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/reissue`,
          {
            refreshToken,
          }
        );
        if (res) {
          setTokens(res.newAccess, res.newRefresh);
          originalRequest.headers.Authorization = `Bearer ${res.newAccess}`;
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
