'use client';
import React, { Dispatch, SetStateAction, useState } from 'react';
import ArrowDownIcon from '@/public/icons/arrow-down.svg';
import ArrowUpIcon from '@/public/icons/arrow-up.svg';
import SelectColor from './SelectColor';
import ProductPrice from './ProductPrice';
import { ProductDetailState } from '@/domains/products/types/ProductsType';

interface Props {
  setShowOptions: Dispatch<SetStateAction<boolean>>;
  selectedColor: string;
  setSelectedColor: Dispatch<SetStateAction<string>>;
  detailData: ProductDetailState;
}

export default function OptionSelect({
  setShowOptions,
  selectedColor,
  setSelectedColor,
  detailData,
}: Props) {
  const [showColorPicker, setShowColorPicker] = useState(false);

  return (
    <div>
      <div className="flex flex-col justify-start items-center gap-3 ">
        <div className="w-28 h-1.5 relative">
          <div
            className="w-28 h-1.5 left-0 top-0 absolute bg-Fill-30 rounded-full cursor-pointer"
            onClick={() => setShowOptions(false)}
          />
        </div>
        <div
          onClick={() => setShowColorPicker(!showColorPicker)}
          className="w-90 p-4 rounded-sm outline outline-Line-Subtle title2-sb flex justify-between items-center cursor-pointer"
        >
          {selectedColor === '' ? '색상' : selectedColor}

          {showColorPicker ? (
            <ArrowUpIcon className="w-5 h-5" />
          ) : (
            <ArrowDownIcon className="w-5 h-5" />
          )}
        </div>
      </div>
      {selectedColor && <ProductPrice detailData={detailData} />}
      {showColorPicker && (
        <SelectColor
          detailData={detailData}
          onSelect={(color, event) => {
            event.stopPropagation();
            setSelectedColor(color);
            setShowColorPicker(false);
          }}
        />
      )}
    </div>
  );
}
