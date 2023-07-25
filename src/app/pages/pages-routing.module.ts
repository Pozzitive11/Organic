import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home';
import { ProductPageComponent } from './product-page';
import { ShopPageComponent } from './shop-page';
import { NotFoundComponent } from './not-found';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
    canActivate: [],
  },
  { path: 'product/:productId', component: ProductPageComponent },
  {
    path: 'shop',
    component: ShopPageComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
  // {
  //   path: "login",
  //   loadComponent: () => import("").then((m) => m.LoginPageComponent),
  //   canLoad: []
  // },
  // {
  //   path: "registration",
  //   loadComponent: () =>
  //     import("").then((m) => m.RegistrationPageComponent),
  //   canLoad: []
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
