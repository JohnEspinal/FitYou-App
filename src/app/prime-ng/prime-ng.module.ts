import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ImageModule} from 'primeng/image';
import {CalendarModule} from 'primeng/calendar';
import {TreeSelectModule } from 'primeng/treeselect';
import {CheckboxModule} from 'primeng/checkbox';
// import {MenuItem} from 'primeng/api';

@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
    InputTextModule,
    ImageModule,
    CalendarModule,
    TreeSelectModule,
    CheckboxModule
  ]
})
export class PrimeNgModule { }
