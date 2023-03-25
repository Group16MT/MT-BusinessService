import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent {
  employees!: Employee[];
  dtoptions: DataTables.Settings={};
  dtInstance!: DataTables.Api;
  dtTrigger:Subject<any>=new Subject<any>();
  isExist: boolean = false;
  @Output() valueChange = new EventEmitter<any>();
  constructor(private employeeService: EmployeeService,
    private router: Router) {}
    employee: Employee = new Employee()

    
  ngOnInit(): void {
  }
  getTransactionHistory(){
    
    // let startDate ='2023-03-01';
    // let endDate ='2023-03-31';
    this.employeeService.getTransactionHistory(this.employee.startDate,this.employee.endDate).subscribe(data => {
      this.employees = data;
      if(this.employees.length !== 0){
        this.isExist=true;
        this.dtoptions={
          pagingType: 'full_numbers',
          order : [3, "desc"]
        };
      }
      this.dtTrigger.next(null);
    });
  }

}
