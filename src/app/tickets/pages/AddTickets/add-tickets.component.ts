import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { TicketsService } from '../../services/tickets.service';
import { MessageService } from 'primeng/api';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-add-tickets',
  templateUrl: './add-tickets.component.html',
  styles: [
    `
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    `,
  ],
  styleUrls: ['./tickets.component.scss'],
})
export class AddTicketsComponent implements OnInit {
  myForm: FormGroup = this.fb.group({
    Title: ['', Validators.required],
    Description: ['', Validators.required],
    Status: ['', Validators.required],
  });

  ticketDropDown: any;

  constructor(
    private fb: FormBuilder,
    private TicketsService: TicketsService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.ticketDropDown = [
      { name: 'Selecciona', Status: '' },
      { name: 'Abierto', Status: 'Abierto' },
      { name: 'Cerrado', Status: 'Cerrado' },
      { name: 'Proceso', Status: 'Proceso' },
    ];
  }

  succesMessage() {
    this.messageService.add({
      severity: 'success',
      summary: 'Ticket mensaje',
      detail: 'Tu Ticket fue creado exitosamente',
    });
  }

  badMessage() {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Tu Ticket no fue creado con exito, te faltan campos',
    });
  }
  // Add a new Plan
  add() {
    let newTicket = {
      ...this.myForm.value,
    };

    if (
      newTicket.Title === '' ||
      newTicket.Description === '' ||
      newTicket.Status === ''
    ) {
      this.badMessage();
    } else {
      this.succesMessage();
      this.TicketsService.PostTicket(newTicket).subscribe((resp: any) => {
        console.log(resp);
        this.succesMessage();
      });
      console.log('Enviado :)');
    }
  }
  ngOnInit(): void {}
}
