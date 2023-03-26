import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Money Transfer System';

  private _authStatus: string;

  constructor(public authService:AuthService,public router:Router) { 
    this._authStatus = '';
   
 }
 logout(){
  this.authService.logoutUser();
  }
}
