import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Account } from './account';
import { Transaction } from './transaction';
import { from } from 'form-data';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private baseURL = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient: HttpClient) { }
  
  getAccountsList(): Observable<Account[]>{
    return this.httpClient.get<Account[]>(`${this.baseURL}`);
  }
  getTransactionHistory(startDate : string ,endDate : string): Observable<Transaction[]>{
    return this.httpClient.get<Transaction[]>(`${this.baseURL +
      `/transactionaDetails?` +
      `startDate=${startDate}&` +
      `endDate=${endDate}`
    }`);
  }
  getAccountDetails(): Observable<Account[]>{
    return this.httpClient.get<Account[]>(`${this.baseURL +`/accountDetails`}`);
  }
  createAccount(account: Account): Observable<Object>
  {
    return this.httpClient.post(`${this.baseURL}`, account);
  }

  getAccountById(id: number): Observable<Account>{
    return this.httpClient.get<Account>(`${this.baseURL}/${id}`);
  }

  updateAccount(id: number, account: Account, selectedOption:number): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}?`+`selectedOption=${selectedOption}`, account);
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
}
