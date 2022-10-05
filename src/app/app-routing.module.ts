import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFoodOrderComponent } from './create-food-order/create-food-order.component';
import { CreateFoodProductComponent } from './create-food-product/create-food-product.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { CreatebanchComponent } from './createbanch/createbanch.component';
import { DeleteFoodProductComponent } from './delete-food-product/delete-food-product.component';
import { GetAllBranchComponent } from './get-all-branch/get-all-branch.component';
import { GetFoodOrderComponent } from './get-food-order/get-food-order.component';
import { GetFoodProductComponent } from './get-food-product/get-food-product.component';
import { LoginComponent } from './login/login.component';
import { UpdateBranchComponent } from './update-branch/update-branch.component';
import { UpdateFoodProductComponent } from './update-food-product/update-food-product.component';

const routes: Routes = [
  {path:"createMenu",component:CreateMenuComponent},
  {path:"addFoodProduct",component:CreateFoodProductComponent},
  {path:"getFoodProducts/:id",component:GetFoodProductComponent},
  {path:"editFoodProduct/:id",component:UpdateFoodProductComponent},
  {path:"addBranch/:id",component:CreatebanchComponent},
  {path:"getAllBranch/:id",component:GetAllBranchComponent},
  {path:"updateBranch/:id",component:UpdateBranchComponent},
  {path:"login",component:LoginComponent},
  {path:"getfoodorder",component:GetFoodOrderComponent},
  {path:"CreateOrder",component:CreateFoodOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
