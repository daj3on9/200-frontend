'use client';

import { getAPI } from '@/domains/common/api';
import { useAuthStore } from '@/domains/common/store/authStore';
import { useQuery } from '@tanstack/react-query';
import { PaymentResponse } from '../types/orderType';

export function usePaymentQuery(rentalId: number) {
  const accessToken = useAuthStore((s) => s.accessToken);
  return useQuery({
    queryKey: ['rental', rentalId],
    queryFn: () => getAPI<PaymentResponse>(`/rentals/${rentalId}/payment`),
    enabled: !!accessToken,
  });
}
