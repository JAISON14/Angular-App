import { Injectable } from '@angular/core';
import { Product } from './Product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/Observable'
import { Car } from './car';
import { Filters } from './filters'

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private _url:string="http://localhost:3000/products";
  private _url2:string="http://localhost:3000/cars";
  private _url3:string="http://localhost:3000/filters";
  
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

  
}

