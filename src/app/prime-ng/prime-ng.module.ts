import { NgModule } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ImageModule} from 'primeng/image';
import {CardModule} from 'primeng/card';
import {DataViewModule} from 'primeng/dataview';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {DropdownModule} from 'primeng/dropdown';

// import {MenuItem} from 'primeng/api';

@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
    InputTextModule,
    ImageModule,
    CardModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    RatingModule,
    RippleModule,
    DropdownModule,
  ]
})
export class PrimeNgModule { }
