import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { CartData, CartItemState } from '../types/cartItemType';
import { deleteAPI, getAPI, postAPI } from '@/domains/common/api';
import { useToastStore } from '@/domains/common/store/toastStore';

export const useCartQuery = () => {
  const queryClient = useQueryClient();
  const { showToast } = useToastStore.getState();

  const cartQuery = useQuery<CartData | null>({
    queryKey: ['cart'],
    queryFn: async () => {
      const response = await getAPI('/cart');
      if (Array.isArray(response) && response.length === 0) {
        return null;
      }
      return response as CartData;
    },
  });

  const addMutation = useMutation({
    mutationFn: (item: CartItemState) => postAPI('/cart', item),
    onSuccess: () => {
      showToast('장바구니에 추가되었습니다.', 'cart', true, 100);
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (cartIds: number[]) => deleteAPI('/cart', cartIds),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
  });

  return {
    cartQuery,
    addMutation,
    deleteMutation,
    isLoading: cartQuery.isLoading,
  };
};
