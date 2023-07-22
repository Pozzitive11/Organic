import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '@entities/product';
import { ProductActions, selectProducts } from '@entities/product/store';
import { Store, select } from '@ngrx/store';
import { Product } from '@shared/lib/products/models/products.model';
import { ProductsService } from '@shared/lib/products/services';
import { ButtonComponent } from '@shared/ui/button/button.component';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonComponent, ProductComponent],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productsService: ProductsService, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ProductActions.getProducts());

    this.store.select(selectProducts).subscribe((products) => {
      this.products = products.slice(0, 8);
    });
  }
}
