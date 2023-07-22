import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home';
import { ProductPageComponent } from './product-page/product-page.component';

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
