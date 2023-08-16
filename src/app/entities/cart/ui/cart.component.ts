import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartComponent {
  cartProductsCount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService
      .getCartProductsCount()
      .subscribe((productsCount) => (this.cartProductsCount = productsCount));
  }
}
