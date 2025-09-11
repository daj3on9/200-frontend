'use client';
import React, { useEffect, useRef, useState } from 'react';
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
  const [todoHasNext, setTodoHasNext] = useState(true);
  const [todoLastId, setTodoLastId] = useState<number | null>(null);

  const [doneHasNext, setDoneHasNext] = useState(true);
  const [doneLastId, setDoneLastId] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAPI<RentalResponse>('/rentals?limit=10');
        if (!res) return;

        const rentals = res?.rentals ?? [];
        const todo: RentalItem[] = [];
        const done: RentalItem[] = [];

        rentals.forEach((rental) => {
          let target;
          if (
            rental.rentalStatus === 'IN_RETURN' ||
            (rental.rentalStatus === 'COMPLETED' &&
              rental.reviewStatus === 'AVAILABLE')
          ) {
            target = todo;
          } else if (rental.reviewStatus === 'COMPLETED') {
            target = done;
          }

          if (target) target.push(rental);
        });
        setTodoData(todo);
        setDoneData(done);

        setTodoHasNext(res.hasNext);
        setDoneHasNext(res.hasNext);
        setTodoLastId(res.lastRentalId);
        setDoneLastId(res.lastRentalId);
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(err.message);
        }
      }
    };
    getData();
  }, []);

  const fetchMoreData = async (selectTab: 'Todo' | 'Done') => {
    const lastId = selectTab === 'Todo' ? todoLastId : doneLastId;
    const res = await getAPI<RentalResponse>(
      `/rentals?limit=10&lastRentalId=${lastId}`
    );

    if (!res) return;

    const rentals = res?.rentals ?? [];
    const newData: RentalItem[] = [];

    rentals.forEach((rental) => {
      const isDone = rental.reviewStatus === 'COMPLETED';
      const shouldInclude = selectTab === 'Todo' ? !isDone : isDone;

      if (shouldInclude) {
        newData.push(rental);
      }
    });

    if (selectTab === 'Todo') {
      setTodoData((prev) => [...prev, ...newData]);
      setTodoHasNext(res.hasNext);
      setTodoLastId(res.lastRentalId);
    } else {
      setDoneData((prev) => [...prev, ...newData]);
      setDoneHasNext(res.hasNext);
      setDoneLastId(res.lastRentalId);
    }
  };

  useEffect(() => {
    const container = document.querySelector('.scroll-container');
    if (!container) return;

    const handleScroll = () => {
      const isBottom =
        container.scrollHeight - container.scrollTop <=
        container.clientHeight + 10;

      if (selectTab === 'Todo' && isBottom && todoHasNext) {
        fetchMoreData('Todo');
      }

      if (selectTab === 'Done' && isBottom && doneHasNext) {
        fetchMoreData('Done');
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [selectTab, todoHasNext, todoLastId, doneHasNext, doneLastId]);

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
      <div
        ref={scrollRef}
        className="scroll-container h-[calc(100vh-250px)] overflow-y-auto no-scrollbar"
      >
        {selectTab === 'Todo' ? (
          <ReportTodo todoData={todoData} />
        ) : (
          <ReportDone doneData={doneData} />
        )}
      </div>
    </div>
  );
}
