import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: {
    default: '체험하기',
    template: 'CHERRY | %s',
  },
  description:
    'Cherry 체험하기 목록 — 최신 IT 디바이스 대여/렌탈, 예약 가능 필터와 정렬로 원하는 제품을 쉽게 찾으세요.',
  icons: {
    icon: '/icons/Logo.svg',
  },
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <main>{children}</main>;
}
