import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '@basic/api';
import { Observable, tap } from 'rxjs';
import { Product } from '../models/products.model';
import { Store } from '@ngrx/store';
import { ProductActions } from '@entities/product/store';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends ApiService {
  constructor(protected http: HttpClient, private store: Store) {
    super(http);
  }

  getProducts(): Observable<Product[]> {
    return this.get<Product[]>();
  }

  setProducts(products: Product[]): void {
    this.store.dispatch(ProductActions.getProductsSuccess({ products }));
  }
}
