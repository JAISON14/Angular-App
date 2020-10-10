import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';  
import { ActivatedRoute,Params,Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { Car } from '../car';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  signupForm: FormGroup; 
  cars:Car[]=[];
  constructor(private route:ActivatedRoute,private router:Router,private productService:MyserviceService) { 

  }
  addCar()
  {
    console.log('In addCar of addCar compo')
    console.log(this.signupForm);
    let newCar={
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
    this.productService.addCar(newCar).subscribe(
      (data:any) => this.getCars(),
      err => console.log(err)
      );
  }
  getCars()
    {
    this.productService.getCars().subscribe(
      (cars:any)=> this.cars=cars,
      err => console.log(err)
    );
  }

  ngOnInit(): void {

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
}

