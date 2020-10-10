import { Injectable } from '@angular/core';
import { Product } from './Product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/Observable'
import { Car } from './car';
import { Filters } from './filters'
import { User } from 'projects/udemy/src/app/auth/user.model';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private _url:string="http://localhost:3000/products";
  private _url2:string="http://localhost:3000/cars";
  private _url3:string="http://localhost:3000/filters";
  private _url4:string="http://localhost:3000/users";
  CurrentUser_name:string;
  Userloggedin:boolean=false;
  
  private httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  constructor(private http: HttpClient) { }
  getProducts(): Observable<Product[]>{

    console.log('Inside getProducts() of myservice')

    return this.http.get<Product[]>(this._url);
    
  }

  getCars(): Observable<Car[]>{

    console.log('Inside getCars() of myservice')

    return this.http.get<Car[]>(this._url2);
    
  }
  deleteCar(id){
    let deleteCarURL=`${this._url2}/${id}`;
    return this.http.delete(deleteCarURL);
  }
  
  getFilters(): Observable<Filters[]>{

    console.log('Inside getFilters() of myservice')
    return this.http.get<Filters[]>(this._url3);
    
    
  }
  //   getFilters(){

  //   console.log('Inside getFilters() of myservice')
  //   return this.http.get(this._url3);
    
    
  // }

  AddProduct(pname,quant){

    console.log('Inside AddProduct() of product service')
    let newProduct={
    
      "productname":pname, 
      "quantity":quant
    }
    console.log('After creation of new prod class of product service')
    return this.http.post(this._url,newProduct,this.httpOptions);
  }
      
  editCar(id,updatedCar:Car)
  {   console.log('updatedCar.productname')
      let editCarURL=`${this._url2}/${id}`;
      console.log(updatedCar)
      // return "happy"
       return this.http.put(editCarURL,updatedCar,this.httpOptions);

  }
  addCar(newCar:any)
  {
    console.log('addCar() in myservice')
    return this.http.post(this._url2,newCar,this.httpOptions);
  }
  addUser(newUser:any){
    console.log('addUser() in myservice')
    return this.http.post(this._url4,newUser,this.httpOptions);
  }
  getUsers():Observable<User[]>{

    console.log('Inside getUsers() of myservice')

    return this.http.get<User[]>(this._url4);
  }
  setCurrentUser(user_name){
    console.log('Inside setCurrentUser() in myservice');
    this.CurrentUser_name=user_name;
    console.log(this.CurrentUser_name);
    this.Userloggedin=true
  }
  logout(){
    this.Userloggedin=false
  }
  getCurrentUser(){
    console.log("Inside getCurrentUser() in myservice")
    console.log(this.Userloggedin)
    if(this.Userloggedin)
    return this.CurrentUser_name
    else{
      return "User not logged in"
    }
  }
  loginStatus(){
    return this.Userloggedin
  }
}

