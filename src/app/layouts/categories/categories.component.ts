import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@shared/ui/button/button.component';
import { ProductsComponent } from '@widgets/products';
import { Store, select } from '@ngrx/store';
import { ProductActions, selectProducts } from '@entities/product/store';
import { Product } from '@entities/product/models/products.model';
import { Observable, map, tap } from 'rxjs';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, ButtonComponent, ProductsComponent],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  products$: Observable<Product[]> = this.store.pipe(
    select(selectProducts),
    map((products) => products.slice(0, this.visibleProductCount))
  );
  visibleProductCount = 8;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ProductActions.getProducts());
  }

  showMore() {
    this.visibleProductCount += 4;
    this.products$ = this.store.pipe(
      select(selectProducts),
      map((products) => products.slice(0, this.visibleProductCount))
    );
  }
}
