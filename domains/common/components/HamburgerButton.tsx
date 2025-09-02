'use client';

import { useRouter } from 'next/navigation';
import HamburgerIcon from '@/public/icons/hamburger.svg';

export default function HamburgerButton() {
  const router = useRouter();

  const openMenu = () => {
    router.push('/menu');
  };

  return (
    <button
      aria-label="메뉴 열기"
      onClick={openMenu}
    >
      <HamburgerIcon className="w-6 h-6 fill-Fill-20" />
    </button>
  );
}
