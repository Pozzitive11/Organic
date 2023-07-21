import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from '@entities/product';
import { Product } from '@entities/product/models/products.model';
import { ProductsService } from '@shared/lib/products/services';
import { ButtonComponent } from '@shared/ui/button/button.component';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
  standalone: true,
  imports: [ButtonComponent, CommonModule, ProductComponent],
})
export class OfferComponent {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}
}
