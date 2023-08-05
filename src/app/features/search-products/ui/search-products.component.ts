import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '@entities/product/models/products.model';
import { selectProducts, ProductActions } from '@entities/product/store';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ProductSearchPipe } from '../pipes';
import { ProductSearchComponent } from '@entities/product-search';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    ProductSearchPipe,
    ProductSearchComponent,
    RouterModule,
  ],
  standalone: true,
})
export class SearchProductsComponent implements OnInit {
  products$: Observable<Product[]> = this.store.pipe(select(selectProducts));
  searchInput: string = '';
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ProductActions.getProducts());
  }

  productClick() {
    this.searchInput = '';
  }
}
