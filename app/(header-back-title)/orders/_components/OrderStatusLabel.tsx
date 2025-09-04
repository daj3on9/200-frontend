import React from 'react';
import clsx from 'clsx';
import type { Order } from '@/domains/orders/types/orderType';

interface OrderStatusLabelProps {
  status: Order['status'];
}

const statusLabel: Record<Order['status'], string> = {
  delivering: '배송중',
  testing: '체험중',
  returning: '반납중',
  completed: '체험완료',
};

const statusColor: Record<Order['status'], string> = {
  delivering: 'bg-Status-Cautionary text-Label-Subtler',
  testing: 'bg-Primary-Normal text-Label-Subtler',
  returning: 'bg-Status-Positive text-Label-Subtler',
  completed: 'bg-Fill-99 text-Label-Subnormal',
};

export default function OrderStatusLabel({ status }: OrderStatusLabelProps) {
  return (
    <div
      className={clsx(
        'flex justify-center items-center ds-rounded-s px-s py-xs body3-m',
        statusColor[status]
      )}
    >
      {statusLabel[status]}
    </div>
  );
}
