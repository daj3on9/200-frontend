export type OrderStatus = 'delivering' | 'testing' | 'returning' | 'completed';

export interface OrderItemState {
  id: string;
  title: string;
  option: string;
  price: number;
  imageUrl: string;
  startDate?: number;
  endDate?: number;
}

export interface Order {
  orderNumber: string;
  status: OrderStatus;
  refundAmount?: number;
  isReviewed?: 'completed' | 'expire' | 'yet';
  items: OrderItemState[];
}
