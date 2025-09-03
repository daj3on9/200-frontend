import { create } from 'zustand';
import { ModalProps } from '@/domains/common/components/ModalComponent';

type ModalOpener = (props: ModalProps) => void;

interface ModalStoreState {
  modalProps: ModalProps | null;
  show: ModalOpener;
  hide: () => void;
}

export const useModalStore = create<ModalStoreState>((set) => ({
  modalProps: null,
  show: (props) => set({ modalProps: props }),
  hide: () => set({ modalProps: null }),
}));

export const createModal: ModalOpener = (props) => {
  useModalStore.getState().show(props);
};
