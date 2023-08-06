import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from '@entities/order';
import { ButtonComponent } from '@shared/ui/button/button.component';

@Component({
  selector: 'app-order-form',
  standalone: true,
  imports: [CommonModule, ContactsComponent, ButtonComponent],
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss'],
})
export class OrderFormComponent {}
