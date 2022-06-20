import { Component, OnInit } from '@angular/core';

import { Plan, Product } from '../../interfaces/plan.interface';
import { SelectItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { PlanService } from '../../services/plans.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, AbstractControl, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.cpmponent.css'],
})
export class ListComponent implements OnInit {
  
  plans: Plan[] = [];

  loading: boolean = true;

  //   {
  //     Id: 12,
  //     Title: 'Internet Movil 50GB',
  //     Description:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //     TypeOfPlan: 'M',
  //     CreateDate: '2022-01-15T00:00:00',
  //     ActiveTime: 'Un mes',
  //     price: 1400.0,
  //     Currency: 'DOP',
  //     Administrator: null,
  //     AdministratorId: 1,
  //     CompanyId: 1,
  //     InternetId: 2,
  //     TelecableId: 3,
  //     TelephoneId: 4,
  //   }

  sortOptions: SelectItem[] = [];

  sortOrder: number = 0;

  sortKey: string;

  sortField: string = '';

  productID: any; //Getting Product id from URL
  productData: any; //Getting Product details

  plansToCompare: string[] = [];

  plansForm: FormGroup = this.fb.group({

    plansToCompare: [this.plansToCompare, [Validators.required, Validators.maxLength(2), Validators.minLength(2)]],

  });

  constructor(
    private primengConfig: PrimeNGConfig,
    private plansService: PlanService,
    private router: Router,
    private fb: FormBuilder,
    private actRoute: ActivatedRoute
  ) {}

  changeValue(id: string) {

    let srtingId: string = id.toString();

    console.log('id', id)
    console.log("test", this.plansToCompare.indexOf(srtingId));

    if(this.plansToCompare.includes(srtingId)){


      this.plansToCompare.splice(this.plansToCompare.indexOf(srtingId), 1)
    }else{
      this.plansToCompare.push(srtingId);
    }

    this.plansForm.controls['plansToCompare'].setValue(this.plansToCompare);

    console.log("plans to Compare:", this.plansToCompare)
  }

  getAllPlans(){

    this.plansService.getPlans().subscribe((resp) => {
      this.loading=false;
      this.plans = resp;
      console.log(resp);
    });
  }


  ngOnInit() {

    this.getAllPlans();

    this.sortOptions = [
      { label: 'Price High to Low', value: '!Price' },
      { label: 'Price Low to High', value: 'Price' },
    ];

    this.primengConfig.ripple = true;
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  deletePlan( planId: number ){
    this.plansService.deletePlan(planId)
      .subscribe(
        message => {
          this.getAllPlans();
        }
      )
  }

  comparePlans() {

    this.router.navigate(
      ['/plans/comparison'],
      {
        queryParams: {
          plan1: this.plansToCompare[0],
          plan2: this.plansToCompare[1]
        },
        queryParamsHandling: 'merge'
      }

      // [`/plans/comparison?plan1=${this.plansToCompare[0]}&plan2=${this.plansToCompare[1]}`]
      );
  }
}
