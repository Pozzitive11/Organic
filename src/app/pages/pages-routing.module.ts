import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home';
import { ProductPageComponent } from './product-page/product-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
