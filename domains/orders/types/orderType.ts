export type RentalStatus = 'PENDING' | 'ACTIVE' | 'IN_RETURN' | 'COMPLETED';
export type ReviewStatus = 'PENDING' | 'AVAILABLE' | 'COMPLETED';

export interface OrderItem {
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
  items: OrderItem[];
  reviewStatus: ReviewStatus;
}

export interface OrderResponse {
  rentals: Order[];
  hasNext: boolean;
  lastRentalId: number | null;
}

// 체험 정보 타입
export interface OrderDetailResponse {
  rentalId: number;
  rentalNumber: string;
  rentalStatus: RentalStatus;
  startAt: string;
  endAt: string;
  reviewStatus: ReviewStatus;
  items: OrderItem[];
  paymentId: number;
}

// 결제 내역 타입
export interface PaymentResponse {
  paymentId: number;
  memberId: number;
  rentalId: number;
  totalAmount: number;
  rentalStartedAt: string;
  rentalEndedAt: string;
  items: OrderItem[];
}
