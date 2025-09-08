interface ExperiencePeriodProps {
  startDate: number | undefined;
  endDate: number | undefined;
}

export default function ExperiencePeriod({
  startDate,
  endDate,
}: ExperiencePeriodProps) {
  return (
    <div className="self-stretch flex flex-col items-start px-layout py-xxl gap-xxl bg-Static-White">
      <p className="title2-sb text-Label-Subnormal"> 체험 기간 </p>
      <div className="flex  items-center gap-m">
        <div className="flex justify-center items-center gap-2.5 px-2 py-1 ds-rounded-xs bg-Primary-Normal caption-m text-Static-White">
          체험 시작일
        </div>
        <p className="body1-m text-Label-Subnormal"> {startDate} </p>
      </div>
      <div className="flex  items-center gap-m">
        <div className="flex justify-center items-center gap-2.5 px-2 py-1 ds-rounded-xs bg-Primary-Heavy caption-m text-Static-White">
          체험 종료일
        </div>
        <p className="body1-m text-Label-Subnormal"> {endDate} </p>
      </div>
    </div>
  );
}
