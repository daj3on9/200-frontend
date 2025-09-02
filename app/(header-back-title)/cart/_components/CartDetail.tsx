import React from 'react';
import CloseIcon from '@/public/icons/close.svg';

export default function CartDetail() {
  return (
    <div className="h-full bg-Static-White flex flex-col">
      <div className="bg-Static-White pb-6">
        <div className="flex justify-between items-center px-3.5 py-3 border-b border-Line-Subtler">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="allCheck"
              className="mr-2"
            />
            <label
              htmlFor="allCheck"
              className="title3-sb"
            >
              전체 선택
            </label>
          </div>
          <button className="text-center text-Label-Subnormal body2-m px-2 py-1 rounded outline outline-offset-[-1px] outline-Line-Subtler ">
            선택 삭제
          </button>
        </div>
        <div className="h-[366px] px-3.5">
          <div className="py-3 flex justify-start items-start gap-3">
            <input
              type="checkbox"
              className="mt-1"
            />
            <div className="flex-1 flex justify-between items-start">
              <div className="flex justify-start items-center gap-3">
                <div className="w-20 h-20 relative rounded border-1">img</div>
                <div className="self-stretch flex flex-col justify-between items-start">
                  <p className="body2-r text-Label-Subnormal">Title</p>
                  <p className="body2-r text-Label-Assistive">옵션 : Label</p>
                  <p className="body2-r text-Label-Assistive">
                    YY.MM.DD(요일) ~ YY.MM.DD(요일){' '}
                  </p>
                  <p className="title1-sb text-Label-Normal">00,000원</p>
                </div>
              </div>
              <CloseIcon className="w-4 h-4 fill-Fill-20" />
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}
