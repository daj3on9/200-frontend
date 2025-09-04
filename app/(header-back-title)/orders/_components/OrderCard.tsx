'use client';

import React from 'react';
import type { Order } from '@/domains/orders/types/orderType';
import Link from 'next/link';
import ItemDetail from '@/domains/common/components/ItemDetail';
import OrderStatusLabel from '@/app/(header-back-title)/orders/_components/OrderStatusLabel';
import OrderCardBottom from './OrderCardBottom';

interface OrderProps {
  order: Order;
}

export default function OrderCard({ order }: OrderProps) {
  const canWriteReport =
    order.isReviewed === 'yet' &&
    (order.status === 'returning' || order.status === 'completed');

  return (
    <div className="flex flex-col w-[390px] px-l py-layout items-start gap-xxl bg-Static-White">
      <div className="flex justify-between items-center self-stretch">
        <div className="flex items-center gap-s">
          <OrderStatusLabel status={order.status} />
          <p className="text-Label-Normal title3-sb"> {order.orderNumber} </p>
        </div>

        {/* TODO : 주문 상세 링크 추가 필요 */}
        <Link
          href={`/orders/${order.orderNumber}`}
          className="body3-r text-Label-Assistive underline"
        >
          주문 상세
        </Link>
      </div>

      {order.items.map((item) => (
        <div
          key={item.id}
          className="w-full"
        >
          <ItemDetail
            item={item}
            checked={false}
            toggleSelected={() => {}}
            canCheck={false}
            startDate={item.startDate}
            endDate={item.endDate}
          />

          {/* TODO : 구글폼 링크 필요 */}
          {canWriteReport && (
            <Link
              href="https://www.notion.so/25dced6af6528053a4eef3054a1f8fdb?source=copy_link"
              className="mt-2 w-full flex justify-center items-center px-m py-s ds-rounded-xs border-m border-Line-Subtler body2-m text-Label-Normal"
            >
              리포트 작성하기
            </Link>
          )}
        </div>
      ))}

      <OrderCardBottom order={order} />
    </div>
  );
}
