import Header from '@/domains/common/components/header';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-dvh bg-Fill-99">
      <Header
        showLogo
        showCart
        showHamburger
        bgColor="bg-Fill-99"
      />
      <main className="flex-1 overflow-y-auto no-scrollbar">{children}</main>
    </div>
  );
}
