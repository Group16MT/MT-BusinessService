import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { Transaction } from './transaction';
import { from } from 'form-data';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }
  getTransactionHistory(startDate : string ,endDate : string): Observable<Transaction[]>{
    return this.httpClient.get<Transaction[]>(`${this.baseURL +
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

  transaction(fromAccountNum:number, toAccountNum:number, amount: number): Observable<Object>{
    let transaction = new Transaction();
    transaction.dateTime = new Date().toDateString();
    transaction.fromAccountNum = fromAccountNum;
    transaction.toAccountNum = toAccountNum;
    transaction.amount = amount;
    console.log(transaction)
    return this.httpClient.post(`${this.baseURL}/transactionaDetails`, transaction);

  }

  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
