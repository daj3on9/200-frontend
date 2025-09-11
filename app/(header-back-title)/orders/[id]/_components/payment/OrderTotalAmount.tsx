'use client';

import RightArrowIcon from '@/public/icons/arrow-right.svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface OrderTotalAmountProps {
  totalPrice: number;
}

export default function OrderTotalAmount({
  totalPrice,
}: OrderTotalAmountProps) {
  const pathname = usePathname();

  return (
    <div className="w-full px-4 py-6 bg-Static-White inline-flex flex-col justify-end items-center gap-2 overflow-hidden">
      <div className="self-stretch inline-flex justify-between items-center">
        <p className="text-center justify-start text-Label-Assistive title3-sb">
          서비스 이용 총 금액
        </p>
        <Link
          href={`${pathname}/receipt`}
          className="cursor-pointer"
        >
          <div className="flex justify-start items-center gap-[5px]">
            <p className="justify-start text-Label-Assistive body3-m">
              카드 영수증 보기
            </p>

            <RightArrowIcon className="w-4 h-4 fill-Fill-80" />
          </div>
        </Link>
      </div>
      <div className="w-full py-1 inline-flex justify-between items-end">
        <p className="justify-start text-Label-Subnormal title2-sb">결제금액</p>
        <div className="flex justify-end items-end text-Label-Subnormal">
          <p className="justify-start  h3-b">{totalPrice.toLocaleString()}</p>
          <p className="justify-start title2-sb">원</p>
        </div>
      </div>
    </div>
  );
}
