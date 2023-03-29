import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from '../account';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  employee: Account = new Account()
  constructor(private employeeService: EmployeeService,
    private router : Router) { }

  ngOnInit(): void {
    
  }
  saveEmployee()
  {
    this.employeeService.createEmployee(this.employee).subscribe(data =>{
      console.log(data);
      this.goToEmployeeList();
    },
    error => console.log(error));
  }
  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  onSubmit()
  {
    console.log(this.employee);
    this.saveEmployee();
  }
  


}
