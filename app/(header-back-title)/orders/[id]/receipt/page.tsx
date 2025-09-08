import Header from '@/domains/common/components/header';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '영수증',
  description:
    'Cherry 영수증 — 결제 금액, 결제 수단, 승인 번호, 세부 내역을 확인하세요.',
  icons: {
    icon: '/icons/Logo.svg',
  },
};

export default function Page() {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="영수증"
        showBack
      />
      <div className="flex-1 px-layout pb-6 inline-flex flex-col justify-start items-center gap-3 bg-Static-White">
        <div className="self-stretch flex flex-col justify-start items-start gap-3">
          <div className="self-stretch py-3 border-b border-Line-Strong inline-flex justify-start items-center">
            <p className="justify-start text-Label-Subnormal title2-b">
              거래정보
            </p>
          </div>
          <div className="self-stretch inline-flex justify-between items-center text-Label-Subnormal body2-m">
            <p className="justify-start">카드 승인번호</p>
            <div className="text-right justify-start">00786577</div>
          </div>
          <div className="self-stretch inline-flex justify-between items-center text-Label-Subnormal body2-m">
            <div className="justify-start ">카드종류</div>
            <div className="text-right justify-start">카드사</div>
          </div>
          <div className="self-stretch inline-flex justify-between items-center text-Label-Subnormal body2-m">
            <div className="justify-start">카드번호</div>
            <div className="text-right justify-start">422065*********</div>
          </div>
          <div className="self-stretch inline-flex justify-between items-center text-Label-Subnormal body2-m">
            <div className="justify-start">할부</div>
            <div className="text-right justify-start">일시불</div>
          </div>
          <div className="self-stretch inline-flex justify-between items-center text-Label-Subnormal body2-m">
            <div className="justify-start">결제일시</div>
            <div className="text-right justify-start">2025-09-00 00:00:00</div>
          </div>
          <div className="self-stretch inline-flex justify-between items-center text-Label-Subnormal body2-m">
            <div className="justify-start">제품명</div>
            <div className="text-right justify-start">Title 외 1건</div>
          </div>
          <div className="self-stretch inline-flex justify-between items-center text-Label-Subnormal body2-m">
            <div className="justify-start">주문번호</div>
            <div className="text-right justify-start">Order Number</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-3">
          <div className="self-stretch py-3 border-b border-Line-Strong inline-flex justify-start items-center">
            <div className="justify-start text-Label-Subnormal title2-b">
              카드영수증 발행금액
            </div>
          </div>
          <div className="self-stretch inline-flex justify-between items-center text-Label-Subnormal body2-m">
            <div className="justify-start">공급가액</div>
            <div className="text-right justify-start">99,999원</div>
          </div>
          <div className="self-stretch inline-flex justify-between items-center text-Label-Subnormal body2-m">
            <div className="justify-start">부가세액</div>
            <div className="text-right justify-start">9,999원</div>
          </div>
          <div className="self-stretch inline-flex justify-between items-center text-Label-Subnormal title2-b">
            <div className="justify-start">총 금액</div>
            <div className="text-right justify-start">99,999원</div>
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-3">
          <div className="self-stretch py-3 border-b border-Line-Strong inline-flex justify-start items-center">
            <div className="justify-start text-Label-Subnormal title2-b">
              판매자 정보
            </div>
          </div>
          <div className="self-stretch inline-flex justify-between items-center text-Label-Subnormal body2-m">
            <div className="justify-start">상호</div>
            <div className="text-right justify-start">(주)HTTP200OK</div>
          </div>
          <div className="self-stretch inline-flex justify-between items-center text-Label-Subnormal body2-m">
            <div className="justify-start">대표자명</div>
            <div className="text-right justify-start">김체리</div>
          </div>
          <div className="self-stretch inline-flex justify-between items-center text-Label-Subnormal body2-m">
            <div className="justify-start">사업자등록번호</div>
            <div className="text-right justify-start">000-00-00000</div>
          </div>
          <div className="self-stretch inline-flex justify-between items-center text-Label-Subnormal body2-m">
            <div className="justify-start">전화번호</div>
            <div className="text-right justify-start">02-1234</div>
          </div>
          <div className="self-stretch inline-flex justify-between items-center text-Label-Subnormal body2-m">
            <div className="justify-start">주소</div>
            <div className="text-right justify-start">
              서울 체리구 체리로 123
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
