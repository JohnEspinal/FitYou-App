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
  planId: string;
  plan!: Plan[];

  constructor(
    public dialogService: DialogService,
    public messageService: MessageService,
    // private router: Router,
    private actRoute: ActivatedRoute,
    private plansService: PlanService
  ) {}

  ngOnInit(): void {
    this.planId = this.actRoute.snapshot.params['planId'];

    this.loadProductDetails(this.planId);
  }
  loadProductDetails(planId: any) {
    this.plansService.getPlanById(planId).subscribe((resp) =>{
      this.plan = [resp];

      // this.plan = resp;
      console.log('Este es el product ID', planId);
    });
  } 
}
