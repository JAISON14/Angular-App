import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
//import { EventEmitter } from 'protractor';
import { Product } from '../Product';
import { MyserviceService } from './../myservice.service';
import { ActivatedRoute,Params } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title = 'Assign4';
  
  products:Product[]=[];
    latestproduct
    pname
    quant
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
    }
  ngOnInit(): void{ 
   console.log('Inside ngOnInit() of product component')
      this.getProducts()
      // this._route.paramMap.forEach((params:Params)=>{
      //   this.lastViewedProduct=+params.get('productname')
      // })
     }
  

}

