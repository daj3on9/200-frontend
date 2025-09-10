'use client';
import RentalNotice from './RentalNotice';
import PriceDetail from './PriceDetail';
import PaymentWrap from './PaymentWrap';
import DeliveryDetails from './DeliveryDetails';
import CalendarWrap from './CalendarWrap';
import RentalItem from './RentalItem';
import { useRentalApplyForm } from '@/domains/rentalApply/hooks/useRentalApplyForm';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCartQuery } from '@/domains/cart/hooks/useCartQuery';
import { postAPI } from '@/domains/common/api';
import { Suspense } from 'react';
import { format } from 'date-fns';

function RentalApplyWrap() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const isDirectRental = searchParams.get('direct') === 'true';
  const isCartRental = searchParams.get('cart') === 'true';
  const { cartQuery, isLoading } = useCartQuery();
  const cartItems = cartQuery.data?.carts || [];
  const totalPrice = cartQuery.data?.totalPrice || 0;
  const rentalInfo = JSON.parse(sessionStorage.getItem('rentalInfo') || '{}');
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
      rentStartAt: format(range.startDate!, 'yyyy-MM-dd'),
      rentEndAt: format(range.endDate!, 'yyyy-MM-dd'),
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
        productId: rentalInfo.productId,
        color: rentalInfo.color,
      });
    }

    if (isCartRental) {
      Object.assign(payload, {
        cartIds: cartItems.map((item) => item.cartId),
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

  // if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <main className="pb-3 flex flex-col gap-3 overflow-y-scroll h-[calc(100vh-135px)] no-scrollbar">
        <RentalItem cartData={isDirectRental ? rentalInfo : cartItems} />

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
          {isDirectRental
            ? (rentalInfo.price * 7).toLocaleString()
            : (totalPrice * 7).toLocaleString()}
          원 결제하기
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
