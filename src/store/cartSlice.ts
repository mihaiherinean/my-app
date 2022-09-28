import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../types/IProduct";

interface ICartState {
  cartProducts: IProduct[];
}

const initialState: ICartState = {
  cartProducts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const itemInCart = state.cartProducts.find(
        (item) => item._uuid === action.payload._uuid
      );
      if (itemInCart) {
        itemInCart.cartQuantity++;
      } else {
        state.cartProducts.push({ ...action.payload, cartQuantity: 1 });
      }
    },
    removeProduct: (state, action: PayloadAction<IProduct>) => {
      const removeProduct = state.cartProducts.filter(
        (product) => product._uuid !== action.payload._uuid
      );
      state.cartProducts = removeProduct;
    },
    incrementQuantity: (state, action: PayloadAction<IProduct>) => {
      const product = state.cartProducts.find(
        (product) => product._uuid === action.payload._uuid
      );
      if (product) {
        product.cartQuantity++;
      }
    },
    decrementQuantity: (state, action: PayloadAction<IProduct>) => {
      const product = state.cartProducts.find(
        (product) => product._uuid === action.payload._uuid
      );
      if (product) {
        if (product.cartQuantity === 1) {
          product.cartQuantity = 1;
        } else {
          product.cartQuantity--;
        }
      }
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  removeProduct,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
