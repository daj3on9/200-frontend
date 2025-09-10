'use client';

import { useQuery } from '@tanstack/react-query';
import { OrderDetailResponse } from '../types/orderType';
import { getAPI } from '@/domains/common/api';
import { useAuthStore } from '@/domains/common/store/authStore';

export function useOrderDetailQuery(rentalId: number) {
  const accessToken = useAuthStore((s) => s.accessToken);
  return useQuery({
    queryKey: ['rental', rentalId],
    queryFn: () => getAPI<OrderDetailResponse>(`/rentals/${rentalId}`),
    enabled: !!accessToken,
  });
}
