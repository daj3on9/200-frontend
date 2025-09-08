import Header from '@/domains/common/components/header';
import RentalApplyWrap from './_components/RentalApplyWrap';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '체험 신청',
  description: 'Cherry 체험 신청 - 상세 정보를 입력 후 제품을 체험해보세요.',
  icons: {
    icon: '/icons/Logo.svg',
  },
};

export default function Page() {
  return (
    <div className="h-screen overflow-hidden bg-Fill-99">
      <Header
        showBack
        title="체험 신청하기"
      />
      <main>
        <RentalApplyWrap />
      </main>
    </div>
  );
}
