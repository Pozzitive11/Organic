import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ButtonComponent } from '@shared/ui/button/button.component';
import { Product } from '@entities/product/models/products.model';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { ProductActions, selectProducts } from '@entities/product/store';
import { CalculateProductsQuantityComponent } from '@features/calculate-products-quantity';
import { Observable, Subscription, tap } from 'rxjs';
import { StarRatingComponent } from '@shared/ui/star-rating/star-rating.component';
import { CartService } from '@entities/cart/services/cart.service';
import { selectCartProducts } from '@entities/cart/store';
import { CartProduct, CartState } from '@entities/cart/models';

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [
    CommonModule,
    CalculateProductsQuantityComponent,
    ButtonComponent,
    StarRatingComponent,
  ],
  providers: [CurrencyPipe],
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss'],
})
export class ProductSectionComponent implements OnInit, OnDestroy {
  product: Product;
  private productSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(ProductActions.getProducts());
    this.route.params.subscribe((params) => {
      const productId = +params['productId'];
      this.productSubscription = this.store
        .select(selectProducts)
        .subscribe((products) => {
          if (products) {
            this.product = products.find((product) => product.id === productId);
          }
        });
    });
  }
  addToCartClicked(quantity: number) {
    const productToCart = {
      id: this.product.id,
      quantity,
      price: this.product.new_price,
    };
    this.cartService.addToCart(productToCart);
  }
  ngOnDestroy(): void {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
  }
}
