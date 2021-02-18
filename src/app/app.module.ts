import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppbarComponent } from './appbar/appbar.component';
import { ProductComponent } from './product/product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsercardComponent } from './usercard/usercard.component';
import { UserviewComponent } from './userview/userview.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditproductComponent } from './editproduct/editproduct.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    ProductComponent,
    ProductlistComponent,
    ProductcardComponent,
    LeftbarComponent,
    CreateProductComponent,
    HomeComponent,
    UsersComponent,
    DashboardComponent,
    UsercardComponent,
    UserviewComponent,
    CreateUserComponent,
    EditproductComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
