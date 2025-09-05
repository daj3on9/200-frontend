'use client';

// import { useRouter } from 'next/navigation';
import BasketIcon from '@/public/icons/Score=0.svg';

export default function CartButton() {
  // const router = useRouter();

  // TODO : 장바구니 링크 추가 필요
  /*
  const openMenu = () => {
    router.push('/menu');
  };
  */

  return (
    <button
      aria-label="메뉴 열기"
      // onClick={openMenu}
      className="cursor-pointer"
    >
      <BasketIcon className="w-6 h-6 fill-Fill-20" />
    </button>
  );
}
