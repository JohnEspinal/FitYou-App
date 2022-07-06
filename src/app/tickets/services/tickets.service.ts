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
  baseUrl: string = 'https://fityoubackend.azurewebsites.net/api';

  constructor(private http: HttpClient) {}

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.baseUrl}/tickets`);
  }

  PostTicket(ticket: Ticket): any {
    return this.http.post(`${this.baseUrl}/tickets`, ticket);
  }

  deleteTicket(id: number): any {
    return this.http.delete(`${this.baseUrl}/tickets/${id}`);
  }

  UpdateTicket(id: number, Ticket: Ticket): any {
    return this.http.put(`${this.baseUrl}/tickets/${id}`, Ticket);
  }
}
