'use client';

interface Props {
  onSelect: (color: string, event: React.MouseEvent<HTMLDivElement>) => void;
}

export default function SelectColor({ onSelect }: Props) {
  return (
    <div className="absolute top-[-155px] left-[15px] w-90 flex flex-col gap-1 pt-2 bg-Static-White rounded-md outline outline-offset-[-1px] outline-Line-Subtle justify-start items-start shadow-[0px_0px_12px_rgba(0,0,0,0.15)]">
      <div className="text-center justify-start text-Label-Assistive body1-sb px-2">
        색상
      </div>
      <div className="flex flex-col gap-3 w-full h-[144px] overflow-y-auto">
        {['#bbb', '#f44236', '#36f4b8'].map((color) => (
          <div
            key={color}
            onClick={(event) => onSelect(color, event)}
            className="w-full cursor-pointer text-Label-Subnormal title2-sb p-2 hover:bg-Fill-90"
          >
            {color}
          </div>
        ))}
      </div>
    </div>
  );
}
