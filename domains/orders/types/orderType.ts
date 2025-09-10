export type RentalStatus = 'PENDING' | 'ACTIVE' | 'IN_RETURN' | 'COMPLETED';
export type ReviewStatus = 'PENDING' | 'AVAILABLE' | 'COMPLETED';

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

export interface OrderlItem {
  productName: string;
  color: string;
  price: number;
  productThumbnailUrl: string;
}

export interface Order {
  rentalId: number;
  rentalNumber: string;
  rentalStatus: RentalStatus;
  startAt: string;
  endAt: string;
  items: OrderlItem[];
  reviewStatus: ReviewStatus;
}

export interface OrderResponse {
  rentals: Order[];
  hasNext: boolean;
  lastRentalId: number | null;
}
