'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Hamburger from '../_components/Hamburger';

export default function Page() {
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);

  // 등장 애니메이션
  useEffect(() => {
    requestAnimationFrame(() => {
      setIsAnimating(true);
    });
  }, []);

  // 화면 닫기
  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      router.back();
    }, 300);
  };

  return (
    <div
      className="absolute inset-0 z-[1000] bg-Dim-Default flex justify-end overflow-hidden"
      onClick={handleClose}
    >
      {/* 햄버거 화면 */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`inline-flex transform transition-transform duration-300 ease-in-out ${
          isAnimating ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Hamburger />
      </div>
    </div>
  );
}
