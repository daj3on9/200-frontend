'use client';
import React, { Dispatch, useEffect, useRef, useState } from 'react';
import OptionSelect from './OptionSelect';
import { useToastStore } from '@/domains/common/store/toastStore';
import { useCartQuery } from '@/domains/cart/hooks/useCartQuery';
import { useAuthStore } from '@/domains/common/store/authStore';
import { useRouter } from 'next/navigation';

interface Props {
  id: number;
  price: number;
  showOptions: boolean;
  setShowOptions: Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
}

export default function FooterBtn({
  id,
  price,
  showOptions,
  setShowOptions,
  showModal,
  setShowModal,
}: Props) {
  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedColor, setSelectedColor] = useState('');
  const { showToast } = useToastStore();
  const { cartQuery, addMutation } = useCartQuery();
  const cartItems = cartQuery.data?.carts ?? [];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showModal) return false;
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
        setSelectedColor('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowOptions, showModal]);

  const handleAddCart = async () => {
    if (!showOptions) {
      setShowOptions(true);
      return;
    }

    if (selectedColor === '') {
      setShowModal(true);
      return;
    }

    if (!isLoggedIn) {
      showToast('로그인 후 이용하실 수 있습니다.', 'close', false, 100);
      return;
    }

    if (cartItems?.length >= 3) {
      showToast('장바구니에는 최대 3개만 담을 수 있어요', 'close', true, 100);
      return;
    }

    addMutation.mutate({ productId: id, color: selectedColor });
  };

  const handlePayment = async () => {
    if (!isLoggedIn) {
      showToast('로그인 후 이용하실 수 있습니다.', 'close', false, 100);
      return;
    }

    if (selectedColor === '') {
      setShowModal(true);
      return;
    }

    sessionStorage.removeItem('rentalInfo');
    sessionStorage.setItem(
      'rentalInfo',
      JSON.stringify({ productId: id, color: selectedColor, price: price })
    );
    router.push('/rentalApply?direct=true');
  };

  return (
    <div
      ref={containerRef}
      className={`z-41 absolute bottom-0 w-full p-3.5 bg-Static-White flex flex-col items-center gap-4 shadow-[-0px_-6px_12px_rgba(0,0,0,0.15)] ${
        showOptions ? 'rounded-tl-xl rounded-tr-xl' : ''
      }`}
    >
      {showOptions && (
        <OptionSelect
          setShowOptions={setShowOptions}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      )}

      <div className="flex gap-3">
        <button
          type="button"
          className="w-[174px] p-4 rounded outline outline-Line-Subtle text-Label-Subnormal items-center cursor-pointer title2-sb"
          onClick={handleAddCart}
        >
          장바구니 담기
        </button>
        <button
          type="button"
          className="w-[174px] p-4 rounded bg-Primary-Normal text-Static-White items-center cursor-pointer title2-sb"
          onClick={handlePayment}
        >
          결제하기
        </button>
      </div>
    </div>
  );
}
