import Header from '@/domains/common/components/header';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header
        showLogo
        showCart
        showHamburger
      />
      <main>{children}</main>
    </>
  );
}
