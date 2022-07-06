import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../interfaces/ticket.interface';
import { TicketsService } from '../../services/tickets.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styles: [
    `
      :host ::ng-deep .p-dialog .product-image {
        width: 150px;
        margin: 0 auto 2rem auto;
        display: block;
      }
    `,
  ],
  styleUrls: ['./tickets.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class TicketsComponent implements OnInit {
  ticketDialog: boolean;

  tickets: Ticket[] = [
    {
      Id: 1,
      Title: 'per',
      Description: 'hello',
      Status: 's1',
    },
    {
      Id: 2,
      Title: 'Problema en HomePage',
      Description: 'Hay un problema de interfaz en la paginal de inicio.',
      Status: 'Abierto',
    },
    {
      Id: 3,
      Title: 'Problema en HomePage',
      Description: 'Hay un problema de interfaz en la paginal de inicio.',
      Status: 'Cerrado',
    },
    {
      Id: 4,
      Title: 'Problema en HomePage',
      Description: 'Hay un problema de interfaz en la paginal de inicio.',
      Status: 'Abierto',
    },
    {
      Id: 5,
      Title: 'Problema en HomePage',
      Description: 'Hay un problema de interfaz en la paginal de inicio.',
      Status: 'Cerrado',
    },
    {
      Id: 6,
      Title: 'Problema en HomePage',
      Description: 'Hay un problema de interfaz en la paginal de inicio.',
      Status: 'Proceso',
    },
    {
      Id: 7,
      Title: 'Problema en HomePage',
      Description: 'Hay un problema de interfaz en la paginal de inicio.',
      Status: 'Cerrado',
    },
  ];

  ticket: Ticket;

  selectedTickets: Ticket[];

  submitted: boolean;

  displayModalDelete: boolean;

  ticketDropDown: any;

  select: any;

  constructor(
    private TicketsService: TicketsService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.ticketDropDown = [
      { name: 'Abierto', Status: 'Abierto' },
      { name: 'Cerrado', Status: 'Cerrado' },
      { name: 'Proceso', Status: 'Proceso' },
    ];
  }

  ngOnInit() {}

  deleteSelectedTicket() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.tickets = this.tickets.filter(
          (val) => !this.selectedTickets.includes(val)
        );
        // this.selectedTickets = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Products Deleted',
          life: 3000,
        });
      },
    });
  }

  submit(ticket: Ticket) {
    console.log(ticket);
    this.hideDialog();
  }

  newTicket() {
    this.ticket = {};
    this.submitted = false;
    this.ticketDialog = true;
  }

  editTicket(ticket: Ticket) {
    this.ticket = { ...ticket };
    this.ticketDialog = true;
  }

  hideDialog() {
    this.ticketDialog = false;
    this.submitted = false;
  }

  // findIndexById(id: string): number {
  //   let index = -1;
  //   for (let i = 0; i < this.ticket; i++) {
  //     if (this.tickets[i].Id === id) {
  //       index = i;
  //       break;
  //     }
  //   }

  //   return index;
  // }
}
