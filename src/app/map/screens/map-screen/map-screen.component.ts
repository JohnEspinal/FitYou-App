import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map-screen',
  templateUrl: './map-screen.component.html',
  styleUrls: ['./map-screen.component.css']
})
export class MapScreenComponent implements AfterViewInit {

  start : [number,number] | null;

  constructor(
    private _Activatedroute : ActivatedRoute,
    private placeService : PlacesService,
    private mapService : MapService
  ) { }

  ngAfterViewInit(): void {

    if(this.mapService.endlocation != null){

      const start = this.placeService.userLocation;

      this.mapService.getRouteBetweenPoints(start!,this.mapService.endlocation);

    }

  }

  get isUserLocationReady(){
    return this.placeService.iduserLocationReady;
  }

}
