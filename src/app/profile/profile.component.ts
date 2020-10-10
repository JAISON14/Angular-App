import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users:User[]=[];
  CurrentUser_name:string;
  CurrentUser_email:string;

  getUserDetails(){

    this.CurrentUser_name=this.productService.getCurrentUser();
    this.getUsers();
    console.log(this.CurrentUser_name);
    console.log("Before the for loop");
    console.log(this.users.length);

    for(let i = 0; i < this.users.length; i++) {
      let obj = this.users[i];
      let userMatched:boolean=false

      console.log("In the for loop");
      console.log(obj.user_name);
      console.log(obj.user_email);
      console.log(obj.user_password);
      if((this.CurrentUser_name==obj.user_name))
      { 
        userMatched=true
        console.log('User profile found!!!');


        this.CurrentUser_email=obj.user_email
        
      }

     }

  }

  getUsers(){
    console.log("Inside getUsers start of profile compo");
    this.productService.getUsers().subscribe(
      (users:any)=> this.users=users,
      err => console.log(err)
      
    );
    console.log(this.users.length);
    }

  constructor(private route:ActivatedRoute,private router:Router,private productService:MyserviceService) { }
    logOff(){
      this.productService.logout();
    }
  ngOnInit(): void {
    this.getUsers();
    
  }

}
