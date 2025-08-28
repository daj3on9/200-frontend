'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LeftArrowIcon from '@/public/icons/leftarrow.svg';

export default function Page() {
  const router = useRouter();

  const kakaoLogin = () => {
    router.push(
      `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_APP_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code`
    );
  };

  return (
    <div className="w-full min-h-screen bg-Static-White inline-flex flex-col justify-between items-center overflow-hidden">
      <div className="w-full px-3.5 py-3 bg-Static-White inline-flex justify-start">
        <div className="w-6 h-6 overflow-hidden">
          <LeftArrowIcon
            width={18}
            height={18}
            className="fill-Fill-10"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="w-16 h-16 relative overflow-hidden">
          <Image
            src={'/icons/Logo.svg'}
            alt="체리 로고"
            width={100}
            height={100}
          />
        </div>
        <div className="text-center justify-start h3-b">
          로그인이 필요한
          <br />
          서비스 입니다.
        </div>
      </div>
      <div className="self-stretch py-5 bg-yellow-300 flex flex-col justify-center items-center">
        <div
          className="justify-start title2-b cursor-pointer"
          onClick={kakaoLogin}
        >
          카카오로 시작하기
        </div>
      </div>
    </div>
  );
}
