import { Component, OnInit } from '@angular/core';
import { PlanService } from '../../services/plans.service';
import { Company } from '../../interfaces/plan.interface';

@Component({
  selector: 'app-add-plan',
  templateUrl: './add-plan.component.html',
  styles: [
  ]
})
export class AddPlanComponent implements OnInit {
  
  company! : Company[];

  constructor(
    private Planservice : PlanService
  ) { 

    this.Planservice.getCompany()
    .subscribe( (response) => {
      this.company = response;
    });

  }

  ngOnInit(): void {
  }

  agregar(){
    
    

  }

}
