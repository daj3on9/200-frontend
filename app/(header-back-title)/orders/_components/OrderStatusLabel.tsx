import React from 'react';
import clsx from 'clsx';
import type { Rental } from '@/domains/orders/types/orderType';

interface OrderStatusLabelProps {
  status: Rental['rentalStatus'];
}

const statusLabel: Record<Rental['rentalStatus'], string> = {
  PENDING: '배송중',
  ACTIVE: '체험중',
  IN_RETURN: '반납중',
  COMPLETED: '체험완료',
};

const statusColor: Record<Rental['rentalStatus'], string> = {
  PENDING: 'bg-Status-Cautionary text-Label-Subtler',
  ACTIVE: 'bg-Primary-Normal text-Label-Subtler',
  IN_RETURN: 'bg-Status-Positive text-Label-Subtler',
  COMPLETED: 'bg-Fill-99 text-Label-Subnormal',
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
