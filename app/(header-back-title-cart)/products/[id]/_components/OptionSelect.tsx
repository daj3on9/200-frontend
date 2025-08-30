'use client';
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import ArrowDownIcon from '@/public/icons/arrow-down.svg';
import ArrowUpIcon from '@/public/icons/arrow-up.svg';
import SelectColor from './SelectColor';

interface Props {
  setShowOptions: Dispatch<SetStateAction<boolean>>;
}

export default function OptionSelect({ setShowOptions }: Props) {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');

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
      {showColorPicker && (
        <SelectColor
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
