'use client';

import { BRANDS as ALL_BRANDS } from '@/lib/brands';
import { BrandId } from '@/domains/products/types/ProductsType';
import clsx from 'clsx';
import { useMemo } from 'react';
import debounce from 'lodash.debounce';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FreeMode } from 'swiper/modules';

const BRAND_OPTIONS: { id: BrandId; name: string }[] = ALL_BRANDS.map((b) => ({
  id: b.id as BrandId,
  name: b.name,
}));

export default function BrandTabs({
  selected,
  onChange,
}: {
  selected?: BrandId[];
  onChange: (v: BrandId[] | undefined) => void;
}) {
  // 브랜드 선택 디바운싱
  const debouncedOnChange = useMemo(() => debounce(onChange, 300), [onChange]);

  // 브랜드 선택
  const toggle = (id: BrandId) => {
    if (!selected || selected.length === 0) {
      return debouncedOnChange([id]);
    }
    const exists = selected.includes(id);
    const next = exists ? selected.filter((b) => b !== id) : [...selected, id];
    debouncedOnChange(next.length ? next : undefined);
  };

  return (
    <div className="w-96 py-3 border-b-[0.50px] border-Line-Subtler flex justify-start items-center">
      <div className="w-20 shrink-0 border-r border-Line-Subtler flex justify-center items-center ">
        <div className="justify-start text-Label-Normal title2-sb">브랜드</div>
      </div>
      <div className="flex-1 min-w-0 w-full px-3">
        <Swiper
          modules={[FreeMode]}
          slidesPerView={'auto'}
          spaceBetween={8}
          freeMode={true}
        >
          {BRAND_OPTIONS.map((b) => {
            const active = selected?.includes(b.id) ?? false;
            return (
              <SwiperSlide
                key={b.id}
                style={{ width: 'auto' }}
              >
                <button
                  onClick={() => toggle(b.id)}
                  onMouseDown={(e) => e.preventDefault()}
                  tabIndex={-1}
                  className={clsx(
                    'body2-m px-2 py-1 rounded-full cursor-pointer focus:outline-none select-none',
                    active ? 'text-Primary-Normal' : 'text-Label-Subnormal'
                  )}
                >
                  {b.name}
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
