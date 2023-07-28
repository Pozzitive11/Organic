import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@shared/ui/button/button.component';

@Component({
  selector: 'app-about-page-offer',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './about-page-offer.component.html',
  styleUrls: ['./about-page-offer.component.scss'],
})
export class AboutPageOfferComponent {}
