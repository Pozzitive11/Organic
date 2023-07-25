import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '@shared/ui/banner/banner.component';
import { Product } from '@entities/product/models/products.model';
import { ProductActions, selectProducts } from '@entities/product/store';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductsComponent } from '@widgets/products';

@Component({
  selector: 'app-shop-page',
  standalone: true,
  imports: [CommonModule, BannerComponent, ProductsComponent],
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss'],
})
export class ShopPageComponent implements OnInit {
  products$: Observable<Product[]> = this.store.pipe(select(selectProducts));
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ProductActions.getProducts());
  }
}
