import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './ui';
import { PagesRoutingModule } from '@pages/pages-routing.module';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '@layouts/footer';
import { NewsletterComponent } from '@layouts/newsletter';
import { LogoComponent } from '@widgets/logo';
import { ProductEffects, productReducer } from '@entities/product/store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '@layouts/header';
import { cartReducer } from '@entities/cart/store';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    PagesRoutingModule,
    LogoComponent,
    HeaderComponent,
    NewsletterComponent,
    FooterComponent,
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot({
      cartProducts: cartReducer,
      products: productReducer,
    }),
    EffectsModule.forRoot([ProductEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
