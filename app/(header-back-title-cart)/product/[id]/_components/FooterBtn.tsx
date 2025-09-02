'use client';
import React, { Dispatch, useEffect, useRef, useState } from 'react';
import OptionSelect from './OptionSelect';
import { postAPI } from '@/domains/common/api';
import { useToastStore } from '@/domains/common/store/toastStore';

interface Props {
  id: string;
  showOptions: boolean;
  setShowOptions: Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  setShowModal: Dispatch<React.SetStateAction<boolean>>;
}

export default function FooterBtn({
  id,
  showOptions,
  setShowOptions,
  showModal,
  setShowModal,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedColor, setSelectedColor] = useState('');
  const { showToast } = useToastStore.getState();

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
    }

    // TODO : 장바구니 3개이상 있으면 추가 불가
    if (selectedColor === '') {
      showToast('장바구니에는 최대 3개만 담을 수 있어요', 'close', true);
    }

    console.log('장바구니!');
    // TODO : api 연결 후 주석 해제
    // try {
    //   await postAPI<null, { id: string }>('/addCart', { id });
    //   showToast('제품을 장바구니에 담았습니다.', 'cart', true);
    // } catch (error) {
    //   showToast('장바구니 담기에 실패했어요.', 'close');
    //   console.error('🛑 addCart 실패:', error);
    // }
  };

  const handlePayment = () => {
    if (selectedColor === '') {
      setShowModal(true);
    }
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
