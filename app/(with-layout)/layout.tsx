import React from 'react';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <header>HEADER</header>
      <div className="border-1 p-2">{children}</div>
      <footer>FOOTER</footer>
    </div>
  );
}
