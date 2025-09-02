'use client';
import Header from '@/domains/common/components/header';
import React, { useState } from 'react';
import CartDetail from './_components/CartDetail';

const TEMPDATA = [
  {
    title: '이어폰 1',
    option: '검정색',
    startDate: '2025.09.03',
    endDate: '2025.09.06',
    price: '45,000',
  },
  {
    title: '이어폰 2',
    option: '하늘색',
    startDate: '2025.09.10',
    endDate: '2025.09.11',
    price: '45,000',
  },
  {
    title: '이어폰 3',
    option: '흰색',
    startDate: '2025.09.01',
    endDate: '2025.09.08',
    price: '45,000',
  },
];

export default function Page() {
  const [cartData, setCartData] = useState(TEMPDATA);

  return (
    <div className="h-screen overflow-hidden">
      <Header
        showBack
        title="장바구니"
      />
      <main
        className="pb-3 flex flex-col gap-3 bg-Fill-95 overflow-y-scroll h-[calc(100vh-135px)]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {!cartData.length ? (
          <div className="h-full flex justify-center items-center text-Label-Assistive body1-m">
            장바구니가 비었어요.
          </div>
        ) : (
          <CartDetail />
        )}
      </main>
      <div className="relative w-full h-full p-3.5 bg-Static-White">
        <button
          type="button"
          className="w-full p-4 rounded bg-Primary-Normal text-Static-White items-center cursor-pointer title2-sb"
        >
          99,999원 결제하기
        </button>
      </div>
    </div>
  );
}
