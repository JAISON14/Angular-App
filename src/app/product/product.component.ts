import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';
import { Product } from '../Product';
import { MyserviceService } from './../myservice.service';
import { ActivatedRoute,Params } from '@angular/router';
import { Car } from '../car';
import { Filters } from '../filters';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title = 'Assign4';
  
  products:Product[]=[];
  cars:Car[]=[];
  filter:Filters[]=[];
    latestproduct
    pname
    quant
    flag:boolean=true;
    
    link="https://imgd.aeplcdn.com/310x174/n/cw/ec/47016/urban-cruiser-exterior-right-front-three-quarter.jpeg?q=85alt="
    AddProduct()
    {
      console.log('Inside AddProduct() of product component')
      this.productService.AddProduct(this.pname,this.quant).subscribe(
        (data:any)=> this.getProducts()
      )
       this.latestproduct=new Product()
      //  this.latestproduct.productname=this.pname;
      //  this.latestproduct.quantity=this.quant;
      // this.notify.emit(this.latestproduct);
      
    }
  // @Input( ) company: string 
  // @Output() notify = new EventEmitter<Product>();
  constructor(private productService:MyserviceService,private _route:ActivatedRoute) { }
    getProducts(){
      this.productService.getProducts().subscribe(
        (products:any)=> this.products=products,
        err => console.log(err)
      );
      console.log(JSON.stringify(this.products[0]));
      
    }
    getCars(){
      this.productService.getCars().subscribe(
        (cars:any)=> this.cars=cars,
        err => console.log(err)
      );
    }
    deleteCar(id){
      let r1 = confirm("Are you sure you want to delete this item? ");
      if(r1==false){
        return false;
      }
      if(r1== true){     
        this.productService.deleteCar(id).subscribe(
          (data:any) => this.getCars()
        );
      } 
    }
    getFilters(){
      console.log('Inside getFilters() of product component')
      this.productService.getFilters().subscribe(
        (filter:any)=> this.filter=filter,
        err => console.log(err)
        
      );

      console.log(JSON.stringify(this.filter));
    }

    gotoDetails(productname,id){
      console.log('Inside gotoDetails')
      console.log('The id of gotoDetails')
      console.log(productname)
      this.getCars()
      console.log("Going to print this.cars.length")
      console.log(this.cars.length)
      
  
      for(let i = 0; i < this.cars.length; i++) {
        let obj = this.cars[i];
        //  this.userMatched=false
  
        if((productname==obj.productname))
        { 
  
          console.log('Current Product Visit count');
          console.log(obj.Visitcount);
          
          const Visitcount=obj.Visitcount+1
          console.log('Updated Product Visit count');
          console.log(Visitcount);
  
          let updatedCar={
            "productname":obj.productname,
            "img_url":obj.img_url,
            "quantity":obj.quantity,
            "Engine":obj.Engine,
            "EngineType":obj.EngineType,
            "Fuel_Type":obj.Fuel_Type,
            "Max_Power":obj.Max_Power,
            "Max_Torque":obj.Max_Torque,
            "Mileage":obj.Mileage,
            "Driving_Range":obj.Driving_Range,
            "Drivetrain":obj.Drivetrain,
            "Transmission":obj.Transmission,
            "Seating_Capacity":obj.Seating_Capacity,
            "Price":obj.Price,
            "Brand":obj.Brand,
            "Headlights":obj.Headlights,
            "Warranty":obj.Warranty,
            "Visitcount":Visitcount      
          }
          this.productService.editCar(id,updatedCar).subscribe(
            (data:any) => this.getCars()
          );
  
  
        }
  
       }
    }
    
  ngOnInit(): void{ 
   console.log('Inside ngOnInit() of product component')
   this.getFilters()
   this.getCars()   
   this.getProducts()
   
   
      
      
      // this._route.paramMap.forEach((params:Params)=>{
      //   this.lastViewedProduct=+params.get('productname')
      // })
     }
  

}

