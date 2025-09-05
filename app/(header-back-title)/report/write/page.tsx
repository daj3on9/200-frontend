import Header from '@/domains/common/components/header';
import ReceiptIcon from '@/public/icons/receipt.svg';
import ReviewIcon from '@/public/icons/review.svg';
import SparkleIcon from '@/public/icons/sparkle.svg';
import CheckIcon from '@/public/icons/status-good.svg';
import Link from 'next/link';

export default function page() {
  return (
    <div className="h-screen overflow-hidden">
      <Header
        showBack
        title="리포트 작성하기"
      />
      <main className="pb-3 flex flex-col gap-3 bg-Static-White h-[calc(100vh-135px)] justify-center items-center">
        <div className="w-32 h-32 relative rounded border-1">img</div>

        <p className="text-center justify-start text-Label-Alternative title2-sb">
          현재 외부 링크를 통해 리포트를
          <br />
          수집하고 있습니다.
        </p>
      </main>

      {/* TODO : 리포트 폼 링크로 변경 */}
      <div className="w-full p-3.5 bg-Static-White">
        <Link
          href="/"
          className="block w-full p-4 rounded bg-Primary-Normal text-Static-White text-center cursor-pointer title2-sb"
          aria-label="리포트 작성하러 가기"
        >
          리포트 작성하러 가기
        </Link>
      </div>
    </div>
  );
}
