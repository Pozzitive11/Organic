import { createReducer, on } from '@ngrx/store';
import { CartActions } from '.';
import { CartState } from '../models';

const initialState: CartState = {
  cartProducts: [],
};

export const cartReducer = createReducer(
  initialState,
  on(CartActions.getCartProducts, (state, { cartProducts }) => {
    return {
      ...state,
      cartProducts,
    };
  }),
  on(CartActions.addToCart, (state, { cartProduct }) => {
    return {
      ...state,
      cartProducts: [...state.cartProducts, cartProduct],
    };
  }),
  on(CartActions.removeFromCart, (state, { productId }) => {
    return {
      ...state,
      cartProducts: state.cartProducts.filter(
        (product) => product.id !== productId
      ),
    };
  }),
  on(CartActions.updateCartProducts, (state, { cartProducts }) => {
    return {
      ...state,
      cartProducts: [...cartProducts],
    };
  })
);
