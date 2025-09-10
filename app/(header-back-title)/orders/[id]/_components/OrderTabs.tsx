'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { OrderDetailResponse } from '@/domains/orders/types/orderType';
import OrderExperience from './OrderExperience';
import ToastComponent from '@/domains/common/components/ToastComponent';
import OrderPayList from './OrderPayList';
import OrderEtc from './OrderEtc';

interface OrderTabsProps {
  order: OrderDetailResponse;
}

export default function OrderTabs({ order }: OrderTabsProps) {
  const [activeTab, setActiveTab] = useState<
    'experience' | 'payment' | 'other'
  >('experience');

  const renderContent = () => {
    switch (activeTab) {
      case 'experience':
        return <OrderExperience order={order} />;
      case 'payment':
        return <OrderPayList paymentId={order.paymentId} />;
      case 'other':
        return <OrderEtc />;
      default:
        return 'experience';
    }
  };

  return (
    <div className="flex flex-col">
      <div className="px-3.5 bg-Static-White border-b border-Line-Subtler inline-flex justify-start items-center">
        <button
          className={clsx(
            'p-3  flex justify-center items-center gap-3  text-Label-Normal',
            activeTab === 'experience'
              ? 'title2-b border-b-2 border-Primary-Normal'
              : 'body1-m'
          )}
          onClick={() => setActiveTab('experience')}
        >
          <p className="justify-start">체험 정보</p>
        </button>
        <button
          className={clsx(
            'p-3 flex justify-center items-center gap-3  text-Label-Normal',
            activeTab === 'payment'
              ? 'title2-b border-b-2 border-Primary-Normal'
              : 'body1-m'
          )}
          onClick={() => setActiveTab('payment')}
        >
          <p className="justify-start">결제 내역</p>
        </button>
        <button
          className={clsx(
            'p-3  flex justify-center items-center gap-3  text-Label-Normal',
            activeTab === 'other'
              ? 'title2-b border-b-2 border-Primary-Normal'
              : 'body1-m'
          )}
          onClick={() => setActiveTab('other')}
        >
          <p className="justify-start">기타</p>
        </button>
      </div>
      <div className="w-full">{renderContent()}</div>
      <ToastComponent />
    </div>
  );
}
