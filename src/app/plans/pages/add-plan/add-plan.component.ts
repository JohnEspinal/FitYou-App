import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlanService } from '../../services/plans.service';
import {
  Company,
  Plan,
  PlanPost,
  TypesOfPlans,
} from '../../interfaces/plan.interface';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import {
  Internet,
  Telecable,
  Telephone,
} from '../../interfaces/plan.interface';
import { of, switchMap, tap, Observable } from 'rxjs';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styles: [
    `
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    `,
  ],
})
export class AddPlanComponent implements OnInit {
  
  @Input() isEditing: boolean = false;

  @Input() planToEdit: Plan;
  
  plan!: PlanPost | Plan;

  companies!: Company[];

  selectedCompany!: Company;

  typeOfPlanSelected!: string;

  typeOfPlans: TypesOfPlans[] = [
    {
      label: 'Internet',
      value: 'I',
    },
    {
      label: 'Telecable',
      value: 'C',
    },
    {
      label: 'Telefono',
      value: 'T',
    },
  ];

  typeOfPlan: string = '';

  myForm: FormGroup = this.fb.group({
    Title: ['', Validators.required],
    TypeOfPlan: ['', [Validators.required]],
    Price: [0, [Validators.required, Validators.min(1)]],
    CompanyId: [
      '', // number
      Validators.required,
    ],
    Currency: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(3)],
    ],
    AdministratorId: [1, Validators.required],
    Description: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private Planservice: PlanService) {
  

    this.Planservice.getCompany().subscribe((companies) => {
      this.companies = companies;
    });

    

    // this.Planservice.getPlanById(1)
    //     .subscribe(
    //       (plan) => {
    //         switch(plan.TypeOfPlan){
    //           case 'I':
    //             this.Planservice.getInternetPlanById(plan.Id)
    //             break;

    //           case 'C':
    //             this.Planservice.getTelecablePlanById(plan.Id)
    //             break;

    //           case 'T':
    //             this.Planservice.getTelephonePlanById(plan.Id)
    //             break;

    //         }
    //       }
    //     )
  }

  ngOnInit(): void {
    console.log(this.myForm);

    if(this.isEditing){

      this.plan = this.planToEdit;
      
      const { Title, Description, CompanyId, Currency, Price, AdministratorId, TypeOfPlan } = this.planToEdit;
      
      this.typeOfPlan = TypeOfPlan;

      this.myForm.setValue({
        Title,
        Description,
        CompanyId,
        Currency,
        Price,
        AdministratorId,
        TypeOfPlan
      })
    }

    this.myForm.get('typeOfPlans')?.valueChanges.subscribe((typeOfPlan) => {
      console.log('first');
      this.typeOfPlan = typeOfPlan;
    });
  }

  isFieldInvalid(fieldName: string) {
    const control: AbstractControl = this.myForm.controls[fieldName];

    return control.invalid && control.touched;
  }


  typeOfPlanChange(event: any) {
    this.typeOfPlan = event.value;
    console.log(event.value);
  }

  postPlanSpecific(planSpecific: any, newPlan: PlanPost | Plan): Observable<Object> {
    console.log('plan', newPlan);

    if (newPlan.TypeOfPlan === 'I') {
      return !this.isEditing ? this.Planservice.postInternet(planSpecific).pipe(
        switchMap((result) => {
          console.log({ result });
          newPlan = {
            ...newPlan,
            InternetId: result.id,
          };
          console.log({ newPlan });
          return this.Planservice.addPlan(newPlan);
        })
      )
      :
      this.Planservice.editInternet(planSpecific).pipe(
        switchMap((result) => {
          console.log("result", result)
          return this.Planservice.editPlan(newPlan);
        })
      );
    }

    if (newPlan.TypeOfPlan === 'C') {
      return !this.isEditing ? this.Planservice.postTelecable(planSpecific).pipe(
        switchMap((result) => {
          console.log({ result });
          newPlan = {
            ...newPlan,
            TelecableId: result.id,
          };
          console.log({ newPlan });
          return this.Planservice.addPlan(newPlan);
        })
      )
      :
      this.Planservice.editTelecable(planSpecific).pipe(
        switchMap((result) => {
          console.log("result", result)
          return this.Planservice.editPlan(newPlan);
        })
      );
    }

    if (newPlan.TypeOfPlan === 'T') {
      return !this.isEditing ? this.Planservice.postTelephone(planSpecific).pipe(
        switchMap((result) => {
          console.log({ result });
          newPlan = {
            ...newPlan,
            TelephoneId: result.id,
          };
          console.log({ newPlan });
          return this.Planservice.addPlan(newPlan);
        })
      ):
      this.Planservice.editTelephone(planSpecific).pipe(
        switchMap((result) => {
          console.log("result", result)
          return this.Planservice.editPlan(newPlan);
        })
      );
    }

    return of({});
  }

  // Add a new Plan

  add(newSpecificPlan: Internet | Telecable | Telephone) {
    console.log(newSpecificPlan);

    this.myForm.markAllAsTouched();

    if (this.myForm.invalid) {
      return;
    }

    let newPlan: PlanPost;

    if( this.isEditing){
      newPlan = {
        Id: this.planToEdit.Id,
        InternetId: this.planToEdit.InternetId,
        TelecableId: this.planToEdit.TelecableId,
        TelephoneId: this.planToEdit.TelephoneId,
        ...this.myForm.value,
        createDate: new Date().toLocaleDateString('en-CA'),
      };
    }else{
      newPlan = {
        ...this.myForm.value,
        createDate: new Date().toLocaleDateString('en-CA'),
      };
    }

    this.postPlanSpecific(newSpecificPlan, newPlan).subscribe((resp) => {
      
      Swal.fire(
        this.isEditing ? 'Listo!' : 'Creado!',
        `
          <h2>${newPlan.Title}</h2>
          <p>Su plan fue ${ this.isEditing ? 'actualizado' : 'creado'} satisfactoriamente!</p>
          `,
        'success'
      ).then(() => {
        if(this.isEditing){
          location.reload();
        }else{
          this.myForm.reset()
        }
      });

    });

    // this.Planservice.addPlan(newPlan)
    //   .subscribe(
    //     resp => {

    //       Swal.fire("Creado!", `
    //       <h2>${newPlan.title}</h2>
    //       <p>Su plan fue creado satisfactoriamente!</p>
    //       `,
    //     'success'
    //   ).then(() => this.myForm.reset());
    // })
  }
}
