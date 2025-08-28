'use client';
import LeftArrowIcon from '@/public/icons/leftarrow.svg';
import HamburgerIcon from '@/public/icons/hamburger.svg';

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
    <header className="sticky top-0 z-50 flex h-14 items-center justify-between px-4 border-b bg-white">
      <div className="flex items-center gap-2">
        {showBack && (
          <button
            aria-label="뒤로가기"
            onClick={onBack ?? (() => history.back())}
          >
            <LeftArrowIcon />
          </button>
        )}
        {showLogo && <div className="font-extrabold">LOGO</div>}
        {title && <h1 className="text-base font-semibold">{title}</h1>}
      </div>

      <div className="flex items-center gap-3">
        {showCart && <HamburgerIcon />}
        {showHamburger && <HamburgerIcon />}
      </div>
    </header>
  );
}
