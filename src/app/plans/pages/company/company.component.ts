import { Component, OnInit } from '@angular/core';
import { PlanService } from '../../services/plans.service';
import { Company } from '../../interfaces/plan.interface';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  Company : Company[];

  constructor(
    private planservice : PlanService
  ) { }

  ngOnInit(): void {
    this.planservice.getCompany().subscribe( response => {
      this.Company = response;
    } )
  }

  eliminar(id : number){
    this.planservice.deleteCompany(id).subscribe(Response => {
      console.log(Response);
    })
  }

}
