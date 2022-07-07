import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../interfaces/ticket.interface';
import { TicketsService } from '../../services/tickets.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/auth/services/auth.service';

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
})
export class TicketsComponent implements OnInit {
  ticketDialog: boolean;

  tickets: Ticket[] = [];
  //   {
  //     Id: 1,
  //     Title: 'per',
  //     Description: 'hello',
  //     Status: 's1',
  //   },
  //   {
  //     Id: 2,
  //     Title: 'Problema en HomePage',
  //     Description: 'Hay un problema de interfaz en la paginal de inicio.',
  //     Status: 'Abierto',
  //   },
  //   {
  //     Id: 3,
  //     Title: 'Problema en HomePage',
  //     Description: 'Hay un problema de interfaz en la paginal de inicio.',
  //     Status: 'Cerrado',
  //   },
  //   {
  //     Id: 4,
  //     Title: 'Problema en HomePage',
  //     Description: 'Hay un problema de interfaz en la paginal de inicio.',
  //     Status: 'Abierto',
  //   },
  //   {
  //     Id: 5,
  //     Title: 'Problema en HomePage',
  //     Description: 'Hay un problema de interfaz en la paginal de inicio.',
  //     Status: 'Cerrado',
  //   },
  //   {
  //     Id: 6,
  //     Title: 'Problema en HomePage',
  //     Description: 'Hay un problema de interfaz en la paginal de inicio.',
  //     Status: 'Proceso',
  //   },
  //   {
  //     Id: 7,
  //     Title: 'Problema en HomePage',
  //     Description: 'Hay un problema de interfaz en la paginal de inicio.',
  //     Status: 'Cerrado',
  //   },
  // ];

  ticket: Ticket;

  selectedTickets: Ticket[];

  submitted: boolean;

  displayModalDelete: boolean;

  ticketDropDown: any;

  select: any;

  isUserLogged: boolean = false;

  constructor(
    private TicketsService: TicketsService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private authService: AuthService
  ) {
    this.ticketDropDown = [
      { name: 'Abierto', Status: 'Abierto' },
      { name: 'Cerrado', Status: 'Cerrado' },
      { name: 'Proceso', Status: 'Proceso' },
    ];
  }

  ngOnInit() {
    this.getAlltickets();

    this.authService.validateToken()
      .subscribe(
        resp => this.isUserLogged = resp
      )
  }

  getAlltickets() {
    this.TicketsService.getTickets().subscribe((resp) => {
      this.tickets = resp;
      console.log(resp);
    });
  }

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

  deleteTicket(Ticket: Ticket, Id: number) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + Ticket.Title + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.tickets = this.tickets.filter((val) => val.Id !== Ticket.Id);
        this.TicketsService.deleteTicket(Id).subscribe((res: any) => {
          console.log(res);
        });
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Ticket Deleted',
          life: 3000,
        });
      },
    });
  }

  newTicket() {
    this.submitted = false;
    this.ticketDialog = true;
  }

  editTicket(ticket: Ticket, Id: number) {
    this.ticket = { ...ticket };
    this.ticketDialog = true;

    // console.log(this.ticket);
    // console.log(Id);
  }

  saveEditTicket() {
    this.submitted = true;

    this.tickets[this.findIndexById(this.ticket.Id)] = this.ticket;
    // console.log(this.ticket.Id);
    // console.log(this.ticket);
    this.TicketsService.UpdateTicket(this.ticket.Id, this.ticket).subscribe(
      (res: any) => {
        console.log(res);
      }
    );
    this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'El ticket fue editado exitosamente',
      life: 3000,
    });

    this.tickets = [...this.tickets];
    this.ticketDialog = false;
  }

  hideDialog() {
    this.ticketDialog = false;
    this.submitted = false;
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.tickets.length; i++) {
      if (this.tickets[i].Id === id) {
        index = i;
        break;
      }
    }

    return index;
  }
}
