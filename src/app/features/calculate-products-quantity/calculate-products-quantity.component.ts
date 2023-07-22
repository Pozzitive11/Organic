import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@shared/ui/button/button.component';

@Component({
  selector: 'app-calculate-products-quantity',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './calculate-products-quantity.component.html',
  styleUrls: ['./calculate-products-quantity.component.scss'],
})
export class CalculateProductsQuantityComponent {}
