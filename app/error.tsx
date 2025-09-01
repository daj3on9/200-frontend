'use client';
import Link from 'next/link';
import React from 'react';

export default function Error() {
  return (
    <div className=" h-screen bg-Static-White flex flex-col items-center">
      <div className="h-full flex flex-col justify-center items-center gap-3">
        <div className="w-16 h-16 relative overflow-hidden">
          <div className="w-14 h-12 left-[5px] top-[7px] absolute bg-Fill-70" />
        </div>
        <div className="text-center justify-start text-Label-Subnormal body1-m">
          서비스 이용에 불편을 드려서 죄송합니다.
          <br />
          잠시 후 다시 이용해 주세요.
        </div>
      </div>
      <div className="py-4 ">
        <Link href={'/'}>
          <button className="w-90 text-center text-Static-White body2-sb p-4 bg-Primary-Normal rounded-sm cursor-pointer">
            돌아가기
          </button>
        </Link>
      </div>
    </div>
  );
}
