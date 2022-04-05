import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ErrorComponent
  ],
  exports:[
    NavbarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
