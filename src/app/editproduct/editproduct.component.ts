import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';  
import { ActivatedRoute,Params,Router } from '@angular/router';
import { Car } from '../car';
import { CompocanDeactivate } from '../compocan-deactivate';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit,CompocanDeactivate {
  canDeactivate():boolean 
  {
    return !this.isDirty;
  }
  
  id
 
  signupForm: FormGroup; 
  cars:Car[]=[];
  carToEdit:Car;
  //updatedCar:Car;
  loadform:boolean=false
  productname
  pname
  isDirty:boolean=false
  getCars(){
    this.productService.getCars().subscribe(
      (cars:any)=> this.cars=cars,
      err => console.log(err)
    );
  }
  getCartoEdit(){
    for(let i = 0; i < this.cars.length; i++) {
      let obj = this.cars[i];
      if(obj.productname==this.productname)
      {
        this.carToEdit=obj
      }
    }
    console.log("Car to Edit:")
    console.log(this.carToEdit)
  }
  editCar(id,Visitcount){
    this.isDirty=false
    console.log('In editCar of edit compo')
    console.log(this.signupForm);
    let updatedCar={
      "productname": this.signupForm.get(`pname`).value,
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
      "Warranty":this.signupForm.get(`Warranty`).value,
      "Visitcount":Visitcount
    }

    this.productService.editCar(id,updatedCar).subscribe(
      (data:any) => this.getCars()
    );
    console.log(id)
    this.goBack()
  }
  loadEdit(){
    this.loadform=true
  }
  goBack(): void {

    this.router.navigate(['products']);
  }
  constructor(private route:ActivatedRoute,private router:Router,private productService:MyserviceService) { }

  ngOnInit(): void {
    this.route.paramMap.forEach((params:Params)=>{
      this.productname=params.get('productname');
      console.log('Inside ngOnInit() of productdetails component')
      console.log(this.productname)
    })

    this.getCars() 
    this.pname=this.productname
    setTimeout(() => 
    { 
    this.getCartoEdit()
  },
  400);

  setTimeout(() => 
  { 
    this.signupForm = new FormGroup({
      pname:new FormControl(this.carToEdit.productname, Validators.required),
      img_url:new FormControl(this.carToEdit.img_url, Validators.required),
      quantity:new FormControl(this.carToEdit.quantity, [Validators.required,Validators.pattern("^[0-9]*$")]),
      Engine:new FormControl(this.carToEdit.Engine, Validators.required),
      EngineType:new FormControl(this.carToEdit.EngineType, Validators.required),
      Fuel_Type: new FormControl(this.carToEdit.Fuel_Type, Validators.required),
      Max_Power: new FormControl(this.carToEdit.Max_Power, Validators.required),
      Max_Torque: new FormControl(this.carToEdit.Max_Torque, Validators.required),
      Mileage: new FormControl(this.carToEdit.Mileage, [Validators.required,Validators.pattern('^\\d+\\.\\d{2}$')]),
      Driving_Range: new FormControl(this.carToEdit.Driving_Range, [Validators.required,Validators.pattern("^[0-9]*$")]),
      Drivetrain: new FormControl(this.carToEdit.Drivetrain, Validators.required),
      Transmission: new FormControl(this.carToEdit.Transmission, Validators.required),
      Seating_Capacity: new FormControl(this.carToEdit.Seating_Capacity, [Validators.required,Validators.pattern("^[0-9]*$")]),
      Price: new FormControl(this.carToEdit.Price, Validators.required),
      Brand: new FormControl(this.carToEdit.Brand, Validators.required),
      Headlights: new FormControl(this.carToEdit.Headlights, Validators.required),
      Warranty: new FormControl(this.carToEdit.Warranty, Validators.required),
      
    });
  },
  500);
 
    // this.loadform=true

  }
  onSubmit() {
    // console.log(this.signupForm);
    // console.log(this.signupForm.get(`productname`).value);
    }

}



