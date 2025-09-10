import Link from 'next/link';
import ReportItemDetail from './ReportItemDetail';
import { RentalItem } from '@/domains/rentalApply/types/rentalItemType';

interface Props {
  todoData: RentalItem[];
}

export default function ReportTodo({ todoData }: Props) {
  return (
    <>
      {!todoData.length ? (
        <div className="h-[calc(100vh-250px)] flex justify-center items-center">
          <p className="body1-m text-Label-Assistive">
            작성 가능한 리포트가 없어요.
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {todoData.map((item) => (
            <div
              key={item.rentalId}
              className="bg-Static-White px-3.5 py-4 flex flex-col gap-3"
            >
              <div className="self-stretch flex justify-start items-center gap-2">
                <div className="px-2 py-1 bg-Fill-99 rounded ">
                  <p className=" text-Label-Alternative caption-m">D- 99</p>
                </div>
                <p className=" text-Label-Subnormal body3-m">
                  작성 시 <span className="text-Secondary-Normal">Price*7</span>{' '}
                  원 환급예정
                </p>
              </div>
              <ReportItemDetail
                item={item.items[0]}
                startDate={item.startAt}
                endDate={item.endAt}
              />
              <Link
                href={'/report/write'}
                className="w-full p-2 text-center outline rounded-md outline-offset-[-1px] outline-Line-Subtle text-Label-Subnormal title3-sb cursor-pointer"
              >
                리포트 작성하기
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
