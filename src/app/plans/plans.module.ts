import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { ViewPlanComponent } from './pages/view-plan/view-plan.component';
import { AddPlanComponent } from './pages/add-plan/add-plan.component';
import { ListComponent } from './pages/list/list.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { PlanComparisonComponent } from './pages/plan-comparison/plan-comparison.component';



@NgModule({
  declarations: [
    HomeComponent,
    ViewPlanComponent,
    AddPlanComponent,
    ListComponent,
    PlanComparisonComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class PlansModule { }
