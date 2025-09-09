'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/domains/common/store/authStore';
import clsx from 'clsx';

type Menu = {
  label: string;
  href?: string;
};

// TODO : 링크 추가
const InternalMenus: Menu[] = [
  { label: '내 정보', href: '/mypage' },
  { label: '이용내역', href: '/orders' },
  { label: '리포트', href: '/report' },
];

const ExternalMenus: Menu[] = [
  {
    label: '공지사항',
    href: 'https://www.notion.so/25dced6af65280c3bc2eec2abd528ed5?source=copy_link',
  },
  {
    label: 'FAQ',
    href: 'https://www.notion.so/FAQ-25dced6af65280b2a1c0d52939fc6c6d?source=copy_link',
  },
];

export default function Hamburger() {
  const router = useRouter();

  const isLoggedIn = useAuthStore((s) => s.isLoggedIn);
  const nickname = useAuthStore((s) => s.nickname);
  const email = useAuthStore((s) => s.email);
  const logout = useAuthStore((s) => s.logout);

  return (
    <div
      className="w-60 bg-Static-White shadow-[0px_0px_24px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-between items-start overflow-hidden"
      role="dialog"
      aria-label="사이드 메뉴"
    >
      <div className="self-stretch flex flex-col justify-start items-start">
        {/* 헤더 영역 */}
        {isLoggedIn ? (
          <div className="self-stretch p-6 inline-flex flex-col justify-start items-start gap-1">
            <div className="justify-start text-Label-Subnormal h3-b">
              {nickname ?? 'Nickname'}
            </div>
            <div className="justify-start text-Label-Assistive body2-m">
              {email ?? 'Email@domain.com'}
            </div>
          </div>
        ) : (
          <div className="self-stretch p-xxl inline-flex justify-between items-center">
            <p className="justify-start text-Label-Subnormal h3-b">
              로그인이 필요합니다.
            </p>
          </div>
        )}

        {/* 메뉴 리스트 */}
        <nav>
          <ul className="flex flex-col gap-2">
            {InternalMenus.map((menu) => (
              <li key={menu.label}>
                <Link
                  href={menu.href ?? ''}
                  aria-disabled={!isLoggedIn || undefined}
                  className={clsx(
                    'flex items-center self-stretch gap-2.5 px-xxl py-xl text-left transition border border-transparent body1-m',
                    isLoggedIn
                      ? 'text-Label-Alternative cursor-pointer'
                      : 'text-Label-Disable cursor-not-allowed pointer-events-none'
                  )}
                  onClick={(e) => {
                    if (!isLoggedIn) e.preventDefault();
                  }}
                >
                  {menu.label}
                </Link>
              </li>
            ))}
            {/* 외부 링크 */}
            {ExternalMenus.map((menu) => (
              <li key={menu.label}>
                <a
                  href={menu.href ?? ''}
                  className="flex items-center self-stretch gap-2.5 px-xxl py-xl text-left transition border border-transparent body1-m text-Label-Alternative cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {menu.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* 하단 액션 */}
      <div className="p-6 flex flex-col justify-start items-start gap-2.5">
        {isLoggedIn ? (
          <button
            type="button"
            onClick={() => {
              logout();
              router.replace('/');
            }}
            className="justify-start text-Label-Assistive underline body1-m"
          >
            로그아웃
          </button>
        ) : (
          <Link
            href="/login"
            className="p-l ds-rounded-m border-m border-Primary-Normal inline-flex justify-center items-center gap-2.5"
          >
            <p className="justify-start text-Primary-Normal body1-sb">
              가입 / 로그인
            </p>
          </Link>
        )}
      </div>
    </div>
  );
}
