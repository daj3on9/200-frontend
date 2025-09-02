import Header from '@/domains/common/components/header';
import React from 'react';

export default function layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-dvh bg-Fill-99">
      {modal}
      <Header
        showLogo
        showCart
        showHamburger
        bgColor="bg-Fill-99"
      />
      <main className="layout-container flex-1 overflow-y-auto no-scrollbar">
        {children}
      </main>
    </div>
  );
}
