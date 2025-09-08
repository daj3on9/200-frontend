import Header from '@/domains/common/components/header';
import CartWrap from './_components/CartWrap';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '장바구니',
  description: 'Cherry 장바구니 - 체험해보고 싶은 제품들을 확인해 보세요.',
  icons: {
    icon: '/icons/Logo.svg',
  },
};

export default function Page() {
  return (
    <div className="h-screen overflow-hidden bg-Fill-99">
      <Header
        showBack
        title="장바구니"
      />

      <main>
        <CartWrap />
      </main>
    </div>
  );
}
