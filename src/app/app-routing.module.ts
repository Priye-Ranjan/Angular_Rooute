import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppbarComponent } from './appbar/appbar.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { UsersComponent } from './users/users.component';
import { UserviewComponent } from './userview/userview.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'appbar',
    component: AppbarComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'create-user',
    component: CreateUserComponent,
  },
  {
    path: 'create-product',
    component: CreateProductComponent,
  },

  {
    path: 'productlist',
    component: ProductlistComponent,
  },
  {
    path: 'userview/:id',
    component: UserviewComponent,
  },
  {
    path: 'editproduct/:id',
    component: EditproductComponent,
  },
  {
    path: 'edit-user/:id',
    component: EditUserComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
