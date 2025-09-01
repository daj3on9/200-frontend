import { create } from 'zustand';
interface ToastState {
  show: boolean;
  text: string;
  icon: 'cart' | 'faq' | 'close';
  position: number;
  showToast: (text: string, icon: ToastState['icon'], position: number) => void;
}

export const useToastStore = create<ToastState>((set) => ({
  show: false,
  text: '',
  icon: 'cart',
  position: 0,
  showToast: (text, icon, position) => {
    set({ show: true, text, icon, position });
    setTimeout(() => set({ show: false }), 3000);
  },
}));
