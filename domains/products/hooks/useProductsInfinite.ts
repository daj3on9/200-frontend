'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { getProducts } from '@/domains/products/api/products';
import type { BrandId, SortType } from '@/domains/products/types/ProductsType';

export function useProductsInfinite(
  brands: BrandId[] | undefined,
  sort: SortType,
  limit = 6
) {
  return useInfiniteQuery({
    queryKey: ['products', { brands, sort, limit }],
    queryFn: ({ pageParam }) =>
      getProducts({
        brands,
        sortType: sort,
        lastProductId: pageParam as number | undefined,
        limit,
      }),
    initialPageParam: undefined as number | undefined,
    getNextPageParam: (last) =>
      last.hasNext ? last.lastProductId ?? undefined : undefined,
  });
}
