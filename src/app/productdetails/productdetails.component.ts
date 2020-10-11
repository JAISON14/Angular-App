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



  // updateCar(id,Visitcount){
  //   console.log('In updateCar of product details compo')

  //   let updatedCar={
  //     "productname": this.signupForm.get(`productname`).value,
  //     "img_url":this.signupForm.get(`img_url`).value,
  //     "quantity":this.signupForm.get(`quantity`).value,
  //     "Engine":this.signupForm.get(`Engine`).value,
  //     "EngineType":this.signupForm.get(`EngineType`).value,
  //     "Fuel_Type":this.signupForm.get(`Fuel_Type`).value,
  //     "Max_Power":this.signupForm.get(`Max_Power`).value,
  //     "Max_Torque":this.signupForm.get(`Max_Torque`).value,
  //     "Mileage":this.signupForm.get(`Mileage`).value,
  //     "Driving_Range":this.signupForm.get(`Driving_Range`).value,
  //     "Drivetrain":this.signupForm.get(`Drivetrain`).value,
  //     "Transmission":this.signupForm.get(`Transmission`).value,
  //     "Seating_Capacity":this.signupForm.get(`Seating_Capacity`).value,
  //     "Price":this.signupForm.get(`Price`).value,
  //     "Brand":this.signupForm.get(`Brand`).value,
  //     "Headlights":this.signupForm.get(`Headlights`).value,
  //     "Warranty":this.signupForm.get(`Warranty`).value,
  //     "Visitcount":Visitcount
  //   }

  //   this.productService.editCar(id,updatedCar).subscribe(
  //     (data:any) => this.getCars()
  //   );
  //   console.log(id)
  // }

  ngOnInit(): void {
    this.route.paramMap.forEach((params:Params)=>{
      this.productname=params.get('productname');
      console.log('Inside ngOnInit() of productdetails component')
      console.log(this.productname)
    // this.productname=parse
    })
    this.getCars()
    // this.MarkVisited() 
    // this.findcar()
  }
  goBack(): void {

    this.router.navigate(['products',{productname:this.productname}]);
  }

}


