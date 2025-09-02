'use client';

import Link from 'next/link';
import FAQIcon from '@/public/icons/FAQ.svg';
import CallIcon from '@/public/icons/call.svg';
import { createModal } from '@/domains/common/store/modalStore';

export default function BottomButtons() {
  // 모달 오픈
  const handleClick = () => {
    createModal({
      title: '고객 센터',
      content: '02-1234으로 연락주세요.',
      onConfirm: () => {},
    });
  };

  return (
    <div className="self-stretch inline-flex justify-start items-center gap-m">
      <Link
        href="https://www.notion.so/FAQ-25dced6af65280b2a1c0d52939fc6c6d?source=copy_link"
        aria-label="FAQ 바로 가기"
        className="flex-1 self-stretch p-6 bg-Static-White ds-rounded-m flex justify-center items-center gap-m overflow-hidden"
      >
        <FAQIcon
          width={24}
          height={24}
          className="w-6 h-6 fill-Fill-20"
        />
        <div className="justify-start body1-sb text-Label-Subnormal">FAQ</div>
      </Link>
      <button
        className="flex-1 self-stretch p-6 bg-Static-White ds-rounded-m flex justify-center items-center gap-m overflow-hidden cursor-pointer"
        onClick={handleClick}
      >
        <CallIcon className="w-6 h-6 fill-Fill-20" />
        <div className="justify-start body1-sb text-Label-Subnormal">
          고객센터
        </div>
      </button>
    </div>
  );
}
