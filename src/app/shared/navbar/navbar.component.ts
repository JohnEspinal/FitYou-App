import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

    userLoggedIn: boolean = false;

  items: MenuItem[] = [];

  constructor(  private authService: AuthService,
                private router: Router ) { }

  ngOnInit(): void {
      
        this.authService.validateToken()
            .subscribe(
                resp => {
                    console.log("Im the RESPONSE:", resp);
                    this.userLoggedIn = resp

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
                                ...( this.userLoggedIn ? [{
                                    label: 'Agregar',
                                    icon: 'pi pi-plus',
                                    routerLink: '/plans/add'
                                }]: [])
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
                            routerLink:'map/map'
                        },
                        ...( this.userLoggedIn ? [{
                            label:'logout',
                            icon: 'pi pi-map',
                            routerLink:'map/map'
                        }]: [])
                        
                    ];
                }
            )
    
        
  }

  logout(){
    this.authService.logout();
    this.router.navigate(['/auth/auth'])
  }

  login(){
    this.router.navigate(['/auth/auth'])
  }

}
