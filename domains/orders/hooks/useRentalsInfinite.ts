'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { OrderResponse } from '../types/orderType';
import { getOrders } from '../api/orders';
import { useAuthStore } from '@/domains/common/store/authStore';

export function useRentalsInfinite(limit = 2) {
  const accessToken = useAuthStore((s) => s.accessToken);

  return useInfiniteQuery<OrderResponse>({
    queryKey: ['rentals', { limit }],
    queryFn: ({ pageParam }) =>
      getOrders({ lastRentalId: pageParam as number | undefined, limit }),
    initialPageParam: undefined as number | undefined,
    getNextPageParam: (last) =>
      last.hasNext ? last.lastRentalId ?? undefined : undefined,
    enabled: !!accessToken,
  });
}
