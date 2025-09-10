export type RentalStatus = 'PENDING' | 'ACTIVE' | 'IN_RETURN' | 'COMPLETED';
export type ReveiwStatus = 'PENDING' | 'AVAILABLE' | 'COMPLETED';

// OrderItemState는 안쓸거임 목데이터때문에 남겨둔거임
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
  rentalStatus: RentalStatus;
  startAt: string;
  endAt: string;
  items: RentalItem[];
  reviewStatus: ReveiwStatus;
}

export interface RentalResponse {
  rentals: Rental[];
  hasNext: boolean;
  lastRentalId: number | null;
}
