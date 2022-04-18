import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './plans/pages/home/home.component';
import { ErrorComponent } from './shared/error/error.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'prefix'
  },
  {
    path: 'plans',
    loadChildren: () => import('./plans/plans.module').then( m => m.PlansModule)
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
