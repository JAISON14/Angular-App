import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControl, FormGroup,Validators } from '@angular/forms';  
import { MyserviceService } from '../myservice.service';
import { BehaviorSubject } from 'rxjs';
import { Car } from '../car';
import { ActivatedRoute,Params,Router, RouterModule } from '@angular/router';

import { AddProductComponent } from './add-product.component';
// import { exception } from 'console';

class MockRouter {
  navigate = jasmine.createSpy('navigate');
}

class MockMyserviceService{
  cars: BehaviorSubject<Car[]>=new BehaviorSubject<Car[]>([
    {
      "productname": "Hyundai Venue",
      "img_url": "https://imgd.aeplcdn.com/310x174/n/cw/ec/35455/venue-exterior-right-front-three-quarter.jpeg?q=85",
      "quantity": "7",
      "Engine": "1197cc, 4 Cylinders Inline,4 Valves/Cylinder",
      "EngineType": "1.2 l Kappa",
      "Fuel_Type": "Petrol",
      "Max_Power": "82 bhp @ 6000 rpm",
      "Max_Torque": "114 Nm @ 4000 rpm",
      "Mileage": "17.52",
      "Driving_Range": "788",
      "Drivetrain": "FWD",
      "Transmission": "Manual - 5 Gears",
      "Seating_Capacity": "5",
      "Price": "₹ 8.74 Lakh",
      "Brand": "Hyundai",
      "Headlights": "Halogen",
      "Warranty": "3 Years",
      "Visitcount": 12

    },
    {
      "productname": "Mahindra XUV300",
      "img_url": "https://imgd.aeplcdn.com/310x174/n/cw/ec/26918/xuv300-exterior-right-front-three-quarter-148705.jpeg?q=85",
      "quantity": "7",
      "Engine": "1497cc, 4 Cylinders Inline,4 Valves/Cylinder",
      "EngineType": "1.5 Turbo Diesel",
      "Fuel_Type": "Diesel",
      "Max_Power": "115 bhp @ 3750 rpm",
      "Max_Torque": "300 Nm @ 1500 rpm",
      "Mileage": "20",
      "Driving_Range": "840",
      "Drivetrain": "FWD",
      "Transmission": "Manual - 6 Gears",
      "Seating_Capacity": "5",
      "Price": "₹ 10.32 Lakh",
      "Brand": "Mahindra",
      "Headlights": "Halogen",
      "Warranty": "3 Years",
      "Visitcount": 10,

    },
    {
      "productname": "Kia Sonet",
      "img_url": "https://imgd.aeplcdn.com/664x374/n/cw/ec/41523/sonet-exterior-right-front-three-quarter-48.jpeg?q=85",
      "quantity": "7",
      "Engine": "1497cc, 4 Cylinders Inline,4 Valves/Cylinder",
      "EngineType": "Smartstream G 1.2",
      "Fuel_Type": "Petrol",
      "Max_Power": "82 bhp @ 6300 rpm",
      "Max_Torque": "115 Nm @ 4200 rpm",
      "Mileage": "18.4",
      "Driving_Range": "828",
      "Drivetrain": "FWD",
      "Transmission": "Manual - 5 Gears",
      "Seating_Capacity": "5",
      "Price": "₹ 7.80 Lakh",
      "Brand": "Kia",
      "Headlights": "Halogen",
      "Warranty": "3 Years",
      "Visitcount": 7,

    }
  ]);

  addCar(newCar:Car){
    let tempcars= this.cars.getValue();
    tempcars.push(newCar)
    this.cars.next(tempcars)
  }
  getCars(){
    return this.cars;
  }
}

describe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;

  beforeEach(async () => {
    // await TestBed.configureTestingModule({
    //   declarations: [ AddProductComponent ]
    // })
    TestBed.configureTestingModule({
      imports: [ RouterModule.forRoot([])],
      declarations: [ AddProductComponent ],
      providers: [{provide:MyserviceService, useClass:MockMyserviceService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should renter a text box to accept productname',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][formControlName="productname"]')).toBeTruthy();
  })
  it('should renter a text box to accept Price',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][formControlName="Price"]')).toBeTruthy();
  })
  it('should renter a text box to accept image URL',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="url"][formControlName="img_url"]')).toBeTruthy();
  })
  it('should render a text box to accept Engine',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][formControlName="Engine"]')).toBeTruthy();
  })
  it('should render a text box to accept EngineType',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][formControlName="EngineType"]')).toBeTruthy();
  })
  it('should render a text box to accept Max_Power',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][formControlName="Max_Power"]')).toBeTruthy();
  })
  it('should render a text box to accept Max_Torque',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][formControlName="Max_Torque"]')).toBeTruthy();
  })
  it('should render a text box to accept Mileage',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][formControlName="Mileage"]')).toBeTruthy();
  })
  it('should render a text box to accept Brand',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][formControlName="Brand"]')).toBeTruthy();
  })
  it('should render a text box to accept Driving_Range',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][formControlName="Driving_Range"]')).toBeTruthy();
  })
  it('should render a text box to accept Drivetrain',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][formControlName="Drivetrain"]')).toBeTruthy();
  })
  it('should render a text box to accept Transmission',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][formControlName="Transmission"]')).toBeTruthy();
  })
  it('should render a text box to accept Seating_Capacity',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][formControlName="Seating_Capacity"]')).toBeTruthy();
  })
  it('should render a text box to accept Fuel_Type',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][formControlName="Fuel_Type"]')).toBeTruthy();
  })
  it('should render a text box to accept Headlights',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][formControlName="Headlights"]')).toBeTruthy();
  })
  it('should render a text box to accept Warranty',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][formControlName="Warranty"]')).toBeTruthy();
  })
  it('should render a text box to accept Quantity',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][formControlName="quantity"]')).toBeTruthy();
  })
  it('Should render Submit button', () =>{
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button').textContent).toEqual(' Submit ');
  })
  it('should render Name: as Label',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[0].textContent).toEqual('Name: ');
  })
  it('should render Price: as Label',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[1].textContent).toEqual('Price: ');
  })
  it('should render Image Url: as Label',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[2].textContent).toEqual('Image Url:');
  })
  it('should render Engine:  as Label',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[3].textContent).toEqual('Engine: ');
  })
  it('should render EngineType: as Label',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[4].textContent).toEqual('EngineType: ');
  })
  it('should render Max Power: as Label',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[5].textContent).toEqual('Max Power: ');
  })
  it('should render Max Torque: as Label',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[6].textContent).toEqual('Max Torque: ');
  })
  it('should render Mileage: as Label',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[7].textContent).toEqual('Mileage: ');
  })
  it('should render Brand: as Label',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[8].textContent).toEqual('Brand: ');
  })
  it('should render Driving Range: as Label',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[9].textContent).toEqual('Driving Range: ');
  })
  it('should render Drivetrain: as Label',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[10].textContent).toEqual('Drivetrain: ');
  })
  it('should render Transmission: as Label',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[11].textContent).toEqual('Transmission: ');
  })
  it('should render Seating_Capacity: as Label',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[12].textContent).toEqual('Seating_Capacity: ');
  })
  it('should render Fuel Type: as Label',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[13].textContent).toEqual('Fuel Type: ');
  })
  it('should render Headlights: as Label',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[14].textContent).toEqual('Headlights: ');
  })
  it('should render Warranty: as Label',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[15].textContent).toEqual('Warranty: ');
  })
  it('should render Quantity: as Label',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[16].textContent).toEqual('Quantity: ');
  })


});


describe('AddProductComponent Class testing', () => {
  let comp: AddProductComponent;
  let productService:MyserviceService;

  beforeEach( () => {

    TestBed.configureTestingModule({
      imports: [ RouterModule.forRoot([])],
      providers: [
        AddProductComponent, 
        // {provide: Router, useClass: MockRouter},
        // RouterModule.forRoot([]),
        { provide:MyserviceService, useClass:MockMyserviceService}]
    });
    comp =TestBed.inject(AddProductComponent);
    productService = TestBed.inject(MyserviceService);  
  });
  it('Should not have cars list after construction',() =>{
    expect(comp.cars).toBeFalsy();
  });


});