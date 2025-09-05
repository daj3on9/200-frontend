import { Order } from '@/domains/orders/types/orderType';
import ProductInfo from './experience/ProductInfo';
import ExperiencePeriod from './experience/ExperiencePeriod';
import TermsAndConditions from './experience/TermsAndConditions';
import CancelExperienceButton from './experience/CancelExperienceButton';

interface OrderExperienceProps {
  order: Order;
}

export default function OrderExperience({ order }: OrderExperienceProps) {
  const firstItem = order.items[0];

  return (
    <div className="flex flex-1 flex-col items-start gap-m">
      <ProductInfo items={order.items} />
      {firstItem?.startDate && firstItem?.endDate && (
        <ExperiencePeriod
          startDate={order.items[0].startDate}
          endDate={order.items[0].endDate}
        />
      )}
      <TermsAndConditions />
      <CancelExperienceButton />
    </div>
  );
}
