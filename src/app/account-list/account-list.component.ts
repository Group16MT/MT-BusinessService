import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import {Account} from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {
  accounts!: Account[];
  dtoptions: DataTables.Settings={};
  dtInstance!: DataTables.Api;
  dtTrigger:Subject<any>=new Subject<any>();
  

  constructor(private accountService: AccountService,
    private router: Router) {}
   

    
  ngOnInit(): void {
    this.dtoptions={
      pagingType: 'full_numbers',
      order : [3, "desc"]
    };
    this.getAccounts();
  }
  
  private getAccounts(){
    this.accountService.getEmployeesList().subscribe(data => {
      this.accounts = data;
      this.dtTrigger.next(null);
    });
  }
  createTransaction(id: number)
  {
    this.router.navigate(['create-transaction', id]);
  } 
  accountDetails(id: number)
  {
    this.router.navigate(['account-details', id]);
  }
}
