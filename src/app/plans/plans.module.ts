import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ViewPlanComponent } from './pages/view-plan/view-plan.component';
import { AddPlanComponent } from './pages/add-plan/add-plan.component';
import { ListComponent } from './pages/list/list.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PlanComparisonComponent } from './pages/plan-comparison/plan-comparison.component';
import { PlansRoutingModule } from './plans-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyComponent } from './pages/company/company.component';
import { AboutComponent } from './pages/about/about.component';



@NgModule({
  declarations: [
    HomeComponent,
    ViewPlanComponent,
    AddPlanComponent,
    ListComponent,
    PlanComparisonComponent,
    CompanyComponent,
    AboutComponent
   
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    PlansRoutingModule,
    ReactiveFormsModule
  ]
})
export class PlansModule { }
