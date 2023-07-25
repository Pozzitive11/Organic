import { Component } from '@angular/core';
import { ProductSectionComponent } from '@entities/product-section';
import { BannerComponent } from '@shared/ui/banner/banner.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  standalone: true,
  imports: [BannerComponent, ProductSectionComponent],
})
export class ProductPageComponent {}
