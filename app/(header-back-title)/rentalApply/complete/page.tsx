import ReceiptIcon from '@/public/icons/receipt.svg';
import ReviewIcon from '@/public/icons/review.svg';
import SparkleIcon from '@/public/icons/sparkle.svg';
import CheckIcon from '@/public/icons/status-good.svg';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '체험 신청 완료',
  description: 'Cherry 체험 신청 완료 - 체험 신청이 완료되었습니다.',
  icons: {
    icon: '/icons/Logo.svg',
  },
};

export default function page() {
  return (
    <div className="h-screen overflow-hidden">
      <main className="pb-3 flex flex-col gap-3 bg-Static-White h-[calc(100vh-85px)] justify-center">
        <div className="flex flex-col justify-center items-center gap-6">
          <p className="self-stretch text-center justify-start text-Label-Normal h4-sb">
            체험 신청이 <br />
            완료 되었습니다!
          </p>
          <div className="w-20 h-20 relative overflow-hidden">
            <CheckIcon className="w-20 h-20 left-[4.33px] top-[4.33px] absolute fill-Primary-Normal" />
          </div>
          <div className="flex flex-col gap-3 justify-start">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 bg-Fill-99 rounded-full flex items-center justify-center">
                <ReceiptIcon className="w-5 h-5 fill-Fill-20" />
              </div>
              <p className="justify-center text-Label-Alternative body2-m">
                해당 상품은 반납을 해야 되는 상품이에요
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 bg-Fill-99 rounded-full flex items-center justify-center">
                <ReviewIcon className="w-5 h-5 fill-Fill-20" />
              </div>
              <p className="justify-center text-Label-Alternative body2-m">
                리뷰를 작성하면 체험 비용을 환급 받을 수 있어요
              </p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 bg-Fill-99 rounded-full flex items-center justify-center">
                <SparkleIcon className="w-5 h-5 fill-Fill-20" />
              </div>
              <p className="justify-center text-Label-Alternative body2-m">
                체험을 통해 자신이 맞는 제품을 찾아보세요
              </p>
            </div>
          </div>
        </div>
      </main>
      <div className="w-full p-3.5 bg-Static-White">
        <Link
          href="/"
          className="block w-full p-4 rounded bg-Primary-Normal text-Static-White text-center cursor-pointer title2-sb"
          aria-label="완료하기"
        >
          완료하기
        </Link>
      </div>
    </div>
  );
}
