import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { MyserviceService } from './myservice.service';
import { BehaviorSubject } from 'rxjs';
import { Car } from './car';
import { ActivatedRoute,Params,Router, RouterModule } from '@angular/router';

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

describe('AppComponent', () => {
  beforeEach(async () => {
    // await TestBed.configureTestingModule({
    //   imports: [
    //     RouterTestingModule
    //   ],
    //   declarations: [
    //     AppComponent
    //   ],
    // }).compileComponents();
    TestBed.configureTestingModule({
      imports: [ RouterModule.forRoot([])],
      declarations: [ AppComponent ],
      providers: [{provide:MyserviceService, useClass:MockMyserviceService}]
    })
    .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Cap'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Cap');
  });
  it('Site Icon should be displayed on the nav',() => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('img')[0].src).toEqual('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/1200px-Shopify_logo_2018.svg.png');
  })
  it('Profile Icon should be displayed on the nav',() => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('img')[1].src).toEqual('data:image/png;base64,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');
  })
  it('Should render Home button in nav',() => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('a')[1].textContent).toEqual('Home');
  })
  it('Should render Cars button in nav',() => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('a')[2].textContent).toEqual('Cars');
  })

});
