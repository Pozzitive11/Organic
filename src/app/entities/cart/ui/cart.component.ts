import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { CartProduct } from '../models';
import { selectCartProducts } from '../store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  standalone: true,
})
export class CartComponent {
  cartProductsCount = 0;
  cartProducts$: Observable<CartProduct[]> = this.store.pipe(
    select(selectCartProducts),
    tap((products) => {
      this.cartProductsCount = products.length;
      console.log(products);
    })
  );
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.cartProducts$.subscribe(); // ???
  }
}
