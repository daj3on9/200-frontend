export interface CartItemState {
  cartId: number;
  productName: string;
  productThumbnailUrl: string;
  color: string;
  dailyRentalPrice: number;
}

export interface CartData {
  carts: CartItemState[];
  totalPrice: number;
}
