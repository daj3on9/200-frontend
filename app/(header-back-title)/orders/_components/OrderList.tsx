'use client';

import React from 'react';
import OrderCard from './OrderCard';
import ToastComponent from '@/domains/common/components/ToastComponent';
import { mockOrders } from '@/domains/orders/api/mock';

export default function OrderList() {
  const orders = mockOrders;

  if (!orders?.length) {
    return (
      <div className="w-[390px] py-10 text-center text-Label-Assistive">
        주문 내역이 없습니다.
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center gap-4">
        {orders.map((order) => (
          <OrderCard
            key={order.orderNumber}
            order={order}
          />
        ))}
      </div>
      <ToastComponent />
    </>
  );
}
