'use client';
import React, { Dispatch, useEffect, useRef, useState } from 'react';
import OptionSelect from './OptionSelect';

interface Props {
  showOptions: boolean;
  setShowOptions: Dispatch<React.SetStateAction<boolean>>;
}

export default function FooterBtn({ showOptions, setShowOptions }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setShowOptions]);

  const handleAddCart = () => {
    if (showOptions) {
      // 장바구니에 넣는 로직 추가
    } else {
      setShowOptions(true);
    }
  };
  return (
    <div
      ref={containerRef}
      className={`z-41 absolute bottom-0 w-full p-3.5 bg-Static-White flex flex-col items-center gap-4 shadow-[-0px_-6px_12px_rgba(0,0,0,0.15)] ${
        showOptions ? 'rounded-tl-xl rounded-tr-xl' : ''
      }`}
    >
      {showOptions && <OptionSelect setShowOptions={setShowOptions} />}

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
        >
          결제하기
        </button>
      </div>
    </div>
  );
}
