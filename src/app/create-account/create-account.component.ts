import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  account: Account = new Account()
  errorMessage: string = '';
  constructor(private accountService: AccountService,
    private router : Router) { }

  ngOnInit(): void {
    
  }

  saveAccount()
  {
    this.accountService.createAccount(this.account).subscribe(data =>{
      console.log(data);
      this.errorMessage = '';
      this.goToAccountsList();
    },
    err => {      
      console.log(err.error.message);
      this.errorMessage = err.error.message;
    });
  }

  goToAccountsList(){
    this.router.navigate(['/accounts']);
  }

  onSubmit()
  {
    console.log(this.account);
    this.saveAccount();   
  }
}
