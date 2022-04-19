import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ImageModule} from 'primeng/image';
import {CalendarModule} from 'primeng/calendar';
import {TreeSelectModule } from 'primeng/treeselect';
import {CheckboxModule} from 'primeng/checkbox';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
// import {MenuItem} from 'primeng/api';

@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
    InputTextModule,
    ImageModule,
    CalendarModule,
    TreeSelectModule,
    CheckboxModule,
    CardModule,
    TableModule,
  ]
})
export class PrimeNgModule { }
