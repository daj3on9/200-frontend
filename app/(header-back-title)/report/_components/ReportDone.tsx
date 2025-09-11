import React from 'react';
import ReportDoneDetail from './ReportDoneDetail';
import { RentalItem } from '@/domains/rentalApply/types/RentalItemType';
interface Props {
  doneData: RentalItem[];
}
export default function ReportDone({ doneData }: Props) {
  const totalPrice = doneData.reduce((acc, rental) => {
    const itemTotal = rental.items.reduce(
      (sum, item) => sum + item.price / 7,
      0
    );
    return acc + itemTotal;
  }, 0);
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
          {/* <ReportDoneDetail
            item={doneData[0]}
            totalPrice={totalPrice}
          /> */}
          {doneData.map((item, i) => (
            <ReportDoneDetail
              key={`${item.rentalId}_${i}`}
              item={item}
            />
          ))}
        </div>
      )}
    </>
  );
}
