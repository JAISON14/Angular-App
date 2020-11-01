import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Source of 1st image in home component verified',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('img')[0].src).toEqual('https://cars.tatamotors.com/images/nexon/nex-level-desktop-sept_5.png');
  })
  it('Source of 2nd image in home component verified',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('img')[1].src).toEqual('https://cars.tatamotors.com/images/nexon/key-feature-01.jpg');
  })
  it('Source of 3rd image in home component verified',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('img')[2].src).toEqual('https://cars.tatamotors.com/images/nexon/key-feature-02.jpg');
  })
  it('Source of 4th image in home component verified',() => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('img')[3].src).toEqual('https://cars.tatamotors.com/images/harrier/h-banner.jpg');
  })
});

