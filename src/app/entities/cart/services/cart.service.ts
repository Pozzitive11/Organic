import { Injectable } from '@angular/core';
import { AppState } from '@core/store';
import { Product } from '@entities/product/models/products.model';
import { Store } from '@ngrx/store';
import { CartActions, selectCartProducts } from '../store';
import { take } from 'rxjs';
import { CartProduct } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private products: Product[] = [];

  constructor(private store: Store<AppState>) {
    const cartProduct = JSON.parse(localStorage.getItem('cart'));
    if (cartProduct) {
      this.store.dispatch(
        CartActions.updateCartProducts({
          cartProducts: cartProduct,
        })
      );
    }
  }

  addToCart(cartProduct: CartProduct): void {
    this.store
      .select(selectCartProducts)
      .pipe(take(1))
      .subscribe((cartProducts) => {
        const existingProduct = cartProducts.find(
          (product) => product.id === cartProduct.id
        );

        if (!existingProduct) {
          this.store.dispatch(CartActions.addToCart({ cartProduct }));
          localStorage.setItem(
            'cart',
            JSON.stringify([...cartProducts, cartProduct])
          );
        } else if (existingProduct?.quantity !== cartProduct.quantity) {
          const updatedCartProducts = cartProducts.map((product) =>
            product.id === cartProduct.id ? { ...cartProduct } : product
          );

          this.store.dispatch(
            CartActions.updateCartProducts({
              cartProducts: updatedCartProducts,
            })
          );
          localStorage.setItem('cart', JSON.stringify(updatedCartProducts));
        }
      });
  }

  getProducts(): Product[] {
    return this.products;
  }

  clearCart(): void {
    this.products = [];
  }

  calculateTotal() {}
}
