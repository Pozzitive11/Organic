import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ButtonComponent } from '@shared/ui/button/button.component';
import { Product } from '@entities/product/models/products.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ProductActions, selectProducts } from '@entities/product/store';
import { CalculateProductsQuantityComponent } from '@features/calculate-products-quantity';
import { Subscription } from 'rxjs';
import { StarRatingComponent } from '@shared/ui/star-rating/star-rating.component';

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

  constructor(private route: ActivatedRoute, private store: Store) {}

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

  ngOnDestroy(): void {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
  }
}
