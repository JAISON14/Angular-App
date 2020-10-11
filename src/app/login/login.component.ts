import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signupForm: FormGroup;
  users:User[]=[];
  userMatched:boolean=false
  loginAttemted:boolean=false

  login(){
    this.getUsers();
    console.log("Going to print this.users.length")
    console.log(this.users.length)
    this.loginAttemted=true
    this.userMatched=false
    for(let i = 0; i < this.users.length; i++) {
      let obj = this.users[i];
      //  this.userMatched=false

      console.log(obj.user_name);
      console.log(obj.user_email);
      console.log(obj.user_password);
      if((this.signupForm.get(`user_name`).value==obj.user_name)&&(this.signupForm.get(`user_password`).value==obj.user_password))
      { 
        this.userMatched=true
        console.log('user_name matched');

        console.log('user_password matched');
    
        this.productService.setCurrentUser(obj.user_name)
      }

     }

  }
  myFunction(){
    
  }
  getUsers(){
    this.productService.getUsers().subscribe(
      (users:any)=> this.users=users,
      err => console.log(err)
    );
    console.log(this.users.length);
  }
  constructor(private route:ActivatedRoute,private router:Router,private productService:MyserviceService) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      user_name: new FormControl(null, Validators.required),
      user_password: new FormControl(null, [Validators.required])
          
    });
    this.getUsers()
  }

}
