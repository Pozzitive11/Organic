import { Injectable } from '@angular/core';
import { AppState } from '@core/store';
import { Store } from '@ngrx/store';
import { CartActions, selectCartProducts } from '../store';
import { Observable, map, take } from 'rxjs';
import { CartProduct } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private store: Store<AppState>) {
    const cartProduct = this.getProductsFromLocalStorage();

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

          this.addProductsToLocalStorage([...cartProducts, cartProduct]);
        } else if (existingProduct?.quantity !== cartProduct.quantity) {
          const updatedCartProducts = cartProducts.map((product) =>
            product.id === cartProduct.id ? { ...cartProduct } : product
          );

          this.store.dispatch(
            CartActions.updateCartProducts({
              cartProducts: updatedCartProducts,
            })
          );
          this.addProductsToLocalStorage(updatedCartProducts);
        }
      });
  }

  getProducts(): Observable<CartProduct[]> {
    return this.store.select(selectCartProducts);
  }

  deleteProduct(productId: number): void {
    this.store
      .select(selectCartProducts)
      .pipe(take(1))
      .subscribe((cartProducts) => {
        const updatedCartProducts = cartProducts.filter(
          (product) => product.id !== productId
        );

        this.store.dispatch(
          CartActions.updateCartProducts({
            cartProducts: updatedCartProducts,
          })
        );

        this.addProductsToLocalStorage(updatedCartProducts);
      });
  }

  calculateTotal(): Observable<number> {
    return this.store.select(selectCartProducts).pipe(
      map((cartProducts) => {
        return cartProducts.reduce((total, product) => {
          return total + product.price * product.quantity;
        }, 0);
      })
    );
  }

  getCartProductsCount(): Observable<number> {
    return this.store
      .select(selectCartProducts)
      .pipe(map((products) => products.length));
  }

  addProductsToLocalStorage(products: CartProduct[]): void {
    localStorage.setItem('cart', JSON.stringify(products));
  }

  getProductsFromLocalStorage(): CartProduct[] {
    return JSON.parse(localStorage.getItem('cart'));
  }
}
