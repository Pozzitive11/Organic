import { Component } from '@angular/core';
import { AdvertUnitComponent } from '@entities/advert-unit';
import { AboutComponent } from '@layouts/about';
import { CategoriesComponent } from '@layouts/categories';
import { EcoFriendlyComponent } from '@layouts/eco-friendly';
import { HeroComponent } from '@layouts/hero';
import { NewsletterComponent } from '@layouts/newsletter';
import { OfferComponent } from '@layouts/offer';
import { TestimonialComponent } from '@layouts/testimonial';
import { ProductsComponent } from '@widgets/products';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [
    HeroComponent,
    AdvertUnitComponent,
    AboutComponent,
    TestimonialComponent,
    OfferComponent,
    EcoFriendlyComponent,
    NewsletterComponent,
    CategoriesComponent,
  ],
})
export class HomePageComponent {}
