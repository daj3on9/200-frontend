export type RentalStatus = 'delivering' | 'testing' | 'returning' | 'completed';

export interface OrderItemState {
  id: string;
  title: string;
  option: string;
  price: number;
  imageUrl: string;
  startDate?: number;
  endDate?: number;
}

export interface RentalItem {
  productName: string;
  color: string;
  price: number;
  productThumbnailUrl: string;
}

export interface Rental {
  rentalId: number;
  rentalNumber: string;
  status: RentalStatus;
  startAt: string;
  endAt: string;
  items: RentalItem[];
  // TODO : 리포트 작성 상태 수정
  isReviewed: boolean;
}

export interface RentalResponse {
  rentals: Rental[];
  hasNext: boolean;
  lastRentalId: number | null;
}
