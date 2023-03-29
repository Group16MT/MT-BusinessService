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
  constructor(private accountService: AccountService,
    private router : Router) { }

  ngOnInit(): void {
    
  }

  saveAccount()
  {
    this.accountService.createAccount(this.account).subscribe(data =>{
      console.log(data);
      this.goToAccountsList();
    },
    error => console.log(error));
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
