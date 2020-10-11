import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { MychartComponent } from './mychart/mychart.component';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [MychartComponent],
  imports: [
    CommonModule,
    ChartRoutingModule,
    ChartsModule
  ]
})
export class ChartModule { }
