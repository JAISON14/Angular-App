import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../car';
import { Observable} from 'rxjs/Observable'

@Injectable({
  providedIn: 'root'
})
export class ChartserviceService {
  private _url2:string="http://localhost:3000/cars";

  CurrentUser_name:string;
  Userloggedin:boolean=false;

  private httpOptions={
    headers:new HttpHeaders({
      'Content-Type':'application/json'
    })
  };

  getCars(): Observable<Car[]>{

    console.log('Inside getCars() of myservice')

    return this.http.get<Car[]>(this._url2);
    
  }

  
  constructor(private http: HttpClient) { }
}




