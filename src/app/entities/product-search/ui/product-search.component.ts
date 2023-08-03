import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@entities/product/models/products.model';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss'],
})
export class ProductSearchComponent {
  @Input() product: Product;
}
