import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { decodeJwt } from '../utils/decodeJwt';

interface AuthState {
  accessToken: string | null;
  isLoggedIn: boolean;
  nickname: string | null;
  email: string | null;
  setTokens: (access: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      isLoggedIn: false,
      nickname: null,
      email: null,
      setTokens: (access) => {
        set({ accessToken: access, isLoggedIn: true });
        const user = decodeJwt(access);
        if (user) {
          set({ nickname: user.nickname ?? '', email: user.email ?? '' });
        }
      },

      logout: () =>
        set({
          accessToken: null,
          isLoggedIn: false,
          nickname: null,
          email: null,
        }),
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        nickname: state.nickname,
        email: state.email,
        isLoggedIn: state.isLoggedIn,
      }),
    }
  )
);
