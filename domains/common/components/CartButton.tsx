'use client';

import { useRouter } from 'next/navigation';
import BasketIcon from '@/public/icons/Score=0.svg';
import { useAuthStore } from '../store/authStore';

export default function CartButton() {
  const router = useRouter();
  const { isLoggedIn } = useAuthStore.getState();

  const moveToCart = () => {
    if (isLoggedIn) {
      router.push('/cart');
    } else {
      router.push('/login');
    }
  };

  return (
    <button
      type="button"
      onClick={moveToCart}
      className="cursor-pointer"
    >
      <BasketIcon className="w-6 h-6 fill-Fill-20" />
    </button>
  );
}
