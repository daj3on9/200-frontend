export type BrandId =
  | 'SONY'
  | 'APPLE'
  | 'BOSE'
  | 'SENNHEISER'
  | 'BANG_OLUFSEN'
  | 'BOWERS_WILKINS'
  | 'MARSHALL'
  | 'DYSON'
  | 'JBL'
  | 'NOTHING';

export type SortType = 'REGISTERED' | 'LAUNCHED' | 'PRICE_ASC' | 'PRICE_DESC';

export interface Product {
  id: number;
  name: string;
  brand: BrandId;
  thumbnailImageUrl: string;
  dailyRentalPrice: number;
}

export interface ProductsApiResponse {
  products: Product[];
  hasNext: boolean;
  lastProductId: number | null;
}
