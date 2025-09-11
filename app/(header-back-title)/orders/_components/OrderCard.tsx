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
    order.reviewStatus === 'AVAILABLE' &&
    (order.rentalStatus === 'ACTIVE' || order.rentalStatus === 'COMPLETED');

  return (
    <div className="flex flex-col w-[390px] px-l py-layout items-start gap-xxl bg-Static-White">
      <div className="flex justify-between items-center self-stretch">
        <div className="flex items-center gap-s">
          <OrderStatusLabel status={order.rentalStatus} />
          <p className="text-Label-Normal title3-sb"> {order.rentalNumber} </p>
        </div>

        {/* TODO : 주문 상세 링크 추가 필요 */}
        <Link
          href={`/orders/${order.rentalId}`}
          className="body3-r text-Label-Assistive underline"
        >
          주문 상세
        </Link>
      </div>

      {order.items.map((item, index) => (
        <div
          key={`${item.productName}-${index}`}
          className="w-full"
        >
          <ItemDetail
            item={item}
            startDate={order.startAt}
            endDate={order.endAt}
          />

          {/* TODO : 구글폼 링크 필요 */}
          {canWriteReport && (
            <a
              href="https://www.notion.so/25dced6af6528053a4eef3054a1f8fdb?source=copy_link"
              className="mt-2 w-full flex justify-center items-center px-m py-s ds-rounded-xs border-m border-Line-Subtler body2-m text-Label-Normal"
              target="_blank"
              rel="noopener noreferrer"
            >
              리포트 작성하기
            </a>
          )}
        </div>
      ))}

      <OrderCardBottom order={order} />
    </div>
  );
}
