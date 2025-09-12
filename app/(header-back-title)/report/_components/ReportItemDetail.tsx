import { getImageUrl } from '@/domains/common/utils/image';
import Image from 'next/image';
import { formatDate } from '@/domains/common/utils/date';
import { RentalItem } from '@/domains/rentalApply/types/RentalItemType';

interface Props {
  item: RentalItem['items'][0];
  startDate: string;
  endDate: string;
  length: number;
}
export default function ReportItemDetail({
  item,
  startDate,
  endDate,
  length,
}: Props) {
  const restLeng = length - 1;
  return (
    <div className="py-3 flex justify-start items-start gap-3">
      <div className="flex-1 flex justify-between items-start">
        <div className="flex justify-start items-center gap-3">
          <div className="w-20 h-20 relative rounded border-1">
            <Image
              src={getImageUrl(item.productThumbnailUrl)}
              alt={item.productName}
              width={100}
              height={100}
              className="self-stretch"
            />
          </div>
          <div className="self-stretch flex flex-col justify-between items-start gap-1">
            <div>
              <p className="body2-r text-Label-Subnormal">
                {item.productName} {restLeng > 0 ? `외 ${restLeng} 건` : ``}
              </p>
              <p className="body2-r text-Label-Assistive">
                옵션 : {item.color}
              </p>
              {startDate && endDate && (
                <p className="body2-r text-Label-Assistive">
                  {formatDate(startDate)} ~ {formatDate(endDate)}
                </p>
              )}
            </div>
            <p className="title1-sb text-Label-Normal">{item.price} 원</p>
          </div>
        </div>
      </div>
    </div>
  );
}
