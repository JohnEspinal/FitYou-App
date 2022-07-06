import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { TicketsService } from '../../services/tickets.service';

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

  constructor(private fb: FormBuilder, private TicketsService: TicketsService) {
    this.ticketDropDown = [
      { name: 'Selecciona', Status: '' },
      { name: 'Abierto', Status: 'Abierto' },
      { name: 'Cerrado', Status: 'Cerrado' },
      { name: 'Proceso', Status: 'Proceso' },
    ];
  }

  // Add a new Plan
  add() {
    let newTicket = {
      ...this.myForm.value,
    };
    console.log(newTicket);

    this.TicketsService.PostTicket(newTicket).subscribe((resp: any) => {
      console.log(resp);
    });
  }
  ngOnInit(): void {}
}
