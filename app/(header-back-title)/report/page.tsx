import Header from '@/domains/common/components/header';
import RightArrowIcon from '@/public/icons/arrow-right.svg';
import ReportWrap from './_components/ReportWrap';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '리포트 작성하기',
  description:
    'Cherry 리포트 작성하기 - 체험한 제품들의 리포트를 작성해 보세요.',
  icons: {
    icon: '/icons/Logo.svg',
  },
};

export default function Page() {
  return (
    <div className="h-screen overflow-hidden bg-Fill-99">
      <Header
        showBack
        title="리포트 작성하기"
      />
      <main>
        <div className="self-stretch px-3.5 py-3 bg-Static-White flex flex-col justify-start items-start gap-2.5">
          <div className="self-stretch flex flex-col justify-start items-start gap-1">
            <div className="flex justify-start items-center gap-1 title1-sb">
              <p className="justify-start text-Label-Subnormal">
                환급가능 금액
              </p>
              <p className="flex justify-start items-center text-Secondary-Normal">
                Total Price 원
              </p>
            </div>
            <div className="self-stretch flex justify-between items-center">
              <p className="text-Label-Alternative body3-m">
                나의 리포트 count 개
              </p>

              <a
                href={
                  'https://www.notion.so/25dced6af65280759a55c81629afd17d?source=copy_link'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="justify-start text-Label-Assistive underline body2-r"
              >
                환급 안내
              </a>
            </div>
          </div>
        </div>
        <div className="self-stretch px-3.5 py-3 bg-Static-White ">
          <a
            href={
              'https://www.notion.so/25dced6af6528053a4eef3054a1f8fdb?source=copy_link'
            }
            target="_blank"
            rel="noopener noreferrer"
            className="flex rounded justify-between items-center bg-Fill-99 p-2.5 cursor-pointer"
          >
            <p className="justify-start text-Label-Normal body2-m">
              리포트 작성 안내
            </p>
            <RightArrowIcon className="w-4 h-4 fill-Fill-20" />
          </a>
        </div>
        <ReportWrap />
      </main>
    </div>
  );
}
