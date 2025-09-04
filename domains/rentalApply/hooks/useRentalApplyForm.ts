import { useRef, useState } from 'react';
import { Range } from 'react-date-range';

interface DeliveryInfo {
  name: string;
  number: string;
  zoneCode: string;
  address: string;
  detailAddress: string;
}

interface AgreeNotice {
  caution: boolean;
  consent: boolean;
}

export function useRentalApplyForm() {
  const [range, setRange] = useState<Range>({
    startDate: undefined,
    endDate: undefined,
    key: 'selection',
  });
  const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInfo>({
    name: '',
    number: '',
    zoneCode: '',
    address: '',
    detailAddress: '',
  });
  const [selectPayment, setSelectPayment] = useState<string>('');
  const [agreeNotice, setAgreeNotice] = useState<AgreeNotice>({
    caution: false,
    consent: false,
  });
  const [validationErrs, setValidationErrs] = useState({
    date: false,
    name: false,
    number: false,
    delivery: false,
    payment: false,
    caution: false,
    consent: false,
  });
  const calendarRef = useRef<HTMLDivElement>(null);
  const deliveryRef = useRef<HTMLDivElement>(null);
  const paymentRef = useRef<HTMLDivElement>(null);
  const noticeRef = useRef<HTMLDivElement>(null);

  const validateForm = () => {
    const isDateValid = !!range.startDate && !!range.endDate;
    const isNameValid = deliveryInfo.name.trim() !== '';
    const isNumberValid = deliveryInfo.number.trim() !== '';
    const isDeliveryValid =
      deliveryInfo.zoneCode.trim() !== '' &&
      deliveryInfo.address.trim() !== '' &&
      deliveryInfo.detailAddress.trim() !== '';
    const isPaymentValid = selectPayment !== '';
    const isCautionValid = agreeNotice.caution;
    const isConsentValid = agreeNotice.consent;

    setValidationErrs({
      date: !isDateValid,
      name: !isNameValid,
      number: !isNumberValid,
      delivery: !isDeliveryValid,
      payment: !isPaymentValid,
      caution: !isCautionValid,
      consent: !isConsentValid,
    });

    if (validationErrs.date && calendarRef.current) {
      calendarRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      return false;
    }

    if (
      (validationErrs.name ||
        validationErrs.number ||
        validationErrs.delivery) &&
      deliveryRef.current
    ) {
      deliveryRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      return false;
    }

    if (validationErrs.payment && paymentRef.current) {
      paymentRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return false;
    }

    if (
      (validationErrs.caution || validationErrs.consent) &&
      noticeRef.current
    ) {
      noticeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return false;
    }

    // return (
    //   isDateValid &&
    //   isNameValid &&
    //   isNumberValid &&
    //   isDeliveryValid &&
    //   isPaymentValid &&
    //   isCautionValid &&
    //   isConsentValid
    // );
  };

  return {
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
  };
}
