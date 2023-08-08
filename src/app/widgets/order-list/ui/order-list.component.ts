import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartUnitComponent } from '@entities/cart-unit';
import { CartProduct } from '@entities/cart';
import { selectCartProducts } from '@entities/cart/store';
import { Store, select } from '@ngrx/store';
import { Observable, combineLatest, map, tap } from 'rxjs';
import { Product } from '@entities/product/models/products.model';
import { ProductActions, selectProducts } from '@entities/product/store';
import { CartService } from '@entities/cart/services/cart.service';

@Component({
  selector: 'app-order-list',
  standalone: true,
  imports: [CommonModule, CartUnitComponent],
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  cartProducts: CartProduct[];
  products$: Observable<Product[]> = this.store.pipe(select(selectProducts));
  productsToBuy: Product[] = [];
  fullPrice = 0;
  constructor(private store: Store, private cartService: CartService) {}

  ngOnInit(): void {
    this.store.dispatch(ProductActions.getProducts());
    this.cartService.getProducts().subscribe((products) => {
      this.cartProducts = products;

      const cartProductIds = this.cartProducts.map(
        (cartProduct) => cartProduct.id
      );

      this.products$.subscribe((allProducts) => {
        this.productsToBuy = allProducts.filter((product) =>
          cartProductIds.includes(product.id)
        );

        this.productsToBuy = this.productsToBuy.map((product) => {
          const cartProduct = this.cartProducts.find(
            (cartProduct) => cartProduct.id === product.id
          );

          return {
            ...product,
            quantity: cartProduct ? cartProduct.quantity : 1,
          };
        });
      });
    });

    this.cartService
      .calculateTotal()
      .subscribe((fullPrice) => (this.fullPrice = fullPrice));
  }
}
