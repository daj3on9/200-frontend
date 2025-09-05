import Header from '@/domains/common/components/header';
import OrderList from './_components/OrderList';

export default function page() {
  return (
    <div className="flex flex-col h-screen">
      <Header
        showBack
        title="이용 내역"
      />
      <div className="flex-1 overflow-y-auto no-scrollbar bg-Fill-99">
        <OrderList />
      </div>
    </div>
  );
}
