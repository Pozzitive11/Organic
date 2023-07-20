import { NgModule } from '@angular/core';

import { HeaderComponent } from './ui';
import { SearchProductsComponent } from '@features/search-products';
import { LogoComponent } from '@widgets/logo';
import { CartComponent } from '@widgets/cart';

@NgModule({
  declarations: [HeaderComponent, SearchProductsComponent, CartComponent],
  imports: [LogoComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
