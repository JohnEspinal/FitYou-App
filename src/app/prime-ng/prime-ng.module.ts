import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ImageModule} from 'primeng/image';

// import {MenuItem} from 'primeng/api';

@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
    InputTextModule,
    ImageModule
  ]
})
export class PrimeNgModule { }
