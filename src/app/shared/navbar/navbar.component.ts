import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
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
                label: 'Acerca de',
                icon: 'pi pi-users',
                routerLink: '/plans/about'
            },
            {
                label: 'Compañias',
                icon: 'pi pi-briefcase',
                routerLink: '/plans/company'
            },
            {
                label:'Mapa',
                icon: 'pi pi-map',
                items: [
                    {
                        label: 'Buscar',
                        icon : 'pi pi-search',
                        routerLink:'map/map'
                    },
                    {
                        label: 'Listado de Sucursales',
                        icon : 'pi pi-list',
                        routerLink: 'map/sucursal'
                    }
                ]
                
            },
            {
                label: 'Excel',
                icon: 'pi pi-file',
                items: [
                    {
                        label: 'Internet',
                        icon: 'pi pi-bars',
                        routerLink: '/excel/internet'
                    }
                ]
            },
        ];
  }

}
