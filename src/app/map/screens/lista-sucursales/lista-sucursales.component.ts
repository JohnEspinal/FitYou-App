import { Component, AfterViewInit, OnInit } from '@angular/core';
import { PlacesService } from '../../services';
import { Sucursales } from '../../interfaces/sucursales.interface';
import { Company } from '../../../plans/interfaces/plan.interface';

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

export class ListaSucursalesComponent implements AfterViewInit, OnInit {

  sucursal : Sucursales[];
  propiedades : Propiedad[];
  pro : Propiedad;
  contador : number = 0;
  Compani : Company[];

  constructor(
    private placeService : PlacesService
  ) { }
  ngOnInit(): void {

    this.propiedades = [
      {
        titulo: 'Casa residencial, Canadá',
        descripcion: 'Bella propiedad en Katana, Canadá',
        lngLat: [ -75.92722289474008, 45.280015511264466]
      },
      {
        titulo: 'Casa de playa, México',
        descripcion: 'Hermosa casa de playa en Acapulco, México',
        lngLat: [ -99.91287720907991, 16.828940930185748]
      },
      {
        titulo: 'Apartamento, Argentina',
        descripcion: 'Lujoso apartamento en el corazón de Buenos Aires, Argentina',
        lngLat: [ -58.430166677283445, -34.57150108832866 ]
      },
      {
        titulo: 'Local comercial, España',
        descripcion: 'Local comercial disponible en Madrid, España, cerca de El Jardín Secreto.',
        lngLat: [ -3.7112735618380177, 40.42567285425766 ]
      },
    ]
  }

  ngAfterViewInit(): void {
    
    this.placeService.getSucursales().subscribe( sucur => {          
      this.sucursal = sucur;
      
      for(let item of this.sucursal){
       
        const data =[Number(item.Latitude), Number(item.Longitude)] as [number,number];
        this.pro = { lngLat : data, descripcion : item.Id.toString() , titulo : "Claro"};
        this.propiedades.push({...this.pro});
      }


    });

    for(let item of this.sucursal){     
      this.placeService.getCompanyByID(item.CompanyId)
        .subscribe( resp => this.Compani.push(resp[0]));
    }

  }


}
