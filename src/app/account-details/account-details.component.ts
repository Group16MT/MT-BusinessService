import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from '../account';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {

  id!: number
employee!: Account
  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];

    this.employee =  new Account();
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    })
  }

}
