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
                label: 'Inicio',
                icon: 'pi pi-home'
            },
            {
                label: 'Planes',
                icon: 'pi pi-comments'
            },
            {
                label: 'Detalles de proyecto',
                icon: 'pi pi-briefcase'
            },
            {
                label: 'Acerca de',
                icon: 'pi pi-users'
            }
        ];
  }

}
