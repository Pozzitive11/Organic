import { Component } from '@angular/core';
import { AdUnitComponent } from '@entities/ad-unit';
import { AboutComponent } from '@layouts/about';
import { CategoriesComponent } from '@layouts/categories/categories.component';
import { EcoFriendlyComponent } from '@layouts/eco-friendly';
import { HeroComponent } from '@layouts/hero';
import { NewsletterComponent } from '@layouts/newsletter';
import { OfferComponent } from '@layouts/offer';
import { TestimonialComponent } from '@layouts/testimonial/testimonial.component';
import { ProductsComponent } from '@widgets/products';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [
    HeroComponent,
    AdUnitComponent,
    AboutComponent,
    TestimonialComponent,
    OfferComponent,
    EcoFriendlyComponent,
    NewsletterComponent,
    CategoriesComponent,
  ],
})
export class HomePageComponent {}
