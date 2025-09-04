'use client';

import { useToastStore } from '@/domains/common/store/toastStore';

export default function CancelExperienceButton() {
  const { showToast } = useToastStore();

  const handleCancelClick = () => {
    showToast(
      '체험 취소는 고객 센터로 문의해주시길 바랍니다.',
      'faq',
      true,
      100
    );
  };

  return (
    <div className="self-stretch flex items-start justify-between px-layout py-xxl gap-xxl bg-Static-White">
      <button
        type="button"
        className="flex py-xl justify-center items-center w-full border-m border-Line-Subtler text-Label-Alternative body1-m cursor-pointer"
        onClick={handleCancelClick}
      >
        체험 취소하기
      </button>
    </div>
  );
}
