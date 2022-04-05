import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { AddPlanComponent } from './pages/add-plan/add-plan.component';
import { PlanComparisonComponent } from './pages/plan-comparison/plan-comparison.component';
import { ViewPlanComponent } from './pages/view-plan/view-plan.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'all',
        component: ListComponent
      },
      {
        path: 'add',
        component: AddPlanComponent
      },
      {
        path: 'comparison',
        component: PlanComparisonComponent
      },
      {
        path: 'edit/:id',
        component: AddPlanComponent
      },
      {
        path: 'detail/:id',
        component: ViewPlanComponent
      },
      {
        path: '**',
        redirectTo: 'getPlans'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class PlansRoutingModule { }
