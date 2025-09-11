import { useInfiniteQuery } from '@tanstack/react-query';
import { getAPI } from '@/domains/common/api';
import { RentalResponse } from '@/domains/rentalApply/types/RentalItemType';
import { useAuthStore } from '@/domains/common/store/authStore';

interface APIErrRes {
  code: string;
  detail: string;
  exception: string;
  instance: string;
  status: number;
  timestamp: string;
  title: string;
  type: string;
}

export const useReportQuery = () => {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);

  const reportQuery = useInfiniteQuery<RentalResponse, APIErrRes>({
    queryKey: ['rentals'],
    queryFn: async ({ pageParam = 0 }) => {
      const lastRentalId = pageParam === 0 ? '' : `&lastRentalId=${pageParam}`;
      const res = await getAPI<RentalResponse>(
        `/rentals?limit=3${lastRentalId}`
      );
      if (!res) throw new Error('No data received');
      return res;
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? lastPage.lastRentalId : undefined,
    enabled: isLoggedIn,
  });

  return reportQuery;
};
