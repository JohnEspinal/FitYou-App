import { Component, OnInit } from '@angular/core';

import {Plan, Product} from "../../interfaces/plan.interface"
import {SelectItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
import { PlanService } from '../../services/plans.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.cpmponent.css'
  ]
})
export class ListComponent implements OnInit {

  products: Plan[] = [{
    Id:12,
    Title:"Internet Movil 50GB",
    Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    TypeOfPlan:"M",
    CreateDate:"2022-01-15T00:00:00",
    ActiveTime:"Un mes",
    Price:1700.00,
    Currency:"DOP",
    Administrator:null,
    AdministratorId:1,
    CompanyId:1

  },
  {
    Id:1,
    Title:"Internet Movil 20GB",
    Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    TypeOfPlan:"M",
    CreateDate:"2022-01-15T00:00:00",
    ActiveTime:"Un mes",
    Price:1400.00,
    Currency:"DOP",
    Administrator:null,
    AdministratorId:1,
    CompanyId:1

  },
  {
    Id:3,
    Title:"Internet Movil 200GB",
    Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    TypeOfPlan:"M",
    CreateDate:"2022-01-15T00:00:00",
    ActiveTime:"Un mes",
    Price:1900.00,
    Currency:"DOP",
    Administrator:null,
    AdministratorId:1,
    CompanyId:1

  }]

  sortOptions: SelectItem[] = [];

  sortOrder: number = 0;

  sortField: string = "";

  constructor(  private primengConfig: PrimeNGConfig,
                private plansService: PlanService) { }

  ngOnInit() {
      // this.productService.getProducts().then(data => this.products = data);
      
    this.plansService.getPlans()
      .subscribe(
        resp => {
          this.products = resp;
          console.log(resp)
        }
      )
      

      this.sortOptions = [
        {label: 'Price High to Low', value: '!price'},
        {label: 'Price Low to High', value: 'price'}
    ];

    this.primengConfig.ripple = true;
  }
  
  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

}
