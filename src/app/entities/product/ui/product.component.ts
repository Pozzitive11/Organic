import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../models/products.model';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, RouterModule],
  providers: [CurrencyPipe],
})
export class ProductComponent {
  @Input() product: Product;
}
