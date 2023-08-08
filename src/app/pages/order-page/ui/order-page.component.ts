import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderFormComponent } from '@widgets/order-form';
import { OrderListComponent } from '@widgets/order-list';

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [CommonModule, OrderFormComponent, OrderListComponent],
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss'],
})
export class OrderPageComponent {}
