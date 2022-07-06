import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthTokenGuard } from './guards/auth-token.guard';
import { HomeComponent } from './plans/pages/home/home.component';
import { ErrorComponent } from './shared/error/error.component';
import { InfoComponent } from './shared/appinfo/info.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'prefix',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'plans',
    loadChildren: () =>
      import('./plans/plans.module').then((m) => m.PlansModule),
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then((m) => m.MapModule),
  },
  {
    path: 'excel',
    loadChildren: () =>
      import('./excelplans/excelplans.module').then((m) => m.ExcelplansModule),
  },
  {
    path: 'tickets',
    loadChildren: () =>
      import('./tickets/tickets.module').then((m) => m.ticketsModule),
  },
  {
    path: 'info',
    component: InfoComponent,
  },
  {
    path: 'help',
    component: InfoComponent
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
