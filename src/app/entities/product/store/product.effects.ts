import { Injectable } from '@angular/core';
import { ProductsService } from '@shared/lib/products/services';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductActions } from '.';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.getProducts),
      mergeMap(() => this.productService.getProducts()),
      map((products) => ProductActions.getProductsSuccess({ products })),
      catchError((error) => of(error))
    )
  );
}
