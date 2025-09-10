'use client';

import { getAPI } from '@/domains/common/api';
import { useAuthStore } from '@/domains/common/store/authStore';
import { useQuery } from '@tanstack/react-query';
import { PaymentResponse } from '../types/orderType';

export function usePaymentQuery(paymentId: number) {
  const accessToken = useAuthStore((s) => s.accessToken);
  return useQuery({
    queryKey: ['payment', paymentId],
    queryFn: () => getAPI<PaymentResponse>(`/payments/${paymentId}`),
    enabled: !!accessToken,
  });
}
