import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators } from '@angular/forms';
import { Internet } from '../../interfaces/plan.interface';

@Component({
  selector: 'app-add-internet',
  templateUrl: './add-internet.component.html'
})
export class AddInternetComponent implements OnInit {

  @Input() internet: Internet | undefined;


  @Output() onNewInternet: EventEmitter<Internet> = new EventEmitter()



  myInternetForm: FormGroup = this.fb.group({
    Uploadspeed: ['', [Validators.required, Validators.min(1)]],
    Loweringspeed: ['', [Validators.required, Validators.min(1)]],
    Speed: ['', [Validators.required, Validators.min(1)]],
    TypeOfNet: ['', [Validators.required]],
    Description: ['', Validators.required]
  })

  isFieldInvalid(fieldName: string) {

    const control: AbstractControl = this.myInternetForm.controls[fieldName];

    return control.invalid && control.touched;
  }

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    console.log("Hola desde internet", this.internet)

    if(this.internet === undefined || this.internet === null){
      return;
    }

  
    const { Uploadspeed, Loweringspeed,Speed,TypeOfNet, Description } = this.internet;

      this.myInternetForm.setValue({
        Uploadspeed,
        Loweringspeed,
        Speed,
        TypeOfNet,
        Description
      });
  }


  add(){
    let planToReturn;

    if(this.internet === undefined || this.internet === null){
      planToReturn = this.myInternetForm.value
    }else{
      planToReturn = {
        ...this.myInternetForm.value,
        Id: this.internet.Id,
      }
    }

    console.log('planToReturn', planToReturn);


    this.onNewInternet.emit( planToReturn )
  }

}
