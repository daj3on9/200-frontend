'use client';
import Header from '@/domains/common/components/header';
import React, { useState } from 'react';
import { CartItemState } from '@/domains/cart/types/cartItemType';
import CalendarWrap from './_components/CalendarWrap';
import DeliveryDetails from './_components/DeliveryDetails';
import PaymentWrap from './_components/PaymentWrap';
import PriceDetail from './_components/PriceDetail';
import RentalItem from './_components/RentalItem';
import RentalNotice from './_components/RentalNotice';
import { useRentalApplyForm } from '@/domains/rentalApply/hooks/useRentalApplyForm';
import { postAPI } from '@/domains/common/api';
import { useRouter } from 'next/navigation';

const TEMPDATA = [
  {
    id: '1',
    title: '이어폰 1',
    option: '검정색',
    price: '45,000',
    image: '',
  },
  {
    id: '2',
    title: '이어폰 2',
    option: '하늘색',
    price: '45,000',
    image: '',
  },
  {
    id: '3',
    title: '이어폰 3',
    option: '흰색',
    price: '45,000',
    image: '',
  },
];

export default function Page() {
  const router = useRouter();
  const [cartData, setCartData] = useState<CartItemState[]>(TEMPDATA);
  const {
    range,
    setRange,
    deliveryInfo,
    setDeliveryInfo,
    selectPayment,
    setSelectPayment,
    agreeNotice,
    setAgreeNotice,
    validationErrs,
    validateForm,
    calendarRef,
    deliveryRef,
    paymentRef,
    noticeRef,
  } = useRentalApplyForm();

  const handleSubmit = async () => {
    const isValid = validateForm();
    if (!isValid) return;

    router.push('/rentalApply/complete');

    // TODO : api 연결 후 주석 해제
    // try {
    //   await postAPI('/rental', {});
    //   router.push('/rentalApply/complete');
    // } catch (err) {
    //   if (err instanceof Error) {
    //     throw new Error(err.message);
    //   } else {
    //     throw new Error('카카오 로그인 오류');
    //   }
    // }
  };

  return (
    <div className="h-screen overflow-hidden bg-Fill-99">
      <Header
        showBack
        title="체험 신청하기"
      />
      <main className="pb-3 flex flex-col gap-3 overflow-y-scroll h-[calc(100vh-135px)] no-scrollbar">
        <RentalItem cartData={cartData} />

        <div ref={calendarRef}>
          <CalendarWrap
            range={range}
            setRange={setRange}
            validationErrs={validationErrs.date}
          />
        </div>

        <div ref={deliveryRef}>
          <DeliveryDetails
            deliveryInfo={deliveryInfo}
            setDeliveryInfo={setDeliveryInfo}
            validName={validationErrs.name}
            validNumber={validationErrs.number}
            validDelivery={validationErrs.delivery}
          />
        </div>

        <div ref={paymentRef}>
          <PaymentWrap
            selectPayment={selectPayment}
            setSelectPayment={setSelectPayment}
            validationErrs={validationErrs.payment}
          />
        </div>

        <PriceDetail />

        <div ref={noticeRef}>
          <RentalNotice
            agreeNotice={agreeNotice}
            setAgreeNotice={setAgreeNotice}
            validCaution={validationErrs.caution}
            validConsent={validationErrs.consent}
          />
        </div>
      </main>
      <div className="w-full p-3.5 bg-Static-White">
        <button
          type="button"
          className="w-full p-4 rounded bg-Primary-Normal text-Static-White items-center cursor-pointer title2-sb"
          onClick={handleSubmit}
        >
          99,999원 결제하기
        </button>
      </div>
    </div>
  );
}
