import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
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
  employee: Employee = new Employee();
  employees1!: Employee[];
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      if(data.balance > 0)
      {
        data.balance = 0;
      }
      this.employee = data;
    }, 
    error => console.log(error));
    this.employeeService.getAccountDetails().subscribe(data => {
      console.log(data);
      this.employees1 = data;
    });
  }

  onSubmit(){

    // this.employeeService.updateEmployee(this.id, this.employee,this.toAccountNumber).subscribe( data =>{
    //   console.log(this.toAccountNumber)
    //   this.goToEmployeeList();
    // }
    console.log(this.employee)
    this.employeeService.transaction(this.employee.id, this.toAccountNumber, this.transferAmount).subscribe( data =>{      
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
