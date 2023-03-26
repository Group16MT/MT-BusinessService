import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class AuthService implements CanActivate {

   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        if(this.authToken==="true") {
            return true;
          }
          this.router.navigate(['/login']);
          return false;
    }

   authToken
    authUser = "";

    constructor( private router: Router) {
        this.authToken = '';
        this.authUser = '';
       
        let user = localStorage.getItem('authUser');
        let token = localStorage.getItem('authToken');
        if(user && token) {
          this.authUser = user;
          this.authToken = token;
        }
      }

       authenticateUser(user: string, password: string) {

        console.log("userabhi")
        console.log(user)
        console.log("passwordkumar")
        console.log(password)

        if(user=="admin" && password =="admin"){
            this.authToken = "true";
            this.authUser = user;
            localStorage.setItem('authUser', this.authUser);
            localStorage.setItem('authToken', this.authToken);
            console.log("Authenticated: "+ this.authToken);
            return true;
        }
        else{
            this.authToken = "false";
            return false
        }

        // var  observable = Observable.just(this.authToken);


      }

      logoutUser() {
        this.authUser = '';
        this.authToken = "false";
            // also store to localstorage
            localStorage.removeItem('authUser');
            localStorage.removeItem('authToken');
            this.router.navigate(['/login']);
      }

      getUser(): string {
        return this.authUser;
      }

      isLoggedIn(): boolean {
        return this.authToken==="false";
      }

}