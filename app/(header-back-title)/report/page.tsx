'use client';
import Header from '@/domains/common/components/header';
import React, { useState } from 'react';
import RightArrowIcon from '@/public/icons/arrow-right.svg';
import Link from 'next/link';
import ReportTodo from './_components/ReportTodo';
import ReportDone from './_components/ReportDone';
import { CartItemState } from '@/domains/cart/types/cartItemType';

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

export default function Page() {
  const [selectTab, setSelectTab] = useState('Todo');
  const [todoData, setTodoData] = useState<CartItemState[]>(TEMPDATA);
  const [doneData, setDoneData] = useState<CartItemState[]>(TEMPDATA);

  return (
    <div className="h-screen overflow-hidden bg-Fill-99">
      <Header
        showBack
        title="리포트 작성하기"
      />
      <main>
        <div className="self-stretch px-3.5 py-3 bg-Static-White flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch flex flex-col justify-start items-start gap-1">
            <div className="flex justify-start items-center gap-1 title1-sb">
              <p className="justify-start text-Label-Subnormal">
                환급가능 금액
              </p>
              <p className="flex justify-start items-center text-Secondary-Normal">
                Total Price 원
              </p>
            </div>
            <div className="self-stretch flex justify-between items-center">
              <p className="text-Label-Alternative body3-m">
                나의 리포트 count 개
              </p>

              <Link
                href={
                  'https://www.notion.so/25dced6af65280759a55c81629afd17d?source=copy_link'
                }
                className="justify-start text-Label-Assistive underline body2-r"
              >
                환급 안내
              </Link>
            </div>
          </div>
        </div>
        <div className="self-stretch px-3.5 py-3 bg-Static-White ">
          <Link
            href={
              'https://www.notion.so/25dced6af6528053a4eef3054a1f8fdb?source=copy_link'
            }
            className="flex rounded justify-between items-center bg-Fill-99 p-2.5 cursor-pointer"
          >
            <p className="justify-start text-Label-Normal body2-m">
              리포트 작성 안내
            </p>
            <RightArrowIcon className="w-4 h-4 fill-Fill-20" />
          </Link>
        </div>
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
      </main>
    </div>
  );
}
