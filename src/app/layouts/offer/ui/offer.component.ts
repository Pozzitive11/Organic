import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from '@entities/product';
import { Product } from '@entities/product/models/products.model';
import { ProductActions, selectProducts } from '@entities/product/store';
import { Store } from '@ngrx/store';
import { ButtonComponent } from '@shared/ui/button/button.component';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonComponent, ProductComponent],
})
export class OfferComponent {
  products: Product[] = [];
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ProductActions.getProducts());

    this.store.select(selectProducts).subscribe((products) => {
      this.products = products.slice(0, 4);
    });
  }
}
