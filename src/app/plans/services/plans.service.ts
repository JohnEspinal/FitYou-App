import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plan, Company, PlanPost, Internet, PlanSpecificPostResponse, Telecable, Telephone } from '../interfaces/plan.interface';
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

  baseUrl: string = "https://fityoubackend.azurewebsites.net/api";

  constructor(private http: HttpClient) {}

  getPlans(): Observable<Plan[]> {
    // this.auth.validateToken()
    //   .subscribe(
    //     resp => this.token =
    //   )

    // console.log(('Bearer ' + localStorage.getItem('token')));

    return this.http.get<Plan[]>(`${this.baseUrl}/getPlans`);
  }

  getPlanById(id: number): Observable<Plan> {
    return this.http.get<Plan>(
      `${this.baseUrl}/GetPlanById/${id}`
    );
  }

  getInternetPlanById(id: number): Observable<Plan> {
    return this.http.get<Plan>(
      `${this.baseUrl}/GetInternetById/${id}`
    );
  }

  getTelecablePlanById(id: number): Observable<Plan> {
    return this.http.get<Plan>(
      `${this.baseUrl}/GetTelecableById/${id}`
    );
  }

  getTelephonePlanById(id: number): Observable<Plan> {
    return this.http.get<Plan>(
      `${this.baseUrl}/GetTelephoneById/${id}`
    );
  }

  getCompany(): Observable<Company[]> {
    return this.http.get<Company[]>(
      `${this.baseUrl}/getCompanies`
    );
  }

  
  deleteCompany(id: number): Observable<string> {
    return this.http.delete<string>(
      `${this.baseUrl}/deleteCompany/${id}`,
      { headers: this.headers }
      );
    }

    
    deletePlan(planId: number): Observable<string> {
      return this.http.delete<string>(
        `${this.baseUrl}/DeletePlan/${planId}`,
        { headers: this.headers }
        );
      }
      
      addPlan(plan: PlanPost | Plan) {
        return this.http.post(`${this.baseUrl}/PostPlan`, plan, {
          headers: this.headers,
        });
      }
  postInternet(internet: Internet): Observable<PlanSpecificPostResponse> {

    return this.http.post<PlanSpecificPostResponse>(`${this.baseUrl}/postInternet`, internet, {
      headers: this.headers
    });
  }

  postTelecable(telecable: Telecable): Observable<PlanSpecificPostResponse> {

    return this.http.post<PlanSpecificPostResponse>(`${this.baseUrl}/PostTelecable`, telecable, {
      headers: this.headers
    });
  }

  postTelephone(telephone: Telephone): Observable<PlanSpecificPostResponse> {

    return this.http.post<PlanSpecificPostResponse>(`${this.baseUrl}/PostTelephone`, telephone, {
      headers: this.headers
    });
  }
      
  
  editPlan(plan: Plan | PlanPost) {
        return this.http.put(`${this.baseUrl}/PutPlan/${plan.Id}`, plan, {
          headers: this.headers,
        });
      }

  editInternet(internet: Internet): Observable<PlanSpecificPostResponse> {

    console.log("internet", internet)

    return this.http.put<PlanSpecificPostResponse>(`${this.baseUrl}/putInternet/${internet.Id}`, internet, {
      headers: this.headers
    });
  }

  editTelecable(telecable: Telecable): Observable<PlanSpecificPostResponse> {

    return this.http.put<PlanSpecificPostResponse>(`${this.baseUrl}/putTelecable/${telecable.Id}`, telecable, {
      headers: this.headers
    });
  }

  editTelephone(telephone: Telephone): Observable<PlanSpecificPostResponse> {

    return this.http.put<PlanSpecificPostResponse>(`${this.baseUrl}/putTelephone/${telephone.Id}`, telephone, {
      headers: this.headers
    });
  }
}
