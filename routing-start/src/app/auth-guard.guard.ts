import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from "app/auth.service";

@Injectable()
export class AuthGuard implements CanActivate,
CanActivateChild {

  constructor(private authService : AuthService, private router : Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    return this
      .authService
      .isAuthenticated()
      .then((isLoggedIn : boolean) => {
        if (isLoggedIn) {
          return true;
        } else {
          this.router.navigate(['/']);
        }
      });
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean | Observable<boolean> | Promise <boolean> {
    return this.canActivate(route, state);
  }

}
