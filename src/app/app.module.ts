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

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AboutComponent,
    PageNotFoundComponent,
    ProductdetailsComponent,
    LoginComponent,
    SignupComponent,
    EditproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [MyguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
