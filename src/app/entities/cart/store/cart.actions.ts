import { createAction, props } from '@ngrx/store';
import { CartProduct } from '../models';

export const getCartProducts = createAction(
  '[Cart] Get Cart Products',
  props<{ cartProducts: CartProduct[] }>()
);

export const addToCart = createAction(
  '[Cart] Add To Cart',
  props<{ cartProduct: CartProduct }>()
);
export const removeFromCart = createAction(
  '[Cart] Remove From Cart',
  props<{ productId: number }>()
);
export const updateCartProducts = createAction(
  '[Cart] Update Cart Products',
  props<{ cartProducts: CartProduct[] }>()
);
