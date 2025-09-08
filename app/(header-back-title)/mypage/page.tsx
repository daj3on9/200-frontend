'use client';
import Header from '@/domains/common/components/header';
import React from 'react';
import ArrowRightIcon from '@/public/icons/arrow-right.svg';
import { createModal } from '@/domains/common/store/modalStore';
import { useAuthStore } from '@/domains/common/store/authStore';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Page() {
  const router = useRouter();
  const { logout } = useAuthStore.getState();
  const nickname = useAuthStore((s) => s.nickname);
  const email = useAuthStore((s) => s.email);

  const handleCS = () => {
    createModal({
      title: '고객 센터',
      content: '02-1234으로 연락주세요.',
      onConfirm: () => {},
    });
  };

  const handleDeleteAccount = () => {
    createModal({
      title: '정말 탈퇴하시겠습니까?',
      content:
        '탈퇴 시 계정 정보 및 이용내역이 삭제되며 한번 삭제된 정보는 복구가 불가능합니다.',
      onConfirm: () => {},
      onCancel: () => {},
    });
  };

  return (
    <div className="h-screen overflow-hidden bg-Fill-99">
      <Header
        showBack
        title="내정보"
      />
      <main className="pb-3 flex flex-col gap-3 overflow-y-scroll h-[calc(100vh-135px)] no-scrollbar px-3.5">
        <div className="self-stretch py-6 flex items-center gap-6">
          <Image
            src="/images/emptyprofile.png"
            alt="프로필 이미지"
            width={58}
            height={58}
            className="ds-rounded-full"
            unoptimized
          />

          <div className="flex flex-col justify-end items-start gap-2">
            <p className="text-Label-Subnormal h3-b">{nickname}</p>
            <p className="text-Label-Assistive body2-r">{email}</p>
          </div>
        </div>
        <div className="self-stretch p-4 bg-Static-White rounded-2xl flex flex-col items-start gap-3 overflow-hidden">
          <div className="text-Label-Alternative title1-sb">도움말</div>
          <div className="self-stretch flex flex-col items-start">
            <button
              type="button"
              className="self-stretch py-3 flex justify-between items-center cursor-pointer"
              onClick={handleCS}
            >
              <p className="text-Label-Subnormal Body1-m">24시간 고객센터</p>
              <ArrowRightIcon className="w-5 h-5 fill-Fill-90" />
            </button>
            <a
              href={
                'https://www.notion.so/FAQ-25dced6af65280b2a1c0d52939fc6c6d?source=copy_link'
              }
              aria-label="자주 묻는 질문 링크"
              target="_blank"
              rel="noopener noreferrer"
              className="self-stretch py-3 flex justify-between items-center cursor-pointer"
            >
              <p className="text-Label-Subnormal Body1-m">자주 묻는 질문</p>
              <ArrowRightIcon className="w-5 h-5 fill-Fill-90" />
            </a>
            <a
              href={
                'https://www.notion.so/25dced6af6528053bdbaf593ea09db1b?source=copy_link'
              }
              aria-label="체험 및 이용안내 링크"
              className="self-stretch py-3 flex justify-between items-center cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="text-Label-Subnormal Body1-m">체험 및 이용안내</p>
              <ArrowRightIcon className="w-5 h-5 fill-Fill-90" />
            </a>
          </div>
        </div>
        <div className="self-stretch p-4 bg-Static-White rounded-2xl flex flex-col items-start gap-3 overflow-hidden">
          <div className="text-Label-Alternative title1-sb">약관 및 정책</div>
          <a
            href={
              'https://www.notion.so/25dced6af65280f3b7d0ca995f437306?source=copy_link'
            }
            aria-label="개인정보 처리방침 링크"
            target="_blank"
            rel="noopener noreferrer"
            className="self-stretch py-3 flex justify-between items-center cursor-pointer"
          >
            <p className="text-Label-Subnormal Body1-m">개인정보 처리방침</p>
            <ArrowRightIcon className="w-5 h-5 fill-Fill-90" />
          </a>
          <a
            href={
              'https://www.notion.so/25dced6af6528032bdb2fcfe1c775a61?source=copy_link'
            }
            aria-label="이용약관 및 정책 링크"
            target="_blank"
            rel="noopener noreferrer"
            className="self-stretch py-3 flex justify-between items-center cursor-pointer"
          >
            <p className="text-Label-Subnormal Body1-m">이용약관 및 정책</p>
            <ArrowRightIcon className="w-5 h-5 fill-Fill-90" />
          </a>
        </div>
        <button
          type="button"
          className="self-stretch px-4 py-3 bg-Static-White rounded-2xl flex justify-between items-center cursor-pointer"
          onClick={handleDeleteAccount}
        >
          <p className="text-Label-Subnormal Body1-m">탈퇴하기</p>
          <ArrowRightIcon className="w-5 h-5 fill-Fill-90" />
        </button>
      </main>
      <div className="w-full p-3.5 ">
        <button
          type="button"
          className="w-full p-4 rounded-2xl text-Label-Assistive bg-Static-White items-center cursor-pointer body1-m outline outline-offset-[-1px] outline-Line-Subtler"
          onClick={() => {
            logout();
            router.replace('/login');
          }}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}
