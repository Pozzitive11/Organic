import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '@shared/ui/banner/banner.component';
import { Product } from '@entities/product/models/products.model';
import { ProductActions, selectProducts } from '@entities/product/store';
import { Store, select } from '@ngrx/store';
import { ProductsService } from '@shared/lib/products/services';
import { ProductComponent } from '@entities/product';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-shop-page',
  standalone: true,
  imports: [CommonModule, BannerComponent, ProductComponent],
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss'],
})
export class ShopPageComponent {
  products$: Observable<Product[]> = this.store.pipe(
    select(selectProducts),
    tap((data) => console.log(data))
  );
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ProductActions.getProducts());
  }
}
