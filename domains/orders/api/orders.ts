import { getAPI } from '@/domains/common/api';
import { buildQuery } from '@/domains/products/api/q';
import { RentalResponse } from '../types/orderType';

export async function getRentals(params: {
  lastRentalId?: number;
  limit?: number;
}) {
  const qs = buildQuery({
    lastRentalId: params.lastRentalId,
    limit: params.limit,
  });
  const data = await getAPI<RentalResponse>(`/rentals${qs}`);
  return data ?? { rentals: [], hasNext: false, lastRentalId: null };
}
