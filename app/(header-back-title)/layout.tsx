import AppInitializer from '@/domains/common/components/AppInitializer';
import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <AppInitializer>
      <main>{children}</main>
    </AppInitializer>
  );
}
