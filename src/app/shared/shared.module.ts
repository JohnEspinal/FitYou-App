import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { InfoComponent } from './info/info.component';

import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    NavbarComponent,
    ErrorComponent,
    FooterComponent,
    InfoComponent
  ],
  exports:[
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    BrowserModule
  ]
})
export class SharedModule { }
