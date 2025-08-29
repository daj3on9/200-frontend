import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  onSelect: (color: string) => void;
  setSelectedColor: Dispatch<SetStateAction<string>>;
}

export default function SelectColor({ onSelect }: Props) {
  return (
    <div className="flex flex-col gap-3 pt-2bg-Static-White rounded-md outline outline-offset-[-1px] outline-Line-Subtle justify-start items-start">
      {['#bbb', '#f44236', '#36f4b8'].map((color) => (
        <div
          key={color}
          onClick={() => onSelect(color)}
          className="cursor-pointer"
        >
          {color}
        </div>
      ))}
      ;
    </div>
  );
}
