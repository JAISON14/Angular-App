import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { MyguardGuard } from './myguard.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CommonModule } from '@angular/common';
import { EditproductComponent } from './editproduct/editproduct.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AboutComponent,
    PageNotFoundComponent,
    ProductdetailsComponent,
    LoginComponent,
    SignupComponent,
    EditproductComponent,
    AddProductComponent,
    ProfileComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartsModule
  ],
  providers: [MyguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
