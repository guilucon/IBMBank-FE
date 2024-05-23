import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ClientDTO} from "../models/ClientDTO";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private apiUrl = 'http://localhost:8080/clients';

  constructor(private http: HttpClient) { }

  createClient(client: ClientDTO): Observable<any> {
    return this.http.post<any>(this.apiUrl, client);
  }
}
