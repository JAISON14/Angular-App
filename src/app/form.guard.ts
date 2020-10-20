import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CompocanDeactivate } from './compocan-deactivate';


@Injectable({
  providedIn: 'root'
})
export class FormGuard implements CanDeactivate<CompocanDeactivate> {
  canDeactivate(
    component: CompocanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(component.canDeactivate()){
      return true
    } else {
      return confirm('You have unsaved changes in your form.Do you want to go to that page?')
    }
  }
  
}

