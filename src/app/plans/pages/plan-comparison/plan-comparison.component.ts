import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Router, ActivatedRoute } from '@angular/router';
import { PlanService } from '../../services/plans.service';
import { Plan } from '../../interfaces/plan.interface';
// import 'rxjs/add/operator/filter';
import { of, switchMap } from 'rxjs';

@Component({
  selector: 'app-plan-comparison',
  templateUrl: './plan-comparison.component.html',
  styles: [],
  providers: [DialogService, MessageService],
})
export class PlanComparisonComponent implements OnInit {
  planId: string;
  plan1!: Plan[];
  plan2!: Plan[];

  constructor(
    public dialogService: DialogService,
    public messageService: MessageService,
    // private router: Router,
    private actRoute: ActivatedRoute,
    private plansService: PlanService
  ) {}

  

  ngOnInit(): void {
    this.actRoute.queryParams
      .pipe(
        switchMap(
          result => this.plansService.getPlanById(result['plan1'])
          )
        )
      .subscribe(
        result => 
        {
          this.plan1 = [result]
          console.log("plan1", this.plan1);

        }

      )

      this.actRoute.queryParams
      .pipe(
        switchMap(
          result => this.plansService.getPlanById(result['plan2'])
          )
        )
      .subscribe(
        result => {
          this.plan2 = [result];

          console.log("plan2", this.plan2)
        }
      )

    // this.loadProductDetails(this.planId);
  }

  
  // loadProductDetails(planId: any) {
  //   this.plansService.getPlanById(planId).subscribe((resp) =>{
  //     this.plan1 = [resp];

  //     // this.plan = resp;
  //     console.log('Este es el product ID', planId);
  //   });
  // } 
}
