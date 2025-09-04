import { createModal } from '@/domains/common/store/modalStore';
import Link from 'next/link';

export default function OrderEtc() {
  // 고객센터
  const handleSeviceClick = () => {
    createModal({
      title: '고객센터',
      content: '02-1234으로 연락주세요.',
      onConfirm: () => {},
    });
  };

  return (
    <div className="flex flex-1 flex-col items-start gap-m">
      <div className="self-stretch flex items-start justify-between px-layout py-xxl gap-xxl bg-Static-White">
        <p className="title2-sb text-Label-Subnormal">
          제품 관리 과정 확인하기
        </p>
        <Link
          href="https://www.notion.so/25dced6af652804f8b62ee334d2383e5?source=copy_link"
          className="body2-m text-Label-Assistive"
        >
          자세히
        </Link>
      </div>
      <div className="self-stretch flex items-start justify-between px-layout py-xxl gap-xxl bg-Static-White">
        <p className="title2-sb text-Label-Subnormal"> 반납 절차 가이드 </p>
        <Link
          href="https://www.notion.so/25dced6af65280608248eb11bbcd7598?source=copy_link"
          className="body2-m text-Label-Assistive"
        >
          자세히
        </Link>
      </div>
      <div className="self-stretch flex items-start justify-between px-layout py-xxl gap-xxl bg-Static-White">
        <p className="title2-sb text-Label-Subnormal">고객센터 문의 하기</p>
        <button
          type="button"
          className="body2-m text-Label-Assistive"
          onClick={handleSeviceClick}
        >
          자세히
        </button>
      </div>
    </div>
  );
}
