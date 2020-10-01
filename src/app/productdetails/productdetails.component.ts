import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  productname:any;

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.forEach((params:Params)=>{
      this.productname=params.get('productname');
    // this.productname=parse
    })
  }
  goBack(): void {
    this.router.navigate(['products',{productname:this.productname}]);
  }

}

