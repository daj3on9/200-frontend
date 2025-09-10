'use client';
import React, { useEffect, useState } from 'react';
import ReportTodo from './ReportTodo';
import ReportDone from './ReportDone';
import { getAPI } from '@/domains/common/api';
import {
  RentalItem,
  RentalResponse,
} from '@/domains/rentalApply/types/RentalItemType';

export default function ReportWrap() {
  const [selectTab, setSelectTab] = useState('Todo');
  const [todoData, setTodoData] = useState<RentalItem[]>([]);
  const [doneData, setDoneData] = useState<RentalItem[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAPI<RentalResponse>('/rentals');
        const rentals = res?.rentals ?? [];
        const todo: RentalItem[] = [];
        const done: RentalItem[] = [];

        rentals.forEach((rental) => {
          const target = rental.reviewStatus === 'COMPELTED' ? done : todo;

          rental.items.forEach((item) => {
            target.push({
              ...rental,
              ...item,
            });
          });
        });
        setTodoData(todo);
        setDoneData(done);
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(err.message);
        }
      }
    };
    getData();
  }, []);

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
