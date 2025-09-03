import { create } from 'zustand';
interface ToastState {
  show: boolean;
  devide?: boolean;
  text: string;
  icon: 'cart' | 'faq' | 'close';
  position?: number;
  showToast: (
    text: string,
    icon: ToastState['icon'],
    devide?: boolean,
    position?: number
  ) => void;
}

export const useToastStore = create<ToastState>((set) => ({
  show: false,
  devide: false,
  text: '',
  icon: 'cart',
  position: 100,
  showToast: (text, icon, devide, position = 100) => {
    set({ show: true, text, icon, devide, position });
    setTimeout(() => set({ show: false }), 3000);
  },
}));
