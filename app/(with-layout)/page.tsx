import Link from 'next/link';
import React from 'react';

export default function page() {
  return (
    <div>
      /app/page.tsx
      <div>메인 페이지</div>
      <div className="text-red-500">
        <p>상품 목록... </p>
      </div>
      <Link href="/login">Login</Link>
    </div>
  );
}
