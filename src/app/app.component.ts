import { Component } from '@angular/core';
import { Product } from './Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assign4';
  company='Amazon'
  pname='jaison'
  flag=false
  latestproduct:Product
  onNotify(product:Product){
    this.latestproduct= product
    this.flag=true
    console.count("flag is "+this.flag)
  }
  
}
