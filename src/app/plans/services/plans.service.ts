import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan, Company, PlanPost } from '../interfaces/plan.interface';
import { AuthService } from '../../auth/services/auth.service';
import { Header } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  // token!: string | null;

  // headers = new HttpHeaders()
  //     .set('Authorization', ('Bearer ' + localStorage.getItem('token')) || '');

  get headers() {
    return new HttpHeaders().set(
      'Authorization',
      'Bearer ' + localStorage.getItem('token') || ''
    );
  }

  constructor(private http: HttpClient) {}

  getPlans(): Observable<Plan[]> {
    // this.auth.validateToken()
    //   .subscribe(
    //     resp => this.token =
    //   )

    // console.log(('Bearer ' + localStorage.getItem('token')));

    return this.http.get<Plan[]>('https://localhost:44384/api/getPlans');
  }

  getPlanById(id: number): Observable<Plan> {
    return this.http.get<Plan>(
      `https://localhost:44384/api/GetPlanById/${id}`,
      { headers: this.headers }
    );
  }

  getInternetPlanById(id: number): Observable<Plan> {
    return this.http.get<Plan>(
      `https://localhost:44384/api/GetInternetById/${id}`,
      { headers: this.headers }
    );
  }

  getTelecablePlanById(id: number): Observable<Plan> {
    return this.http.get<Plan>(
      `https://localhost:44384/api/GetTelecableById/${id}`,
      { headers: this.headers }
    );
  }

  getTelephonePlanById(id: number): Observable<Plan> {
    return this.http.get<Plan>(
      `https://localhost:44384/api/GetTelephoneById/${id}`,
      { headers: this.headers }
    );
  }

  getCompany(): Observable<Company[]> {
    return this.http.get<Company[]>(
      'https://localhost:44384/api/getCompanies',
      { headers: this.headers }
    );
  }

  addPlan(plan: PlanPost) {
    return this.http.post('https://localhost:44384/api/PostPlan', plan, {
      headers: this.headers,
    });
  }

  deleteCompany(id: number): Observable<string> {
    return this.http.delete<string>(
      `https://localhost:44384/api/deleteCompany/${id}`,
      { headers: this.headers }
    );
  }
}
