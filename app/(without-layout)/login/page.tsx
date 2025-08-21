'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const kakaoLogin = () => {
    router.push(
      `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_APP_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&response_type=code`
    );
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white">
      <div
        className="absolute top-4 left-4 p-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-100"
        onClick={() => router.back()}
      >
        뒤로가기
      </div>

      <div className="flex flex-col items-center text-center">
        <Image
          src="/Logo.png"
          alt="체리 로고"
          width={200}
          height={200}
          className="mx-auto"
        />
        <p className="mt-4 text-lg font-medium text-gray-700">
          로그인이 필요한 서비스 입니다.
        </p>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <button
          onClick={kakaoLogin}
          className="w-full py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-lg"
        >
          카카오로 시작
        </button>
      </div>
    </div>
  );
}
