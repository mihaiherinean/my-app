import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useCartSelector = () => {
  const cart = useSelector((state: RootState) => state.cart);
  return cart;
};
