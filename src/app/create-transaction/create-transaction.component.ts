import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';
import { Account } from '../account';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit{

  id!: number;
  toAccountNumber!: number;
  transferAmount!: number;
  fromAccount: Account = new Account();
  toAccountList!: Account[];
  constructor(private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    this.accountService.getAccountById(this.id).subscribe(data =>{
      if(data.balance > 0)
      {
        data.balance = 0;
      }
      this.fromAccount = data;
    }, 
    error => console.log(error));
    this.accountService.getAccountDetails().subscribe(data => {
      console.log(data);
      this.toAccountList = data;
    });
  }

  onSubmit(){
    console.log(this.fromAccount)
    this.accountService.transaction(this.fromAccount.id, this.toAccountNumber, this.transferAmount).subscribe( data =>{      
      this.goToAccountsList();
    }
    , error => console.log(error));
  }

  goToAccountsList(){
    this.router.navigate(['/accounts']);
  }
}
