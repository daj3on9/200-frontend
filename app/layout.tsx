import type { Metadata } from 'next';
import './globals.css';
import QueryProvider from '@/domains/common/providers/QueryProvider';
import ModalProvider from '@/domains/common/components/ModalProvider';

export const metadata: Metadata = {
  title: {
    default: 'CHERRY',
    template: ' CHERRY | %s',
  },
  description:
    'CHERRY - IT 기기를 체험하고 리뷰까지 남길 수 있는 Cherry 체험 스토어',
  icons: {
    icon: '/icons/Logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body className="antialiased bg-Fill-95">
        <div className="layout-container-no-padding">
          <QueryProvider>
            {children}
            <ModalProvider />
          </QueryProvider>
        </div>
      </body>
    </html>
  );
}
