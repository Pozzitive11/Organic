import { createAction, props } from '@ngrx/store';
import { Product } from '../models/products.model';

export const getProducts = createAction('[Product] Get Products');

export const getProductsSuccess = createAction(
  '[Product] Get Products Success',
  props<{ products: Product[] }>()
);
