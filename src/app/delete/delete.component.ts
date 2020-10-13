import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Car } from '../car';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id:number
  cars:Car[]=[]
  deleted:boolean=false

  goBack(): void {

    this.router.navigate(['products']);
  }

  deleteCar(id){
    let r1 = confirm("Are you sure you want to delete this item? ");
    if(r1==false){
      return false;
    }
    if(r1== true){  
      this.deleted=true   
      this.productService.deleteCar(id).subscribe(
        (data:any) => this.getCars()
      );
    } 
  }

  getCars(){
    this.productService.getCars().subscribe(
      (cars:any)=> this.cars=cars,
      err => console.log(err)
    );
  }

  constructor(private route:ActivatedRoute,private router:Router,private productService:MyserviceService) { }

  ngOnInit(): void {
    this.route.paramMap.forEach((params:Params)=>{
      this.id=params.get('id');
      console.log('Inside ngOnInit() of delete component')
      console.log(this.id)
      this.deleteCar(this.id)
    })
  }

}

