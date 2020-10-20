import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from './myservice.service';
import { Product } from './Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assign4';
  company='Amazon'
  pname='jaison'
  flag=false
  loginStatus:boolean=false
  CurrentUser_name:string;
  latestproduct:Product
  onNotify(product:Product){
    this.latestproduct= product
    this.flag=true
    console.count("flag is "+this.flag)
  }

  loginCheck(){
    this.loginStatus=this.productService.loginStatus()
    console.log(this.loginStatus)
    if(this.loginStatus)
    {
      this.router.navigate(['profile'])
    }
    if(!this.loginStatus)
    {
    this.router.navigate(['login'])
    }
  }
  constructor(private route:ActivatedRoute,private router:Router,private productService:MyserviceService) { }
  ngOnInit(): void {

    this.loginStatus=this.productService.loginStatus()
    this.CurrentUser_name=this.productService.getCurrentUser()

  }
}

