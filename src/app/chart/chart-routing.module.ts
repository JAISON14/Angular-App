import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MychartComponent } from './mychart/mychart.component';

const routes: Routes = [
  { path:'', component:MychartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartRoutingModule { }
