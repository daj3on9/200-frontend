'use client';
import Header from '@/domains/common/components/header';
import React, { useState } from 'react';
import CartItemDetail from './_components/CartItemDetail';
import CartPriceDetail from './_components/CartPriceDetail';
import { CartItemState } from '@/domains/cart/types/cartItemType';
import Link from 'next/link';

const TEMPDATA = [
  {
    id: '1',
    title: '이어폰 1',
    option: '검정색',
    price: '45,000',
    image: '',
  },
  {
    id: '2',
    title: '이어폰 2',
    option: '하늘색',
    price: '45,000',
    image: '',
  },
  {
    id: '3',
    title: '이어폰 3',
    option: '흰색',
    price: '45,000',
    image: '',
  },
];

export default function Page() {
  const [cartData, setCartData] = useState<CartItemState[]>(TEMPDATA);

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
          <div className="h-full flex flex-col gap-3">
            <CartItemDetail cartData={cartData} />
            <CartPriceDetail />
          </div>
        )}
      </main>
      <div className="relative w-full h-full p-3.5 bg-Static-White">
        {!cartData.length ? (
          <Link
            href="/products"
            className="w-full block p-4 rounded bg-Primary-Normal text-Static-White text-center title2-sb"
          >
            상품추가 하기
          </Link>
        ) : (
          <button
            type="button"
            className="w-full p-4 rounded bg-Primary-Normal text-Static-White items-center cursor-pointer title2-sb"
          >
            99,999원 결제하기
          </button>
        )}
      </div>
    </div>
  );
}
