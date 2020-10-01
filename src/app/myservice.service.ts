import { Injectable } from '@angular/core';
import { Product } from './Product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs/Observable'

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private _url:string="http://localhost:3000/products";
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

