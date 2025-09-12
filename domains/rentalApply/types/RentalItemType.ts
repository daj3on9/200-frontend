export interface RentalItem {
  rentalId: number;
  rentalNumber: string;
  rentalStatus: 'PENDING' | 'ACTIVE' | 'IN_RETURN' | 'COMPLETED';
  reviewStatus: 'PENDING' | 'AVAILABLE' | 'COMPLETED';
  startAt: string;
  endAt: string;
  items: {
    productName: string;
    color: string;
    price: number;
    productThumbnailUrl: string;
  }[];
}

export interface RentalResponse {
  rentals: RentalItem[];
  hasNext: boolean;
  lastRentalId: number;
}
export interface RentalCountState {
  count: number;
  totalRefundPrice: number;
}
