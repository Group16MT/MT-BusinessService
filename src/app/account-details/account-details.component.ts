import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../account';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {

  id!: number
  account!: Account
  constructor(private route: ActivatedRoute, private accountService: AccountService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.account = new Account();
    this.accountService.getEmployeeById(this.id).subscribe(data => {
      this.account = data;
    })
  }

}
