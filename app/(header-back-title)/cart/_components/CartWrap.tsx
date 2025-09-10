'use client';
import React, { useEffect, useMemo, useState } from 'react';
import CartItemDetail from './CartItemDetail';
import CartPriceDetail from './CartPriceDetail';
import Link from 'next/link';
import { useCartQuery } from '@/domains/cart/hooks/useCartQuery';
import { useRouter } from 'next/navigation';

export default function CartWrap() {
  const router = useRouter();
  const { cartQuery } = useCartQuery();
  const { data: cartData } = cartQuery;
  const cartItems = useMemo(() => cartData?.carts || [], [cartData]);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [selectPrice, setSelectPrice] = useState<number>(0);

  const handleRental = () => {
    const selectedItems = cartItems.filter((item) =>
      selectedIds.includes(item.cartId)
    );

    console.log(selectedItems);
    sessionStorage.removeItem('rentalInfo');
    sessionStorage.setItem(
      'rentalInfo',
      JSON.stringify(
        selectedItems.map((item) => ({
          cartId: item.cartId,
          color: item.color,
          dailyRentalPrice: item.dailyRentalPrice,
          productName: item.productName,
          productThumbnailUrl: item.productThumbnailUrl,
        }))
      )
    );
    router.push('/rentalApply?cart=true');
  };

  useEffect(() => {
    const selectedItems = cartItems.filter((item) =>
      selectedIds.includes(item.cartId)
    );
    const price = selectedItems.reduce(
      (acc, item) => acc + item.dailyRentalPrice,
      0
    );
    setSelectPrice(price);
  }, [selectedIds, cartItems]);

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
            <CartPriceDetail selectPrice={selectPrice} />
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
            onClick={selectedIds.length ? handleRental : undefined}
          >
            {!selectedIds.length
              ? '결제하기'
              : `${(selectPrice * 7).toLocaleString()}원 결제하기`}
          </button>
        )}
      </div>
    </div>
  );
}
