import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';

import { MaterialExampleModule } from 'src/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import { HomePageComponent } from './home-page/home-page.component';
import { ActiveTariffComponent } from './shared/components/active-tariff/active-tariff.component';
import { PurchaseHistoryComponent } from './purchase-history/purchase-history.component';
import { ProductComponent } from './components/product/product.component';
import {ProductsListComponent} from "./components/products-list/prooducts-list.component";
import {DialogComponent} from "./components/dialog/dialog.component";
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { AlertComponent } from './shared/components/alert/alert.component';
import { StatusComponent } from './shared/components/status/status.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomePageComponent,
    ActiveTariffComponent,
    PurchaseHistoryComponent,
    AppComponent,
    ProductComponent,
    ProductsListComponent,
    DialogComponent,
    RegistrationPageComponent,
    AlertComponent,
    StatusComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialExampleModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
