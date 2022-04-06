import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PlanService } from '../../services/plans.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [
        `
        .background{
            width: 100%;
            height: 600px;
        }

        .par{
            line-height: 20px; 
            font-stretch: extra-expanded;
        }

        `
    ]
})
export class HomeComponent implements OnInit {

    items: MenuItem[] = [];

    constructor(private plansService: PlanService) {
    }

    goToAboutUs() {
        this.plansService.getPlans()
            .subscribe(
                resp => {
                    console.log(resp);
                }
            )
    }

    ngOnInit() {

        this.plansService.getPlans()
            .subscribe(
                resp => {
                    console.log(resp);
                }
            )
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'Plans',
                icon: 'pi pi-comments'
            },
            {
                label: 'Project details',
                icon: 'pi pi-users'
            },
            {
                label: 'About',
                icon: 'pi pi-briefcase'
            }
        ];
    }

}
