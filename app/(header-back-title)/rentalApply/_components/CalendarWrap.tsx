'use client';
import React, { useState } from 'react';
import { DateRange, Range, RangeKeyDict } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays, format, isSameDay, startOfDay } from 'date-fns';
import { ko } from 'date-fns/locale';
import '@/domains/rentalApply/css/calendar.css';

export default function CalendarWrap() {
  const today = startOfDay(new Date());

  const [range, setRange] = useState<Range>({
    startDate: undefined,
    endDate: undefined,
    key: 'selection',
  });

  const handleChange = (ranges: RangeKeyDict) => {
    const selectedStart = ranges.selection.startDate;
    if (!selectedStart) return;

    const newStart = startOfDay(selectedStart);
    const newEnd = addDays(newStart, 6);

    setRange({
      startDate: newStart,
      endDate: newEnd,
      key: 'selection',
    });
  };
  return (
    <div className="w-full bg-Static-White pb-3">
      <DateRange
        ranges={[
          {
            startDate: range.startDate ?? today,
            endDate: range.endDate ?? today,
            key: 'selection',
          },
        ]}
        onChange={handleChange}
        minDate={today}
        showMonthAndYearPickers={true}
        showDateDisplay={false}
        rangeColors={['#01A83F']}
        editableDateInputs={false}
        locale={ko}
      />
      <div className="flex px-3.5 justify-center text-center">
        <div className="flex-1 flex flex-col gap-1">
          <p className="body3-m text-Label-Assistive">체험 시작일</p>
          <p className="title3-sb">
            {range.startDate
              ? format(range.startDate, 'MM.dd EEEE', { locale: ko })
              : '날짜를 선택해주세요'}
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <p className="body3-m text-Label-Assistive">체험 종료일</p>
          <p className="title3-sb">
            {range.endDate
              ? format(range.endDate, 'MM.dd EEEE', { locale: ko })
              : '날짜를 선택해주세요'}
          </p>
        </div>
      </div>
    </div>
  );
}
