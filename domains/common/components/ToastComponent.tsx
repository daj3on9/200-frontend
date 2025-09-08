import React, { useEffect } from 'react';
import Score0Icon from '@/public/icons/Score=0.svg';
import FAQIcon from '@/public/icons/FAQ.svg';
import CloseIcon from '@/public/icons/close-circular.svg';
import { useToastStore } from '../store/toastStore';

export default function ToastComponent() {
  const { show, icon, text, devide, position } = useToastStore();
  const iconMap: Record<string, React.FC<React.SVGProps<SVGSVGElement>>> = {
    cart: Score0Icon,
    faq: FAQIcon,
    close: CloseIcon,
  };
  const IconComponent = iconMap[icon] || iconMap[icon] || iconMap[icon];

  if (!show) return null;

  return (
    <div
      style={{ bottom: `${position}px` }}
      className={`z-50 absolute left-1/2 -translate-x-1/2 w-90 p-3 bg-blend-luminosity bg-Fill-30 rounded-lg backdrop-blur-[10px] inline-flex items-center ${
        icon === 'cart' ? 'justify-between' : 'justify-center'
      }`}
    >
      <div className="flex justify-start items-center gap-2">
        <div className="w-6 h-6 flex justify-start items-center gap-1">
          <IconComponent className="w-6 h-6 fill-Fill-98" />
        </div>
        <div className="text-center justify-start text-Static-White text-sm font-medium font-['Pretendard'] leading-tight">
          {text}
        </div>
      </div>
      {devide && (
        <div className="text-center justify-start text-Static-White text-xs font-medium font-['Pretendard'] underline leading-none">
          장바구니로 이동
        </div>
      )}
    </div>
  );
}
