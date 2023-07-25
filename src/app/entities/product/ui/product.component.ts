import { Component, Input } from '@angular/core';
import { ProductPipe } from '../pipes';
import { RouterModule } from '@angular/router';
import { Product } from '../models/products.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [ProductPipe, RouterModule, RouterModule],
})
export class ProductComponent {
  @Input() product: Product;
}
