import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from '@entities/product';
import { Product } from '@shared/lib/products/models/products.model';
import { ProductsService } from '@shared/lib/products/services';
import { ButtonComponent } from '@shared/ui/button/button.component';
import { take, tap } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonComponent, ProductComponent],
})
export class ProductsComponent {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data.slice(0, 8);
    });
  }
}
