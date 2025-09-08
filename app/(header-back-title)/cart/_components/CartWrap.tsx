'use client';
import { CartItemState } from '@/domains/cart/types/cartItemType';
import React, { useState } from 'react';
import CartItemDetail from './CartItemDetail';
import CartPriceDetail from './CartPriceDetail';
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

export default function CartWrap() {
  const [cartData, setCartData] = useState<CartItemState[]>(TEMPDATA);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  return (
    <div>
      <div className="pb-3 flex flex-col gap-3 overflow-y-scroll h-[calc(100vh-135px)] no-scrollbar">
        {!cartData.length ? (
          <p className="h-full flex justify-center items-center text-Label-Assistive body1-m">
            장바구니가 비었어요.
          </p>
        ) : (
          <div className="h-full flex flex-col gap-3">
            <CartItemDetail
              cartData={cartData}
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
            />
            <CartPriceDetail />
          </div>
        )}
      </div>
      <div className="w-full p-3.5 bg-Static-White">
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
            className={`w-full p-4 rounded  items-center title2-sb ${
              !selectedIds.length
                ? 'bg-Fill-99 text-Label-Disable'
                : 'bg-Primary-Normal text-Static-White cursor-pointer'
            }`}
            disabled={!selectedIds.length}
          >
            {!selectedIds.length ? '결제하기' : ` 99,999원 결제하기`}
          </button>
        )}
      </div>
    </div>
  );
}
