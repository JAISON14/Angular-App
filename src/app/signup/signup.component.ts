import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';

import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  users:User[]=[];

  addUser(){
    console.log('In addUser func')
    console.log(this.signupForm);
    let newUser={
      "user_name": this.signupForm.get(`user_name`).value,
      "user_email": this.signupForm.get(`user_email`).value,
      "user_password": this.signupForm.get(`user_password`).value,
    }
    this.productService.addUser(newUser).subscribe(
      (data:any) => this.getUsers(),
      err => console.log(err)
      );
  }
  getUsers(){
    this.productService.getUsers().subscribe(
      (users:any)=> this.users=users,
      err => console.log(err)
    );
  }
  constructor(private route:ActivatedRoute,private router:Router,private productService:MyserviceService) { }

  ngOnInit(): void {

    this.signupForm = new FormGroup({
      user_name: new FormControl(null, Validators.required),
      user_email: new FormControl(null, [Validators.email, Validators.required]),
      user_password: new FormControl(null, [Validators.required])
          
    });

  }

}

