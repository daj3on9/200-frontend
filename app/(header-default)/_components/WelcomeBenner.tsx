import Link from 'next/link';

interface WelcomeBennerProps {
  isLoggedIn?: boolean;
  nickname?: string;
}

export default function WelcomeBenner({
  isLoggedIn,
  nickname,
}: WelcomeBennerProps) {
  return (
    <section className="flex flex-1 flex-col gap-1">
      {isLoggedIn ? (
        <h2 className="text-Label-Subnormal h4-b">
          {nickname ?? 'Nickname'} 님
          <br /> 체리에 온 것을 환영해요
        </h2>
      ) : (
        <div className="flex w-full items-center justify-between">
          <h2 className="text-Label-Subnormal h4-b">
            로그인해야
            <br /> 체험할 수 있어요
          </h2>
          <Link
            href="/login"
            className="inline-flex items-center ds-rounded-s border-m border-Primary-Normal p-3"
          >
            <span className="body1-sb text-Primary-Normal">가입 / 로그인</span>
          </Link>
        </div>
      )}

      <p className="body2-m text-Label-Assistive">
        리포트 작성하고
        <span className="text-Secondary-Normal"> 체험비 환급 </span>
        받아요
      </p>
    </section>
  );
}
