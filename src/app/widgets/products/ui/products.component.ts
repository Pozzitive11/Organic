import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from '@entities/product';
import { Product } from '@entities/product/models/products.model';
import { ButtonComponent } from '@shared/ui/button/button.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  standalone: true,
  imports: [CommonModule, ButtonComponent, ProductComponent, RouterModule],
})
export class ProductsComponent {
  @Input() products: Product[];
}
