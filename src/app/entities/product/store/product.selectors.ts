import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from '../models/products.model';

export const selectProductState =
  createFeatureSelector<ProductState>('products');

export const selectProducts = createSelector(
  selectProductState,
  (state: ProductState) => state.products
);
