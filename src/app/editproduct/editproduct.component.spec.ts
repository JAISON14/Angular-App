import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyserviceService } from '../myservice.service';
import { BehaviorSubject } from 'rxjs';
import { Car } from '../car';
import { ActivatedRoute,Params,Router, RouterModule } from '@angular/router';

import { EditproductComponent } from './editproduct.component';

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

describe('EditproductComponent', () => {
  let component: EditproductComponent;
  let fixture: ComponentFixture<EditproductComponent>;

  beforeEach(async () => {

    TestBed.configureTestingModule({
      imports: [ RouterModule.forRoot([])],
      declarations: [ EditproductComponent ],
      providers: [{provide:MyserviceService, useClass:MockMyserviceService}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
