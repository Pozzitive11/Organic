import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductComponent } from '@entities/product';
import { Product } from '@entities/product/models/products.model';
import { selectProducts } from '@entities/product/store';
import { Store, select } from '@ngrx/store';
import { ButtonComponent } from '@shared/ui/button/button.component';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonComponent, ProductComponent],
})
export class OfferComponent {
  products$: Observable<Product[]> = this.store.pipe(
    select(selectProducts),
    map((data) => data.slice(0, 4))
  );

  constructor(private store: Store) {}
}
