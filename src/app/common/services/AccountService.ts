import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AccountListDTO} from "../models/AccountListDTO";
import {AccountDetailsDTO} from "../models/AccountDetailsDTO";
import {AccountDTO} from "../models/AccountDTO";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrl = 'http://localhost:8080/accounts';

  constructor(private http: HttpClient) { }

  getAccounts(): Observable<AccountListDTO[]> {
    return this.http.get<AccountListDTO[]>(this.apiUrl);
  }

  getAccountDetails(accountNumber: number): Observable<AccountDetailsDTO> {
    return this.http.get<AccountDetailsDTO>(this.apiUrl + "/details/" + accountNumber)
  }

  getAccountByAccountNumber(accountNumber: number): Observable<AccountDTO> {
    return this.http.get<AccountDTO>(this.apiUrl + "/" + accountNumber);
  }
}
