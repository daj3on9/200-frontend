import { getAPI } from '@/domains/common/api';
import { buildQuery } from './q';
import type {
  BrandId,
  SortType,
  ProductsApiResponse,
} from '@/domains/products/types/ProductsType';

export interface GetProductsParams {
  brands?: BrandId[];
  sortType: SortType;
  lastProductId?: number;
  limit?: number;
}

export async function getProducts(params: GetProductsParams) {
  const qs = buildQuery({
    sortType: params.sortType,
    limit: params.limit ?? 6,
    lastProductId: params.lastProductId,
    ...(params.brands ? { brands: params.brands } : {}),
  });
  const data = await getAPI<ProductsApiResponse>(`/products${qs}`);
  return data ?? { products: [], hasNext: false, lastProductId: null };
}
