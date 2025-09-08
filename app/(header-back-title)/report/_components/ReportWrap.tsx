'use client';
import { CartItemState } from '@/domains/cart/types/cartItemType';
import React, { useState } from 'react';
import ReportTodo from './ReportTodo';
import ReportDone from './ReportDone';

const TEMPDATA = [
  {
    id: '1',
    title: '이어폰 1',
    option: '검정색',
    price: '45,000',
    image: '',
  },
  {
    id: '2',
    title: '이어폰 2',
    option: '하늘색',
    price: '45,000',
    image: '',
  },
  {
    id: '3',
    title: '이어폰 3',
    option: '흰색',
    price: '45,000',
    image: '',
  },
];

export default function ReportWrap() {
  const [selectTab, setSelectTab] = useState('Todo');
  const [todoData, setTodoData] = useState<CartItemState[]>(TEMPDATA);
  const [doneData, setDoneData] = useState<CartItemState[]>(TEMPDATA);
  return (
    <div>
      <div className="self-stretch px-4 bg-Static-White border-b border-Line-Subtler flex gap-2 justify-start items-center">
        <button
          type="button"
          className={`p-3 cursor-pointer ${
            selectTab === 'Todo'
              ? 'border-b-2 border-Primary-Normal title2-b text-Label-Normal'
              : 'body1-m text-Label-Normal'
          }`}
          onClick={() => setSelectTab('Todo')}
        >
          작성 가능한 리포트
        </button>
        <button
          type="button"
          className={`p-3 cursor-pointer ${
            selectTab === 'Done'
              ? 'border-b-2 border-Primary-Normal title2-b text-Label-Normal'
              : 'body1-m text-Label-Normal'
          }`}
          onClick={() => setSelectTab('Done')}
        >
          작성한 리포트
        </button>
      </div>
      <div className="h-[calc(100vh-250px)] overflow-y-auto no-scrollbar">
        {selectTab === 'Todo' ? (
          <ReportTodo todoData={todoData} />
        ) : (
          <ReportDone doneData={doneData} />
        )}
      </div>
    </div>
  );
}
