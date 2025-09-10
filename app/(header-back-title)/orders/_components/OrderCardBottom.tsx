'use client';

import React from 'react';
import type { Rental } from '@/domains/orders/types/orderType';
import { createModal } from '@/domains/common/store/modalStore';
import { useToastStore } from '@/domains/common/store/toastStore';

interface OrderCardBottomProps {
  order: Rental;
}

export default function OrderCardBottom({ order }: OrderCardBottomProps) {
  const { showToast } = useToastStore();

  // 환급 금액 계산
  const refundAmount = order.items.reduce((sum, item) => sum + item.price, 0);

  // 배송 조회
  const handleDeliveryTrackClick = () => {
    createModal({
      title: '송장번호  Tracking number',
      content: '발송일  Order date',
      align: 'left',
      onConfirm: () => {},
    });
  };

  // 주문 취소
  const handleCancelOrderClick = () => {
    showToast('주문 취소는 고객센터로 문의주시길 바랍니다.', 'faq', true, 100);
  };

  // 조기 반납
  const handleEarlyReturnClick = () => {
    showToast('조기반납은 고객센터로 문의주시길 바랍니다.', 'faq', true, 100);
  };

  // 고객센터
  const handleSeviceClick = () => {
    createModal({
      title: '고객센터',
      content: '02-1234으로 연락주세요.',
      onConfirm: () => {},
    });
  };

  if (order.reviewStatus === 'COMPLETED' && refundAmount) {
    return (
      <div className="w-full flex justify-center items-center p-m ds-rounded-xs bg-Fill-99 ">
        <p className="title3-m text-Label-Alternative">
          리포트 작성으로
          <span className="title3-sb text-Secondary-Normal p-1">
            {refundAmount}원
          </span>
          환급 받았어요!
        </p>
      </div>
    );
  }

  if (order.rentalStatus === 'PENDING') {
    return (
      <div className="w-full grid-2">
        <button
          className="flex justify-center items-center cursor-pointer px-m py-s ds-rounded-xs border-m border-Line-Subtler body2-m text-Label-Normal"
          onClick={handleCancelOrderClick}
        >
          주문취소
        </button>
        <button
          className="flex justify-center items-center cursor-pointer px-m py-s ds-rounded-xs border-m border-Line-Subtler body2-m text-Label-Normal"
          onClick={handleDeliveryTrackClick}
        >
          배송조회
        </button>
      </div>
    );
  }

  if (order.rentalStatus === 'ACTIVE') {
    return (
      <div className="w-full grid-2">
        <button
          className="flex justify-center items-center cursor-pointer px-m py-s ds-rounded-xs border-m border-Line-Subtler body2-m text-Label-Normal"
          onClick={handleSeviceClick}
        >
          고객센터
        </button>
        <button
          className="flex justify-center items-center cursor-pointer px-m py-s ds-rounded-xs border-m border-Line-Subtler body2-m text-Label-Normal"
          onClick={handleEarlyReturnClick}
        >
          조기반납
        </button>
      </div>
    );
  }

  return null;
}
