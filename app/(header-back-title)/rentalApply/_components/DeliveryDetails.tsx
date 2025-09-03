/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useEffect, useState } from 'react';

interface DaumPostcodeData {
  zonecode: string;
  roadAddress: string;
}

export default function DeliveryDetails() {
  const [zoneCode, setZoneCode] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');

  const openPostcode = () => {
    new (window as any).daum.Postcode({
      oncomplete: function (data: DaumPostcodeData) {
        setZoneCode(data.zonecode);
        setAddress(data.roadAddress);
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
      <div className="justify-start text-Label-Subnormal title1-sb">
        배송 정보
      </div>
      <div className="self-stretch flex flex-col justify-start items-center gap-3">
        <div className="self-stretch flex justify-start items-center gap-3">
          <div className="flex justify-start items-center gap-0.5 body2-m">
            <div className="text-Label-Subnormal">수령인</div>
            <div className="text-Status-Negative">*</div>
          </div>
          <input
            type="text"
            placeholder="홍길동"
            className="flex-1 p-2 outline outline-offset-[-1px] rounded-md outline-Line-Subtler body2-r"
          />
        </div>
        <div className="self-stretch flex justify-start items-center gap-3">
          <div className="flex justify-start items-center gap-0.5 body2-m">
            <div className="text-Label-Subnormal">연락처</div>
            <div className="text-Status-Negative">*</div>
          </div>
          <input
            type="tel"
            placeholder="010-0000-0000"
            className="flex-1 p-2 outline outline-offset-[-1px] rounded-md outline-Line-Subtler body2-r"
          />
        </div>
        <div className="self-stretch flex justify-start items-start gap-3">
          <div className="flex justify-start gap-0.5 body2-m pt-3">
            <div className="text-Label-Subnormal">배송지</div>
            <div className="text-Status-Negative">*</div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 justify-start items-center">
              <input
                type="text"
                readOnly
                className="w-[187px] flex-1 p-2 outline outline-offset-[-1px] rounded-md outline-Line-Subtler body2-r"
                value={zoneCode}
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
              value={address}
            />
            <input
              type="text"
              placeholder="상세주소 입력"
              className="self-stretch p-2 outline outline-offset-[-1px] rounded-md outline-Line-Subtler body2-r"
              onChange={(e) => setDetailAddress(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
