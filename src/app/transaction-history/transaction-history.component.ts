import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Account } from '../account';
import { Transaction } from '../transaction';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent {
  transactions!: Transaction[];
  dtoptions: DataTables.Settings={};
  dtInstance!: DataTables.Api;
  dtTrigger:Subject<any>=new Subject<any>();
  isExist: boolean = false;
  errorMessage: string = '';
  @Output() valueChange = new EventEmitter<any>();
  constructor(private accountService: AccountService,
    private router: Router) {}
    account: Account = new Account()

    
  ngOnInit(): void {
  }

  getTransactionHistory(){
    
    this.accountService.getTransactionHistory(this.account.startDate,this.account.endDate).subscribe(data => { 
      this.errorMessage = '';
      this.transactions = data;
      console.log(data);
      if(this.transactions.length !== 0){
        this.isExist=true;
        this.dtoptions={
          pagingType: 'full_numbers',
          order : [3, "desc"]
        };
      }
      this.dtTrigger.next(null);
    }, err => {
      console.error(err.error.message);
      this.errorMessage = err.error.message;
    });
  }

}
