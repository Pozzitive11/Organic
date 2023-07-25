import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Product } from '@entities/product/models/products.model';
import { ProductActions, selectProducts } from '@entities/product/store';
import { Store, select } from '@ngrx/store';
import { ButtonComponent } from '@shared/ui/button/button.component';
import { ProductsComponent } from '@widgets/products';
import { map, tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonComponent, ProductsComponent, RouterModule],
})
export class OfferComponent implements OnInit {
  products$: Observable<Product[]> = this.store.pipe(
    select(selectProducts),
    map((products) => products.slice(0, 4))
  );

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ProductActions.getProducts());
  }
}
