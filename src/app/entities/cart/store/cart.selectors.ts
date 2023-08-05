import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from '../models';
import { AppState } from '@core/store';

export const selectCartProductState =
  createFeatureSelector<CartState>('cartProducts');

export const selectCartProducts = createSelector(
  selectCartProductState,
  (state: CartState) => state.cartProducts
);
// export const selectCartProducts = createSelector(
//   (state: AppState) => state.cartProducts,
//   (cartState: CartState) => cartState.cartProducts
// );
