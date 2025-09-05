'use client';

import { useRouter } from 'next/navigation';
import HomeIcon from '@/public/icons/home.svg';

export default function HomeButton() {
  const router = useRouter();

  const openMenu = () => {
    router.push('/');
  };

  return (
    <button
      aria-label="홈으로 이동"
      onClick={openMenu}
      className="cursor-pointer"
    >
      <HomeIcon className="w-6 h-6 fill-Fill-20" />
    </button>
  );
}
