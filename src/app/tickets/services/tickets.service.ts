import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/services/auth.service';
import { Header } from 'primeng/api';

import { Ticket } from '../interfaces/ticket.interface';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  baseUrl: string = 'https://localhost:44384/api';

  constructor(private http: HttpClient) {}

  getPlans(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.baseUrl}/getTickets`);
  }

  PostTicket(ticket: Ticket): any {
    return this.http.post(`${this.baseUrl}/getTickets`, ticket);
  }
}
