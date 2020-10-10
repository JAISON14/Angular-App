import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';  
import { ActivatedRoute,Params,Router } from '@angular/router';
import { Car } from '../car';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  id
 
  signupForm: FormGroup; 
  cars:Car[]=[];
  //updatedCar:Car;
  
  productname
  getCars(){
    this.productService.getCars().subscribe(
      (cars:any)=> this.cars=cars,
      err => console.log(err)
    );
  }

  editCar(id){
    console.log('In editCar of edit compo')
    console.log(this.signupForm);
    let updatedCar={
      "productname": this.signupForm.get(`productname`).value,
      "img_url":this.signupForm.get(`img_url`).value,
      "quantity":this.signupForm.get(`quantity`).value,
      "Engine":this.signupForm.get(`Engine`).value,
      "EngineType":this.signupForm.get(`EngineType`).value,
      "Fuel_Type":this.signupForm.get(`Fuel_Type`).value,
      "Max_Power":this.signupForm.get(`Max_Power`).value,
      "Max_Torque":this.signupForm.get(`Max_Torque`).value,
      "Mileage":this.signupForm.get(`Mileage`).value,
      "Driving_Range":this.signupForm.get(`Driving_Range`).value,
      "Drivetrain":this.signupForm.get(`Drivetrain`).value,
      "Transmission":this.signupForm.get(`Transmission`).value,
      "Seating_Capacity":this.signupForm.get(`Seating_Capacity`).value,
      "Price":this.signupForm.get(`Price`).value,
      "Brand":this.signupForm.get(`Brand`).value,
      "Headlights":this.signupForm.get(`Headlights`).value,
      "Warranty":this.signupForm.get(`Warranty`).value
    }
    // this.productService.editCar(id,updatedCar);

    //  this.updatedCar.productname=this.signupForm.get(`productname`).value;

    // console.log('this.updatedCar.productname')
    // this.updatedCar.img_url=this.signupForm.get(`img_url`).value;
    // this.updatedCar.quantity=this.signupForm.get(`quantity`).value;
    // this.updatedCar.Engine=this.signupForm.get(`Engine`).value;
    // this.updatedCar.EngineType=this.signupForm.get(`EngineType`).value;
    // this.updatedCar.Fuel_Type=this.signupForm.get(`Fuel_Type`).value;
    // this.updatedCar.Max_Power=this.signupForm.get(`Max_Power`).value;
    // this.updatedCar.Max_Torque=this.signupForm.get(`Max_Torque`).value;
    // this.updatedCar.Mileage=this.signupForm.get(`Mileage`).value;
    // this.updatedCar.Driving_Range=this.signupForm.get(`Driving_Range`).value;
    // this.updatedCar.Drivetrain=this.signupForm.get(`Drivetrain`).value;
    // this.updatedCar.Transmission=this.signupForm.get(`Transmission`).value;
    // this.updatedCar.Seating_Capacity=this.signupForm.get(`Seating_Capacity`).value;
    // this.updatedCar.Price=this.signupForm.get(`Price`).value;
    // this.updatedCar.Brand=this.signupForm.get(`Brand`).value;
    // this.updatedCar.Headlights=this.signupForm.get(`Headlights`).value;
    // this.updatedCar.Warranty=this.signupForm.get(`Warranty`).value;
    this.productService.editCar(id,updatedCar).subscribe(
      (data:any) => this.getCars()
    );
    console.log(id)
  }
  
  constructor(private route:ActivatedRoute,private router:Router,private productService:MyserviceService) { }

  ngOnInit(): void {
    this.route.paramMap.forEach((params:Params)=>{
      this.productname=params.get('productname');
      console.log('Inside ngOnInit() of productdetails component')
      console.log(this.productname)
    })
    this.getCars() 

    this.signupForm = new FormGroup({
      productname:new FormControl(null, Validators.required),
      img_url:new FormControl(null, Validators.required),
      quantity:new FormControl(null, Validators.required),
      Engine:new FormControl(null, Validators.required),
      EngineType:new FormControl(null, Validators.required),
      Fuel_Type: new FormControl(null, Validators.required),
      Max_Power: new FormControl(null, Validators.required),
      Max_Torque: new FormControl(null, Validators.required),
      Mileage: new FormControl(null, Validators.required),
      Driving_Range: new FormControl(null, Validators.required),
      Drivetrain: new FormControl(null, Validators.required),
      Transmission: new FormControl(null, Validators.required),
      Seating_Capacity: new FormControl(null, Validators.required),
      Price: new FormControl(null, Validators.required),
      Brand: new FormControl(null, Validators.required),
      Headlights: new FormControl(null, Validators.required),
      Warranty: new FormControl(null, Validators.required),
      
    });
  }
  onSubmit() {
    // console.log(this.signupForm);
    // console.log(this.signupForm.get(`productname`).value);
    }


}

