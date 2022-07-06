import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PlanService } from '../../services/plans.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private plansService: PlanService,
                private router: Router) {
    }

    goToAboutUs() {
        console.log("Click")
        this.router.navigate(['plans/about']);
    }
    gotocompare() {
        console.log("Click")
        this.router.navigate(['plans/all']);
    }

    ngOnInit() {

        this.plansService.getPlans()
            .subscribe(
                resp => {
                    console.log(resp);
                }
            )
    }

}
