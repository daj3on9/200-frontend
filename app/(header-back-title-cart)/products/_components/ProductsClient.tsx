'use client';

import BrandTabs from './BrandTabs';
import FiltersBar from './FiltersBar';
import ProductGrid from './ProductGrid';
import type { BrandId, SortType } from '@/domains/products/types/ProductsType';
import { useEffect, useMemo, useState } from 'react';
import { useProductsInfinite } from '@/domains/products/hooks/useProductsInfinite';
import { useInView } from 'react-intersection-observer';

export default function ProductsClient() {
  const [brands, setBrands] = useState<BrandId[] | undefined>(undefined);
  const [sort, setSort] = useState<SortType>('REGISTERED');

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useProductsInfinite(brands, sort, 6);

  const flat = useMemo(
    () => (data?.pages ?? []).flatMap((p) => p.products),
    [data]
  );

  const mapped = useMemo(
    () =>
      flat.map((p) => ({
        id: String(p.id),
        brand: p.brand,
        name: p.name,
        dailyRentalPrice: p.dailyRentalPrice,
        thumbnailImageUrl: p.thumbnailImageUrl,
      })),
    [flat]
  );

  const { ref, inView } = useInView({ rootMargin: '200px' });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) fetchNextPage();
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <>
      <div className="flex-shrink-0 bg-Static-White">
        <BrandTabs
          selected={brands}
          onChange={setBrands}
        />
        <FiltersBar
          sort={sort}
          onChangeSort={setSort}
        />
      </div>
      <div className="flex-1 overflow-y-auto no-scrollbar bg-Static-White">
        <ProductGrid
          loading={isLoading && mapped.length === 0}
          products={mapped}
        />
        {hasNextPage && (
          <div
            ref={ref}
            className="py-6 text-center body3-r text-Label-Assistive"
          >
            {isFetchingNextPage ? '' : ''}
          </div>
        )}
      </div>
    </>
  );
}
