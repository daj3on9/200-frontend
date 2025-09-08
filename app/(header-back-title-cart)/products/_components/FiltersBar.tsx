'use client';

import { SortType } from '@/domains/products/types/ProductsType';
import ArrowDownIcon from '@/public/icons/arrow-down.svg';
import { useState } from 'react';

const LABEL: Record<SortType, string> = {
  REGISTERED: '기본순',
  LAUNCHED: '신상품순',
  PRICE_ASC: '낮은 가격순',
  PRICE_DESC: '높은 가격순',
};

const OPTIONS: SortType[] = [
  'REGISTERED',
  'LAUNCHED',
  'PRICE_ASC',
  'PRICE_DESC',
];

export default function FiltersBar({
  sort,
  onChangeSort,
}: {
  sort: SortType;
  onChangeSort: (v: SortType) => void;
}) {
  const [isReservable, setIsReservable] = useState(true);
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-11 px-3.5 py-3 bg-Static-White inline-flex justify-between items-center">
      {/* 예약 가능 버튼 */}
      <button
        onClick={() => setIsReservable((prev) => !prev)}
        className="flex justify-start items-center gap-2 cursor-pointer"
      >
        <div
          className={`w-7 h-4 p-0.5 ds-rounded-full flex items-center transition-colors duration-200 ${
            isReservable
              ? 'bg-Primary-Normal justify-end'
              : 'bg-Fill-98 justify-start'
          }`}
        >
          <div className="w-3 h-3 bg-Static-White ds-rounded-full transition-transform duration-200" />
        </div>
        <div className="flex justify-start items-center gap-0.5">
          <div className="justify-start text-Label-Normal title3-m">
            예약 가능
          </div>
        </div>
      </button>

      {/* 정렬 필터 */}
      <div className="relative inline-block ">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="w-full flex justify-start items-center gap-s cursor-pointer"
        >
          <span className="justify-start text-Label-Normal title3-m">
            {LABEL[sort]}
          </span>
          <ArrowDownIcon className="w-4 h-4 fill-Fill-20 relative" />
        </button>
        {open && (
          <ul className="absolute left-1/2 -translate-x-1/2 mt-3 z-[100] w-20 bg-Static-White border border-Line-Subtler shadow-sm ds-rounded-xs flex flex-col gap-2">
            {OPTIONS.map((opt) => (
              <li
                key={opt}
                onClick={() => {
                  onChangeSort(opt);
                  setOpen(false);
                }}
                className={`px-3 py-2 cursor-pointer body3-m ${
                  opt === sort ? 'text-Label-Normal' : 'text-Label-Assistive'
                }`}
              >
                {LABEL[opt]}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
