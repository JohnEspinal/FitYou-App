import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Telecable } from '../../interfaces/plan.interface';

@Component({
  selector: 'app-add-telecable',
  templateUrl: './add-telecable.component.html',
  styles: [
  ]
})
export class AddTelecableComponent implements OnInit {

  @Output() onNewTelecable: EventEmitter<Telecable> = new EventEmitter()

  @Input() telecable: Telecable | undefined;

  myTelecableForm: FormGroup = this.fb.group({
    Chanels: ['', [Validators.required, Validators.maxLength(4)]],
    TypeOfTelecable: ['', [Validators.required, Validators.min(1)]],
    Description: ['', [Validators.required, Validators.maxLength(250)]]
  })

  isFieldInvalid(fieldName: string) {

    const control: AbstractControl = this.myTelecableForm.controls[fieldName];

    return control.invalid && control.touched;
  }


  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    if(this.telecable === undefined || this.telecable === null){
      return;
    }
  
    const { TypeOfTelecable, Chanels, Description } = this.telecable;

      this.myTelecableForm.setValue({
        Chanels,
        TypeOfTelecable,
        Description
      });
  }


  add(){
    let planToReturn;

    if(this.telecable === undefined || this.telecable === null){
      planToReturn = this.myTelecableForm.value
    }else{
      planToReturn = {
        ...this.myTelecableForm.value,
        Id: this.telecable.Id,
      }
    }

    console.log('planToReturn', planToReturn);


    this.onNewTelecable.emit( planToReturn )
  }

}
