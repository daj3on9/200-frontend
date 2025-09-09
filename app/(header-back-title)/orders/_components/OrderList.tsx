'use client';

import React, { useEffect, useMemo } from 'react';
import OrderCard from './OrderCard';
import ToastComponent from '@/domains/common/components/ToastComponent';
import { useRentalsInfinite } from '@/domains/orders/hooks/useRentalsInfinite';
import { useInView } from 'react-intersection-observer';

export default function OrderList() {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useRentalsInfinite(2);

  const orders = useMemo(
    () => (data?.pages ?? []).flatMap((p) => p.rentals),
    [data]
  );

  const { ref, inView } = useInView({ rootMargin: '200px' });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);
  if (!orders?.length) {
    return (
      <div className="flex min-h-screen items-center justify-center text-center text-Label-Assistive">
        <p> 이용 내역이 없어요.</p>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        {orders.map((order) => (
          <OrderCard
            key={order.rentalId}
            order={order}
          />
        ))}
        {hasNextPage && (
          <div
            ref={ref}
            className="py-6 text-center body3-r text-Label-Assistive"
          >
            {isFetchingNextPage ? '' : ''}
          </div>
        )}
      </div>
      <ToastComponent />
    </>
  );
}
