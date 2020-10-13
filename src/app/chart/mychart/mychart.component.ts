import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../../car';
import { ChartserviceService } from '../chartservice.service'
import { MyserviceService } from '../../myservice.service';
@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent implements OnInit {
  cars:Car[]=[];
  Labels:string[]=[]
  ChartData:number[]=[]
  label= ['2006', '2007', '2008', '2009', '2010', '2011', '2012']
  constructor(private ChartService:ChartserviceService,private productService:MyserviceService,private _route:ActivatedRoute ) { }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
 
  getCars(){
    this.productService.getCars().subscribe(
      (cars:any)=> this.cars=cars,
      err => console.log(err)
    );
  }

  getData(){
    console.log('Inside gotoDetails')
    console.log('The id of gotoDetails')

    this.getCars()
    console.log("Going to print this.cars.length")
    console.log(this.cars.length)
    

    for(let i = 0; i < this.cars.length; i++) {
      let obj = this.cars[i];
      //  this.userMatched=false

      this.Labels.push(obj.productname)
      this.ChartData.push(obj.Visitcount)

     }
     console.log(this.Labels)
     console.log(this.ChartData)
    }
    barChartLabels =this.Labels
    // public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
// public barChartLabels=this.Labels;
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    //  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    {data: this.ChartData, label: 'Cars Visit Count'}

  ];
  // public barChartData = [
  //   {data: this.ChartData,label:'jaba'}
  // ];
  ngOnInit(): void {
    this.getCars()
  }

}

