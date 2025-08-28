import { getAPI } from '@/domains/common/api';
import { useAuthStore } from '@/domains/common/store/authStore';
import Link from 'next/link';
import React from 'react';

export default function page() {
  const { logout, isLoggedIn } = useAuthStore.getState();

  const handleLogout = async () => {
    try {
      await getAPI('/auth/logout');
      logout();
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };
  return (
    <div>
      /app/page.tsx
      <div>메인 페이지</div>
      <div className="text-red-500">
        <p>상품 목록... </p>
      </div>
      {isLoggedIn ? (
        <button onClick={handleLogout}>로그아웃</button>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
}
