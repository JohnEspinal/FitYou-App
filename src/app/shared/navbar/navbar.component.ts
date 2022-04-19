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
                icon: 'pi pi-home',
                routerLink: '/'
            },
            {
                label: 'Planes',
                icon: 'pi pi-comments',
                items: [
                    {
                        label: 'Ver planes',
                        icon: 'pi pi-bars',
                        routerLink: '/plans/all'
                    },
                    {
                        label: 'Agregar',
                        icon: 'pi pi-plus',
                        routerLink: '/plans/add'
                    }
                ]
            },
            {
                label: 'Comparar',
                icon: 'pi pi-briefcase',
                routerLink: '/plans/comparison'
            },
            {
                label: 'Detalles de proyecto',
                icon: 'pi pi-briefcase'
            },
            {
                label: 'Acerca de',
                icon: 'pi pi-users'
            },
            {
                label: 'Compañias',
                icon: 'pi pi-briefcase',
                routerLink: '/plans/company'
            }
        ];
  }

}
