import { Component, OnInit } from '@angular/core';
import { PlanService } from '../../services/plans.service';
import { Company, PlanPost, TypesOfPlans } from '../../interfaces/plan.interface';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styles: [`
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
  
  `
  ]
})
export class AddPlanComponent implements OnInit {

  MyRegex: RegExp = /\w{3}/;
  plan!: PlanPost;

  companies!: Company[];

  selectedCompany!: Company;

  typeOfPlans: TypesOfPlans[] = [
    { 
      label: 'Internet',
      value: 'I'
    },
    { 
      label: 'Telecable',
      value: 'C'
    },
    { 
      label: 'Telefono',
      value: 'T'
    }
  ]

  typeOfPlan: string = '';


  myForm: FormGroup = this.fb.group({
    title: [
      '',
      Validators.required
    ],
    typeOfPlan: [
      '',
      [Validators.required]
    ],
    price: [
      0,
      [Validators.required, Validators.min(1)]
    ],
    companyId: [
      '',  // number
      Validators.required
    ],
    currency: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(3)]
    ],
    AdministratorId: [
      1,
      Validators.required
    ],
    description: [
      '',
      Validators.required
    ]
  })
  

  constructor(
    private fb: FormBuilder,
    private Planservice : PlanService
  ) { 

    this.Planservice.getCompany()
      .subscribe(
        companies => {
          this.companies = companies
        }
      )

    this.Planservice.getPlanById(1)
        .subscribe(
          (plan) => {
            switch(plan.TypeOfPlan){
              case 'I':
                this.Planservice.getInternetPlanById(plan.Id)
                break;
              
              case 'C':
                this.Planservice.getTelecablePlanById(plan.Id)
                break;

              case 'T':
                this.Planservice.getTelephonePlanById(plan.Id)
                break;
              
            }
          }
        )

  }

  isFieldInvalid( fieldName: string ){

    const control: AbstractControl = this.myForm.controls[fieldName];

    return control.invalid && control.touched
  }

  ngOnInit(): void {
    console.log(this.myForm);
    
  }



  add(){

    this.myForm.markAllAsTouched();

    if(this.myForm.invalid){
      return;
    }


    const newPlan: PlanPost = {...this.myForm.value, createDate: new Date().toLocaleDateString('en-CA')}

    console.log(newPlan);

    this.myForm.reset({
      Title: ''
    });

    console.log(this.myForm.value);

    this.Planservice.addPlan(newPlan)
      .subscribe(
        resp => {
          
          console.log(resp)
          Swal.fire("Creado!", `
          <h2>${this.myForm.value['title']}</h2>
          <p>Su plan fue creado satisfactoriamente!</p>
          `, 'success',)
            .then(
              () => this.myForm.reset()
            )

        }

      )

  }

}
