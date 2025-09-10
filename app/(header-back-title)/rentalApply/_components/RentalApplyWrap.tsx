'use client';
import RentalNotice from './RentalNotice';
import PriceDetail from './PriceDetail';
import PaymentWrap from './PaymentWrap';
import DeliveryDetails from './DeliveryDetails';
import CalendarWrap from './CalendarWrap';
import RentalItem from './RentalItem';
import { useRentalApplyForm } from '@/domains/rentalApply/hooks/useRentalApplyForm';
import { useRouter, useSearchParams } from 'next/navigation';
import { postAPI } from '@/domains/common/api';
import { Suspense, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { CartItemState } from '@/domains/cart/types/cartItemType';

function RentalApplyWrap() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isDirectRental = searchParams.get('direct') === 'true';
  const isCartRental = searchParams.get('cart') === 'true';
  const [rentalInfo, setRentalInfo] = useState<CartItemState[]>([]);
  const totalPrice = rentalInfo.reduce(
    (a: number, item: CartItemState) => a + item.dailyRentalPrice,
    0
  );
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
    if (validateForm() === false) return;

    const payload = {
      rentStartAt: format(new Date(range.startDate!), 'yyyy-MM-dd'),
      rentEndAt: format(new Date(range.endDate!), 'yyyy-MM-dd'),
      shippingInfo: {
        receiver: deliveryInfo.name,
        phoneNumber: deliveryInfo.number,
        address: {
          postcode: deliveryInfo.zoneCode,
          postAddress: deliveryInfo.address,
          detailAddress: deliveryInfo.detailAddress,
        },
      },
      paymentMethod: selectPayment,
    };

    if (isDirectRental) {
      Object.assign(payload, {
        productId: rentalInfo[0].cartId,
        color: rentalInfo[0].color,
      });
    }

    if (isCartRental) {
      Object.assign(payload, {
        cartIds: rentalInfo.map((item: { cartId: number }) => item.cartId),
      });
    }

    try {
      await postAPI('/rentals', payload);
      router.push('/rentalApply/complete');
    } catch (err) {
      if (err instanceof Error) {
        throw new Error(err.message);
      }
    }
  };

  useEffect(() => {
    const raw = sessionStorage.getItem('rentalInfo');
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        setRentalInfo(parsed);
      } catch (err) {
        console.error('세션 파싱 오류:', err);
      }
    }
  }, []);

  if (!rentalInfo.length)
    return (
      <p className="w-full h-[100vh] text-center content-evenly">Loading...</p>
    );
  return (
    <div>
      <main className="pb-3 flex flex-col gap-3 overflow-y-scroll h-[calc(100vh-135px)] no-scrollbar">
        <RentalItem cartData={rentalInfo} />

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

        <PriceDetail totalPrice={totalPrice} />

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

export default function Page() {
  return (
    <Suspense>
      <RentalApplyWrap />
    </Suspense>
  );
}
