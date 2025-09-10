import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { CartData } from '../types/cartItemType';
import { deleteAPI, getAPI, postAPI } from '@/domains/common/api';
import { useToastStore } from '@/domains/common/store/toastStore';
import { useAuthStore } from '@/domains/common/store/authStore';
import { AxiosError } from 'axios';

interface APIErrRes {
  code: string;
  detail: string;
  exception: string;
  instance: string;
  status: number;
  timestamp: string;
  title: string;
  type: string;
}

export const useCartQuery = () => {
  const queryClient = useQueryClient();
  const { showToast } = useToastStore.getState();
  const accessToken = useAuthStore((s) => s.accessToken);

  const cartQuery = useQuery<CartData | null>({
    queryKey: ['cart'],
    queryFn: async () => {
      const response = await getAPI('/cart');
      if (Array.isArray(response) && response.length === 0) {
        return null;
      }
      return response as CartData;
    },
    enabled: !!accessToken,
  });

  const addMutation = useMutation({
    mutationFn: ({ productId, color }: { productId: number; color: string }) =>
      postAPI('/cart', {
        productId: productId,
        color: color,
      }),
    onSuccess: () => {
      showToast('장바구니에 추가되었습니다.', 'cart', true, 100);
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
    onError: (error: AxiosError<APIErrRes>) => {
      const message =
        error?.response?.data.detail || '알 수 없는 오류가 발생했습니다.';

      showToast(message, 'close', false, 100);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (cartIds: number[]) => deleteAPI('/cart', { cartIds }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
  });

  return {
    cartQuery,
    addMutation,
    deleteMutation,
    isLoading: cartQuery.isLoading,
  };
};
