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
  errorMessage: string = '';
  constructor(private accountService: AccountService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    this.accountService.getAccountById(this.id).subscribe(data =>{      
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
      this.errorMessage = '';
      this.goToAccountsList();
    }
    , err => {
      console.error(err.error.message);
      this.errorMessage = err.error.message;
    });
  }

  goToAccountsList(){
    this.router.navigate(['/accounts']);
  }
}
