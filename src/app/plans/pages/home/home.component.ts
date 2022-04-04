import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PlanService } from '../../services/plans.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styles: [
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
                label: 'File',
                items: [{
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        { label: 'Project' },
                        { label: 'Other' },
                    ]
                },
                { label: 'Open' },
                { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    { label: 'Delete', icon: 'pi pi-fw pi-trash' },
                    { label: 'Refresh', icon: 'pi pi-fw pi-refresh' }
                ]
            }
        ];
    }

}
