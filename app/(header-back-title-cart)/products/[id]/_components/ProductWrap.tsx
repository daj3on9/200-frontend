'use client';
import React, { useEffect, useState } from 'react';
import ProductDetail from './ProductDetail';
import ProductDetailInfo from './ProductDetailInfo';
import ProductDetailGuide from './ProductDetailGuide';
import FooterBtn from './FooterBtn';
import ToastComponent from '@/domains/common/components/ToastComponent';
import ModalComponent from '@/domains/common/components/ModalComponent';
import { useToastStore } from '@/domains/common/store/toastStore';
import { getAPI } from '@/domains/common/api';
import { ProductRes } from '@/domains/products/types/ProductsType';

export default function ProductWrap({ id }: { id: number }) {
  const [detailData, setDetailData] = useState<ProductRes | null>(null);
  const [showOptions, setShowOptions] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { show } = useToastStore.getState();

  useEffect(() => {
    const getData = async () => {
      const res = await getAPI<ProductRes>(`/products?${id}`);
      setDetailData(res);
    };

    // TODO : api 연결 후 주석 해제
    // getData();
  }, [id]);

  // if (!detailData) return <p>Loading...</p>;

  return (
    <>
      <div className="pb-3 flex flex-col gap-3 overflow-y-scroll h-[calc(100vh-135px)] no-scrollbar">
        <ProductDetail detailData={detailData} />
        <ProductDetailInfo detailData={detailData} />
        <ProductDetailGuide />
      </div>
      <FooterBtn
        id={id as number}
        showOptions={showOptions}
        setShowOptions={setShowOptions}
        showModal={showModal}
        setShowModal={setShowModal}
      />
      {showOptions && (
        <div className="absolute inset-0 bg-black opacity-30 z-40" />
      )}

      {show && <ToastComponent />}
      {showModal && (
        <ModalComponent
          title="옵션을 선택해 주세요!"
          content="1개 이상의 옵션을 선택해야 합니다."
          onConfirm={() => setShowModal(false)}
        />
      )}
    </>
  );
}
