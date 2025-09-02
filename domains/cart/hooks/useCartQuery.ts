import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { CartItemState } from '../types/cartItemType';
import { getAPI, postAPI } from '@/domains/common/api';
import { useToastStore } from '@/domains/common/store/toastStore';

export const useCartQuery = () => {
  const queryClient = useQueryClient();
  const { showToast } = useToastStore.getState();

  const cartQuery = useQuery<CartItemState[] | null>({
    queryKey: ['cart'],
    queryFn: () => getAPI<CartItemState[]>('/cart'),
  });

  const addMutation = useMutation({
    mutationFn: (item: CartItemState) => postAPI('/cart', item),
    onSuccess: () => {
      showToast('장바구니에 추가되었습니다.', 'cart', 100);
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (ids: string[]) => postAPI('/cart/delete', { ids }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
  });

  return {
    cartQuery,
    addMutation,
    deleteMutation,
  };
};
