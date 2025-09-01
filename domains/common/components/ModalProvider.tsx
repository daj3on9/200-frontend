'use client';

import { useModalStore } from '@/domains/common/store/modalStore';
import ModalComponent from './ModalComponent';

const ModalProvider = () => {
  const { modalProps, hide } = useModalStore();

  if (!modalProps) {
    return null;
  }

  // 확인 누르면 모달 닫기
  const handleConfirm = () => {
    modalProps.onConfirm();
    hide();
  };

  // 취소 눌러도 모달 닫기
  const handleCancel = () => {
    if (modalProps.onCancel) {
      modalProps.onCancel();
    }
    hide();
  };

  return (
    <ModalComponent
      {...modalProps}
      onConfirm={handleConfirm}
      onCancel={modalProps.onCancel ? handleCancel : undefined}
    />
  );
};

export default ModalProvider;
