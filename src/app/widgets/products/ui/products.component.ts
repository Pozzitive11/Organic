import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductComponent } from '@entities/product';
import { Product } from '@entities/product/models/products.model';
import { ProductActions } from '@entities/product/store';
import { ProductsService } from '@shared/lib/products/services';
import { ButtonComponent } from '@shared/ui/button/button.component';
import { Observable, take, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectProducts } from '@entities/product/store/product.selectors';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonComponent, ProductComponent],
})
export class ProductsComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private productsService: ProductsService, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(ProductActions.getProducts());
    this.products$ = this.store.select(selectProducts);
  }
}
