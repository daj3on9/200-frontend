'use client';
import React, { useState } from 'react';
import OptionSelect from './OptionSelect';

export default function FooterBtn() {
  const [showOptions, setShowOptions] = useState(false);

  const handleAddCart = () => {
    if (showOptions) {
      // 장바구니에 넣는 로직 추가
    } else {
      setShowOptions(true);
    }
  };
  return (
    <div className="relative w-full h-full px-3.5 bg-Static-White flex flex-col items-center gap-4 transition-all duration-300">
      {/* 옵션 선택 영역 */}
      {showOptions && <OptionSelect setShowOptions={setShowOptions} />}

      <div className="w-full flex justify-start items-start gap-3 pt-3">
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
