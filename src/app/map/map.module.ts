import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MapScreenComponent } from './screens/map-screen/map-screen.component';
import { ListaSucursalesComponent } from './screens/lista-sucursales/lista-sucursales.component';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';


@NgModule({
  declarations: [
    MapViewComponent,
    LoadingComponent,
    MapScreenComponent,
    ListaSucursalesComponent,
    MiniMapaComponent
  ],
  imports: [
    CommonModule,
    MapRoutingModule
  ]
})
export class MapModule { }
