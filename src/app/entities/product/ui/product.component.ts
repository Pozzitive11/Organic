import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '../models/products.model';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { StarRatingComponent } from '@shared/ui/star-rating/star-rating.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, RouterModule, StarRatingComponent],
})
export class ProductComponent {
  @Input() product: Product;
}
