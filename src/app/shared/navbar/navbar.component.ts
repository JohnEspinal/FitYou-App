import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {


  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
                url: '/'
            },
            {
                label: 'Plans',
                icon: 'pi pi-comments',
                url: '/plans'
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
