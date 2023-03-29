import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

   username='';
  password='';
  errorMsg = false;

  private _authStatus: string;

  constructor(public authService:AuthService,public router:Router) { 
     this._authStatus = '';
  }

   onSubmit(form: NgForm) {
    if (form.valid) {
   
      var authenticated = this.authService.authenticateUser(form.value.username,form.value.password);
     
      if(authenticated == true) {
        this._authStatus = "Logged in successfully";

        // console.log(this._authStatus)
        this.router.navigate(['/accounts']);
      } else {
        this._authStatus = "Login failed";
        this.errorMsg = true;

      }

    }
  }

  ngOnInit() {
  }

}