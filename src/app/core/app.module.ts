import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './ui';
import { PagesRoutingModule } from '@pages/pages-routing.module';
import { HeaderModule } from '@layouts/header/header.module';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from '@layouts/footer';
import { NewsletterComponent } from '@layouts/newsletter';
import { LogoComponent } from '@widgets/logo';
import { ProductEffects, productReducer } from '@entities/product/store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    PagesRoutingModule,
    LogoComponent,
    HeaderModule,
    NewsletterComponent,
    FooterComponent,
    HttpClientModule,
    StoreModule.forRoot({ products: productReducer }),
    EffectsModule.forRoot([ProductEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
