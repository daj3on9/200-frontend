'use client';

import { useRouter } from 'next/navigation';
import Hamburger from '../@modal/_components/Hamburger';

export default function MenuPage() {
  const router = useRouter();
  const handleClose = () => {
    setTimeout(() => {
      router.push('/');
    }, 300);
  };

  return (
    <div
      className="absolute inset-0 z-[1000] bg-Dim-Default flex justify-end overflow-hidden"
      onClick={handleClose}
    >
      {/* 햄버거 화면 */}
      <div
        className="inline-flex transform transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <Hamburger />
      </div>
    </div>
  );
}
