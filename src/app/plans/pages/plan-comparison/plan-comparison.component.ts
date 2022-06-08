import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Router, ActivatedRoute } from '@angular/router';
import { PlanService } from '../../services/plans.service';
import { Plan } from '../../interfaces/plan.interface';

@Component({
  selector: 'app-plan-comparison',
  templateUrl: './plan-comparison.component.html',
  styles: [],
  providers: [DialogService, MessageService],
})
export class PlanComparisonComponent implements OnInit {
  productID: string;
  plan: any = [
    {
      Id: 12,
      Title: 'Internet Movil 50GB',
      Description:
        'Lortype and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      TypeOfPlan: 'M',
      CreateDate: '2022-01-15T00:00:00',
      ActiveTime: 'Un mes',
      price: 1400.0,
      Currency: 'DOP',
      Administrator: null,
      AdministratorId: 1,
      CompanyId: 1,
    },
  ];

  constructor(
    public dialogService: DialogService,
    public messageService: MessageService,
    // private router: Router,
    private actRoute: ActivatedRoute,
    private plansService: PlanService
  ) {}

  ngOnInit(): void {
    this.productID = this.actRoute.snapshot.params['planId'];

    this.loadProductDetails(this.productID);
  }
  loadProductDetails(productID: any) {
    this.plansService.getPlanById(productID).subscribe((resp) => {
      this.plan = resp;
      console.log(resp);
    });
  }
}
