import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchProductsComponent } from '@features/search-products';
import { CartComponent } from '@widgets/cart';
import { LogoComponent } from '@widgets/logo';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SearchProductsComponent,
    CartComponent,
    LogoComponent,
  ],
})
export class HeaderComponent {
  logo = 'src/img/logo.svg';
}
