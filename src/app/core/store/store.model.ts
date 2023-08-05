import { CartState } from '@entities/cart/models';
import { ProductState } from '@entities/product/models/products.model';

export interface AppState {
  products: ProductState;
  cartProducts: CartState;
}
