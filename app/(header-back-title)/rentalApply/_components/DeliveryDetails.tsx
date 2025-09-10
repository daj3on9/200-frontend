/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { Dispatch, SetStateAction, useEffect } from 'react';

interface DaumPostcodeData {
  zonecode: string;
  roadAddress: string;
}
interface DeliveryInfo {
  name: string;
  number: string;
  zoneCode: string;
  address: string;
  detailAddress: string;
}
interface Props {
  deliveryInfo: DeliveryInfo;
  setDeliveryInfo: Dispatch<SetStateAction<DeliveryInfo>>;
  validName: boolean;
  validNumber: boolean;
  validDelivery: boolean;
}

export default function DeliveryDetails({
  deliveryInfo,
  setDeliveryInfo,
  validName,
  validNumber,
  validDelivery,
}: Props) {
  const formatPhoneNumber = (value: string) => {
    const onlyNums = value.replace(/\D/g, '');

    if (onlyNums.length < 4) return onlyNums;
    if (onlyNums.length < 7)
      return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
    if (onlyNums.length <= 11)
      return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 7)}-${onlyNums.slice(
        7
      )}`;

    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 7)}-${onlyNums.slice(
      7,
      11
    )}`;
  };

  const openPostcode = () => {
    new (window as any).daum.Postcode({
      oncomplete: function (data: DaumPostcodeData) {
        setDeliveryInfo((prev) => ({
          ...prev,
          zoneCode: data.zonecode,
          address: data.roadAddress,
        }));
      },
    }).open();
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="px-3.5 py-6 bg-Static-White flex flex-col justify-start items-start gap-4">
      <p className="justify-start text-Label-Subnormal title1-sb">배송 정보</p>
      <div className="self-stretch flex flex-col justify-start items-center gap-3">
        <div className="self-stretch flex justify-start items-start gap-3">
          <div className="flex justify-start pt-2 gap-0.5 body2-m">
            <p className="text-Label-Subnormal">수령인</p>
            <div className="text-Status-Negative">*</div>
          </div>
          <div className="flex-1 flex flex-col">
            <input
              type="text"
              placeholder="홍길동"
              minLength={2}
              maxLength={10}
              className="p-2 outline outline-offset-[-1px] rounded-md outline-Line-Subtler body2-r"
              value={deliveryInfo.name}
              onChange={(e) =>
                setDeliveryInfo((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
            />
            {validName && (
              <p className="body3-m text-Status-Negative pt-2">
                수령인을 입력해 주세요.
              </p>
            )}
          </div>
        </div>
        <div className="self-stretch flex justify-start items-start gap-3">
          <div className="flex justify-start pt-2 gap-0.5 body2-m">
            <p className="text-Label-Subnormal">연락처</p>
            <div className="text-Status-Negative">*</div>
          </div>
          <div className="flex-1 flex flex-col">
            <input
              type="tel"
              inputMode="numeric"
              placeholder="010-0000-0000"
              className="flex-1 p-2 outline outline-offset-[-1px] rounded-md outline-Line-Subtler body2-r"
              value={deliveryInfo.number}
              onChange={(e) => {
                const onlyNums = e.target.value.replace(/\D/g, '');
                setDeliveryInfo((prev) => ({
                  ...prev,
                  number: onlyNums,
                }));
              }}
              onBlur={(e) => {
                const formatted = formatPhoneNumber(e.target.value);
                setDeliveryInfo((prev) => ({
                  ...prev,
                  number: formatted,
                }));
              }}
            />
            {validNumber && (
              <p className="body3-m text-Status-Negative pt-2">
                연락처를 입력해 주세요.
              </p>
            )}
          </div>
        </div>
        <div className="self-stretch flex justify-start items-start gap-3">
          <div className="flex justify-start gap-0.5 body2-m pt-2">
            <p className="text-Label-Subnormal">배송지</p>
            <div className="text-Status-Negative">*</div>
          </div>
          <div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-4 justify-start items-center">
                <input
                  type="text"
                  readOnly
                  className="w-[187px] flex-1 p-2 outline outline-offset-[-1px] rounded-md outline-Line-Subtler body2-r"
                  value={deliveryInfo.zoneCode}
                  onChange={(e) =>
                    setDeliveryInfo((prev) => ({
                      ...prev,
                      zoneCode: e.target.value,
                    }))
                  }
                  onClick={openPostcode}
                />
                <button
                  type="button"
                  className="text-Label-Assistive body2-m px-3 py-2 bg-Fill-99 rounded-md cursor-pointer"
                  onClick={openPostcode}
                >
                  우편번호 검색
                </button>
              </div>
              <input
                type="text"
                readOnly
                className="self-stretch p-2 outline outline-offset-[-1px] rounded-md outline-Line-Subtler body2-r"
                value={deliveryInfo.address}
                onChange={(e) =>
                  setDeliveryInfo((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }))
                }
              />
              <input
                type="text"
                placeholder="상세주소 입력"
                className="self-stretch p-2 outline outline-offset-[-1px] rounded-md outline-Line-Subtler body2-r"
                value={deliveryInfo.detailAddress}
                onChange={(e) =>
                  setDeliveryInfo((prev) => ({
                    ...prev,
                    detailAddress: e.target.value,
                  }))
                }
              />
            </div>
            {validDelivery && (
              <p className="body3-m text-Status-Negative pt-2">
                주소를 입력해 주세요.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
