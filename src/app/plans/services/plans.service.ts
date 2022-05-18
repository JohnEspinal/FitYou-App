import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan, Company, PlanPost } from '../interfaces/plan.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private http: HttpClient) { }


  getPlans(): Observable<Plan[]>{
    return this.http.get<Plan[]>('https://localhost:44384/api/getPlans');
  }

  getPlanById(id: number): Observable<Plan>{
    return this.http.get<Plan>(`https://localhost:44384/api/GetPlanById/${id}`);
  }



  getCompany(): Observable<Company[]>{
    return this.http.get<Company[]>("https://localhost:44384/api/getCompanies");
  }

  addPlan( plan: PlanPost){
    return this.http.post("https://localhost:44384/api/PostPlan", plan);
  }

  
  deleteCompany(id : number) : Observable<string>{
    return this.http.delete<string>(`https://localhost:44384/api/deleteCompany/${id}`);
  }

}