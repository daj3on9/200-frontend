'use client';

import { ProductDetailState } from '@/domains/products/types/ProductsType';

interface Props {
  detailData: ProductDetailState;
  onSelect: (color: string, event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function SelectColor({ detailData, onSelect }: Props) {
  return (
    <div className="absolute top-[-155px] left-[15px] w-90 flex flex-col gap-1 pt-2 bg-Static-White rounded-md outline outline-offset-[-1px] outline-Line-Subtle justify-start items-start shadow-[0px_0px_12px_rgba(0,0,0,0.15)]">
      <p className="text-center justify-start text-Label-Assistive body1-sb px-2">
        색상
      </p>
      <div className="flex flex-col gap-3 w-full h-[144px] overflow-y-auto">
        {detailData.colors.map((color) => (
          <div
            key={color}
            onClick={(event) => onSelect(color, event)}
            className="w-full cursor-pointer text-Label-Subnormal title2-sb p-2 hover:bg-Fill-99"
          >
            {color}
          </div>
        ))}
      </div>
    </div>
  );
}
