'use client';
import LeftArrowIcon from '@/public/icons/leftarrow.svg';
import HamburgerIcon from '@/public/icons/hamburger.svg';
import LogoIcon from '@/public/icons/Logo.svg';
import LogoTextIcon from '@/public/icons/Logo-text.svg';
import BasketIcon from '@/public/icons/Score=0.svg';

type HeaderProps = {
  title?: string;
  showLogo?: boolean;
  showBack?: boolean;
  showCart?: boolean;
  showHamburger?: boolean;
  onBack?: () => void;
};

export default function Header({
  title,
  showLogo,
  showBack,
  showCart,
  showHamburger,
  onBack,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 flex h-14 items-center justify-between px-4 border-b transparent">
      <div className="flex items-center gap-2">
        {showBack && (
          <button
            aria-label="뒤로가기"
            onClick={onBack ?? (() => history.back())}
          >
            <LeftArrowIcon />
          </button>
        )}
        {showLogo && (
          <div className="font-extrabold flex h-10 items-center gap-0.5">
            <LogoIcon
              width={24}
              hegiht={24}
            />
            <LogoTextIcon />
          </div>
        )}
        {title && <h1 className="text-base font-semibold">{title}</h1>}
      </div>

      <div className="flex items-center gap-3">
        {showCart && (
          <BasketIcon
            width={24}
            height={24}
          />
        )}
        {showHamburger && (
          <HamburgerIcon
            width={24}
            height={24}
          />
        )}
      </div>
    </header>
  );
}
