import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
 
 
@Injectable()
export class AuthGuardService implements CanActivate {
 
    constructor(private router:Router, private authService: AuthService ) {
    }
 
    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): boolean|UrlTree {
        if(this.authService.authToken)
        {
            return true;
        }
        if (!this.authService.isLoggedIn()) {
            alert('You are not allowed to view this page. You are redirected to login Page');
            
            this.router.navigate(["/login"]);
            return false;
        } 
 
        return true;
    }
 
}