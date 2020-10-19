import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import { FilterPipe } from '../filter.pipe';
import { HighlightDirective } from '../highlight.directive';
import { Car } from '../car';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // private userIdSubject = new Subject<string>();



  // readonly CarsPost$ = this.userIdSubject.pipe(
  //   debounceTime(250),
  //   distinctUntilChanged(),
  //   switchMap(userId => this.productService.fetchCars(userId))
  // );

  // searchCars(userId: string) {
  //   this.userIdSubject.next(userId);
  // }

  // constructor(private route:ActivatedRoute,private router:Router,private productService:MyserviceService) { }

  // ngOnInit(): void {
  // }

  cars:Car[]=[];
  title = 'angular-text-search-highlight';
  searchText:string = '';
  productnames:string[]=[]

  characters = [
    'Ant-Man',
    'Aquaman',
    'Asterix',
    'The Atom',
    'The Avengers',
    'Batgirl',
    'Batman',
    'Batwoman',
    'Black Canary',
    'Black Panther',
    'Captain America',
    'Captain Marvel',
    'Catwoman',
    'Conan the Barbarian',
    'Daredevil',
    'The Defenders',
    'Doc Savage',
    'Doctor Strange',
    'Elektra',
    'Fantastic Four',
    'Ghost Rider',
    'Green Arrow',
    'Green Lantern',
    'Guardians of the Galaxy',
    'Hawkeye',
    'Hellboy',
    'Incredible Hulk',
    'Iron Fist',
    'Iron Man',
    'Marvelman',
    'Robin',
    'The Rocketeer',
    'The Shadow',
    'Spider-Man',
    'Sub-Mariner',
    'Supergirl',
    'Superman',
    'Teenage Mutant Ninja Turtles',
    'Thor',
    'The Wasp',
    'Watchmen',
    'Wolverine',
    'Wonder Woman',
    'X-Men',
    'Zatanna',
    'Zatara',
  ]
  getCars(){
    console.log("Inside getCars() of Serach")
    this.productService.getCars().subscribe(
      (cars:any)=> this.cars=cars,
      err => console.log(err)
    );
  }
  getproductnames(){
    console.log("Inside getproductnames() of Serach")
    console.log(this.cars.length)
    for(let i = 0; i < this.cars.length; i++) {
      let obj = this.cars[i];
      this.productnames[i]=obj.productname
      console.log(obj.productname)
    }
    console.log(this.productnames)
  }
  gotoDetails(productname){
    console.log("Inside gotoDetails(productname)")
  }
  constructor(private route:ActivatedRoute,private router:Router,private productService:MyserviceService) { }
  ngOnInit(): void{
    this.getCars()
    setTimeout(() => 
    {
    this.getproductnames()
  },
  500);
    }
  }




