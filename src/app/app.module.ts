import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { DeleteMenuComponent } from './delete-menu/delete-menu.component';
import { CreateFoodProductComponent } from './create-food-product/create-food-product.component';
import { DeleteFoodProductComponent } from './delete-food-product/delete-food-product.component';
import { UpdateFoodProductComponent } from './update-food-product/update-food-product.component';
import { GetMenuComponent } from './get-menu/get-menu.component';
import { LoginComponent } from './login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { GetFoodProductComponent } from './get-food-product/get-food-product.component';
import { CreateFoodOrderComponent } from './create-food-order/create-food-order.component';
import { GetFoodOrderComponent } from './get-food-order/get-food-order.component';
import { CreatebanchComponent } from './createbanch/createbanch.component';
import { GetAllBranchComponent } from './get-all-branch/get-all-branch.component';
import { UpdateBranchComponent } from './update-branch/update-branch.component';
import { AuthorizationInterceptor } from './authorization.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    CreateMenuComponent,
    DeleteMenuComponent,
    CreateFoodProductComponent,
    DeleteFoodProductComponent,
    UpdateFoodProductComponent,
    GetMenuComponent,
    LoginComponent,
    GetFoodProductComponent,
    CreateFoodOrderComponent,
    GetFoodOrderComponent,
    CreatebanchComponent,
    GetAllBranchComponent,
    UpdateBranchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthorizationInterceptor,
      multi   : true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
