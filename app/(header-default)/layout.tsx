import Header from '@/domains/common/components/header';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: '홈',
  description:
    'Cherry 홈 — 최신 IT 디바이스 대여/렌탈, 예약 가능 필터와 정렬로 원하는 제품을 쉽게 찾으세요.',
  icons: {
    icon: '/icons/Logo.svg',
  },
};

export default function layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-dvh bg-Fill-99">
      {modal}
      <Header
        showLogo
        showCart
        showHamburger
        bgColor="bg-Fill-99"
      />
      <main className="layout-container flex-1 overflow-y-auto no-scrollbar">
        {children}
      </main>
    </div>
  );
}
