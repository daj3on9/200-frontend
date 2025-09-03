'use client';

import ArrowDownIcon from '@/public/icons/arrow-down.svg';
import { useState } from 'react';

type SortValue = 'default' | 'new' | 'lowPrice' | 'highPrice';

const SORT_OPTIONS: { value: SortValue; label: string }[] = [
  { value: 'default', label: '기본순' },
  { value: 'new', label: '신상품순' },
  { value: 'lowPrice', label: '낮은 가격순' },
  { value: 'highPrice', label: '높은 가격순' },
];

export default function FiltersBar() {
  const [isReservable, setIsReservable] = useState(true);
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState('default');

  const selectOption = (v: SortValue) => {
    setSort(v);
    setOpen(false);
  };

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
            {SORT_OPTIONS.find((o) => o.value === sort)?.label}
          </span>
          <ArrowDownIcon className="w-4 h-4 fill-Fill-20 relative" />
        </button>
        {open && (
          <ul className="absolute left-1/2 -translate-x-1/2 mt-3 z-[100] w-20 bg-Static-White border border-Line-Subtler shadow-sm ds-rounded-xs flex flex-col gap-2">
            {SORT_OPTIONS.map((opt) => {
              const isSelected = opt.value === sort;
              return (
                <li
                  key={opt.value}
                  onClick={() => selectOption(opt.value)}
                  className={`px-3 py-2 cursor-pointer body3-m
                    ${isSelected ? 'text-Label-Normal' : 'text-Label-Assistive'}
                  `}
                >
                  {opt.label}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
