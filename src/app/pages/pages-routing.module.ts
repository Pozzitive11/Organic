import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home';
import { ProjectsSinglePageComponent } from './projects-single-page';
import { NewsSinglePageComponent } from './news-single-page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'product/:productId',
    loadComponent: () =>
      import('./product-page').then((m) => m.ProductPageComponent),
  },
  {
    path: 'shop',
    loadComponent: () => import('./shop-page').then((m) => m.ShopPageComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about-page').then((m) => m.AboutPageComponent),
  },
  {
    path: 'news',
    loadComponent: () => import('./news-page').then((m) => m.NewsPageComponent),
  },
  {
    path: 'news-1',
    component: NewsSinglePageComponent,
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./projects-page').then((m) => m.ProjectsPageComponent),
  },
  {
    path: 'projects-1',
    component: ProjectsSinglePageComponent,
  },
  {
    path: 'order',
    loadComponent: () =>
      import('./order-page').then((m) => m.OrderPageComponent),
  },
  {
    path: 'not-found',
    loadComponent: () => import('./not-found').then((m) => m.NotFoundComponent),
  },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
