import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan } from '../interfaces/plan.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private http: HttpClient) { }


  getPlans(): Observable<Plan[]>{
    return this.http.get<Plan[]>('https://localhost:44384/api/getPlans')
  }


}