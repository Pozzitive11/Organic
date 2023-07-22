import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPipe } from '@entities/product/pipes';
import { CalculateProductsQuantityComponent } from '@features/calculate-products-quantity/calculate-products-quantity.component';
import { ButtonComponent } from '@shared/ui/button/button.component';

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [
    CommonModule,
    ProductPipe,
    CalculateProductsQuantityComponent,
    ButtonComponent,
  ],
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.scss'],
})
export class ProductSectionComponent {}
