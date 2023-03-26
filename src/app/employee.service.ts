import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }
  getTransactionHistory(startDate : string ,endDate : string): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL +
      `/transactionaDetails?` +
      `startDate=${startDate}&` +
      `endDate=${endDate}`
    }`);
  }
  getAccountDetails(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL +`/accountDetails`}`);
  }
  createEmployee(employee: Employee): Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: number, employee: Employee, selectedOption:number): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}?`+`selectedOption=${selectedOption}`, employee);
  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
