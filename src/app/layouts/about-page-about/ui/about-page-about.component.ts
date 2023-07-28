import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@shared/ui/button/button.component';

@Component({
  selector: 'app-about-page-about',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './about-page-about.component.html',
  styleUrls: ['./about-page-about.component.scss'],
})
export class AboutPageAboutComponent {}
