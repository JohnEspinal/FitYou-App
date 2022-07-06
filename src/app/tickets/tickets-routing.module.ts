import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { AddTicketsComponent } from '../tickets/pages/AddTickets/add-tickets.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add-tickets',
        component: AddTicketsComponent,
      },
      {
        path: 'tickets',
        component: TicketsComponent,
      },
      {
        path: '**',
        redirectTo: 'all',
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TicketsRoutingModule {}
