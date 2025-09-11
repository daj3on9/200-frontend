'use client';

import { getAPI } from '@/domains/common/api';
import { RentalCountState } from '@/domains/rentalApply/types/RentalItemType';
import { useEffect, useState } from 'react';

export default function ReportTotalDetail() {
  const [totalData, setTotalData] = useState<RentalCountState | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAPI<RentalCountState>('rentals/count');
        if (!res) return;
        setTotalData(res);
      } catch (err) {
        if (err instanceof Error) {
          throw new Error(err.message);
        }
      }
    };
    getData();
  }, []);

  return (
    <div className="self-stretch flex flex-col justify-start items-start gap-1">
      <div className="flex justify-start items-center gap-1 title1-sb">
        <p className="justify-start text-Label-Subnormal">환급가능 금액</p>
        <p className="flex justify-start items-center text-Secondary-Normal">
          {totalData?.totalRefundPrice.toLocaleString()} 원
        </p>
      </div>
      <div className="self-stretch flex justify-between items-center">
        <p className="text-Label-Alternative body3-m">
          나의 리포트 {totalData?.count} 개
        </p>

        <a
          href={
            'https://www.notion.so/25dced6af65280759a55c81629afd17d?source=copy_link'
          }
          target="_blank"
          rel="noopener noreferrer"
          className="justify-start text-Label-Assistive underline body2-r"
        >
          환급 안내
        </a>
      </div>
    </div>
  );
}
