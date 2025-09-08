'use client';
import React, { useState } from 'react';
import CartItemDetail from './CartItemDetail';
import CartPriceDetail from './CartPriceDetail';
import Link from 'next/link';
import { useCartQuery } from '@/domains/cart/hooks/useCartQuery';

export default function CartWrap() {
  const { cartQuery } = useCartQuery();
  const { data: cartData } = cartQuery;
  const cartItems = cartData?.carts || [];
  const totalPrice = cartData?.totalPrice || 0;
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  return (
    <div>
      <div className="pb-3 flex flex-col gap-3 overflow-y-scroll h-[calc(100vh-135px)] no-scrollbar">
        {!cartItems.length ? (
          <p className="h-full flex justify-center items-center text-Label-Assistive body1-m">
            장바구니가 비었어요.
          </p>
        ) : (
          <div className="h-full flex flex-col gap-3">
            <CartItemDetail
              cartData={cartItems}
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
            />
            <CartPriceDetail totalPrice={totalPrice} />
          </div>
        )}
      </div>
      <div className="w-full p-3.5 bg-Static-White">
        {!cartItems.length ? (
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
            {!selectedIds.length ? '결제하기' : `${totalPrice}원 결제하기`}
          </button>
        )}
      </div>
    </div>
  );
}
