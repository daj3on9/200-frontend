import Image from 'next/image';

interface Props {
  selectPayment: string;
  setSelectPayment: React.Dispatch<React.SetStateAction<string>>;
  validationErrs: boolean;
}

export default function PaymentWrap({
  selectPayment,
  setSelectPayment,
  validationErrs,
}: Props) {
  const PaymentList = [
    { id: 'general', name: '일반/카드', image: '/payment/card.png' },
    { id: 'kakao', name: '카카오페이', image: '/payment/kakao.png' },
    { id: 'naver', name: '네이버페이', image: '/payment/naver.png' },
    { id: 'toss', name: '토스페이', image: '/payment/toss.png' },
  ];
  return (
    <div className="px-3.5 py-6 bg-Static-White flex flex-col justify-start items-start">
      <div className="justify-start text-Label-Subnormal title1-sb mb-4">
        결제 수단
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4">
        {PaymentList.map((v) => (
          <div
            key={v.id}
            className={`w-[47%] px-2 py-3 rounded-md outline outline-offset-[-1px] flex justify-start items-center gap-2 cursor-pointer ${
              selectPayment === v.id
                ? 'outline-Line-Black'
                : 'outline-Line-Subtler'
            }`}
            onClick={() => setSelectPayment(v.id)}
          >
            <Image
              src={v.image}
              alt={`${v.name} 이미지`}
              width={20}
              height={20}
              className="w-8 h-8 rounded-full"
            />
            <div className="justify-start text-Label-Subnormal body2-m">
              {v.name}
            </div>
          </div>
        ))}
      </div>

      {validationErrs && (
        <p className="body3-m text-Status-Negative pt-2">
          결제수단을 선택해 주세요.
        </p>
      )}
    </div>
  );
}
