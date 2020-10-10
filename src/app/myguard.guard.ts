import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyserviceService } from './myservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyguardGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let Userloggedin=this.productService.loginStatus()
      if(Userloggedin){
        return true;
      }

      let r = confirm("Please login to continue ");
      if (r == true) {
        this.router.navigate(['login'])
      } else {
        return false;
      }
    
    
      return true;
  }
  constructor(private route:ActivatedRoute,private router:Router,private productService:MyserviceService) { }
}
