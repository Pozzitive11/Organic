import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from '@shared/ui/banner/banner.component';
import { AboutPageAboutComponent } from '@layouts/about-page-about';
import { AdvantagesComponent } from '@layouts/advantages';
import { TeamComponent } from '@layouts/team';
import { AboutPageOfferComponent } from '@layouts/about-page-offer';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
    AboutPageAboutComponent,
    AdvantagesComponent,
    TeamComponent,
    AboutPageOfferComponent,
  ],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss'],
})
export class AboutPageComponent {}
