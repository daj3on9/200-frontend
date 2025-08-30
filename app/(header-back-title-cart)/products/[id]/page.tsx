'use client';
import Header from '@/domains/common/components/header';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ProductDetail from './_components/ProductDetail';
import ProductDetailGuide from './_components/ProductDetailGuide';
import FooterBtn from './_components/FooterBtn';
import ProductDetailInfo from './_components/ProductDetailInfo';
import { getAPI } from '@/domains/common/api';

interface ProductDetailType {
  name: string;
  price: number;
  description: string;
}

export default function Page() {
  const { id } = useParams();
  const [detailData, setDetailData] = useState<ProductDetailType | null>(null);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await getAPI<ProductDetailType>(`/productDetail?${id}`);
      setDetailData(res);
    };

    // TODO : api 연결 후 주석 해제
    // getData();
  }, [id]);

  return (
    <div className="h-screen overflow-hidden relative">
      <Header
        showBack
        title="상세 정보"
        showCart
      />
      <div
        className="pb-3 flex flex-col gap-3 bg-Fill-95 overflow-y-scroll h-[calc(100vh-135px)]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <ProductDetail />
        <ProductDetailInfo />
        <ProductDetailGuide />
      </div>
      <FooterBtn
        showOptions={showOptions}
        setShowOptions={setShowOptions}
      />
      {showOptions && (
        <div className="absolute inset-0 bg-black opacity-30 z-40" />
      )}
    </div>
  );
}
