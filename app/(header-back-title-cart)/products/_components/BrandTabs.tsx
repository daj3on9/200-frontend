'use client';

import { mockBrands } from '@/domains/products/api/mock';
import clsx from 'clsx';
import { useState } from 'react';

export default function BrandTabs() {
  const [selected, setSelected] = useState<string>(mockBrands[0]?.id ?? '');
  return (
    <div className="w-96 py-3 border-b-[0.50px] border-Line-Subtler flex justify-start items-center">
      <div className="w-20 shrink-0 border-r border-Line-Subtler flex justify-center items-center ">
        <div className="justify-start text-Label-Normal title2-sb">브랜드</div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="no-scrollbar overflow-x-auto whitespace-nowrap flex items-center gap-2 px-3">
          {mockBrands.map((brand) => {
            const isActive = selected === brand.id;
            return (
              <button
                type="button"
                key={brand.id}
                onClick={() => setSelected(brand.id)}
                data-active={isActive}
                className={clsx(
                  'body2-m px-2 py-1 rounded-full cursor-pointer',
                  isActive ? 'text-Primary-Normal' : 'text-Label-Subnormal'
                )}
              >
                {brand.name}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
