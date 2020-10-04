import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { Car } from '../car';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  id:any;
  cars:Car[]=[];
  productname
  


  constructor(private route:ActivatedRoute,private router:Router,private productService:MyserviceService) { }
  getCars(){
    this.productService.getCars().subscribe(
      (cars:any)=> this.cars=cars,
      err => console.log(err)
    );
  }
  // findcar(){
  //   console.log('Inside findcars() of productdetails component')
  //   this.cars.forEach(element => {
  //     this.index=this.index+1
  //     console.log('Inside foreach of productdetails component')
  //     console.log(element.productname)
  //     if(this.productname.equals(element.productname)){
  //       console.log('Inside if of foreach of productdetails component')
  //       this.result=this.index;
  //     }
      
  //   });

  // }
  findcar(){
    console.log('Inside findcars() of productdetails component')
    let i
    for(i=1;i<this.cars.length;i++)
    { console.log(JSON.stringify(this.cars[1].productname))
      let pname=JSON.stringify(this.cars[1].productname)
      if(this.productname===pname)
      {
        this.id=i;
        console.log(this.id)
      }
    }
  }

  ngOnInit(): void {
    this.route.paramMap.forEach((params:Params)=>{
      this.productname=params.get('productname');
      console.log('Inside ngOnInit() of productdetails component')
      console.log(this.productname)
    // this.productname=parse
    })
    this.getCars() 
    this.findcar()
  }
  goBack(): void {
    this.router.navigate(['products',{productname:this.productname}]);
  }

}

