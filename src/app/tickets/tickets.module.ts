import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { TicketsRoutingModule } from './tickets-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTicketsComponent } from './pages/AddTickets/add-tickets.component';

@NgModule({
  declarations: [TicketsComponent, AddTicketsComponent],
  imports: [
    CommonModule,
    PrimeNgModule,
    ReactiveFormsModule,
    TicketsRoutingModule,
    SharedModule,
  ],
})
export class ticketsModule {}
