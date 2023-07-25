import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from '@entities/product';
import { Product } from '@entities/product/models/products.model';
import { ProductActions, selectProducts } from '@entities/product/store';
import { Store, select } from '@ngrx/store';
import { ProductsService } from '@shared/lib/products/services';
import { ButtonComponent } from '@shared/ui/button/button.component';
import { Observable, take } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonComponent, ProductComponent, RouterModule],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  constructor(private productsService: ProductsService, private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ProductActions.getProducts());

    this.store.select(selectProducts).subscribe((products) => {
      this.products = products.slice(0, 8); // map
    });
  }
}
