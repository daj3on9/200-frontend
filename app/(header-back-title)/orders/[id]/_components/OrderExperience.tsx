import { OrderDetailResponse } from '@/domains/orders/types/orderType';
import ProductInfo from './experience/ProductInfo';
import ExperiencePeriod from './experience/ExperiencePeriod';
import TermsAndConditions from './experience/TermsAndConditions';
import CancelExperienceButton from './experience/CancelExperienceButton';

interface OrderExperienceProps {
  order: OrderDetailResponse;
}

export default function OrderExperience({ order }: OrderExperienceProps) {
  return (
    <div className="flex flex-1 flex-col items-start gap-m">
      <ProductInfo
        items={order.items}
        startDate={order.startAt}
        endDate={order.endAt}
      />
      <ExperiencePeriod
        startDate={order.startAt}
        endDate={order.endAt}
      />

      <TermsAndConditions />
      <CancelExperienceButton />
    </div>
  );
}
