import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate} from '@angular/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CanDeactivedGuard implements CanDeactivate<CanComponentDeactivate> {

  canDeactivate(component : CanComponentDeactivate, 
              currentRoute : ActivatedRouteSnapshot, 
              currentState : RouterStateSnapshot, 
              nextState?: RouterStateSnapshot) : boolean | Observable < boolean > | Promise < boolean > {
    return component.canDeactive();
  }
}

export interface CanComponentDeactivate {
  canDeactive: () => Observable<boolean> | Promise<boolean> | boolean ;
}