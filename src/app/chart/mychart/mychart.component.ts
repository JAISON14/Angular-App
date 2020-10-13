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
  finalLabels:string[]=[]
  finalChartData:number[]=[]
  noOfCars:number
  // label= ['2006', '2007', '2008', '2009', '2010', '2011', '2012']

  barChartLabels =this.Labels 
  barChartType = 'bar';
   barChartLegend = true;
   barChartData = [
    //  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
    {data: this.ChartData, label: 'Cars Visit Count'}

  ];

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
  getFullGraph(){
    this.getData()
    this.barChartLabels =this.Labels 
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.barChartData = [
      //  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
      // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
      {data: this.ChartData, label: 'Cars Visit Count'}
  
    ];
  }
  getData(){
    console.log('Inside gotoDetails')
    console.log('The id of gotoDetails')
    this.getCars()
    console.log("Going to print this.cars.length")
    console.log(this.cars.length)
    this.noOfCars=this.cars.length

    for(let i = 0; i < this.cars.length; i++) {
      let obj = this.cars[i];
      //  this.userMatched=false

      // this.Labels.push(obj.productname)
      // this.ChartData.push(obj.Visitcount)

      this.Labels[i]=obj.productname
      this.ChartData[i]=obj.Visitcount     

     }
     console.log(this.Labels)
     console.log(this.ChartData)
     console.log()
      this.sort()
    //  console.log(this.Labels)
    //  console.log(this.ChartData)
    // this.finalLabels=this.Labels
    // this.finalChartData=this.ChartData
    // console.log(this.finalLabels)
    // console.log(this.finalChartData)
    }
  getTop3(){
     this.getData();
    this.sort()
    console.log("In top 3")
    console.log(this.finalLabels)
    console.log(this.finalChartData)
    console.log(this.ChartData)
    this.finalChartData=[]
    for(let i=0;i<3;i++)
    {
      this.finalLabels[i]=this.Labels[i]
      this.finalChartData.push(this.ChartData[i])
      console.log(this.finalChartData[i])
    }
    console.log("In top 3")
    console.log(this.finalLabels)
    console.log(this.finalChartData)
    this.barChartLabels=this.finalLabels
    // this.ChartData=this.finalChartData
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.barChartData = [
      //  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
      // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
      {data: this.finalChartData, label: 'Top 3  Visit Count'}
    ];
  }
  getTop5(){
    this.getData();
    this.sort()
    console.log("In top 5")
    console.log(this.finalLabels)
    console.log(this.finalChartData)
    console.log(this.ChartData)
    this.finalChartData=[]
    for(let i=0;i<5;i++)
    {
      this.finalLabels[i]=this.Labels[i]
      this.finalChartData.push(this.ChartData[i])
      console.log(this.finalChartData[i])
    }
    console.log("In top 5")
    console.log(this.finalLabels)
    console.log(this.finalChartData)
    this.barChartLabels=this.finalLabels
    // this.ChartData=this.finalChartData
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.barChartData = [
      //  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
      // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
      {data: this.finalChartData, label: 'Top 3  Visit Count'}
    ];
  }
  getTop7(){
    this.getData();
    this.sort()
    console.log("In top 7")
    console.log(this.finalLabels)
    console.log(this.finalChartData)
    console.log(this.ChartData)
    this.finalChartData=[]
    for(let i=0;i<7;i++)
    {
      this.finalLabels[i]=this.Labels[i]
      this.finalChartData.push(this.ChartData[i])
      console.log(this.finalChartData[i])
    }
    console.log("In top 7")
    console.log(this.finalLabels)
    console.log(this.finalChartData)
    this.barChartLabels=this.finalLabels
    // this.ChartData=this.finalChartData
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.barChartData = [
      //  {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
      // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
      {data: this.finalChartData, label: 'Top 3  Visit Count'}
    ];
  }
    
    // public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
// public barChartLabels=this.Labels;

  // public barChartData = [
  //   {data: this.ChartData,label:'jaba'}
  // ];
  sort(){
    console.log("Sorting")
    let len = this.cars.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (this.ChartData[j] < this.ChartData[j + 1]) {
                 let tmp1 = this.ChartData[j];
                this.ChartData[j] = this.ChartData[j + 1];
                this.ChartData[j + 1] = tmp1;
				        let tmp2 = this.Labels[j];
                this.Labels[j] = this.Labels[j + 1];
                this.Labels[j + 1] = tmp2;
            }
        }
    }
  }
  ngOnInit(): void {
    this.getData()
  }

}

