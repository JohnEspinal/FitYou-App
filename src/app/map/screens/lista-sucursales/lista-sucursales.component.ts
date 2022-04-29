import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PlacesService } from '../../services';
import { Sucursales } from '../../interfaces/sucursales.interface';

interface Propiedad {
  titulo: string;
  descripcion: string;
  lngLat: [number, number];
}


@Component({
  selector: 'app-lista-sucursales',
  templateUrl: './lista-sucursales.component.html',
  styleUrls: ['./lista-sucursales.component.css']
})

export class ListaSucursalesComponent implements OnInit , AfterViewInit {

  sucursal : Sucursales[];
  propiedades : Propiedad[];
  contador : number = 0;

  constructor(
    private placeService : PlacesService
  ) { }

  ngAfterViewInit(): void {
    
    this.placeService.getSucursales().subscribe( sucur => {          
      this.sucursal = sucur;
    });

    

  }

  ngOnInit(): void {
  }

}
