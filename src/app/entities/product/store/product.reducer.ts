import { createReducer, on } from '@ngrx/store';
import { ProductActions } from '.';
import { ProductState } from '../models/products.model';

const initialState: ProductState = {
  products: [],
};

export const productReducer = createReducer(
  initialState,
  on(ProductActions.getProductsSuccess, (state, { products }) => ({
    ...state,
    products,
  }))
);
