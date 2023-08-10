import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Product } from '@entities/product/models/products.model';
import { StarRatingComponent } from '@shared/ui/star-rating/star-rating.component';
import { CalculateProductsQuantityComponent } from '@features/calculate-products-quantity';
import { CartService } from '@entities/cart/services/cart.service';

@Component({
  selector: 'app-cart-unit',
  standalone: true,
  imports: [
    CommonModule,
    StarRatingComponent,
    CalculateProductsQuantityComponent,
  ],
  templateUrl: './cart-unit.component.html',
  styleUrls: ['./cart-unit.component.scss'],
})
export class CartUnitComponent {
  @Input() product: Product;

  constructor(private cartService: CartService) {}
  productQuantityChanged(quantity: number) {
    const productToCart = {
      id: this.product.id,
      quantity,
      price: this.product.new_price,
    };
    this.cartService.addToCart(productToCart);
  }
  deleteProduct() {
    this.cartService.deleteProduct(this.product.id);
  }
}
