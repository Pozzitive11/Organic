import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '@basic/api';
import { Observable, tap } from 'rxjs';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService extends ApiService {
  constructor(protected http: HttpClient) {
    super(http);
  }

  getProducts(): Observable<Product[]> {
    return this.get<Product[]>();
  }
}
