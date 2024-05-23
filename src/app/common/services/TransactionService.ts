import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TransactionDTO} from "../models/TransactionDTO";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private apiUrl = 'http://localhost:8080/transactions';

  constructor(private http: HttpClient) { }

  createTransaction(transactionDTO: TransactionDTO): Observable<any> {
    return this.http.post<any>(this.apiUrl, transactionDTO);
  }
}
