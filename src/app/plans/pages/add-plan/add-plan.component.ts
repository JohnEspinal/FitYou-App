import { Component, OnInit } from '@angular/core';
import { PlanService } from '../../services/plans.service';
import { Company, PlanPost } from '../../interfaces/plan.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styles: [
  ]
})
export class AddPlanComponent implements OnInit {


  plan!: PlanPost;

  myForm: FormGroup = this.fb.group({
    title: [
      'New plan from Angu',
      Validators.required
    ],
    typeOfPlan: [
      'M',
      Validators.required
    ],
    createDate: [
      '2022-04-13',
      Validators.required
    ],
    activeTime: [
      '4 meses',
      Validators.required
    ],
    price: [
      7800,
      Validators.required
    ],
    companyId: [
      '1',
      Validators.required
    ],
    currency: [
      'DOP',
      Validators.required
    ],
    AdministratorId: [
      '1',
      Validators.required
    ],
    description: [
      'Hola soy la description',
      Validators.required
    ]
  })
  
  company! : Company[];

  constructor(
    private fb: FormBuilder,
    private Planservice : PlanService
  ) { 

    this.Planservice.getCompany()
      .subscribe(
        resp => this.company = resp
      )

  }

  ngOnInit(): void {

    
  }

  agregar(){
    console.log(this.plan);
    this.Planservice.addPlan(this.myForm.value)
      .subscribe(
        resp => {console.log(resp)
        Swal.fire("Creado!", `
          <h2>${this.myForm.value['title']}</h2>
          <p>Su plan fue creado satisfactoriamente!</p>
        `, 'success')}
      )

  }

}
