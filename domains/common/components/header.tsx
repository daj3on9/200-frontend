'use client';
import LeftArrowIcon from '@/public/icons/leftarrow.svg';
import HamburgerIcon from '@/public/icons/hamburger.svg';
import CartScore0Icon from '@/public/icons/Score=0.svg';
import CartScore1Icon from '@/public/icons/Score=1.svg';
import CartScore2Icon from '@/public/icons/Score=2.svg';
import CartScore3Icon from '@/public/icons/Score=3.svg';
import Image from 'next/image';

type HeaderProps = {
  title?: string;
  showLogo?: boolean;
  showBack?: boolean;
  showCart?: boolean;
  showHamburger?: boolean;
  onBack?: () => void;
  bgColor?: string;
};

export default function Header({
  title,
  showLogo,
  showBack,
  showCart,
  showHamburger,
  onBack,
  bgColor = 'bg-white',
}: HeaderProps) {
  return (
    <header
      className={`sticky top-0 z-50 flex h-14 items-center justify-between px-4  ${bgColor}`}
    >
      <div className="flex items-center gap-2">
        {showBack && (
          <button
            aria-label="뒤로가기"
            onClick={onBack ?? (() => history.back())}
          >
            <LeftArrowIcon className="w-5 h-5" />
          </button>
        )}
        {showLogo && (
          <div className="font-extrabold flex w-10 h-10 items-center">
            <Image
              src="/icons/Logo.svg"
              alt="체리 로고"
              width={100}
              height={100}
            />
            Cherry
          </div>
        )}
        {title && (
          <h1 className="absolute left-1/2 transform -translate-x-1/2 title1-sb">
            {title}
          </h1>
        )}
      </div>

      <div className="flex items-center gap-3">
        {showCart && <CartScore0Icon className="w-5 h-5" />}
        {showHamburger && <HamburgerIcon className="w-5 h-5" />}
      </div>
    </header>
  );
}
