import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import {Employee} from '../employee';
import { EmployeeService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];
  dtoptions: DataTables.Settings={};
  dtInstance!: DataTables.Api;
  dtTrigger:Subject<any>=new Subject<any>();
  

  constructor(private employeeService: EmployeeService,
    private router: Router) {}
   

    
  ngOnInit(): void {
    this.dtoptions={
      pagingType: 'full_numbers',
      order : [3, "desc"]
    };
    this.getEmployees();
  }
  
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
      this.dtTrigger.next(null);
    });
  }
  updateEmployee(id: number)
  {
    this.router.navigate(['update-employee', id]);
  }
  deleteEmployee(id: number)
  {
    this.employeeService.deleteEmployee(id).subscribe(data => {
      console.log(data);
      this.getEmployees();
    })
  }
  employeeDetails(id: number)
  {
    this.router.navigate(['employee-details', id]);
  }
}
