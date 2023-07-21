import { Component, Input } from '@angular/core';
import { Product } from '@entities/product/models/products.model';
import { ProductPipe } from '../pipes';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [ProductPipe],
})
export class ProductComponent {
  @Input() product: Product;
}
