import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@shared/ui/button/button.component';
import { CartService } from '@entities/cart/services/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculate-products-quantity',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FormsModule],
  templateUrl: './calculate-products-quantity.component.html',
  styleUrls: ['./calculate-products-quantity.component.scss'],
})
export class CalculateProductsQuantityComponent {
  @Output() addToCartClicked: EventEmitter<number> = new EventEmitter<number>();
  @Input() showAddToCartButton: boolean = true;
  @Input() quantity: number = 1;
  addToCart() {
    this.addToCartClicked.emit(this.quantity);
  }
}
