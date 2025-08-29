'use client';
import React, { Dispatch, SetStateAction, useState } from 'react';
import ArrowDownIcon from '@/public/icons/arrow-down.svg';
import ArrowUpIcon from '@/public/icons/arrow-up.svg';
import SelectColor from './SelectColor';

interface Props {
  setShowOptions: Dispatch<SetStateAction<boolean>>;
}

export default function OptionSelect({ setShowOptions }: Props) {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

  // const handleAddToCartClick = () => {
  //   setShowOptions(true);
  // };

  // const handleColorSelect = (color: string) => {
  //   setSelectedColor(color);
  //   setShowOptions(false);
  //   // 실제 장바구니 로직 추가 가능
  // };
  return (
    <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 z-50 w-full">
      <div className="px-3 pt-3 pb-6 bg-Static-White rounded-tl-xl rounded-tr-xl shadow-[-0px_-6px_12px_rgba(0,0,0,0.15)] flex flex-col justify-start items-center gap-3 overflow-hidden">
        <div className="w-28 h-1.5 relative">
          <div
            className="w-28 h-1.5 left-0 top-0 absolute bg-Fill-30 rounded-full cursor-pointer"
            onClick={() => setShowOptions(false)}
          />
        </div>
        <div className="w-90 p-4 rounded-sm outline outline-Line-Subtle flex justify-between items-center">
          <div
            className="w-full text-center text-Label-Assisitive title2-sb flex justify-between items-center cursor-pointer"
            onClick={() => setShowColorPicker(!showColorPicker)}
          >
            색상
            {showColorPicker ? (
              <ArrowUpIcon className="w-5 h-5" />
            ) : (
              <ArrowDownIcon className="w-5 h-5" />
            )}
          </div>
        </div>
      </div>
      {showColorPicker && (
        <SelectColor
          onSelect={(color) => {
            console.log('선택된 색상:', color);
            setShowColorPicker(false);
          }}
          setSelectedColor={setSelectedColor}
        />
      )}
    </div>
  );
}
