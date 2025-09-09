'use client';

import { useRouter } from 'next/navigation';
import BasketIcon from '@/public/icons/Score=0.svg';
import Basket1Icon from '@/public/icons/Score=1.svg';
import Basket2Icon from '@/public/icons/Score=2.svg';
import Basket3Icon from '@/public/icons/Score=3.svg';
import { useAuthStore } from '../store/authStore';
import { useCartQuery } from '@/domains/cart/hooks/useCartQuery';

export default function CartButton() {
  const router = useRouter();
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  const { cartQuery } = useCartQuery();

  const moveToCart = () => {
    if (isLoggedIn) {
      router.push('/cart');
      return;
    } else {
      router.push('/login');
    }
  };

  const getBasketIcon = () => {
    const cartItems = cartQuery.data?.carts || [];
    const cartCount = cartItems.length;
    if (!isLoggedIn) return <BasketIcon className="w-6 h-6 fill-Fill-20" />;
    if (cartCount === 0) return <BasketIcon className="w-6 h-6 fill-Fill-20" />;
    if (cartCount === 1)
      return <Basket1Icon className="w-6 h-6 fill-Fill-20" />;
    if (cartCount === 2)
      return <Basket2Icon className="w-6 h-6 fill-Fill-20" />;
    if (cartCount === 3)
      return <Basket3Icon className="w-6 h-6 fill-Fill-20" />;
  };

  return (
    <button
      type="button"
      onClick={moveToCart}
      className="cursor-pointer"
    >
      {getBasketIcon()}
    </button>
  );
}
