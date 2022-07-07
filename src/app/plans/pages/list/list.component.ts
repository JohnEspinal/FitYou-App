import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

import { Plan, Product } from '../../interfaces/plan.interface';
import { SelectItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { PlanService } from '../../services/plans.service';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.cpmponent.scss'],
})
export class ListComponent implements OnInit {
  sortOptions: SelectItem[] = [];

  displayModal: boolean;

  displayModalDelete: boolean;

  displayModalEdit: boolean = false;

  sortOrder: number = 0;

  sortKey: string;

  sortField: string = '';

  planDescription: any;
  planId: any;
  deletePlanId: any;

  productID: any; //Getting Product id from URL

  productData: any; //Getting Product details

  plansToCompare: string[] = [];

  isUserLoggedIn!: boolean;

  loading: boolean = true;

  plan!: Plan;



  plans: Plan[] = [];
  //   {
  //     Id: 1,
  //     Title: 'Internet Movil 50GB',
  //     Description:
  //       'Soy el 1of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //     TypeOfPlan: 'I',
  //     CreateDate: '2022-01-15T00:00:00',
  //     ActiveTime: 'Un mes',
  //     Price: 1200.0,
  //     Currency: 'DOP',
  //     Administrator: null,
  //     AdministratorId: 1,
  //     CompanyId: 1,
  //     InternetId: 2,
  //     TelecableId: 3,
  //     TelephoneId: 4,
  //   },
  //   {
  //     Id: 2,
  //     Title: 'Internet Movil 50GB',
  //     Description:
  //       'LSoy el 2ummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //     TypeOfPlan: 'C',
  //     CreateDate: '2022-01-15T00:00:00',
  //     ActiveTime: 'Un mes',
  //     Price: 1400.0,
  //     Currency: 'DOP',
  //     Administrator: null,
  //     AdministratorId: 1,
  //     CompanyId: 1,
  //     InternetId: 2,
  //     TelecableId: 3,
  //     TelephoneId: 4,
  //   },
  //   {
  //     Id: 3,
  //     Title: 'Internet Movil 50GB',
  //     Description:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //     TypeOfPlan: 'C',
  //     CreateDate: '2022-01-15T00:00:00',
  //     ActiveTime: 'Un mes',
  //     Price: 1900.0,
  //     Currency: 'DOP',
  //     Administrator: null,
  //     AdministratorId: 1,
  //     CompanyId: 1,
  //     InternetId: 2,
  //     TelecableId: 3,
  //     TelephoneId: 4,
  //   },
  //   {
  //     Id: 4,
  //     Title: 'Internet Movil 50GB',
  //     Description:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //     TypeOfPlan: 'C',
  //     CreateDate: '2022-01-15T00:00:00',
  //     ActiveTime: 'Un mes',
  //     Price: 800.0,
  //     Currency: 'DOP',
  //     Administrator: null,
  //     AdministratorId: 1,
  //     CompanyId: 1,
  //     InternetId: 2,
  //     TelecableId: 3,
  //     TelephoneId: 4,
  //   },
  //   {
  //     Id: 5,
  //     Title: 'Internet Movil 50GB',
  //     Description:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //     TypeOfPlan: 'T',
  //     CreateDate: '2022-01-15T00:00:00',
  //     ActiveTime: 'Un mes',
  //     Price: 2400.0,
  //     Currency: 'DOP',
  //     Administrator: null,
  //     AdministratorId: 1,
  //     CompanyId: 1,
  //     InternetId: 2,
  //     TelecableId: 3,
  //     TelephoneId: 4,
  //   },
  //   {
  //     Id: 6,
  //     Title: 'Internet Movil 50GB',
  //     Description:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //     TypeOfPlan: 'I',
  //     CreateDate: '2022-01-15T00:00:00',
  //     ActiveTime: 'Un mes',
  //     Price: 700.0,
  //     Currency: 'DOP',
  //     Administrator: null,
  //     AdministratorId: 1,
  //     CompanyId: 1,
  //     InternetId: 2,
  //     Internet: {
  //       DetailPlans: [],
  //       Id: 5,
  //       Uploadspeed: 60,
  //       Loweringspeed: 20,
  //       Speed: 60,
  //       TypeOfNet: 'Full',
  //       Description: 'Esta es la descripcion del internet full',
  //     },
  //     TelecableId: 3,
  //     TelephoneId: 4,
  //   },
  //   {
  //     Id: 7,
  //     Title: 'Internet Movil 50GB',
  //     Description:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //     TypeOfPlan: 'T',
  //     CreateDate: '2022-01-15T00:00:00',
  //     ActiveTime: 'Un mes',
  //     Price: 400.0,
  //     Currency: 'DOP',
  //     Administrator: null,
  //     AdministratorId: 1,
  //     Telephone: {
  //       DetailPlans: [],
  //       Id: 1,
  //       Minutes: '50',
  //       Service: 'ASDASD',
  //       Description: 'ASDASDASD',
  //     },
  //     CompanyId: 1,
  //     InternetId: 2,
  //     TelecableId: 3,
  //     TelephoneId: 4,
  //   },
  //   {
  //     Id: 8,
  //     Title: 'Casa Movil 50GB',
  //     Description:
  //       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  //     TypeOfPlan: 'C',
  //     CreateDate: '2022-01-15T00:00:00',
  //     ActiveTime: 'Un mes',
  //     Price: 1200.0,
  //     Currency: 'DOP',
  //     Administrator: null,
  //     AdministratorId: 1,
  //     CompanyId: 1,
  //     InternetId: 2,
  //     TelecableId: 3,
  //     Telecable: {
  //       DetailPlans: [],
  //       TelecablePackages: [],
  //       Id: 3,
  //       Chanels: '40',
  //       TypeOfTelecable: 'Full',
  //       Description: 'Esta es la descripcion del telecable',
  //     },
  //     TelephoneId: 4,
  //   },
  // ];

  plansForm: FormGroup = this.fb.group({
    plansToCompare: [
      this.plansToCompare,
      [Validators.required, Validators.maxLength(2), Validators.minLength(2)],
    ],
  });

  constructor(
    private primengConfig: PrimeNGConfig,
    private plansService: PlanService,
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  changeValue(id: string) {
    let srtingId: string = id.toString();

    // console.log('id', id);
    // console.log('test', this.plansToCompare.indexOf(srtingId));

    if (this.plansToCompare.includes(srtingId)) {
      this.plansToCompare.splice(this.plansToCompare.indexOf(srtingId), 1);
    } else {
      this.plansToCompare.push(srtingId);
    }

    this.plansForm.controls['plansToCompare'].setValue(this.plansToCompare);

    // console.log('plans to Compare:', this.plansToCompare);
  }

  ngOnInit() {
    this.getAllPlans();

    this.authService
      .validateToken()
      .subscribe((resp) => (this.isUserLoggedIn = resp));

    this.sortOptions = [
      { label: 'Price High to Low', value: '!Price' },
      { label: 'Price Low to High', value: 'Price' },
    ];

    this.primengConfig.ripple = true;
  }



  //Get All Plans
  getAllPlans() {

    console.log("first")

    this.plansService.getPlans().subscribe((resp) => {
      this.loading = false;
      this.plans = resp;
      // console.log(resp);
    });
  }

  //Sort function
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

  //Delete Plan By ID
  deletePlanById(planId: number) {
    this.plansService.deletePlan(planId).subscribe((res) => {
      this.getAllPlans();
    });
    this.displayModalDelete = false;
  }

  //Grap Plans for compare and navigate to the compare page
  comparePlans() {
    this.router.navigate(
      ['/plans/comparison'],
      {
        queryParams: {
          plan1: this.plansToCompare[0],
          plan2: this.plansToCompare[1],
        },
        queryParamsHandling: 'merge',
      }

      // [`/plans/comparison?plan1=${this.plansToCompare[0]}&plan2=${this.plansToCompare[1]}`]
    );
  }

  //Show Modal
  showModalDialog(id: number) {

    const currentPlan = this.plans.find( (plan) => plan.Id === id );

    if(currentPlan == undefined){
      return;
    }

    this.plan = currentPlan;

    this.displayModal = true;
  }
  //Show Delete Modal
  showModalDialogDelete(id: number) {

    const currentPlan = this.plans.find( (plan) => plan.Id === id );

    if( currentPlan === undefined ){
      return;
    }

    this.plan = currentPlan;

    this.displayModalDelete = true;

   
  }

  

  showModalDialogEdit(id: number){

    const currentPlan = this.plans.find( (plan) => plan.Id === id );

    if( currentPlan === undefined ){
      return;
    }

    this.plan = currentPlan;


    this.displayModalEdit= true;

  }

  hideDeleteDialog(){
    this.displayModalDelete = false;
  }
}


// {
//   "Id": 28,
//   "Title": "Plan de hogar inalambrico fijo prepago",
//   "Description": "Si vives en una localidad donde no cuentas con disponibilidad de facilidades alámbricas, este servicio de telefonía inalámbrica fija facilitará tu comunicación. Se ofrece a través de la red GSM y sus funciones son similares al servicio telefónico alámbrico. ",
//   "TypeOfPlan": "T",
//   "CreateDate": "2022-07-06T17:16:28.567",
//   "ActiveTime": null,
//   "Price": 500.00,
//   "Currency": "DOP",
//   "Administrator": null,
//   "AdministratorId": 1,
//   "Company": null,
//   "CompanyId": 1,
//   "Internet": null,
//   "InternetId": null,
//   "Telecable": null,
//   "TelecableId": null,
//   "Telephone": {
//       "DetailPlans": [],
//       "Id": 1,
//       "Minutes": "80",
//       "Service": "Hogar inalambrico fijo prepago",
//       "Description": "Puedes recargar el servicio cuando quieras, a partir de sólo RD$25 a través de Bancatel y pines electrónicos."
//   },
//   "TelephoneId": 1
// },