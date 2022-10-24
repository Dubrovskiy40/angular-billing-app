import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import {ProductsListComponent} from "./components/products-list/prooducts-list.component";
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {HomePageGuard} from "./shared/services/home-page.guard";

const routes: Routes = [
  {path: 'auth', component: AuthComponent},
  {path: 'registration', component: RegistrationPageComponent},
  {path: 'home', component: HomePageComponent,
    canActivate: [HomePageGuard],
    canDeactivate: [HomePageGuard],
    children: [
      {path: 'price', component: ProductsListComponent},
      {path: 'history', component: PurchaseHistoryComponent}
  ]},
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
