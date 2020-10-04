import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { MyguardGuard } from './myguard.guard';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component'
import {EditproductComponent } from './editproduct/editproduct.component'

const routes: Routes = [
  { path:'', component:AboutComponent},
  { path:'products', component:ProductComponent},
  { path:'login' , component:LoginComponent},
  { path:'products/:productname', component:ProductdetailsComponent, canActivate:[MyguardGuard]},
  { path:'editcar/:productname', component:EditproductComponent, canActivate:[MyguardGuard]},
  { path:'signup' , component:SignupComponent}, 
  { path:'*', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
