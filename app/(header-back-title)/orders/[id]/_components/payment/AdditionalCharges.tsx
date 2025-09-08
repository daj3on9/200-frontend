import LogoIcon from '@/public/icons/Logo.svg';

export default function AdditionalCharges() {
  // 서비스 체험 기간
  const FreeIcon = () => {
    return (
      <div className="self-stretch flex justify-start items-center gap-2">
        <div className="p-1 bg-Fill-98 flex justify-center items-center gap-0.5">
          <LogoIcon className="w-4 h-4" />
          <div className="justify-start text-Label-Alternative caption-m">
            서비스 체험 기간
          </div>
        </div>
        <div className="justify-start title3-sb text-Primary-Normal">무료</div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col justify-center items-center px-layout py-xxl gap-xs bg-Static-White">
      <p className="self-stretch text-Label-Subnormal title2-sb">부가 요금</p>

      <hr className="my-4 self-stretch border-t-[1px] border-Fill-95 " />

      <div className="flex flex-col items-start gap-4 self-stretch">
        <div className="self-stretch inline-flex justify-between items-center">
          <p className="justify-start text-Label-Subnormal body2-m">
            배송 요금
          </p>
          <FreeIcon />
        </div>
        <div className="self-stretch inline-flex justify-between items-center">
          <p className="justify-start text-Label-Subnormal body2-m">
            세척 비용
          </p>
          <FreeIcon />
        </div>
      </div>
    </div>
  );
}
