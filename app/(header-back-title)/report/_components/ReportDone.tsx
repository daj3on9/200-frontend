import React from 'react';
import ReportDoneDetail from './ReportDoneDetail';
import { RentalItem } from '@/domains/rentalApply/types/RentalItemType';
interface Props {
  doneData: RentalItem[];
}
export default function ReportDone({ doneData }: Props) {
  return (
    <>
      {!doneData.length ? (
        <div className="h-[calc(100vh-250px)] flex justify-center items-center">
          <p className="body1-m text-Label-Assistive">
            작성한 리포트가 없어요.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {doneData.map((item) => (
            <ReportDoneDetail
              key={item.rentalId}
              item={item}
            />
          ))}
        </div>
      )}
    </>
  );
}
