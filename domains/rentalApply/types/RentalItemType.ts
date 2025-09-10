export interface RentalItem {
  rentalId: number;
  rentalNumber: string;
  rentalStatus: 'ACTIVE' | 'RETURNED' | 'CANCELLED';
  reviewStatus: 'AVAILABLE' | 'PENDING' | 'COMPLETE';
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
