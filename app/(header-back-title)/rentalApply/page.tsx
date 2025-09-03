'use client';
import Header from '@/domains/common/components/header';
import React, { useState } from 'react';
import { CartItemState } from '@/domains/cart/types/cartItemType';
import ItemDetail from '@/domains/common/components/ItemDetail';
import CalendarWrap from './_components/CalendarWrap';
import DeliveryDetails from './_components/DeliveryDetails';

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
    <div className="h-screen overflow-hidden bg-Fill-99">
      <Header
        showBack
        title="체험 신청하기"
      />
      <main
        className="pb-3 flex flex-col gap-3 overflow-y-scroll h-[calc(100vh-135px)]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="px-3.5 flex flex-col justify-center bg-Static-White">
          {cartData.map((item) => (
            <ItemDetail
              key={item.id}
              item={item}
            />
          ))}
        </div>
        <CalendarWrap />
        <DeliveryDetails />
      </main>
      <div className="w-full p-3.5 bg-Static-White">
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
