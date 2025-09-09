'use client';
import RentalNotice from './RentalNotice';
import PriceDetail from './PriceDetail';
import PaymentWrap from './PaymentWrap';
import DeliveryDetails from './DeliveryDetails';
import CalendarWrap from './CalendarWrap';
import RentalItem from './RentalItem';
import { useRentalApplyForm } from '@/domains/rentalApply/hooks/useRentalApplyForm';
import { useRouter } from 'next/navigation';
import { useCartQuery } from '@/domains/cart/hooks/useCartQuery';

export default function RentalApplyWrap() {
  const router = useRouter();
  const { cartQuery, isLoading } = useCartQuery();
  const cartItems = cartQuery.data?.carts || [];
  const totalPrice = cartQuery.data?.totalPrice || 0;
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

  // if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <main className="pb-3 flex flex-col gap-3 overflow-y-scroll h-[calc(100vh-135px)] no-scrollbar">
        <RentalItem cartData={cartItems} />

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
          {(totalPrice * 7).toLocaleString()}원 결제하기
        </button>
      </div>
    </div>
  );
}
